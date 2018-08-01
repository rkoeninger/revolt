(ns revolt.client
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.string :refer [join blank?]]
            [reagent.core :as re]
            [cljs.core.async :refer [put! chan <!]]
            [chord.client :refer [ws-ch]]
            [cemerick.url :refer [url]]
            [hyjinks.core :as h]
            [hyjinks.react :refer [tag->react]]
            [revolt.core :refer [each reset-in! swap-in!] :as r]
            [revolt.client.lang :refer [dictionary languages]]
            [revolt.client.messaging :as rm]))

(enable-console-print!)

(defonce state
  (re/atom
    {:lang :english
     :mode :signup
     :players []
     :bids-submitted {}
     :bids {}}))

(defn localize [key]
  (if key
    (or
      (get-in dictionary [(:lang @state) key])
      (do
        (js/console.error (str key " is not in " (:lang @state) " dictionary"))
        (str "TRANSLATION MISSING - " (str key))))))

(def check-mark
  (h/img {:class "check-mark" :src "/img/check_mark.png" :alt "X"}))

(defn my-bids-submitted? []
  (true? (get-in @state [:bids-submitted (:player-id @state)])))

(defn dont-show-zero [x]
  (if (zero? x) "" x))

(defn sjoin [sep & xs]
  (join sep (filter identity xs)))

(defn spjoin [& xs]
  (apply sjoin " " xs))

(defn nothing-on-figure? [id]
  (not (r/pos-bid? (get-in @state [:bids id]))))

(defn figure-limit-reached? []
  (>= (count (filter r/pos-bid? (vals (:bids @state)))) 6))

(defn tokens-remaining? []
  (r/pos-bid? (:remaining-bank @state)))

