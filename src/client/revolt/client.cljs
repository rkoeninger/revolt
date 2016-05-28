(ns ^:figwheel-always revolt.client
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put! chan <!]]
            [chord.client :refer [ws-ch]]
            [cemerick.url :refer [url]]
            [revolt.core :as r]
            [revolt.lang :refer [dictionary languages]]
            [revolt.client.messaging :as rm]
            [hyjinks.core :as h]
            [hyjinks.react :refer [tag->react]]))

(enable-console-print!)

(defn localize [data key]
  (or
    (get-in dictionary [(:lang data) key])
    (do
      (js/console.error (str key " is not in " (:lang data) " dictionary"))
      (str "TRANSLATION MISSING - " (str key)))))

(defn clear-div []
  (h/div {:className "clear"}))

(defn my-bids-submitted? [data]
  (true? (get-in data [:bids-submitted (:player-id data)])))

(defn adjust-bid [data id denomination adj]
  (let [bid-denom-adjusted (+ (get-in data [:bids id denomination]) adj)
        bank-denom-adjusted (- (get-in data [:remaining-bank denomination]) adj)]
    (when (and (>= bank-denom-adjusted 0) (>= bid-denom-adjusted 0))
      (om/transact! data [:remaining-bank denomination] #(- % adj))
      (om/transact! data [:bids id denomination] #(+ % adj)))))

(defn dont-show-zero [x]
  (if (zero? x) "" x))

(defn nothing-on-figure? [data id]
  (not (r/pos-bid? (get-in data [:bids id]))))

(defn figure-limit-reached? [data]
  (>= (count (filter r/pos-bid? (vals (:bids data)))) 6))

(defn denomination-arrow [id enabled data denomination figure-disabled offset button-id-prefix id-suffix label]
  (let [disabled (or figure-disabled (not enabled))
        className (clojure.string/join " "
                    ["adjust"
                     (if disabled "disabled" "enabled")
                     (if (my-bids-submitted? data) "invisible")])]
    (h/button
      {:disabled disabled
       :className className
       :id (str button-id-prefix "-" id-suffix)
       :onClick #(adjust-bid data id denomination offset)}
      label)))

(defn denomination-input [data id immunities denomination]
  (let [immune (contains? immunities denomination)
        remaining-bank (get-in data [:remaining-bank denomination])
        amount (get-in data [:bids id denomination])
        button-id-prefix (clojure.string/join "-" ["bid" (name id) (name denomination)])
        disabled (or immune
                     (my-bids-submitted? data)
                     (and (nothing-on-figure? data id) (figure-limit-reached? data)))
        arrow #(denomination-arrow id %1 data denomination disabled %2 button-id-prefix %3 %4)
        label (h/input {:type "text"
                        :disabled immune
                        :readOnly true
                        :value (dont-show-zero amount)})]
    (h/td {:className (str "denomination-input " (name denomination))}
      (arrow (pos? remaining-bank) 1 "up" "\u2191")
      label
      (arrow (pos? amount) -1 "down" "\u2193"))))

(def immunity-class
  {#{}                  "immunity-none"
   #{:blackmail}        "immunity-blackmail"
   #{:force}            "immunity-force"
   #{:blackmail :force} "immunity-both"})

(defn denom [data bank d]
  (let [dval (get bank d)]
    (if (and dval (pos? dval))
      (str dval " " (localize data d)))))

(defn figure-description [data {:keys [support bank immunities location-id special-id]}]
  (clojure.string/join ", " (flatten (filter identity [
    (if (and support (pos? support)) (str support " " (localize data :support)))
    (denom data bank :gold)
    (denom data bank :blackmail)
    (denom data bank :force)
    (if location-id (localize data location-id))
    (case immunities
      #{} nil
      #{:blackmail}        (localize data :immune-to-blackmail)
      #{:force}            (localize data :immune-to-force)
      #{:blackmail :force} (localize data :immune-to-both))
    (if special-id (localize data special-id))]))))

(defn bid-row [data {:keys [id immunities] :as figure}]
  (h/tr {:className "bid-row"}
    (h/td {:className (str "figure-name " (get immunity-class immunities))
           :data-title (figure-description data figure)
           :onClick (fn [] (js/alert (figure-description data figure)))}
      id)
    (denomination-input data id immunities :gold)
    (denomination-input data id immunities :blackmail)
    (denomination-input data id immunities :force)
    (h/td {:className "figure-description"}
      (figure-description data figure))))

(defn bank-denomination [data denomination]
  (h/div {:className (str "bank-denomination " (name denomination))
          :title (localize data denomination)}
    (h/span {:className (str "bank-amount " (name denomination))}
      (get-in data [:remaining-bank denomination]))))

(defn tokens-remaining? [data]
  (r/pos-bid? (:remaining-bank data)))

(defn command-button [data id label disabled on-click]
  (h/button {:id id
             :className (str "command-button" (if disabled " disabled"))
             :disabled disabled
             :onClick on-click}
    (h/div
      (h/span (localize data label)))))

(defn submit-button [{:keys [bids] :as data}]
  (command-button
    data
    "submit-button"
    :submit
    (or (tokens-remaining? data) (my-bids-submitted? data))
    #(rm/send-bids bids)))

(defn signup-button [data]
  (command-button
    data
    "signup-button"
    :signup
    (clojure.string/blank? (:player-name data))
    #(rm/send-signup (:player-name data))))

(defn start-game-button [data]
  (command-button
    data
    "start-game-button"
    :start-game
    false
    #(rm/send-start-game)))

(defn bid-board [data]
  (let [{:keys [figures]} data]
    (h/div {:className "bid-board"}
      (h/table
        (h/tr
          (h/td (submit-button data))
          (h/td (bank-denomination data :gold))
          (h/td (bank-denomination data :blackmail))
          (h/td (bank-denomination data :force))
          (h/td)) ; figure description
        (map (partial bid-row data) figures)))))

; (dom/span nil (localize data :guard-house))
; (dom/span nil (:guard-house data)) ; TODO - should only be visible when palace is in setup

(defn name-row [data]
  (h/tr
    (h/th {:colSpan 2} (localize data :player))
    (map #(h/th (:name %)) (:players data))))

(def check-img
  (h/img {:className "check-mark" :src "/img/check_mark.png" :alt "X"}))

(defn ready-row [data]
  (h/tr
    (h/th {:colSpan 2} (localize data :ready))
    (map
      (fn [{pid :id}] (h/td (if (get-in data [:bids-submitted pid]) check-img)))
      (:players data))))

(defn support-row [data]
  (h/tr
    (h/th {:colSpan 2} (localize data :support))
    (map
      (fn [{pid :id}] (h/td (get-in data [:support pid])))
      (:players data))))

(defn bank-row [data denomination]
  (h/tr
    (h/th {:colSpan 2} (localize data denomination))
    (map
      (fn [{pid :id}] (h/td (get-in data [:banks pid denomination])))
      (:players data))))

(defn influence-row [data {:keys [id cap]}]
  (h/tr
    (h/th {:className "location-name"} (localize data id))
    (h/td {:className "influence-cap"} cap)
    (map
      (fn [{pid :id}] (h/td (dont-show-zero (get-in data [:influence id pid]))))
      (:players data))))

(defn score-board [data]
  (h/div {:className "score-board"}
    (h/table
      (name-row data)
      (ready-row data)
      (support-row data)
      (bank-row data :gold)
      (bank-row data :blackmail)
      (bank-row data :force)
      (map (partial influence-row data) (:locations data)))))

(defn player-list [{:keys [players]}]
  (h/ol {:className "player-list"}
    (map (comp h/li :name) players)))

(defn signup-area [data]
  (h/div {:className "signup"}
    (h/div {:className "what-is-your-name"}
      (localize data :what-is-your-name))
    (h/div
      (h/input {:id "signup-input" :onKeyUp #(om/update! data :player-name (.-value (.-target %)))}))
    (h/div (signup-button data))
    (player-list data)))

(defn lobby-area [data]
  (h/div {:className "lobby"}
    (player-list data)
    (start-game-button data)))

(defn spy-select [data]
  (let [selection {:spy-selection data}]
    (h/div
      (h/table
        (h/tr
          (h/td :location)
          (h/td :cap)
          (map #(h/td (:name %)) (:players data)))
        (map
          (fn [{:keys [id cap]}]
            (h/tr
              (h/td id)
              (h/td cap)
              (map
                (fn [p]
                  (let [combo [id (:id p)]
                        selected (= combo selection)]
                    (h/td {:className (if selected "selected")}
                      (h/button {:onClick #(om/update! data :spy-selection combo)}
                        (get-in data [:influence id (:id p)])))))
                (:players data))))
          (:locations data)))
      (h/button
        {:onClick #(om/update! data :spy-selection nil)}
        :clear)
      (if selection
        (h/button
          {:onClick #(apply rm/send-spy selection)}
          :submit)))))

(defn apothecary-select [data]
  (let [selection-1 (:apothecary-selection-1 data)
        selection-2 (:apothecary-selection-2 data)]
    (h/div
      (h/table
        (h/tr
          (h/td :location)
          (h/td :cap)
          (map #(h/td (:name %)) (:players data)))
        (map
          (fn [{:keys [id cap]}]
            (h/tr
              (h/td id)
              (h/td cap)
              (map
                (fn [{pid :id}]
                  (let [combo [id pid]
                        selected (or (= combo selection-1) (= combo selection-2))]
                    (h/td
                      {:className (if selected "selected")}
                      (h/button
                        {:onClick #(if selection-1
                                       (om/update! data :apothecary-selection-2 combo)
                                       (om/update! data :apothecary-selection-1 combo))}
                        (get-in data [:influence id pid])))))
                (:players data))))
          (:locations data)))
      (h/button
        {:onClick #(do (om/update! data :apothecary-selection-1 nil)
                       (om/update! data :apothecary-selection-2 nil))}
        :clear)
      (if (and selection-1 selection-2)
        (h/button
          {:onClick #(apply rm/send-apothecary (concat selection-1 selection-2))}
          :submit)))))

(defn messenger-select [data]
  (let [selection-1 (:messenger-selection-1 data)
        selection-2 (:messenger-selection-2 data)
        reassignments (:messenger-reassignments data)
        any-reassignments (pos? (count reassignments))]
    (h/div
      (h/table
        (h/tr
          (h/td :location)
          (h/td :cap)
          (map #(h/td (:name %)) (:players data)))
        (map
          (fn [{:keys [id cap]}]
            (h/tr
              {:className (if (or (= id selection-1) (= id selection-2)) "selected")}
              (h/td
                (h/button
                  {:onClick #(if selection-1
                                 (om/update! data :messenger-selection-2 id)
                                 (om/update! data :messenger-selection-1 id))
                   :disabled (or (and (not selection-1) (= 0 (get-in data [:influence id "Rob"])))
                                 (and selection-1 (<= cap (reduce + (vals (get-in data [:influence id]))))))}
                  id))
              (h/td cap)
              (map
                (fn [{pid :id}]
                  (h/td (get-in data [:influence id pid])))
                (:players data))))
          (:locations data)))
      (if any-reassignments
        (h/ul
          (map
            (fn [[lid1 lid2]] (h/li [lid1 " -> " lid2])))
            reassignments))
      (h/button
        {:onClick #(do (om/update! data :messenger-reassignments [])
                       (om/update! data :messenger-selection-1 nil)
                       (om/update! data :messenger-selection-2 nil))}
        :clear)
      (if (and selection-1 selection-2 (> 2 (count reassignments)))
        (h/button
          {:onClick #(do (om/transact! data [:messenger-reassignments] (fn [rs] (conj rs [selection-1 selection-2])))
                         (om/update! data :messenger-selection-1 nil)
                         (om/update! data :messenger-selection-2 nil))}
          :add))
      (h/button
        {:onClick #(rm/send-messenger reassignments)}
        :submit))))

(defn mayor-select [data]
  (h/table
    (h/tr
      (h/td :location)
      (h/td :cap)
      (map #(h/td (:name %)) (:players data)))
    (map
      (fn [location]
        (let [disabled (>= (reduce + (vals (get-in data [:influence (:id location)]))) (:cap location))]
          (h/tr
            (h/td
              (h/button
                {:onClick #(rm/send-mayor location)
                 :disabled disabled}
                (:id location)))
            (h/td (:cap location))
            (map
              (fn [{pid :id}]
                (h/td (get-in data [:influence (:id location) pid])))
              (:players data)))))
      (:locations data))))

(defn turn-area [data]
  (h/div {:className "turn"}
    (h/span {:className "turn-label"} (localize data :turn))
    (h/span {:className "turn-value"} (:turn data))))

(defn language-flag [data key]
  (h/img {:src (str "img/flags/" (name key) ".png")
          :title (localize data key)
          :className "language-flag"
          :onClick #(om/update! data :lang key)}))

(defn languages-area [data]
  (h/div {:className "languages"}
    (map #(language-flag data %) languages)))

(defn play-area [& children]
  (h/div {:className "play-area"} (concat children [(clear-div)])))

(defn nav-bar [data]
  (h/nav {:className "nav-bar"}
    (h/div {:className "nav-bar-child-left"}
      (if-not (or (= :signup (:mode data)) (= :lobby (:mode data)))
        (turn-area data)))
    (h/div {:className "nav-bar-child-right"}
      (languages-area data))))

(def title-logo
  (h/div {:className "title-logo"}
    (h/img {:src "/img/logo.png"})))

(defcomponent root-view [data owner]
  (render [_]
    (tag->react
      (h/div
        (nav-bar data)
        title-logo
        (map
          play-area
          (case (:mode data)
            :signup     [(signup-area data)]
            :lobby      [(lobby-area data)]
            :take-bids  [(score-board data)
                         (bid-board data)]
            :game-over  [(score-board data)]
            :spy        [(spy-select data)]
            :apothecary [(apothecary-select data)]
            :messenger  [(messenger-select data)]
            :mayor      [(mayor-select data)])))
      #(if (keyword? %) (localize data %) %))))

(def ws-url
  (let [{:keys [host port]} (url js/window.location)]
    (str "ws://" host ":" port "/ws")))

(defn show-error [error]
  (js/alert
    (str "Couldn't connect to websocket: " (pr-str error) " @ " ws-url)))

(defn send-receive [app-state ws-channel]
  (let [new-msg-ch (doto (chan) (rm/send-msgs! ws-channel))]
    (reset! rm/message-channel new-msg-ch)
    (om/root
      root-view
      app-state
      {:target (. js/document (getElementById "content"))})
    (rm/receive-msgs! app-state ws-channel)))

(defonce app-state
  (atom
    {:lang :english
     :mode :signup
     :players []
     :bids-submitted {}
     :bids {}}))

(set!
  (.-onload js/window)
  (fn []
    (go
      (let [{:keys [ws-channel error]} (<! (ws-ch ws-url))]
        (if error
          (show-error error)
          (send-receive app-state ws-channel))))))
