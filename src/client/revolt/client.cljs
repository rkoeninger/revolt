(ns ^:figwheel-always revolt.client
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [chord.client :refer [ws-ch]]
            [cemerick.url :refer [url]]
            [revolt.core :as r]
            [revolt.lang :refer [languages]]))

(enable-console-print!)

(defn localize [data key]
  (or
    (get-in languages [(:lang data) key])
    (do
      (js/console.error (str key " is not in " (:lang data) " dictionary"))
      (str "TRANSLATION MISSING - " (str key)))))

(defonce message-channel (atom nil))

(defn send-signup [player-id]
  (put! @message-channel
    {:player-id player-id
     :content {:type :signup}}))

(defn send-start-game [player-id]
  (put! @message-channel
    {:player-id player-id
     :content {:type :start-game}}))

(defn send-bids [player-id bids]
  (put! @message-channel
    {:player-id player-id
     :content {:type :submit-bids
               :bids bids}}))

(defn send-spy [player-id location-id target-id]
  (put! @message-channel
    {:type :steal-spot
     :player-id player-id
     :content {:location location-id
               :player target-id}}))

(defn send-apothecary [player-id location0-id target0-id location1-id target1-id]
  (put! @message-channel
    {:type :swap-spots
     :player-id player-id
     :content {:location0 location0-id
               :player0 target0-id
               :location1 location1-id
               :player1 target1-id}}))

(defn send-messenger [player-id reassignments]
  (put! @message-channel
    {:type :reassign-spots
     :player-id player-id
     :content {:reassignments reassignments}}))

(defn send-mayor [player-id location-id]
  (put! @message-channel
    {:type :take-open-spot
     :player-id player-id
     :content {:location location-id}}))

(defn send-msgs! [new-msg-ch server-ch]
  (go-loop []
    ; forever repeatedly pipe messages from message-channel to websocket
    (when-let [msg (<! new-msg-ch)]
      (println "sending message...")
      (println msg)
      (>! server-ch msg)
      (recur))))

