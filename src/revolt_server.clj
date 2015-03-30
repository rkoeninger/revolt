(ns revolt-server
    (:require [revolt]
              [ring.util.response :refer [response]]
              [compojure.core :refer [defroutes GET ANY]]
              [compojure.route :refer [resources]]
              [chord.http-kit :refer [wrap-websocket-handler]]
              [clojure.core.async :refer [<! >! go go-loop]]
              [hiccup.page :refer [html5 include-js]]
              [ring.middleware.format :refer [wrap-restful-format]]))

(def channels (atom #{}))

(def board (atom nil))

(def player-ids (atom #{}))

(def bids (atom {})) ; Map Player.Id (Map Figure.Id Bid)

(defn add-channel [ch] (swap! channels conj ch))

(defn page-frame []
    (html5
        [:head
            [:title "Revolt Server"]
            (include-js "/js/revolt_client.js")]
        [:body
            [:div#content]]))

(defn start-game [board-atom player-ids-atom]
    (reset! board-atom (revolt/make-board (vec (map revolt/->Player @player-ids-atom)))))

(defn handle-turn [board-atom bids-atom]
    (swap! board-atom revolt/run-turn (revolt/relevel @bids-atom) (constantly {})))

(defn player-by-id [!board player-id]
    (first (filter #(= player-id (:id %)) (:players @!board))))

(defn figure-by-id [!board figure-id]
    (first (filter #(= figure-id (:id %)) (:figures @!board))))

(defn handle-signup [transmit broadcast user-name board-atom player-ids-atom]
    (if (nil? @board-atom)
        (do (swap! player-ids-atom conj user-name)
            (broadcast {:content :signup-accepted :user-name user-name}))
        (transmit {:content :game-already-started})))

(defn handle-start-game [transmit broadcast board-atom player-ids-atom]
    (if (nil? @board-atom)
        (do (start-game board-atom player-ids-atom)
            (broadcast {:content (revolt/board-setup @board-atom)})
            (broadcast {:content (revolt/board-status @board-atom)}))
        (transmit {:content :game-already-started})))

(defn handle-submit-bids [transmit broadcast user-name bids board-atom bids-atom]
    (if-not (contains? @bids-atom user-name)
            (let [player-bids bids]
                (if (and player-bids
                         (revolt/validate-bids (revolt/get-bank @board-atom (player-by-id board-atom user-name))
                                               (revolt/map-keys (partial board-atom figure-by-id) player-bids)))
                    (do (swap! bids-atom assoc user-name player-bids)
                        (println @bids-atom)
                        (transmit {:content :bids-accepted})
                        (if (= (count (:players @board-atom)) (count @bids-atom))
                            (do (handle-turn board-atom bids-atom)
                                (reset! bids-atom {})
                                (broadcast {:content (revolt/board-status @board-atom)}))))
                    (transmit {:content :invalid-bid})))
            (transmit {:content :bid-already-submitted})))

(defn handle-message [message transmit broadcast board-atom bids-atom player-ids-atom]
    (case (:type (:content message))
        :signup (handle-signup transmit broadcast (:user-name message) board-atom player-ids-atom)
        :start-game (handle-start-game transmit broadcast board-atom player-ids-atom)
        :submit-bids (handle-submit-bids transmit broadcast (:user-name message) (:bids (:content message)) board-atom bids-atom)
        (transmit {:received (format "Unrecognized message: '%s' at %s."
                                     (pr-str message)
                                     (java.util.Date.))})))

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
