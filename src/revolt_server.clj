(ns revolt-server
    (:require [revolt :refer [map-keys map-kv]]
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

(defn board-status [{:keys [turn support banks influence]}]
    {:turn      turn
     :support   (map-keys :id support)
     :banks     (map-keys :id banks)
     :influence (map-kv :id (partial map-keys :id) influence)})

(defn figure-setup [{:keys [id support bank immunities location]}]
    {:id          id
     :support     support
     :bank        bank
     :immunities  immunities
     :location-id (:id location)})

(defn board-setup [{:keys [players figures locations]}]
    {:players   players
     :figures   (vec (map figure-setup figures))
     :locations locations})

(defn handle-signup [transmit broadcast player-id !board !player-ids]
    (if @!board
        (transmit {:content :game-already-started})
        (do (swap! !player-ids conj player-id)
            (broadcast {:content :signup-accepted :player-id player-id}))))

(defn handle-start-game [transmit broadcast !board !player-ids]
    (if @!board
        (transmit {:content :game-already-started})
        (do (reset! !board (revolt/make-board (vec (map revolt/->Player @!player-ids))))
            (broadcast {:content (board-setup @!board)})
            (broadcast {:content (board-status @!board)}))))

(defn player-by-id [board player-id]
    (first (filter #(= player-id (:id %)) (:players board))))

(defn figure-by-id [board figure-id]
    (first (filter #(= figure-id (:id %)) (:figures board))))

(defn read-bid [{:keys [gold blackmail force]}]
    (revolt/->Bid (or gold      0)
                  (or blackmail 0)
                  (or force     0)))

(defn read-figure-bid-map [board bids]
    (map-kv (partial figure-by-id board) read-bid bids))

(defn read-player-figure-bid-map [board bids]
    (map-kv (partial player-by-id board) (partial read-figure-bid-map board) bids))

(defn handle-turn [!board !bids]
    (swap! !board revolt/run-turn
                  (revolt/relevel (read-player-figure-bid-map @!board @!bids))
                  (constantly {})))

(defn handle-submit-bids [transmit broadcast user-name player-bids !board !bids]
    (if (contains? @!bids user-name)
        (transmit {:content :bids-already-submitted})
        (if (and player-bids
                 (revolt/validate-bids
                     (revolt/get-bank @!board (player-by-id @!board user-name))
                     (read-figure-bid-map @!board player-bids)))
            (do (swap! !bids assoc user-name player-bids)
                (transmit {:content :bids-accepted})
                (if (= (count (:players @!board)) (count @!bids))
                    (do (handle-turn !board !bids)
                        (reset! !bids {})
                        (broadcast {:content (board-status @!board)}))))
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
