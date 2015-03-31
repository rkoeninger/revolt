(ns revolt-server
    (:require [revolt]
              [ring.util.response :refer [response]]
              [compojure.core :refer [defroutes GET ANY]]
              [compojure.route :refer [resources]]
              [chord.http-kit :refer [wrap-websocket-handler]]
              [clojure.core.async :refer [<! >! go go-loop]]
              [hiccup.page :refer [html5 include-js]]
              [ring.middleware.format :refer [wrap-restful-format]]))

(defn page-frame []
    (html5
        [:head
            [:title "Revolt Server"]
            (include-js "/js/revolt_client.js")]
        [:body
            [:div#content]]))

(defn handle-signup [transmit broadcast player-id !board !player-ids]
    (if @!board
        (transmit {:content :game-already-started})
        (do (swap! !player-ids conj player-id)
            (broadcast {:content :signup-accepted :player-id player-id}))))

(defn handle-start-game [transmit broadcast !board !player-ids]
    (if @!board
        (transmit {:content :game-already-started})
        (do (reset! !board (revolt/make-board (vec (map revolt/->Player @!player-ids))))
            (broadcast {:content (revolt/board-setup @!board)})
            (broadcast {:content (revolt/board-status @!board)}))))

(defn handle-turn [!board !bids]
    (swap! !board revolt/run-turn (revolt/relevel @!bids) (constantly {})))

(defn player-by-id [!board player-id]
    (first (filter #(= player-id (:id %)) (:players @!board))))

(defn figure-by-id [!board figure-id]
    (first (filter #(= figure-id (:id %)) (:figures @!board))))

(defn handle-submit-bids [transmit broadcast user-name player-bids !board !bids]
    (if (contains? @!bids user-name)
        (transmit {:content :bid-already-submitted})
        (if (and player-bids
                 (revolt/validate-bids
                     (revolt/get-bank @!board (player-by-id !board user-name))
                     (revolt/map-keys (partial !board figure-by-id) player-bids)))
            (do (swap! !bids assoc user-name player-bids)
                (println @!bids)
                (transmit {:content :bids-accepted})
                (if (= (count (:players @!board)) (count @!bids))
                    (do (handle-turn !board !bids)
                        (reset! !bids {})
                        (broadcast {:content (revolt/board-status @!board)}))))
            (transmit {:content :invalid-bid}))))

(defn handle-message [{:keys [player-id content] :as message} transmit broadcast !board !bids !player-ids]
    (case (:type content)
        :signup (handle-signup transmit broadcast player-id !board !player-ids)
        :start-game (handle-start-game transmit broadcast !board !player-ids)
        :submit-bids (handle-submit-bids transmit broadcast player-id (:bids content) !board !bids)
        (transmit {:received (format "Unrecognized message: '%s' at %s."
                                     (pr-str message)
                                     (java.util.Date.))})))

(def channels (atom #{}))

(def board (atom nil))

(def player-ids (atom #{}))

(def bids (atom {})) ; Map Player.Id (Map Figure.Id Bid)

(defn add-channel [ch] (swap! channels conj ch))

(defn ws-handler [{:keys [ws-channel remote-addr]}]
    (println "Opened connection from:" remote-addr)
    (add-channel ws-channel)
    (go-loop []
        (when-let [{:keys [message error] :as packet} (<! ws-channel)]
            (prn "Message received:" packet)
            (handle-message message
                            (fn [message] (go (>! ws-channel message)))
                            (fn [message] (go (doseq [ch @channels] (>! ch message))))
                            board
                            bids
                            player-ids)
            (recur))))

(defroutes app-routes
    (GET "/"     [] (response (page-frame)))
    (GET "/ws"   [] (wrap-websocket-handler ws-handler {:format :transit-json}))
    (resources "/js" {:root "js"}))

(def app #'app-routes)
