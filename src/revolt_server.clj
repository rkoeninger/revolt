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

(defn player-by-id [player-id]
    (first (filter #(= player-id (:id %)) (:players @board))))

(defn figure-by-id [figure-id]
    (first (filter #(= figure-id (:id %)) (:figures @board))))

(defn handle-message [message transmit broadcast board-atom bids-atom player-ids-atom]
    (case (:type (:content message))
        :signup
            (if (nil? @board-atom)
                (do (swap! player-ids-atom conj (:user-name message))
                    (broadcast {:content   :signup-accepted
                                :user-name (:user-name message)}))
                (transmit {:content :game-already-started}))
        :start-game
            (if (nil? @board-atom)
                (do (start-game board-atom player-ids-atom)
                    (broadcast {:content (revolt/board-setup @board-atom)})
                    (broadcast {:content (revolt/board-status @board-atom)}))
                (transmit {:content :game-already-started}))
        :submit-bids
            (if-not (contains? @bids-atom (:user-name message))
                    (let [player-bids (:bids (:content message))]
                        (if (and player-bids
                                 (revolt/validate-bids (revolt/get-bank @board-atom (player-by-id (:user-name message)))
                                                       (revolt/map-keys figure-by-id player-bids)))
                            (do (swap! bids-atom assoc (:user-name message) player-bids)
                                (println @bids-atom)
                                (transmit {:content :bids-accepted})
                                (if (= (count @player-ids-atom) (count @bids-atom))
                                    (do (handle-turn board-atom bids-atom)
                                        (reset! bids-atom {})
                                        (broadcast {:content (revolt/board-status @board-atom)}))))
                            (transmit {:content :invalid-bid})))
                    (transmit {:content :bid-already-submitted}))
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
