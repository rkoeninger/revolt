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

(defn swap-in! [a ks f & args] (apply swap! a update-in ks f args))

(defn reset-in! [a ks x] (swap! a assoc-in ks x))

(defn bank-setup [bank]
  (select-keys bank (keys zero-bid)))

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
  {:players   (mapv :id players)
   :figures   (mapv figure-setup figures)
   :locations (mapv location-setup locations)
   :specials  (filterv identity (map (comp :id :special) figures))})

(defn game-results [board]
  {:scores   (map-keys :id (get-scores board))
   :rankings (map-keys :id (get-rankings board))})

(defn by-id [coll id] (first (filter #(= id (:id %)) coll)))

(defn player-by-id [{:keys [players]} player-id]
  (by-id players player-id))

(defn figure-by-id [{:keys [figures]} figure-id]
  (by-id figures figure-id))

(defn location-by-id [{:keys [locations]} location-id]
  (by-id locations location-id))

(defn special-by-id [{:keys [figures]} special-id]
  (by-id (map :special figures) special-id))

(defn read-figure-bid-map [board bids]
  (map-kv (partial figure-by-id board) (partial merge zero-bid) bids))

(defn read-player-figure-bid-map [board bids]
  (map-kv (partial player-by-id board) (partial read-figure-bid-map board) bids))

(defn read-take-open-spot [board {:keys [location]}]
  {:location (location-by-id board location)})

(defn read-steal-spot [board {:keys [location player]}]
  {:location (location-by-id board location)
   :player (player-by-id board player)})

(defn read-swap-spots [board {:keys [location0 player0 location1 player1]}]
  {:location0 (location-by-id board location0)
   :player0   (player-by-id board player0)
   :location1 (location-by-id board location1)
   :player1   (player-by-id board player1)})

(defn read-reassign-spots [board {:keys [reassignments]}]
  {:reassignments (mapv (partial mapv (partial location-by-id board)) reassignments)})

(defn read-special-response [board special-id args]
  (let [read-special
        (case special-id
          :take-open-spot read-take-open-spot
          :steal-spot     read-steal-spot
          :swap-spots     read-swap-spots
          :reassign-spots read-reassign-spots
          identity)]
    (read-special board args)))

(defn all-bids-submitted? [state]
  (let [{:keys [board bids]} @state
        {:keys [players]} board]
    (= (count players) (count bids))))

(defn transmit [state player-id message]
  (let [player-channel (get-in @state [:player-channels player-id])]
    (go (>! player-channel message))))

(defn transmit-game-not-ready [state player-id]
  (transmit state player-id {:type :game-not-ready}))

(defn transmit-game-already-started [state player-id]
  (transmit state player-id {:type :game-already-started}))

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
;     (already handled by the player-id being associated with the ws-channel?)
; TODO make sure correct special was submitted for?
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
  :player-channels {} ; {player-id chan}
  :board nil
  :bids {}}) ; {player-id Bid}

;;;; Everything after this point is impure / doesn't get tested ;;;;

(def state (atom (->ServerState)))

(def server-channel (chan))

(defmacro go-message-loop [channel binding & more]
  `(go-loop []
    (when-let [~binding (<! ~channel)]
      ~@more
      (recur))))

(go-message-loop server-channel message
  (handle-message state message))

(def player-counter (atom 0))

; TODO move signup into this loop?
(defn ws-handler [{:keys [ws-channel]}]
  (let [player-id (swap! player-counter inc)]
    (swap-in! state [:player-channels] assoc player-id ws-channel)
    (go (>! ws-channel {:type :player-id :player-id player-id}))
    (println "connected to client" player-id)
    (go-message-loop ws-channel {:keys [message error] :as raw}
      ; handle error
      (println "message from player" player-id "\r\n" raw)
      (if message
        (>! server-channel (assoc message :player-id player-id))))))

(def page-frame
  (html5
    [:head
      [:title "Revolt Server"]
      (include-css "css/style.css")
      (include-js "js/compiled/revolt_client.js")]
    [:body
      [:div#content]]))

(defroutes app-routes
  (GET "/"   [] (response page-frame))
  (GET "/ws" [] (wrap-websocket-handler ws-handler)))

(def app #'app-routes)
