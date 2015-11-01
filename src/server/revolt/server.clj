(ns revolt.server
  (:require [ring.util.response :refer [response]]
            [compojure.core :refer [defroutes GET ANY]]
            [compojure.route :refer [resources]]
            [chord.http-kit :refer [wrap-websocket-handler]]
            [clojure.core.async :refer [<! >! go go-loop chan]]
            [hiccup.page :refer [html5 include-js include-css]]
            [ring.middleware.format :refer [wrap-restful-format]])
  (:use revolt.core
        revolt.setup))

(def special-ids [
    :steal-spot
    :swap-spots
    :occupy-guard-house
    :take-open-spot
    :reassign-spots])

(defn page-frame []
    (html5
        [:head
            [:title "Revolt Server"]
            (include-css "css/style.css")
            (include-js "js/compiled/revolt_client.js")]
        [:body
            [:div#content]]))

(defn swap-in! [a ks f & args]
  (apply swap! a update-in ks f args))

(defn reset-in! [a ks x]
  (swap! a assoc-in ks x))

(defn bank-setup [{:keys [gold blackmail force]}]
  {:gold gold
   :blackmail blackmail
   :force force})

(defn location-setup [{:keys [id support influence-limit]}]
  {:id id
   :support support
   :influence-limit influence-limit})

(defn board-status [{:keys [turn support banks influence guard-house]}]
    {:turn        turn
     :support     (map-keys :id support)
     :banks       (map-kv :id bank-setup banks)
     :influence   (map-kv :id (partial map-keys :id) influence)
     :guard-house (:id guard-house)})

(defn figure-setup [{:keys [id support bank immunities location special]}]
    {:id          id
     :support     support
     :bank        (bank-setup bank)
     :immunities  immunities
     :location-id (:id location)
     :special-id  (:id special)})

(defn board-setup [{:keys [players figures locations]}]
    {:players   (vec (map :id players))
     :figures   (vec (map figure-setup figures))
     :locations (vec (map location-setup locations))
     :specials  (vec (filter identity (map (comp :id :special) figures)))})

(defn game-results [board]
    {:scores   (map-keys :id (get-scores board))
     :rankings (map-keys :id (get-rankings board))})

(defn by-id [coll id] (first (filter #(= id (:id %)) coll)))

(defn player-by-id [board player-id] (by-id (:players board) player-id))

(defn figure-by-id [board figure-id] (by-id (:figures board) figure-id))

(defn location-by-id [board location-id] (by-id (:locations board) location-id))

(defn special-by-id [board special-id] (by-id (map :special (:figures board)) special-id))

(defn read-bid [{:keys [gold blackmail force]}]
    (->Bid (or gold 0) (or blackmail 0) (or force 0)))

(defn read-figure-bid-map [board bids]
    (map-kv (partial figure-by-id board) read-bid bids))

(defn read-player-figure-bid-map [board bids]
    (map-kv (partial player-by-id board) (partial read-figure-bid-map board) bids))

(defn read-special-response [board special-id m]
    (case special-id
        :take-open-spot
            {:location (location-by-id board (:location m))}

        :steal-spot
            {:location (location-by-id board (:location m))
             :player (player-by-id board (:player m))}

        :swap-spots
            {:location0 (location-by-id board (:location0 m))
             :player0   (player-by-id board (:player0 m))
             :location1 (location-by-id board (:location1 m))
             :player1   (player-by-id board (:player1 m))}

        :reassign-spots
            {:reassignments
             (vec (map (fn [l-ids] (vec (map (partial location-by-id board) l-ids)))
                       (:reassignments m)))}
        m))

(defn all-bids-submitted? [state]
  (= (count (:players (:board @state))) (count (:bids @state))))

(defn transmit [state player-id message]
    (let [player-channel (get-in @state [:player-channels player-id])]
        (go (>! player-channel message))))

(defn transmit-game-not-ready [state player-id]
    (transmit state player-id {:type :game-not-ready}))

(defn transmit-game-already-started [state player-id]
    (transmit state player-id {:type :game-already-started}))

(defn transmit-bids-already-submitted [state player-id]
    (transmit state player-id {:type :bids-already-submitted}))

(defn transmit-invalid-bid [state player-id]
    (transmit state player-id {:type :invalid-bid}))

(defn transmit-special-not-expected [state player-id]
    (transmit state player-id {:type :special-not-expected}))

(defn transmit-invalid-special-args [state player-id]
    (transmit state player-id {:type :invalid-special-args}))

(defn broadcast [state message]
  (let [{:keys [player-channels]} @state]
    (doseq [ch (vals player-channels)] (go (>! ch message)))))

(defn broadcast-signup [state player-id player-name]
    (broadcast state {:type :signup :player-id player-id :player-name player-name}))

(defn broadcast-start-game [state board]
    (broadcast state {:type :start-game :setup (board-setup board)}))

(defn broadcast-bids-submitted [state player-id]
    (broadcast state {:type :bids-submitted :player-id player-id}))

(defn broadcast-take-bids [state board]
    (broadcast state {:type :take-bids :status (board-status board)}))

(defn broadcast-special [state board]
    (broadcast state {:type :special
                      :special-id (:id (:special board))
                      :special-winner (:id (:special-winner board))
                      :status (board-status board)}))

(defn broadcast-game-over [state board]
    (broadcast state {:type :game-over :results (game-results board)}))

(defn handle-turn [state & [args]]
  (let [{:keys [board bids]} @state
        bids (relevel (read-player-figure-bid-map board bids))
        board (run-turn board bids args)]
    (reset-in! state [:board] board)
    (cond
      (suspended? board) (broadcast-special state board)
      (game-over? board) (broadcast-game-over state board)
      :else              (broadcast-take-bids state board))))

; TODO make sure submitted by the right player
(defn handle-submit-special [state player-id args]
  (let [{:keys [board]} @state
        {:keys [id check]} (:special board)
        player (player-by-id board player-id)
        args (read-special-response board id args)]
    (cond
      (not (suspended? board))        (transmit-special-not-expected state player-id)
      (not (check board player args)) (transmit-invalid-special-args state player-id)
      :else                           (handle-turn state args))))

(defn invalid-bids? [board player-id bids]
  (not (validate-bids (get-bank board (player-by-id board player-id))
                      (read-figure-bid-map board bids))))

; TODO check that bids are being submitted for the current turn?
; if we allow re-submits, then we can't let re-submission be applied to next turn
(defn handle-submit-bids [state player-id bids]
  (let [{:keys [board]} @state]
    (cond
      (not (ready? board))                 (transmit-game-not-ready state player-id)
      (invalid-bids? board player-id bids) (transmit-invalid-bid state player-id)
      :else
        (do (swap-in! state [:bids] assoc player-id bids)
            (broadcast-bids-submitted state player-id)
            (if (all-bids-submitted? state)
                (handle-turn state))))))

(defn handle-start-game [state player-id]
    (let [{:keys [board player-names]} @state]
        (if board
            (transmit-game-already-started state player-id)
            (let [board (make-board (mapv (partial apply ->Player) player-names))]
                (do (reset-in! state [:board] board)
                    (broadcast-start-game state board)
                    (broadcast-take-bids state board))))))

(defn handle-signup [state player-id player-name]
    (if (:board @state)
        (transmit-game-already-started state player-id)
        (do (swap-in! state [:player-names] assoc player-id player-name)
            (broadcast-signup state player-id player-name))))

(defn handle-message [state {:keys [player-id type player-name bids args]}]
    (case type
        :signup         (handle-signup state player-id player-name)
        :start-game     (handle-start-game state player-id)
        :submit-bids    (handle-submit-bids state player-id bids)
        :submit-special (handle-submit-special state player-id args)
        (transmit state player-id {:type :unrecognized-message})))

(defn ->ServerState [] {
    :player-names {} ; {player-id player-name}
    :player-counter 0
    :player-channels {} ; {player-id chan}
    :board nil
    :bids {}}) ; {player-id Bid}

(def state (atom (->ServerState)))

(def server-channel (chan))

(go-loop []
    (when-let [message (<! server-channel)]
        (handle-message state message)))

; TODO move signup into this loop?
(defn ws-handler [{:keys [ws-channel]}]
    (let [player-id (swap-in! state [:player-counter] inc)]
        (swap-in! state [:player-channels] assoc player-id ws-channel)
        (go-loop []
            (when-let [{:keys [message error]} (<! ws-channel)]
                ; handle error
                (if message
                    (>! server-channel (assoc message :player-id player-id)))
                (recur)))))

(defroutes app-routes
    (GET "/"   [] (response (page-frame)))
    (GET "/ws" [] (wrap-websocket-handler ws-handler)))

(def app #'app-routes)
