(ns revolt-server
    (:require [revolt]
              [ring.util.response :refer [response]]
              [compojure.core :refer [defroutes GET ANY]]
              [compojure.route :refer [resources]]
              [chord.http-kit :refer [wrap-websocket-handler]]
              [clojure.core.async :refer [<! >! put! close! go-loop]]
              [hiccup.page :refer [html5 include-js]]
              [ring.middleware.format :refer [wrap-restful-format]]))

(def channels (agent #{}))

(defn add-channel [ch] (send channels (comp set conj) ch))

(defn page-frame []
    (html5
        [:head
            [:title "Revolt Server"]
            (include-js "/js/revolt_client.js")]
        [:body
            [:div#content]]))

(defn ws-handler [{:keys [ws-channel] :as req}]
    (add-channel ws-channel)
    (println "Opened connection from" (:remote-addr req))
    (go-loop []
        (when-let [{:keys [message error] :as msg} (<! ws-channel)]
            (prn "Message received:" msg)
            (doseq [ch @channels]
                (>! ch (if error
                    (format "Error: '%s'." (pr-str msg))
                    {:received (format "You passed: '%s' at %s." (pr-str message) (java.util.Date.))})))
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