(defn receive-msgs! [app-state server-ch]
  (go-loop []
    (when-let [{:keys [message] :as raw} (<! server-ch)]
      (case (:type message)
        :signup (do
          (swap! app-state update-in [:players] #(conj % (:player-id message)))
          (when (= (:player-id @app-state) (:player-id message))
            (swap! app-state assoc :mode :lobby)))
        :start-game (let [{:keys [players figures locations]} (:setup message)]
          (swap! app-state assoc :figures figures)
          (swap! app-state assoc :locations locations)
          (swap! app-state assoc :players players))
        :take-bids (let [{:keys [turn guard-house banks support influence]} (:status message)
                         my-bank (get banks (:player-id @app-state))
                         figures (:figures @app-state)]
          (swap! app-state assoc :mode :take-bids)
          (swap! app-state assoc :bids (zipmap (map :id figures) (repeat r/zero-bid)))
          (swap! app-state assoc :bids-submitted {})
          (swap! app-state assoc :bank my-bank)
          (swap! app-state assoc :original-bank my-bank)
          (swap! app-state assoc :banks banks)
          (swap! app-state assoc :support support)
          (swap! app-state assoc :influence influence)
          (swap! app-state assoc :turn turn)
          (swap! app-state assoc :guard-house guard-house))
        :steal-spot
          (swap! app-state assoc :mode :spy)
        :swap-spots
          (swap! app-state assoc :mode :apothecary)
        :reassign-spots
          (swap! app-state assoc :mode :messenger)
        :take-open-spot
          (swap! app-state assoc :mode :mayor)
        :bids-submitted (let [player (:player message)]
          (swap! app-state assoc-in [:bids-submitted player] true))
        :game-already-started (js/alert (localize @app-state :game-already-started))
        
        (js/console.warn "type not idendified"))
      (js/console.log "raw websocket message:")
      (js/console.log (str raw))
      (recur))))

(defn my-bids-submitted? [data]
  (true? (get-in data [:bids-submitted (:player-id data)])))

(defn adjust-bid [data id denomination adj]
  (let [bid-denom-adjusted (+ (get-in data [:bids id denomination]) adj)
        bank-denom-adjusted (- (get-in data [:bank denomination]) adj)]
    (if (and (>= bank-denom-adjusted 0) (>= bid-denom-adjusted 0))
      (do
        (om/transact! data [:bank denomination] #(- % adj))
        (om/transact! data [:bids id denomination] #(+ % adj))))))

(defn dont-show-zero [x]
  (if (zero? x) "" x))

(defn denomination-remaining? [data denomination]
  (> (get-in data [:bank denomination]) 0))

(defn nothing-on-figure? [data id]
  (not (r/pos-bid? (get-in data [:bids id]))))

(defn figure-limit-reached? [data]
  (>= (count (filter r/pos-bid? (vals (:bids data)))) 6))

(defn denomination-input [data id immunities denomination]
  (let [immune (contains? immunities denomination)
        amount (get-in data [:bids id denomination])
        figure-disabled (or immune
                            (my-bids-submitted? data)
                            (and (nothing-on-figure? data id) (figure-limit-reached? data)))]
    (dom/td
      nil
      (let [disabled (or figure-disabled (not (denomination-remaining? data denomination)))
            className (clojure.string/join " "
                        ["adjust"
                         (if disabled "disabled" "enabled")
                         (if (my-bids-submitted? data) "invisible")])]
        (dom/button
          #js {:disabled disabled
               :className className
               :onClick #(adjust-bid data id denomination 1)}
          "\u2191"))
      (let [disabled (or figure-disabled (= 0 (get-in data [:bids id denomination])))
            className (clojure.string/join " "
                        ["adjust"
                         (if disabled "disabled" "enabled")
                         (if (my-bids-submitted? data) "invisible")])]
        (dom/button
          #js {:disabled disabled
               :className className
               :onClick #(adjust-bid data id denomination -1)}
          "\u2193"))
      (dom/input
        #js {:type "text"
             :disabled immune
             :readOnly true
             :size 1
             :value (dont-show-zero amount)}))))

(def immunity-class
  {#{}                  "immunity-none"
   #{:blackmail}        "immunity-blackmail"
   #{:force}            "immunity-force"
   #{:blackmail :force} "immunity-both"})

(defn denom [data bank d]
  (let [dval (get bank d)]
    (if (and dval (pos? dval)) (str dval " " (localize data d)))))

(defn figure-description [data {:keys [support bank immunities location-id special-id]}]
  (clojure.string/join ", " (flatten (filter (comp not nil?) [
    (if (and support (pos? support))
      (str support " " (localize data :support)))
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

(defn bid-row [data owner {:keys [id immunities] :as figure}]
  (reify
    om/IRender
    (render [this]
      (dom/tr nil
        (dom/td
          #js {:className (str "figure-name " (get immunity-class immunities))}
          (localize data id))
        (denomination-input data id immunities :gold)
        (denomination-input data id immunities :blackmail)
        (denomination-input data id immunities :force)
        (dom/td nil (figure-description data figure))))))

(defn bid-area [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/table nil
        (dom/tr nil
          (dom/td nil (localize data :figure))
          (dom/td nil (localize data :gold))
          (dom/td nil (localize data :blackmail))
          (dom/td nil (localize data :force)))
          (dom/td nil) ; figure description
        (map #(om/build bid-row data {:opts %1}) (:figures data))))))

(defn bank-denomination [data denomination]
  (let [remaining (get-in data [:bank denomination])
        total     (get-in data [:original-bank denomination])]
    (dom/span nil
      (dom/span nil (localize data denomination))
      (dom/input
        #js {:type "text"
             :readOnly true
             :size 1
             :value (str remaining "/" total)}))))

(defn tokens-remaining? [data]
  (r/pos-bid? (:bank data)))

(defn submit-button [data owner]
  (reify
    om/IRender
    (render [this]
       (dom/button
        #js {:disabled (or (tokens-remaining? data) (my-bids-submitted? data))
             :onClick #(send-bids (:player-id data) (:bids data))}
        (localize data :submit)))))

(defn bank-area [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (bank-denomination data :gold)
        (bank-denomination data :blackmail)
        (bank-denomination data :force)
        (om/build submit-button data)
        (if (my-bids-submitted? data)
          (dom/span nil (localize data :bids-submitted)))))))

(defn map-area [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/span nil (localize data :guard-house))
        (dom/span nil (:guard-house data))
        (apply dom/table nil
          (apply dom/tr nil
            (dom/td nil (localize data :location))
            (dom/td nil (localize data :influence-limit))
            (map
              (partial dom/td nil)
              (:players data)))
          (map
            (fn [location]
              (apply dom/tr nil
                (dom/td nil (localize data (:id location)))
                (dom/td nil (:influence-limit location))
                (map
                  (fn [p] (dom/td nil (get-in data [:influence (:id location) p])))
                  (:players data))))
            (:locations data)))))))

(defn support-area [data owner]
  (reify
    om/IRender
    (render [this]
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
              (dom/td nil (if (get-in data [:bids-submitted p]) "X"))))
          (:players data))))))

(defn language-flag [data title key]
  (dom/img
    #js {:src (str "img/" (name key) ".png")
         :title title
         :className "language-flag"
         :onClick #(om/update! data :lang key)}))

(defn languages-area [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (language-flag data "English" :us)
        (language-flag data "Spanish" :mx)
        (language-flag data "French"  :fr)))))

(defn player-list [data]
  (apply dom/ul nil
    (map (fn [p] (dom/li nil p)) (:players data))))

(defn signup-area [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/input #js {:id "signup-input"
                        :ref "player-id"})
        (dom/button
          #js {:id "signup-button"
               :onClick
               #(let [player-id (.-value (om/get-node owner "player-id"))]
                  (om/update! data :player-id player-id)
                  (send-signup player-id))}
          (localize data :signup))
        (player-list data)))))

