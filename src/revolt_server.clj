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

(def bids (atom {})) ; Map PlayerId (Map FigureId Bid)

(defn add-channel [ch] (swap! channels conj ch))

(defn page-frame []
    (html5
        [:head
            [:title "Revolt Server"]
            (include-js "/js/revolt_client.js")]
        [:body
            [:div#content]]))

(defn start-game []
    (reset! board (revolt/make-board (vec (map revolt/->Player @player-ids)))))

(defn handle-turn []
    (swap! board revolt/run-turn (revolt/relevel @bids) (constantly {})))

(defn transmit [sender-channel message] (go (>! sender-channel message)))

(defn broadcast [message] (go (doseq [ch @channels] (>! ch message))))

(defn player-by-id [player-id]
    (first (filter #(= player-id (:id %)) (:players @board))))

(defn figure-by-id [figure-id]
    (first (filter #(= figure-id (:id %)) (:figure @board))))

(defn handle-message [sender-channel message]
    (case (:type (:content message))
        :signup
            (if (nil? @board)
                (do (swap! player-ids conj (:user-name message))
                    (broadcast {:content   :signup-accepted
                                :user-name (:user-name message)}))
                (transmit sender-channel {:content :game-already-started}))
        :start-game
            (if (nil? @board)
                (do (start-game)
                    (broadcast {:content (revolt/board-setup @board)})
                    (broadcast {:content (revolt/board-status @board)}))
                (transmit sender-channel {:content :game-already-started}))
        :submit-bids
            (if-not (contains? @bids (:user-name message))
                    (let [player-bids (:bids (:content message))]
                        (if (and player-bids
                                 (revolt/validate-bids (revolt/get-bank @board (player-by-id (:user-name @board)))
                                                       (revolt/map-keys figure-by-id player-bids)))
                            (do (swap! bids assoc (:user-name message) player-bids)
                                (println @bids)
                                (transmit sender-channel {:content :bids-accepted})
                                (if (= (count @player-ids) (count @bids))
                                    (do (handle-turn)
                                        (reset! bids {})
                                        (broadcast {:content (revolt/board-status @board)}))))
                            (transmit sender-channel {:content :invalid-bid})))
                    (transmit sender-channel {:content :bid-already-submitted}))
        (transmit sender-channel
                  {:received (format "Unrecognized message: '%s' at %s."
                                     (pr-str message)
                                     (java.util.Date.))})))

(defn ws-handler [{:keys [ws-channel remote-addr]}]
    (println "Opened connection from:" remote-addr)
    (add-channel ws-channel)
    (go-loop []
        (when-let [{:keys [message error] :as packet} (<! ws-channel)]
            (prn "Message received:" packet)
            (handle-message ws-channel message)
            (recur))))

(defroutes app-routes
    (GET "/"     [] (response (page-frame)))
    (GET "/ws"   [] (wrap-websocket-handler ws-handler {:format :transit-json}))
    (ANY "/ajax" [] (wrap-restful-format
        (fn [{:keys [body-params] :as req}]
            (response {:you-said body-params
                       :req (dissoc req :async-channel :body)}))
        :formats [:edn :json-kw]))
    (resources "/js" {:root "js"}))

(def app #'app-routes)