(defn adjust-bid [id denomination adj]
  (let [bid-denom-adjusted (+ (get-in @state [:bids id denomination]) adj)
        bank-denom-adjusted (- (get-in @state [:remaining-bank denomination]) adj)]
    (when (and (>= bank-denom-adjusted 0) (>= bid-denom-adjusted 0))
      (swap! state
        (fn [s] (-> s
          (update-in [:remaining-bank denomination] #(- % adj))
          (update-in [:bids id denomination] #(+ % adj))))))))

(defn denomination-input [id immunities denomination]
  (h/td {:class ["denomination-input" (name denomination)]}
    (if-not (contains? immunities denomination)
      (let [submitted (my-bids-submitted?)
            remaining-bank (get-in @state [:remaining-bank denomination])
            amount (get-in @state [:bids id denomination])
            disabled (or submitted (and (nothing-on-figure? id) (figure-limit-reached?)))
            up-disabled (or disabled (zero? remaining-bank))
            down-disabled (or disabled (zero? amount))]
        [(h/button "\u2191"
          {:disabled up-disabled
           :class ["adjust" (if up-disabled "disabled" "enabled") (if submitted "invisible")]
           :id (sjoin "-" "bid" (name id) (name denomination) "up")
           :onClick #(adjust-bid id denomination 1)})
         (h/input
          {:type "text"
           :readOnly true
           :value (dont-show-zero amount)
           :onChange #()})
         (h/button "\u2193"
          {:disabled down-disabled
           :class ["adjust" (if down-disabled "disabled" "enabled") (if submitted "invisible")]
           :id (sjoin "-" "bid" (name id) (name denomination) "down")
           :onClick #(adjust-bid id denomination -1)})]))))

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

(defn denom [bank denomination]
  (let [amount (get bank denomination)]
    (if (and amount (pos? amount))
      (spjoin amount (localize denomination)))))

(defn figure-description [{:keys [support bank immunities location-id special-id]}]
  (->> [(if (and support (pos? support))
          (spjoin support (localize :support)))
        (denom bank :gold)
        (denom bank :blackmail)
        (denom bank :force)
        (localize location-id)
        (localize (get immunity-keys immunities))
        (localize special-id)]
    (filter identity)
    (flatten)
    (interpose ", ")
    (apply sjoin "")))

(defn bid-row [{:keys [id immunities] :as figure}]
  (h/tr {:class "bid-row"}
    (h/td (localize id)
      {:class ["figure-name" (get immunity-class immunities)]
       :data-title (figure-description figure)
       :onClick #(js/alert (figure-description figure))})
    (denomination-input id immunities :gold)
    (denomination-input id immunities :blackmail)
    (denomination-input id immunities :force)
    (h/td {:class "figure-description"}
      (figure-description figure))))

(defn bank-denomination [denomination]
  (h/div {:class ["bank-denomination" (name denomination)]
          :title (localize denomination)}
    (h/span {:class ["bank-amount" (name denomination)]}
      (get-in @state [:remaining-bank denomination]))))

; TODO: invert the `disabled` parameter
(defn command-button [id label disabled on-click]
  (h/button (h/div (h/span label))
   {:id id
    :class ["command-button" (if disabled "disabled")]
    :disabled disabled
    :onClick on-click}))

(defn submit-button []
  (command-button
    "submit-button"
    (localize :submit)
    (or (tokens-remaining?) (my-bids-submitted?))
    #(rm/send-bids (:bids @state))))

(defn signup-button []
  (command-button
    "signup-button"
    (localize :signup)
    (blank? (:player-name @state))
    #(rm/send-signup (:player-name @state))))

(defn start-game-button []
  (command-button
    "start-game-button"
    (localize :start-game)
    false
    #(rm/send-start-game)))

(defn reset-button []
  (command-button
    "reset-button"
    (localize :reset)
    false
    #(rm/send-reset)))

(defn bid-board []
  (h/div {:class "bid-board"}
    (h/table
      (h/tbody
        (h/tr
          (h/td (submit-button))
          (h/td (bank-denomination :gold))
          (h/td (bank-denomination :blackmail))
          (h/td (bank-denomination :force))
          (h/td)) ; figure description
        (map bid-row (:figures @state))))))

(defn name-row []
  (h/tr
    (h/th {:colSpan 2} (localize :player))
    (map (comp h/th :name) (:players @state))))

(defn ready-row []
  (h/tr
    (h/th {:colSpan 2} (localize :ready))
    (each (:players @state)
      (fn [{pid :id}] (h/td (if (get-in @state [:bids-submitted pid]) check-mark))))))

(defn support-row []
  (h/tr
    (h/th {:colSpan 2} (localize :support))
    (each (:players @state)
      (fn [{pid :id}] (h/td (get-in @state [:support pid]))))))

(defn bank-row [denomination]
  (h/tr
    (h/th {:colSpan 2} (localize denomination))
    (each (:players @state)
      (fn [{pid :id}] (h/td (get-in @state [:banks pid denomination]))))))

(defn guard-house-row []
  (let [guard-house (:guard-house @state)]
    (if (= :palace (:expansion @state))
      (h/tr
        (h/th {:colSpan 2} (localize :guard-house))
        (each (:players @state)
          #(if (= guard-house (:id %)) check-mark))))))

(defn influence-row-template [f {:keys [id cap]}]
  (h/tr
    (h/th {:class "location-name"} (localize id))
    (h/td {:class "influence-cap"} cap)
    (each (:players @state)
      (fn [{pid :id}] (h/td (f id pid))))))

(defn influence-rows-template [f]
  (each (:locations @state)
    (partial influence-row-template f)))

; TODO: remove unused function
(defn influence-row [location]
  (influence-row-template
    (fn [lid pid]
      (dont-show-zero (get-in @state [:influence lid pid])))
    location))

(defn influence-rows []
  (influence-rows-template
    (fn [lid pid]
      (dont-show-zero (get-in @state [:influence lid pid])))))

(defn score-board []
  (h/div {:class "score-board"}
    (h/table
      (h/tbody
        (name-row)
        (ready-row)
        (support-row)
        (bank-row :gold)
        (bank-row :blackmail)
        (bank-row :force)
        (guard-house-row)
        (influence-rows)))))

(defn spy-select []
  (let [selection (:spy-selection @state)
        guard-house-occupant (:guard-house @state)]
    (h/div {:class "score-board"}
      (h/table
        (h/tbody
          (name-row)
          (support-row)
          (guard-house-row)
          (influence-rows-template
            (fn [lid pid]
              (let [amount (get-in @state [:influence lid pid])
                    selected (= [lid pid] selection)]
                (if (and (pos? amount) (not= pid guard-house-occupant))
                  (h/button amount
                    {:onClick #(reset-in! state [:spy-selection] [lid pid])
                     :class (if selected "selected")}))))))))))

(defn spy-buttons []
  (let [selection (:spy-selection @state)]
    [(command-button
      "spy-submit-button"
      (localize :submit)
      (nil? selection)
      #(when selection
        (apply rm/send-spy selection)
        (reset-in! state [:spy-selection] nil)))
     (command-button
      "spy-clear-button"
      (localize :clear)
      (nil? selection)
      #(reset-in! state [:spy-selection] nil))]))

(defn apothecary-select []
  (let [selection-1 (:apothecary-selection-1 @state)
        selection-2 (:apothecary-selection-2 @state)
        guard-house-occupant (:guard-house @state)]
    (h/div {:class "score-board"}
      (h/table
        (h/tbody
          (name-row)
          (support-row)
          (guard-house-row)
          (influence-rows-template
            (fn [lid pid]
              (let [amount (get-in @state [:influence lid pid])
                    selected (or (= selection-1 [lid pid]) (= selection-2 [lid pid]))]
                (if (and (pos? amount) (not= pid guard-house-occupant))
                  (h/button amount
                    {:class (if selected "selected")
                     :onClick #(if selection-1
                                  (reset-in! state [:apothecary-selection-2] [lid pid])
                                  (reset-in! state [:apothecary-selection-1] [lid pid]))}))))))))))

(defn apothecary-buttons []
  (let [selection-1 (:apothecary-selection-1 @state)
        selection-2 (:apothecary-selection-2 @state)]
    [(command-button
      "apothecary-submit-button"
      (localize :submit)
      (not (and selection-1 selection-2))
      #(when (and selection-1 selection-2)
        (apply rm/send-apothecary (concat selection-1 selection-2))
        (reset-in! state [:apothecary-selection-1] nil)
        (reset-in! state [:apothecary-selection-2] nil)))
     (command-button
      "apothecary-clear-button"
      (localize :clear)
      (not (or selection-1 selection-2))
      #(do
        (reset-in! state [:apothecary-selection-1] nil)
        (reset-in! state [:apothecary-selection-2] nil)))]))

(defn messenger-select []
  (let [reassignments (:messenger-reassignments @state)
        selection-1 (:messenger-selection-1 @state)
        selection-2 (:messenger-selection-2 @state)]
    (h/div {:class "score-board"}
      (h/table
        (h/tbody
          (name-row)
          (support-row)
          (each (:locations @state)
            (fn [{lid :id cap :cap}]
              (let [selected (or (= lid selection-1) (= lid selection-2))
                    total-influence (reduce + (vals (get-in @state [:influence lid])))]
                (h/tr
                  (h/th {:class "location-name"}
                    (cond
                      selected (h/span {:class "selected"} (localize lid))

                      ; max reassignments made
                      (>= (count reassignments) 2) (localize lid)

                      ; selecting origin
                      (and (not selection-1) (not selection-2))

                      (if (zero? total-influence)
                        (localize lid)
                        (h/button (localize lid)
                          {:onClick #(do (reset-in! state [:messenger-selection-1] lid))}))

                      ; selecting destination
                      (and selection-1 (not selection-2))

                      (if (= cap total-influence)
                        (localize lid)
                        (h/button (localize lid)
                          {:onClick #(do (reset-in! state [:messenger-selection-2] lid))}))

                      ; pending add
                      :else (localize lid)))
                  (h/td {:class "influence-cap"} cap)
                  (each (:players @state)
                    (fn [{pid :id}] (h/td (dont-show-zero (get-in @state [:influence lid pid]))))))))))))))

(defn messenger-buttons []
  (let [reassignments (:messenger-reassignments @state)
        selection-1 (:messenger-selection-1 @state)
        selection-2 (:messenger-selection-2 @state)]
    [(if (pos? (count reassignments))
      (h/ul
        (each reassignments
          (fn [[lid1 lid2]]
            (h/li
              [(h/span {:class "location-name"} (localize lid1))
               " → "
               (h/span {:class "location-name"} (localize lid2))])))))
     (command-button
      "messenger-submit-button"
      (localize :submit)
      false
      #(do
        (rm/send-messenger reassignments)
        (reset-in! state [:messenger-reassignments] nil)
        (reset-in! state [:messenger-selection-1] nil)
        (reset-in! state [:messenger-selection-2] nil)))
     (command-button
      "messenger-add-button"
      (localize :add)
      (not (and selection-1 selection-2))
      #(do
        (reset-in! state [:messenger-reassignments] (conj reassignments [selection-1 selection-2]))
        (reset-in! state [:messenger-selection-1] nil)
        (reset-in! state [:messenger-selection-2] nil)))
     (command-button
      "messenger-clear-button"
      (localize :clear)
      (zero? (count reassignments))
      #(do
        (reset-in! state [:messenger-reassignments] nil)
        (reset-in! state [:messenger-selection-1] nil)
        (reset-in! state [:messenger-selection-2] nil)))]))

(defn mayor-select []
  (let [selection (:mayor-selection @state)]
    (h/div {:class "score-board"}
      (h/table
        (h/tbody
          (name-row)
          (support-row)
          (each (:locations @state)
            (fn [{lid :id cap :cap}]
              (let [selected (= selection lid)
                    capped (= cap (reduce + (vals (get-in @state [:influence lid]))))]
                (h/tr
                  (h/th {:class "location-name"}
                    (if capped
                      lid
                      (h/button
                        {:class (if selected "selected")
                         :onClick #(reset-in! state [:mayor-selection] lid)}
                        (localize lid))))
                  (h/td {:class "influence-cap"} (localize cap))
                  (each (:players @state)
                    (fn [{pid :id}] (h/td (dont-show-zero (get-in @state [:influence lid pid]))))))))))))))

(defn mayor-buttons []
  (let [selection (:mayor-selection @state)]
    [(command-button
      "mayor-submit-button"
      (localize :submit)
      (nil? selection)
      #(when selection
        (rm/send-mayor selection)
        (reset-in! state [:mayor-selection] nil)))
     (command-button
      "mayor-clear-button"
      (localize :clear)
      (nil? selection)
      #(reset-in! state [:mayor-selection] nil))]))

(defn player-list []
  (h/ol {:class "player-list"}
    (map (comp h/li :name) {:players @state})))

(defn signup-area []
  (h/div {:class "signup"}
    (h/div {:class "what-is-your-name"}
      (localize :what-is-your-name))
    (h/div
      (h/input
        {:id "signup-input"
         :onKeyUp #(reset-in! state [:player-name] (.-value (.-target %)))}))
    (h/div (signup-button))
    (player-list)))

(defn lobby-area []
  (h/div {:class "lobby"}
    (player-list)
    (start-game-button)))

(defn turn-area []
  (h/div {:class "turn"}
    (h/span {:class "turn-label"} (localize :turn))
    (h/span {:class "turn-value"} (:turn @state))))

(defn language-flag [lang]
  (h/img
   {:src (str "img/flags/" (name lang) ".png")
    :title (localize lang)
    :class "language-flag"
    :onClick #(reset-in! state [:lang] lang)}))

(defn languages-area []
  (h/div {:class "languages"}
    (map language-flag languages)))

(defn main-area [& children]
  (h/div {:class "main-area"} children))

(defn play-area [& children]
  (h/div {:class "play-area"} children))

(defn nav-bar []
  (h/nav {:class "nav-bar"}
    (h/div {:class "nav-bar-child-left"}
      (let [{:keys [mode]} @state]
        (if-not (or (= :signup mode) (= :lobby mode))
          (turn-area))))
    (h/div {:class "nav-bar-child-right"}
      (languages-area))))

(def title-logo
  (h/div {:class "title-logo"}
    (h/img {:src "/img/logo.png"})))

(defn root-view []
  (tag->react
    (h/div
      (nav-bar)
      title-logo
      (main-area
        (map
          play-area
          (case (:mode @state)
            :signup     [(signup-area)]
            :lobby      [(lobby-area)]
            :take-bids  [(score-board)
                         (bid-board)]
            :game-over  [(score-board)]
            :spy        [(spy-select)
                         (spy-buttons)]
            :apothecary [(apothecary-select)
                         (apothecary-buttons)]
            :messenger  [(messenger-select)
                         (messenger-buttons)]
            :mayor      [(mayor-select)
                         (mayor-buttons)])))
      (reset-button))))

(def ws-url
  (let [{:keys [host port]} (url js/window.location)]
    (str "ws://" host ":" port "/ws")))

(defn show-error [error]
  (js/alert
    (str "Couldn't connect to websocket: " (pr-str error) " @ " ws-url)))

(defn send-receive [state ws-channel]
  (let [message-channel (doto (chan) (rm/send-messages! ws-channel))]
    (reset! rm/message-channel message-channel)
    (re/render
      [root-view]
      (. js/document (getElementById "content")))
    (rm/receive-messages! state ws-channel)))

(set!
  (.-onload js/window)
  (fn []
    (go
      (let [{:keys [ws-channel error]} (<! (ws-ch ws-url))]
        (if error
          (show-error error)
          (send-receive state ws-channel))))))
