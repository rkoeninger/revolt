(ns revolt-server.client
    (:require [chord.client :refer [ws-ch]]
              [cljs.core.async :refer [chan <! >! put! close! timeout]]
              [cljs.reader :as edn]
              [flow.core :as f :include-macros true]
              [chord.http :as ajax]
              [cemerick.url :refer (url)])
    (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

(defn try-read-edn [s]
  (try
    (let [edn (edn/read-string s)]
      (if (symbol? edn)
        s
        edn))
    (catch js/Error _ s)))

(defn message-box [new-msg-ch]
  (let [!input-value (atom nil)]
    (f/el
      [:div
       [:h3 "Send a message to the server: (either EDN or raw string)"]
       [:input {:type "text",
                :size 50,
                :autofocus true
                :value (<< !input-value)
                ::f/on {:keyup (juxt (f/bind-value! !input-value)
                                     (fn [e]
                                       (when (= 13 (.-keyCode e))
                                         (put! new-msg-ch (try-read-edn @!input-value))
                                         (reset! !input-value ""))))}}]])))

(defn message-list [!msgs]
  (f/el
    [:div
     [:h3 "Messages from the server:"]
     [:ul
      (if-let [msgs (seq (<< !msgs))]
        (for [msg msgs]
          [:li (pr-str msg)])
        [:li "None yet."])]]))

(defn message-component [!msgs new-msg-ch]
  (f/el
    [:div
     [message-box new-msg-ch]
     [message-list !msgs]]))

(defn add-msg [msgs new-msg]
  ;; we keep the most recent 10 messages
  (->> (cons new-msg msgs)
       (take 10)))

(defn receive-msgs! [!msgs server-ch]
  ;; every time we get a message from the server, add it to our list
  (go-loop []
    (when-let [msg (<! server-ch)]
      (swap! !msgs add-msg msg)
      (recur))))

(defn send-msgs! [new-msg-ch server-ch]
  ;; send all the messages to the server
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
              ;; connection failed, print error
              (f/root js/document.body
                (f/el
                  [:div
                   "Couldn't connect to websocket: "
                   (pr-str error)
                   " @ "
                   ws-url]))

              (let [ ;; !msgs is a shared atom between the model (above,
                    ;; handling the WS connection) and the view
                    ;; (message-component, handling how it's rendered)
                    !msgs (doto (atom [])
                            (receive-msgs! ws-channel))

                    ;; new-msg-ch is the feedback loop from the view -
                    ;; any messages that the view puts on here are to
                    ;; be sent to the server
                    new-msg-ch (doto (chan)
                                 (send-msgs! ws-channel))]

                ;; show the message component
                (f/root js/document.body
                  (f/el
                    [message-component !msgs new-msg-ch]))))))))
