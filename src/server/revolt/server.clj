(ns revolt.server
    (:require [ring.util.response :refer [response]]
              [compojure.core :refer [defroutes GET ANY]]
              [compojure.route :refer [resources]]
              [chord.http-kit :refer [wrap-websocket-handler]]
              [clojure.core.async :refer [<! >! <!! >!! go go-loop]]
              [hiccup.page :refer [html5 include-js include-css]]
              [ring.middleware.format :refer [wrap-restful-format]])
    (:use revolt.core)
    (:use revolt.setup)
    (:use clojure.pprint))

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

(defn keyword-or-string? [x] (or (string? x) (keyword? x)))

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

(defn handle-signup [transmit broadcast player-id state]
    (if (:board @state)
        (transmit {:type :game-already-started})
        (do (swap-in! state [:player-ids] conj player-id)
            (broadcast {:type :signup
                        :player-id player-id}))))

(defn handle-start-game [transmit broadcast state]
    (if (:board @state)
        (transmit {:type :game-already-started})
        (do (reset-in! state [:board] (make-board (vec (map ->Player (:player-ids @state)))))
            (broadcast {:type :start-game
                        :setup (board-setup (:board @state))})
            (broadcast {:type :take-bids
                        :status (board-status (:board @state))}))))

(defn handle-turn [state broadcast]
  (println "handling turn")
  (let [board (:board @state)
        bids (:bids @state)
        releveled-bids (relevel (read-player-figure-bid-map board bids))
        {:keys [mode figure-list winner] :as result} (run-turn board releveled-bids)
        board2 (:board result)]
      (println "saving turn result board: ")
      (pprint (board-status board))
      (println)
      (reset-in! state [:board] board2)
      (if (= :complete mode)
        (swap! state dissoc :temp)
        (do
            (reset-in! state [:temp] {:figure-list figure-list
                                      :mode mode
                                      :winner winner})
            (broadcast {:type mode
                        :status board2
                        :winner winner})))))

(defn handle-special [state broadcast player-id special-id args]
  (if (and (contains? @state :temp)
           (= player-id (get-in @state [:temp :winner]))
           (= special-id (get-in @state [:temp :mode]))) ; otherwise ignored
    (let [board (:board @state)
          bids (:bids @state)
          figure-list (get-in @state [:temp :figure-list])
          mode (get-in @state [:temp :mode])
          winner (get-in @state [:temp :winner])
          releveled-bids (relevel (read-player-figure-bid-map board bids))
          {:keys [mode figure-list board winner] :as result}
          (resume-turn
            board
            releveled-bids
            {:special (special-by-id board mode)
             :player winner
             :args args})]
      (reset-in! state [:board] board)
      (if (= :complete mode)
        (swap! state dissoc :temp)
        (do
            (reset-in! state [:temp] {:figure-list figure-list
                                      :mode mode
                                      :winner winner})
            (broadcast {:type mode
                        :status board
                        :winner winner}))))))

(defn all-bids-in? [state]
  (= (count (:players (:board @state))) (count (:bids @state))))

(defn handle-submit-bids [transmit broadcast user-name player-bids state]
    (println "go-ing handle-submit-bids")
    (go
    (println "actually handle-submit-bids")
    (let [r (if (contains? (:bids @state) user-name)
        (transmit {:type :bids-already-submitted})
        (if (and player-bids
                 (validate-bids
                     (get-bank (:board @state) (player-by-id (:board @state) user-name))
                     (read-figure-bid-map (:board @state) player-bids)))
            (do (swap-in! state [:bids] assoc user-name player-bids)
                (broadcast {:type :bids-submitted :player user-name})
                (if (all-bids-in? state)
                    (do (handle-turn state broadcast)
                        (reset-in! state [:bids] {})
                        (broadcast {:type :take-bids
                                    :status (board-status (:board @state))})
                        (if (game-over? (:board @state))
                            (broadcast {:type :game-over
                                        :results (game-results (:board @state))})))))
            (transmit {:type :invalid-bid})))]
    (println "finished handle-submit-bids")
    r)
    ))

(defn handle-message [{:keys [player-id content type] :as message} transmit broadcast state]
    (if (and type (in? type special-ids))
        (handle-special state broadcast player-id (:type content) (:args content))
        (case (:type content)
            :signup (handle-signup transmit broadcast player-id state)
            :start-game (handle-start-game transmit broadcast state)
            :bids (transmit {:type :bid-status
                             :bids (:bids @state)})
            :status (transmit {:type :status
                               :status (board-status (:board @state))})
            :submit-bids (handle-submit-bids transmit broadcast player-id (:bids content) state)
            (transmit {:received (format "Unrecognized message: '%s' at %s."
                                         (pr-str message)
                                         (java.util.Date.))}))))

(let [state (atom
        {:channels #{}
         :board nil
         :player-ids #{}
         :bids {}})] ; Map Player.Id (Map Figure.Id Bid)
    (defn ws-handler [{:keys [ws-channel remote-addr]}]
        (println "Opened connection from:" remote-addr)
        (swap-in! state [:channels] conj ws-channel)
        (go-loop []
            (when-let [{:keys [message error] :as packet} (<! ws-channel)]
                (prn "Message received:" packet)
                (handle-message
                  message
                  (fn [message] (do (println "transmitting...")
                                    (println message)
                                    (go (>! ws-channel message))))
                  (fn [message] (do (println "broadcasting...")
                                    (println message)
                                    (go (doseq [ch (:channels @state)] (>! ch message)))))
                  state)
                (recur)))))

(defroutes app-routes
    (GET "/"     [] (response (page-frame)))
    (GET "/ws"   [] (wrap-websocket-handler ws-handler)))

(def app #'app-routes)