(defn spy-select [data owner]
  (reify
    om/IRender
    (render [this]
      (let [selection (:spy-selection data)]
        (dom/div nil
          (apply dom/table nil
            (apply dom/tr nil
              (dom/td nil (localize data :location))
              (dom/td nil (localize data :influence-limit))
              (map
                (partial dom/td nil)
                (:players data)))
            (map
              (fn [{:keys [id influence-limit]}]
                (apply dom/tr nil
                  (dom/td nil (localize data id))
                  (dom/td nil influence-limit)
                  (map
                    (fn [p]
                      (let [combo [id p]
                            selected (= combo selection)]
                        (dom/td 
                          #js {:className (if selected "selected")}
                          (dom/button
                            #js {:onClick #(om/update! data :spy-selection combo)}
                            (get-in data [:influence id p])))))
                    (:players data))))
              (:locations data)))
          (dom/button
            #js {:onClick #(om/update! data :spy-selection nil)}
            (localize data :clear))
          (if selection
            (dom/button
              #js {:onClick #(apply send-spy (:player-id data) (:spy-selection data))}
              (localize data :submit))))))))

(defn apothecary-select [data owner]
  (reify
    om/IRender
    (render [this]
      (let [selection-1 (:apothecary-selection-1 data)
            selection-2 (:apothecary-selection-2 data)]
        (dom/div nil
          (apply dom/table nil
            (apply dom/tr nil
              (dom/td nil (localize data :location))
              (dom/td nil (localize data :influence-limit))
              (map
                (partial dom/td nil)
                (:players data)))
            (map
              (fn [{:keys [id influence-limit]}]
                (apply dom/tr nil
                  (dom/td nil (localize data id))
                  (dom/td nil influence-limit)
                  (map
                    (fn [p]
                      (let [combo [id p]
                            selected (or (= combo selection-1) (= combo selection-2))]
                        (dom/td
                          #js {:className (if selected "selected")}
                          (dom/button
                            #js {:onClick
                                 #(if selection-1
                                      (om/update! data :apothecary-selection-2 combo)
                                      (om/update! data :apothecary-selection-1 combo))}
                            (get-in data [:influence id p])))))
                    (:players data))))
              (:locations data)))
          (dom/button
            #js {:onClick
                 #(do (om/update! data :apothecary-selection-1 nil)
                      (om/update! data :apothecary-selection-2 nil))}
            (localize data :clear))
          (if (and selection-1 selection-2)
            (dom/button
              #js {:onClick
                   #(apply send-apothecary
                     (:player-id data)
                     (concat (:apothecary-selection-1 data) (:apothecary-selection-2 data)))}
              (localize data :submit))))))))

