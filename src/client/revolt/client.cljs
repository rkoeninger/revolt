(ns ^:figwheel-always revolt.client
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.string :refer [join blank?]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put! chan <!]]
            [chord.client :refer [ws-ch]]
            [cemerick.url :refer [url]]
            [hyjinks.core :as h]
            [hyjinks.react :refer [tag->react]]
            [revolt.core :refer [each] :as r]
            [revolt.client.lang :refer [dictionary languages]]
            [revolt.client.messaging :as rm]))

(enable-console-print!)

(defn localize [data key]
  (if key
    (or
      (get-in dictionary [(:lang data) key])
      (do
        (js/console.error (str key " is not in " (:lang data) " dictionary"))
        (str "TRANSLATION MISSING - " (str key))))))

(def check-mark
  (h/img {:class "check-mark" :src "/img/check_mark.png" :alt "X"}))

(defn my-bids-submitted? [data]
  (true? (get-in data [:bids-submitted (:player-id data)])))

(defn dont-show-zero [x]
  (if (zero? x) "" x))

(defn sjoin [sep & xs]
  (join sep (filter identity xs)))

(defn spjoin [& xs]
  (apply sjoin " " xs))

(defn nothing-on-figure? [data id]
  (not (r/pos-bid? (get-in data [:bids id]))))

(defn figure-limit-reached? [data]
  (>= (count (filter r/pos-bid? (vals (:bids data)))) 6))

(defn tokens-remaining? [data]
  (r/pos-bid? (:remaining-bank data)))

