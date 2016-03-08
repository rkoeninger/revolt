(ns ^:figwheel-always revolt.client
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put! chan <!]]
            [chord.client :refer [ws-ch]]
            [cemerick.url :refer [url]]
            [revolt.core :as r]
            [revolt.lang :refer [languages]]
            [revolt.client.messaging :as rm]))

(enable-console-print!)

(defn localize [data key]
  (or
    (get-in languages [(:lang data) key])
    (do
      (js/console.error (str key " is not in " (:lang data) " dictionary"))
      (str "TRANSLATION MISSING - " (str key)))))

(defn clear-div []
  (dom/div #js {:className "clear"}))

(defn my-bids-submitted? [data]
  (true? (get-in data [:bids-submitted (:player-id data)])))

(defn adjust-bid [data id denomination adj]
  (let [bid-denom-adjusted (+ (get-in data [:bids id denomination]) adj)
        bank-denom-adjusted (- (get-in data [:bank denomination]) adj)]
    (when (and (>= bank-denom-adjusted 0) (>= bid-denom-adjusted 0))
      (om/transact! data [:bank denomination] #(- % adj))
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
    (dom/button
      #js {:disabled disabled
           :className className
           :id (str button-id-prefix "-" id-suffix)
           :onClick #(adjust-bid data id denomination offset)}
      label)))

(defn denomination-input [data id immunities denomination]
  (let [immune (contains? immunities denomination)
        remaining-bank (get-in data [:bank denomination])
        amount (get-in data [:bids id denomination])
        button-id-prefix (clojure.string/join "-" ["bid" (name id) (name denomination)])
        disabled (or immune
                     (my-bids-submitted? data)
                     (and (nothing-on-figure? data id) (figure-limit-reached? data)))
        arrow #(denomination-arrow id %1 data denomination disabled %2 button-id-prefix %3 %4)
        label (dom/input #js {:type "text"
                              :disabled immune
                              :readOnly true
                              :value (dont-show-zero amount)})]
    (dom/td #js {:className (str "denomination-input " (name denomination))}
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
  (dom/tr #js {:className "bid-row"}
    (dom/td
      #js {:className (str "figure-name " (get immunity-class immunities))
           :data-title (figure-description data figure)
           :onClick (fn [] (js/alert (figure-description data figure)))}
      (localize data id))
    (denomination-input data id immunities :gold)
    (denomination-input data id immunities :blackmail)
    (denomination-input data id immunities :force)
    (dom/td #js {:className "figure-description"}
      (figure-description data figure))))

(defn bank-denomination [data denomination]
  (dom/div #js {:className (str "bank-denomination " (name denomination))
                :title (localize data denomination)}
    (dom/span #js {:className (str "bank-amount " (name denomination))}
      (get-in data [:bank denomination]))))

(defn tokens-remaining? [data]
  (r/pos-bid? (:bank data)))

(defn submit-button [{:keys [bids] :as data}]
  (let [disabled (or (tokens-remaining? data)
                     (my-bids-submitted? data))]
    (dom/button
      #js {:className (str "command-button" (if disabled " disabled"))
           :disabled disabled
           :onClick #(rm/send-bids bids)}
      (dom/div nil
        (dom/span nil (localize data :submit))))))

(defcomponent bid-area [data owner]
  (render [_]
    (let [{:keys [figures]} data]
      (dom/div #js {:className "bid"}
        (apply dom/table nil
          (dom/tr nil
            (dom/td nil (submit-button data))
            (dom/td nil (bank-denomination data :gold))
            (dom/td nil (bank-denomination data :blackmail))
            (dom/td nil (bank-denomination data :force))
            (dom/td nil)) ; figure description
          (map (partial bid-row data) figures))))))

(defcomponent map-area [data owner]
  (render [_]
    (dom/div #js {:className "map"}
      ; (dom/span nil (localize data :guard-house))
      ; (dom/span nil (:guard-house data)) ; TODO - should only be visible when palace is in setup
      (apply dom/table nil
        (apply dom/tr nil
          (dom/td nil (localize data :player))
          (map #(dom/td nil (localize data (:id %))) (:locations data)))
        (apply dom/tr nil
          (dom/td nil (localize data :cap))
          (map #(dom/td nil (:cap %)) (:locations data)))
        (map
          (fn [player]
            (apply dom/tr nil
              (dom/td nil player)
              (map
                (fn [location]
                  (dom/td nil (get-in data [:influence (:id location) player])))
                (:locations data))))
          (:players data))))))

(defcomponent support-area [data owner]
  (render [_]
    (dom/div #js {:className "support"}
      (apply dom/table nil
        (dom/tr nil
          (dom/td nil (localize data :player))
          (dom/td nil (localize data :support))
          (dom/td nil (localize data :bids-submitted)))
        (map
          (fn [p]
            (dom/tr nil
              (dom/td nil p)
              (dom/td nil (get-in data [:support p]))
              (dom/td nil (if (get-in data [:bids-submitted p]) (dom/img #js {:className "check-mark" :src "/img/check_mark.png"})))))
          (:players data))))))

(defcomponent turn-area [data owner]
  (render [_]
    (dom/div #js {:className "turn"}
      (dom/span #js {:className "turn-label"} (localize data :turn))
      (dom/span #js {:className "turn-value"} (:turn data)))))

(defn language-flag [data title key]
  (dom/img
    #js {:src (str "img/flags/" (name key) ".png")
         :title title
         :className "language-flag"
         :onClick #(om/update! data :lang key)}))

(defcomponent languages-area [data owner]
  (render [_]
    (dom/div #js {:id "languages"}
      (language-flag data "English" :us)
      (language-flag data "Spanish" :mx)
      (language-flag data "French"  :fr))))

(defn player-list [{:keys [players]}]
  (apply dom/ul #js {:className "player-list"}
    (map (partial dom/li nil) players)))

(defcomponent signup-area [data owner]
  (render [_]
    (dom/div #js {:className "signup"}
      (dom/div #js {:className "what-is-your-name"}
        (localize data :what-is-your-name))
      (dom/div nil
        (dom/input #js {:id "signup-input"
                        :ref "player-name"}))
      (dom/div nil
        (dom/button
          #js {:id "signup-button"
               :onClick
               #(let [player-name (.-value (om/get-node owner "player-name"))]
                  (om/update! data :player-name player-name)
                  (rm/send-signup player-name))}
          (localize data :signup)))
      (player-list data))))

(defcomponent spy-select [data owner]
  (init-state [_]
    {:selection nil})
  (render-state [_ {:keys [selection]}]
    (dom/div nil
      (apply dom/table nil
        (apply dom/tr nil
          (dom/td nil (localize data :location))
          (dom/td nil (localize data :cap))
          (map
            (partial dom/td nil)
            (:players data)))
        (map
          (fn [{:keys [id cap]}]
            (apply dom/tr nil
              (dom/td nil (localize data id))
              (dom/td nil cap)
              (map
                (fn [p]
                  (let [combo [id p]
                        selected (= combo selection)]
                    (dom/td 
                      #js {:className (if selected "selected")}
                      (dom/button
                        #js {:onClick #(om/set-state! owner :selection combo)}
                        (get-in data [:influence id p])))))
                (:players data))))
          (:locations data)))
      (dom/button
        #js {:onClick #(om/set-state! owner :selection nil)}
        (localize data :clear))
      (if selection
        (dom/button
          #js {:onClick #(apply rm/send-spy selection)}
          (localize data :submit))))))

(defcomponent apothecary-select [data owner]
  (init-state [_]
    {:selection-1 nil
     :selection-2 nil})
  (render-state [_ {:keys [selection-1 selection-2]}]
    (dom/div nil
      (apply dom/table nil
        (apply dom/tr nil
          (dom/td nil (localize data :location))
          (dom/td nil (localize data :cap))
          (map
            (partial dom/td nil)
            (:players data)))
        (map
          (fn [{:keys [id cap]}]
            (apply dom/tr nil
              (dom/td nil (localize data id))
              (dom/td nil cap)
              (map
                (fn [p]
                  (let [combo [id p]
                        selected (or (= combo selection-1) (= combo selection-2))]
                    (dom/td
                      #js {:className (if selected "selected")}
                      (dom/button
                        #js {:onClick
                             #(if selection-1
                                (om/set-state! owner :selection-2 combo)
                                (om/set-state! owner :selection-1 combo))}
                        (get-in data [:influence id p])))))
                (:players data))))
          (:locations data)))
      (dom/button
        #js {:onClick
             #(do (om/set-state! owner :selection-1 nil)
                  (om/set-state! owner :selection-2 nil))}
        (localize data :clear))
      (if (and selection-1 selection-2)
        (dom/button
          #js {:onClick #(apply rm/send-apothecary (concat selection-1 selection-2))}
          (localize data :submit))))))

(defcomponent messenger-select [data owner]
  (init-state [_]
    {:selection-1 nil
     :selection-2 nil
     :reassignments []})
  (render-state [_ {:keys [selection-1 selection-2 reassignments]}]
    (let [any-reassignments (pos? (count reassignments))]
      (dom/div nil
        (apply dom/table nil
          (apply dom/tr nil
            (dom/td nil (localize data :location))
            (dom/td nil (localize data :cap))
            (map
              (partial dom/td nil)
              (:players data)))
          (map
            (fn [{:keys [id cap]}]
              (apply dom/tr
                #js {:className (if (or (= id selection-1) (= id selection-2)) "selected")}
                (dom/td nil
                  (dom/button
                    #js {:onClick #(if selection-1
                                       (om/set-state! owner :selection-2 id)
                                       (om/set-state! owner :selection-1 id))
                         :disabled (or (and (not selection-1) (= 0 (get-in data [:influence id "Rob"])))
                                       (and selection-1 (<= cap (reduce + (vals (get-in data [:influence id]))))))}
                    (localize data id)))
                (dom/td nil cap)
                (map
                  (fn [player]
                    (dom/td nil (get-in data [:influence id player])))
                  (:players data))))
            (:locations data)))
        (if any-reassignments
          (apply dom/ul nil
            (map
              (fn [[l1 l2]]
                (dom/li nil
                  (str (localize data l1) " -> " (localize data l2))))
              reassignments)))
        (dom/button
          #js {:onClick #(do (om/set-state! owner :reassignments [])
                             (om/set-state! owner :selection-1 nil)
                             (om/set-state! owner :selection-2 nil))}
          (localize data :clear))
        (if (and selection-1 selection-2 (> 2 (count reassignments)))
          (dom/button
            #js {:onClick #(do (om/update-state! owner :reassignments (fn [rs] (conj rs [selection-1 selection-2])))
                               (om/set-state! owner :selection-1 nil)
                               (om/set-state! owner :selection-2 nil))}
            (localize data :add)))
        (dom/button
            #js {:onClick #(rm/send-messenger reassignments)}
          (localize data :submit))))))

(defcomponent mayor-select [data owner]
  (init-state [_]
    {:selection nil})
  (render-state [_ {:keys [selection]}]
    (apply dom/table nil
      (apply dom/tr nil
        (dom/td nil (localize data :location))
        (dom/td nil (localize data :cap))
        (map
          (partial dom/td nil)
          (:players data)))
      (map
        (fn [location]
          (apply dom/tr nil
            (dom/td nil
              (dom/button
                #js {:onClick #(rm/send-mayor location)
                     :disabled (>= (reduce + (vals (get-in data [:influence (:id location)]))) (:cap location))}
                (localize data (:id location))))
            (dom/td nil (:cap location))
            (map
              (fn [p] (dom/td nil (get-in data [:influence (:id location) p])))
              (:players data))))
        (:locations data)))))

(defcomponent lobby-area [data owner]
  (render [_]
    (dom/div #js {:className "lobby"}
      (player-list data)
      (dom/button
        #js {:id "start-game-button"
             :onClick #(rm/send-start-game)}
        (localize data :start-game)))))

(defcomponent root-view [data owner]
  (render [_]
    (dom/div nil
      (dom/nav #js {:id "nav-bar"}
        (om/build languages-area data))
      (dom/div #js {:id "title-logo"}
        (dom/img #js {:src "/img/logo.png"}))
      (apply dom/div #js {:id "play-area"}
        (case (:mode data)
          :signup     [(om/build signup-area data)]
          :lobby      [(om/build lobby-area data)]
          :take-bids  [(om/build turn-area data)
                       (om/build support-area data)
                       (om/build map-area data)
                       (om/build bid-area data)
                       (clear-div)]
          :game-over  [(om/build turn-area data)
                       (om/build support-area data)
                       (om/build map-area data)]
          :spy        [(om/build spy-select data)]
          :apothecary [(om/build apothecary-select data)]
          :messenger  [(om/build messenger-select data)]
          :mayor      [(om/build mayor-select data)])))))

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
    {:lang :us
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