(defn messenger-select [data owner]
  (reify
    om/IRender
    (render [this]
      (let [reassignments (:reassignments data)
            any-reassignments (pos? (count reassignments))
            selection-1 (:messenger-selection-1 data)
            selection-2 (:messenger-selection-2 data)]
        (dom/div nil
          (apply dom/table nil
            (apply dom/tr nil
              (dom/td nil (localize data :location))
              (dom/td nil (localize data :influence-limit))
              (map
                (partial dom/td nil)
                (:players data)))
            (map
              (fn [{:keys [id influence-limit]}]
                (apply dom/tr
                  #js {:className (if (or (= id selection-1) (= id selection-2)) "selected")}
                  (dom/td nil
                    (dom/button
                      #js {:onClick #(if selection-1
                                         (om/update! data :messenger-selection-2 id)
                                         (om/update! data :messenger-selection-1 id))
                           :disabled (or (and (not selection-1) (= 0 (get-in data [:influence id "Rob"])))
                                         (and selection-1 (<= influence-limit (reduce + (vals (get-in data [:influence id]))))))}
                      (localize data id)))
                  (dom/td nil influence-limit)
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
            #js {:onClick #(do (om/update! data :reassignments [])
                               (om/update! data :messenger-selection-1 nil)
                               (om/update! data :messenger-selection-2 nil))}
            (localize data :clear))
          (if (and selection-1 selection-2 (> 2 (count reassignments)))
            (dom/button
              #js {:onClick #(do (om/transact! data :reassignments (fn [rs] (conj rs [selection-1 selection-2])))
                                 (om/update! data :messenger-selection-1 nil)
                                 (om/update! data :messenger-selection-2 nil))}
              (localize data :add)))
          (dom/button
              #js {:onClick #(send-messenger (:player-id data) (:reassignments data))}
            (localize data :submit)))))))

(defn mayor-select [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/table nil
        (apply dom/tr nil
          (dom/td nil (localize data :location))
          (dom/td nil (localize data :influence-limit))
          (map
            (partial dom/td nil)
            (:players data)))
        (map
          (fn [location]
            (apply dom/tr nil
              (dom/td nil
                (dom/button
                  #js {:onClick #(send-mayor (:player-id data) location)
                       :disabled (>= (reduce + (vals (get-in data [:influence (:id location)]))) (:influence-limit location))}
                  (localize data (:id location))))
              (dom/td nil (:influence-limit location))
              (map
                (fn [p] (dom/td nil (get-in data [:influence (:id location) p])))
                (:players data))))
          (:locations data))))))

(defn debug-panel [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div nil
        (map (fn [m]
          (dom/button #js {:onClick #(om/update! data :mode m)} (name m)))
        [:signup :lobby :take-bids :game-over :spy :apothecary :messenger :mayor])))))

(defn lobby-area [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (player-list data)
        (dom/button
          #js {:id "start-game-button"
               :onClick #(send-start-game (:player-id data))}
          (localize data :start-game))))))

(defn root-view [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:delete (chan)
       :text ""})
    om/IWillMount
    (will-mount [_]
      (let [delete (om/get-state owner :delete)]
        (go (loop []
              (let [contact (<! delete)]
                (om/transact! data :contacts
                  (fn [xs] (vec (remove #(= contact %) xs))))
                (recur))))))
    om/IRenderState
    (render-state [this state]
      (apply dom/div nil
        (om/build languages-area data)
        (om/build debug-panel data)
        (case (:mode data)
          :signup     [(om/build signup-area data)]
          :lobby      [(om/build lobby-area data)]
          :take-bids  [(om/build support-area data)
                       (om/build map-area data)
                       (om/build bank-area data)
                       (om/build bid-area data)]
          :game-over  [(om/build support-area data)
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

(defonce app-state
  (atom
    {:lang :us
     :mode :signup
     :reassignments []
     :players []
     :bids-submitted {}
     :bids {}}))

(defn send-receive [ws-channel]
  (let [new-msg-ch (doto (chan) (send-msgs! ws-channel))]
    (reset! message-channel new-msg-ch)
    (om/root
      root-view
      app-state
      {:target (. js/document (getElementById "content"))})
    (receive-msgs! app-state ws-channel)))

(set!
  (.-onload js/window)
  (fn []
    (go
      (let [{:keys [ws-channel error]} (<! (ws-ch ws-url))]
        (if error
          (show-error error)
          (send-receive ws-channel))))))
