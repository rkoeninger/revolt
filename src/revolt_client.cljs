(ns revolt-client
    (:require [chord.client :refer [ws-ch]]
              [cljs.core.async :refer [chan <! >! put!]]
              [cljs.reader :as edn]
              [flow.core :as f :include-macros true]
              [cemerick.url :refer [url]])
    (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

(def !player-id (atom nil))
(def !input-value (atom nil))
(def !message-channel (atom nil))

(defn read-message []
  {:player-id @!player-id
   :content   (edn/read-string @!input-value)})

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
              :value     (<< !player-id)
              ::f/on     {:keyup (f/bind-value! !player-id)}}]
     [:input {:type  "button"
              :id    "signup-button"
              :value "Signup"
              ::f/on {:click
                      (fn [_]
                          (put! @!message-channel
                                {:player-id @!player-id
                                 :content {:type :signup}}))}}]
     [:input {:type  "button"
              :id    "start-game-button"
              :value "Start Game"
              ::f/on {:click
                      (fn [_]
                          (put! @!message-channel
                                {:player-id @!player-id
                                 :content {:type :start-game}}))}}]]))

(defn figure-input [id]
  (f/el
    [:tr
     [:td [:span (str id)]]
     [:td [:input {:type "text" :size 2 :id (str (name id) "-gold")}]]
     [:td [:input {:type "text" :size 2 :id (str (name id) "-blackmail")}]]
     [:td [:input {:type "text" :size 2 :id (str (name id) "-force")}]]]))

(def figure-ids
  [:general
   :captain
   :innkeeper
   :magistrate
   :viceroy
   :priest
   :aristocrat
   :merchant
   :printer
   :spy
   :apothecary
   :messenger
   :mayor
   :constable
   :rogue
   :mercenary])

(defn parse-or-nil [x] (let [n (js/parseInt x)] (if (js/isNaN n) 0 n)))

(defn get-val [id suffix]
  (parse-or-nil (.-value (.getElementById js/document (str (name id) "-" suffix)))))

(def zero-bid {:gold 0 :blackmail 0 :force 0})

(defn get-bid [id]
  {:gold      (get-val id "gold")
   :blackmail (get-val id "blackmail")
   :force     (get-val id "force")})

(defn get-bids []
  (apply hash-map
    (apply concat
      (filter (fn [[id bid]] (not= bid zero-bid))
        (map (fn [id] [id (get-bid id)]) figure-ids)))))

(defn figure-grid []
  (f/el
    [:div
     [:table
      [figure-input :general]
      [figure-input :captain]
      [figure-input :innkeeper]
      [figure-input :magistrate]
      [figure-input :viceroy]
      [figure-input :priest]
      [figure-input :aristocrat]
      [figure-input :merchant]
      [figure-input :printer]
      [figure-input :spy]
      [figure-input :apothecary]
      [figure-input :messenger]
      [figure-input :mayor]
      [figure-input :constable]
      [figure-input :rogue]
      [figure-input :mercenary]]
     [:input {:type  "button"
              :id    "submit-bids-button"
              :value "Submit Bids"
              ::f/on {:click
                      (fn [_]
                          (put! @!message-channel
                                {:player-id @!player-id
                                 :content {:type :submit-bids
                                           :bids (let [b (get-bids)]
                                                     (.log js/console b) b)}}))}}]]))

(defn message-component [!msgs new-msg-ch]
  (f/el
    [:div
     [user-name-box]
     [message-box new-msg-ch]
     [figure-grid]
     [message-list !msgs]]))

(defn receive-msgs! [!msgs server-ch]
  (go-loop []
    (when-let [msg (<! server-ch)]
      (swap! !msgs (partial concat [msg]))
      (recur))))

(defn send-msgs! [new-msg-ch server-ch]
  (go-loop []
    (when-let [msg (<! new-msg-ch)]
      (>! server-ch msg)
      (recur))))

(def ws-url (str "ws://" (:host (url js/window.location)) ":3000/ws"))

(defn show-error [error]
  (f/root js/document.body
          (f/el [:div "Couldn't connect to websocket: "
                      (pr-str error)
                      " @ "
                      ws-url])))

(defn send-receive [ws-channel]
  (let [!msgs (doto (atom []) (receive-msgs! ws-channel))
        new-msg-ch (doto (chan) (send-msgs! ws-channel))]
    (reset! !message-channel new-msg-ch)
    (f/root js/document.body
            (f/el [message-component !msgs new-msg-ch]))))

(set! (.-onload js/window)
      (fn []
        (go
          (let [{:keys [ws-channel error]} (<! (ws-ch ws-url {:format :transit-json}))]
            (if error
                (show-error error)
                (send-receive ws-channel))))))
