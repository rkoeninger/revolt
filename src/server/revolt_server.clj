(ns revolt-server
    (:require [revolt :refer [map-keys map-kv map-entries]]
              [ring.util.response :refer [response]]
              [compojure.core :refer [defroutes GET ANY]]
              [compojure.route :refer [resources]]
              [chord.http-kit :refer [wrap-websocket-handler]]
              [clojure.core.async :refer [<! >! <!! >!! go go-loop]]
              [hiccup.page :refer [html5 include-js]]
              [ring.middleware.format :refer [wrap-restful-format]]))

(defn page-frame []
    (html5
        [:head
            [:title "Revolt Server"]
            (include-js "/js/revolt_client.js")]
        [:body
            [:div#content]]))

(defn board-status [{:keys [turn support banks influence guard-house]}]
    {:turn        turn
     :support     (map-keys :id support)
     :banks       (map-keys :id banks)
     :influence   (map-kv :id (partial map-keys :id) influence)
     :guard-house guard-house})

(defn figure-setup [{:keys [id support bank immunities location special]}]
    {:id          id
     :support     support
     :bank        bank
     :immunities  immunities
     :location-id (:id location)
     :special-id  (:id special)})

(defn board-setup [{:keys [players figures locations]}]
    {:players   players
     :figures   (vec (map figure-setup figures))
     :locations locations
     :specials  (vec (filter identity (map (comp :id :special) figures)))})

(defn game-results [board]
    {:scores   (map-keys :id (revolt/get-scores board))
     :rankings (map-keys :id (revolt/get-rankings board))})

(defn by-id [coll id] (first (filter #(= id (:id %)) coll)))

(defn player-by-id [board player-id] (by-id (:players board) player-id))

(defn figure-by-id [board figure-id] (by-id (:figures board) figure-id))

(defn location-by-id [board location-id] (by-id (:locations board) location-id))

(defn read-bid [{:keys [gold blackmail force]}]
    (revolt/->Bid (or gold      0)
                  (or blackmail 0)
                  (or force     0)))

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

(defn handle-signup [transmit query broadcast player-id !board !player-ids !queries]
    (if @!board
        (transmit {:content :game-already-started})
        (do (swap! !player-ids conj player-id)
            (swap! !queries assoc player-id query)
            (broadcast {:content :signup-accepted :player-id player-id}))))

(defn handle-start-game [transmit query broadcast !board !player-ids]
    (if @!board
        (transmit {:content :game-already-started})
        (do (reset! !board (revolt/make-board (vec (map revolt/->Player @!player-ids))))
            (broadcast {:content (board-setup @!board)})
            (broadcast {:content (board-status @!board)}))))

(defn special-fn [!board !queries]
    (fn [board player figure]
        (let [query (@!queries (:id player))
              special-id (:id (:special figure))]
            (if (= special-id :occupy-guard-house)
                {}
                (read-special-response board special-id
                    (let [query-result (query {:board (board-status board)
                                      :special special-id
                                      :figure  (:id figure)})]
                        (:content query-result)))))))

(defn handle-turn [!board !bids !queries]
    (swap! !board revolt/run-turn
                  (revolt/relevel (read-player-figure-bid-map @!board @!bids))
                  (special-fn !board !queries)))

(defn handle-submit-bids [transmit query broadcast user-name player-bids !board !bids !queries]
    (if (contains? @!bids user-name)
        (transmit {:content :bids-already-submitted})
        (if (and player-bids
                 (revolt/validate-bids
                     (revolt/get-bank @!board (player-by-id @!board user-name))
                     (read-figure-bid-map @!board player-bids)))
            (do (swap! !bids assoc user-name player-bids)
                (transmit {:content :bids-accepted})
                (if (= (count (:players @!board)) (count @!bids))
                    (do (handle-turn !board !bids !queries)
                        (reset! !bids {})
                        (broadcast {:content (board-status @!board)})
                        (if (revolt/game-over? @!board)
                            (broadcast {:type :game-over
                                        :results (game-results @!board)})))))
            (transmit {:content :invalid-bid}))))

(defn handle-message [{:keys [player-id content] :as message} transmit query broadcast !board !bids !player-ids !queries]
    (case (:type content)
        :signup (handle-signup transmit query broadcast player-id !board !player-ids !queries)
        :start-game (handle-start-game transmit query broadcast !board !player-ids)
        :bids (transmit {:content @!bids})
        :status (transmit {:content (board-status @!board)})
        :submit-bids (handle-submit-bids transmit query broadcast player-id (:bids content) !board !bids !queries)
        (transmit {:received (format "Unrecognized message: '%s' at %s."
                                     (pr-str message)
                                     (java.util.Date.))})))

(let [queries (atom {})
      channels (atom #{})
      board (atom nil)
      player-ids (atom #{})
      bids (atom {}) ; Map Player.Id (Map Figure.Id Bid)
      add-channel (fn [ch] (swap! channels conj ch))]
    (defn ws-handler [{:keys [ws-channel remote-addr]}]
        (println "Opened connection from:" remote-addr)
        (add-channel ws-channel)
        (go-loop []
            (when-let [{:keys [message error] :as packet} (<! ws-channel)]
                (prn "Message received:" packet)
                (handle-message message
                                (fn [message] (go (>! ws-channel message)))
                                (fn [message] (do (>!! ws-channel message)
                                                  (:message (<!! ws-channel))))
                                (fn [message] (go (doseq [ch @channels] (>! ch message))))
                                board
                                bids
                                player-ids
                                queries)
                (recur)))))

(defroutes app-routes
    (GET "/"     [] (response (page-frame)))
    (GET "/ws"   [] (wrap-websocket-handler ws-handler {:format :transit-json}))
    (resources "/js" {:root "js"}))

(def app #'app-routes)
