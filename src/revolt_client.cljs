(ns revolt-server.client
    (:require [chord.client :refer [ws-ch]]
              [cljs.core.async :refer [chan <! >! put! close! timeout]]
              [cljs.reader :as edn]
              [flow.core :as f :include-macros true]
              [chord.http :as ajax]
              [cemerick.url :refer (url)])
    (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

(def !user-name (atom nil))
(def !input-value (atom nil))

(defn try-read-edn [s]
  (try
    (let [edn (edn/read-string s)]
      (if (symbol? edn)
        s
        edn))
    (catch js/Error _ s)))

(defn read-message []
  {:user-name @!user-name
   :content   @!input-value})

(defn message-box [new-msg-ch]
  (f/el
    [:div
     [:h3 "Send a message to the server: (either EDN or raw string)"]
     [:input {:type  "text"
              :size  50
              :value (<< !input-value)
              ::f/on {:keyup (juxt (f/bind-value! !input-value)
                                   (fn [e]
                                     (when (= 13 (.-keyCode e))
                                       (put! new-msg-ch (read-message))
                                       (reset! !input-value ""))))}}]]))

(defn message-list [!msgs]
  (f/el
    [:div
     [:h3 "Messages from the server:"]
     [:ul
      (if-let [msgs (seq (<< !msgs))]
        (for [msg msgs]
          [:li (pr-str msg)])
        [:li "None yet."])]]))

(defn user-name-box []
  (f/el
    [:div
     [:h3 "User name:"]
     [:input {:type      "text"
              :size      20
              :autofocus true
              :value     (<< !user-name)
              ::f/on     {:keyup (f/bind-value! !user-name)}}]]))

(defn message-component [!msgs new-msg-ch]
  (f/el
    [:div
     [user-name-box]
     [message-box new-msg-ch]
     [message-list !msgs]]))

(defn add-msg [msgs new-msg]
  (->> (cons new-msg msgs)
       (take 10)))

(defn receive-msgs! [!msgs server-ch]
  (go-loop []
    (when-let [msg (<! server-ch)]
      (swap! !msgs add-msg msg)
      (recur))))

(defn send-msgs! [new-msg-ch server-ch]
  (go-loop []
    (when-let [msg (<! new-msg-ch)]
      (>! server-ch msg)
      (recur))))

(def ws-url (str "ws://" (:host (url js/window.location)) ":3000/ws"))

(set! (.-onload js/window)
      (fn []
        (go
          (-> (<! (ajax/post "/ajax"
                             {:query-params {:a 1 :b 2}
                              :req-format   :json-kw
                              :body         {:a 3 :b 4}}))
              clj->js
              js/console.log))
        (go
          (let [{:keys [ws-channel error]} (<! (ws-ch ws-url {:format :transit-json}))]
            (if error
              (f/root js/document.body
                (f/el
                  [:div
                   "Couldn't connect to websocket: "
                   (pr-str error)
                   " @ "
                   ws-url]))

              (let [!msgs (doto (atom []) (receive-msgs! ws-channel))
                    new-msg-ch (doto (chan) (send-msgs! ws-channel))]
                (f/root js/document.body
                  (f/el
                     [message-component !msgs new-msg-ch]))))))))