(defn adjust-bid [data id denomination adj]
  (let [bid-denom-adjusted (+ (get-in data [:bids id denomination]) adj)
        bank-denom-adjusted (- (get-in data [:remaining-bank denomination]) adj)]
    (when (and (>= bank-denom-adjusted 0) (>= bid-denom-adjusted 0))
      (om/transact! data [:remaining-bank denomination] #(- % adj))
      (om/transact! data [:bids id denomination] #(+ % adj)))))

(defn denomination-input [data id immunities denomination]
  (h/td {:class ["denomination-input" (name denomination)]}
    (if-not (contains? immunities denomination)
      (let [submitted (my-bids-submitted? data)
            remaining-bank (get-in data [:remaining-bank denomination])
            amount (get-in data [:bids id denomination])
            disabled (or submitted (and (nothing-on-figure? data id) (figure-limit-reached? data)))
            up-disabled (or disabled (zero? remaining-bank))
            down-disabled (or disabled (zero? amount))]
        [(h/button "\u2191"
          {:disabled up-disabled
           :class ["adjust" (if up-disabled "disabled" "enabled") (if submitted "invisible")]
           :id (sjoin "-" "bid" (name id) (name denomination) "up")
           :onClick #(adjust-bid data id denomination 1)})
        (h/input
          {:type "text"
           :readOnly true
           :value (dont-show-zero amount)})
        (h/button "\u2193"
          {:disabled down-disabled
           :class ["adjust" (if down-disabled "disabled" "enabled") (if submitted "invisible")]
           :id (sjoin "-" "bid" (name id) (name denomination) "down")
           :onClick #(adjust-bid data id denomination -1)})]))))

(def immunity-class
  {#{}                  "immunity-none"
   #{:blackmail}        "immunity-blackmail"
   #{:force}            "immunity-force"
   #{:blackmail :force} "immunity-both"})

(def immunity-keys
  {#{}                  nil
   #{:blackmail}        :immune-to-blackmail
   #{:force}            :immune-to-force
   #{:blackmail :force} :immune-to-both})

(defn denom [data bank d]
  (let [dval (get bank d)]
    (if (and dval (pos? dval))
      (spjoin dval (localize data d)))))

(defn figure-description [data {:keys [support bank immunities location-id special-id]}]
  (let [segments [(if (and support (pos? support))
                    (spjoin support (localize data :support)))
                  (denom data bank :gold)
                  (denom data bank :blackmail)
                  (denom data bank :force)
                  (localize data location-id)
                  (localize data (get immunity-keys immunities))
                  (localize data special-id)]]
    (->> segments
      (filter identity)
      (flatten)
      (interpose ", ")
      (apply sjoin ""))))

(defn bid-row [data {:keys [id immunities] :as figure}]
  (h/tr {:class "bid-row"}
    (h/td id
      {:class ["figure-name" (get immunity-class immunities)]
       :data-title (figure-description data figure)
       :onClick #(js/alert (figure-description data figure))})
    (denomination-input data id immunities :gold)
    (denomination-input data id immunities :blackmail)
    (denomination-input data id immunities :force)
    (h/td {:class "figure-description"}
      (figure-description data figure))))

(defn bank-denomination [data denomination]
  (h/div {:class ["bank-denomination" (name denomination)]
          :title (localize data denomination)}
    (h/span {:class ["bank-amount" (name denomination)]}
      (get-in data [:remaining-bank denomination]))))

; TODO: invert the `disabled` parameter
(defn command-button [data id label disabled on-click]
  (h/button (h/div (h/span label))
    {:id id
     :class ["command-button" (if disabled "disabled")]
     :disabled disabled
     :onClick on-click}))

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
    (blank? (:player-name data))
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
    (h/div {:class "bid-board"}
      (h/table
        (h/tbody
          (h/tr
            (h/td (submit-button data))
            (h/td (bank-denomination data :gold))
            (h/td (bank-denomination data :blackmail))
            (h/td (bank-denomination data :force))
            (h/td)) ; figure description
          (map (partial bid-row data) figures))))))

(defn name-row [data]
  (h/tr
    (h/th {:colSpan 2} :player)
    (map (comp h/th :name) (:players data))))

(defn ready-row [data]
  (h/tr
    (h/th {:colSpan 2} :ready)
    (each (:players data)
      (fn [{pid :id}] (h/td (if (get-in data [:bids-submitted pid]) check-mark))))))

(defn support-row [data]
  (h/tr
    (h/th {:colSpan 2} :support)
    (each (:players data)
      (fn [{pid :id}] (h/td (get-in data [:support pid]))))))

(defn bank-row [data denomination]
  (h/tr
    (h/th {:colSpan 2} denomination)
    (each (:players data)
      (fn [{pid :id}] (h/td (get-in data [:banks pid denomination]))))))

(defn guard-house-row [data]
  (let [guard-house (:guard-house data)]
    (if (= :palace (:expansion data))
      (h/tr
        (h/th {:colSpan 2} :guard-house)
        (each (:players data)
          #(if (= guard-house (:id %)) check-mark))))))

(defn influence-row-template [data f {:keys [id cap]}]
  (h/tr
    (h/th {:class "location-name"} id)
    (h/td {:class "influence-cap"} cap)
    (each (:players data)
      (fn [{pid :id}] (h/td (f id pid))))))

(defn influence-rows-template [data f]
  (each (:locations data)
    (partial influence-row-template data f)))

(defn influence-row [data location]
  (influence-row-template
    data
    (fn [lid pid]
      (dont-show-zero (get-in data [:influence lid pid])))
    location))

(defn influence-rows [data]
  (influence-rows-template
    data
    (fn [lid pid]
      (dont-show-zero (get-in data [:influence lid pid])))))

(defn score-board [data]
  (h/div {:class "score-board"}
    (h/table
      (h/tbody
        (name-row data)
        (ready-row data)
        (support-row data)
        (bank-row data :gold)
        (bank-row data :blackmail)
        (bank-row data :force)
        (guard-house-row data)
        (influence-rows data)))))

(defn spy-select [data]
  (let [selection (:spy-selection data)
        guard-house-occupant (:guard-house data)]
    (h/div {:class "score-board"}
      (h/table
        (h/tbody
          (name-row data)
          (support-row data)
          (guard-house-row data)
          (influence-rows-template
            data
            (fn [lid pid]
              (let [amount (get-in data [:influence lid pid])
                    selected (= [lid pid] selection)]
                (if (and (pos? amount) (not= pid guard-house-occupant))
                  (h/button amount
                    {:onClick #(om/update! data :spy-selection [lid pid])
                     :class (if selected "selected")}))))))))))

(defn spy-buttons [data]
  (let [selection (:spy-selection data)]
    [(command-button
      data
      "spy-submit-button"
      :submit
      (nil? selection)
      #(when selection
        (apply rm/send-spy selection)
        (om/update! data :spy-selection nil)))
    (command-button
      data
      "spy-clear-button"
      :clear
      (nil? selection)
      #(om/update! data :spy-selection nil))]))

(defn apothecary-select [data]
  (let [selection-1 (:apothecary-selection-1 data)
        selection-2 (:apothecary-selection-2 data)
        guard-house-occupant (:guard-house data)]
    (h/div {:class "score-board"}
      (h/table
        (h/tbody
          (name-row data)
          (support-row data)
          (guard-house-row data)
          (influence-rows-template
            data
            (fn [lid pid]
              (let [amount (get-in data [:influence lid pid])
                    selected (or (= selection-1 [lid pid]) (= selection-2 [lid pid]))]
                (if (and (pos? amount) (not= pid guard-house-occupant))
                  (h/button amount
                    {:class (if selected "selected")
                     :onClick #(if selection-1
                                  (om/update! data :apothecary-selection-2 [lid pid])
                                  (om/update! data :apothecary-selection-1 [lid pid]))}))))))))))

(defn apothecary-buttons [data]
  (let [selection-1 (:apothecary-selection-1 data)
        selection-2 (:apothecary-selection-2 data)]
    [(command-button
      data
      "apothecary-submit-button"
      :submit
      (not (and selection-1 selection-2))
      #(when (and selection-1 selection-2)
        (apply rm/send-apothecary (concat selection-1 selection-2))
        (om/update! data :apothecary-selection-1 nil)
        (om/update! data :apothecary-selection-2 nil)))
    (command-button
      data
      "apothecary-clear-button"
      :clear
      (not (or selection-1 selection-2))
      #(do
        (om/update! data :apothecary-selection-1 nil)
        (om/update! data :apothecary-selection-2 nil)))]))

(defn messenger-select [data]
  (let [reassignments (:messenger-reassignments data)
        selection-1 (:messenger-selection-1 data)
        selection-2 (:messenger-selection-2 data)]
    (h/div {:class "score-board"}
      (h/table
        (h/tbody
          (name-row data)
          (support-row data)
          (each (:locations data)
            (fn [{lid :id cap :cap}]
              (let [selected (or (= lid selection-1) (= lid selection-2))
                    total-influence (reduce + (vals (get-in data [:influence lid])))]
                (h/tr
                  (h/th {:class "location-name"}
                    (cond
                      selected (h/span {:class "selected"} lid)

                      ; max reassignments made
                      (>= (count reassignments) 2) lid

                      ; selecting origin
                      (and (not selection-1) (not selection-2))

                      (if (zero? total-influence)
                        lid
                        (h/button lid
                          {:onClick #(do (om/update! data :messenger-selection-1 lid))}))

                      ; selecting destination
                      (and selection-1 (not selection-2))

                      (if (= cap total-influence)
                        lid
                        (h/button lid
                          {:onClick #(do (om/update! data :messenger-selection-2 lid))}))

                      ; pending add
                      :else lid))
                  (h/td {:class "influence-cap"} cap)
                  (each (:players data)
                    (fn [{pid :id}] (h/td (dont-show-zero (get-in data [:influence lid pid]))))))))))))))

(defn messenger-buttons [data]
  (let [reassignments (:messenger-reassignments data)
        selection-1 (:messenger-selection-1 data)
        selection-2 (:messenger-selection-2 data)]
    [(if (pos? (count reassignments))
      (h/ul
        (each reassignments
          (fn [[lid1 lid2]]
            (h/li
              [(h/span {:class "location-name"} lid1)
               " → "
               (h/span {:class "location-name"} lid2)])))))
    (command-button
      data
      "messenger-submit-button"
      :submit
      false
      #(do
        (rm/send-messenger reassignments)
        (om/update! data :messenger-reassignments nil)
        (om/update! data :messenger-selection-1 nil)
        (om/update! data :messenger-selection-2 nil)))
    (command-button
      data
      "messenger-add-button"
      :add
      (not (and selection-1 selection-2))
      #(do
        (om/update! data :messenger-reassignments (conj reassignments [selection-1 selection-2]))
        (om/update! data :messenger-selection-1 nil)
        (om/update! data :messenger-selection-2 nil)))
    (command-button
      data
      "messenger-clear-button"
      :clear
      (zero? (count reassignments))
      #(do
        (om/update! data :messenger-reassignments nil)
        (om/update! data :messenger-selection-1 nil)
        (om/update! data :messenger-selection-2 nil)))]))

(defn mayor-select [data]
  (let [selection (:mayor-selection data)]
    (h/div {:class "score-board"}
      (h/table
        (h/tbody
          (name-row data)
          (support-row data)
          (each (:locations data)
            (fn [{lid :id cap :cap}]
              (let [selected (= selection lid)
                    capped (= cap (reduce + (vals (get-in data [:influence lid]))))]
                (h/tr
                  (h/th {:class "location-name"}
                    (if capped
                      lid
                      (h/button
                        {:class (if selected "selected")
                         :onClick #(om/update! data :mayor-selection lid)}
                        lid)))
                  (h/td {:class "influence-cap"} cap)
                  (each (:players data)
                    (fn [{pid :id}] (h/td (dont-show-zero (get-in data [:influence lid pid]))))))))))))))

(defn mayor-buttons [data]
  (let [selection (:mayor-selection data)]
    [(command-button
      data
      "mayor-submit-button"
      :submit
      (nil? selection)
      #(when selection
        (rm/send-mayor selection)
        (om/update! data :mayor-selection nil)))
    (command-button
      data
      "mayor-clear-button"
      :clear
      (nil? selection)
      #(om/update! data :mayor-selection nil))]))

(defn player-list [{:keys [players]}]
  (h/ol {:class "player-list"}
    (map (comp h/li :name) players)))

(defn signup-area [data]
  (h/div {:class "signup"}
    (h/div {:class "what-is-your-name"}
      :what-is-your-name)
    (h/div
      (h/input
        {:id "signup-input"
         :onKeyUp #(om/update! data :player-name (.-value (.-target %)))}))
    (h/div (signup-button data))
    (player-list data)))

(defn lobby-area [data]
  (h/div {:class "lobby"}
    (player-list data)
    (start-game-button data)))

(defn turn-area [data]
  (h/div {:class "turn"}
    (h/span {:class "turn-label"} :turn)
    (h/span {:class "turn-value"} (:turn data))))

(defn language-flag [data key]
  (h/img {:src (str "img/flags/" (name key) ".png")
          :title (localize data key)
          :class "language-flag"
          :onClick #(om/update! data :lang key)}))

(defn languages-area [data]
  (h/div {:class "languages"}
    (map (partial language-flag data) languages)))

(defn main-area [& children]
  (h/div {:class "main-area"} children))

(defn play-area [& children]
  (h/div {:class "play-area"} children))

(defn nav-bar [data]
  (h/nav {:class "nav-bar"}
    (h/div {:class "nav-bar-child-left"}
      (if-not (or (= :signup (:mode data)) (= :lobby (:mode data)))
        (turn-area data)))
    (h/div {:class "nav-bar-child-right"}
      (languages-area data))))

(def title-logo
  (h/div {:class "title-logo"}
    (h/img {:src "/img/logo.png"})))

(defn translate [data value]
  (if (keyword? value) (localize data value) value))

(defcomponent root-view [data owner]
  (render [_]
    (tag->react
      {:transform-content #(translate data %)
       :transform-attr #(translate data %2)}
      (h/div
        (nav-bar data)
        title-logo
        (main-area
          (map
            play-area
            (case (:mode data)
              :signup     [(signup-area data)]
              :lobby      [(lobby-area data)]
              :take-bids  [(score-board data)
                           (bid-board data)]
              :game-over  [(score-board data)]
              :spy        [(spy-select data)
                           (spy-buttons data)]
              :apothecary [(apothecary-select data)
                           (apothecary-buttons data)]
              :messenger  [(messenger-select data)
                           (messenger-buttons data)]
              :mayor      [(mayor-select data)
                           (mayor-buttons data)])))))))

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
