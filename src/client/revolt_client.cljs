(ns ^:figwheel-always revolt.client
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [chord.client :refer [ws-ch]]
            [cemerick.url :refer [url]]))

(enable-console-print!)

(def languages {
  :us {:general    "General"
       :captain    "Captain"
       :innkeeper  "Innkeeper"
       :magistrate "Magistrate"
       :viceroy    "Viceroy"
       :priest     "Priest"
       :aristocrat "Aristocrat"
       :merchant   "Merchant"
       :printer    "Printer"
       :spy        "Spy"
       :apothecary "Apothecary"
       :messenger  "Messenger"
       :mayor      "Mayor"
       :constable  "Constable"
       :rogue      "Rogue"
       :mercenary  "Mercenary"
       :tavern     "Tavern"
       :market     "Market"
       :town-hall  "Town Hall"
       :fortress   "Fortress"
       :harbor     "Harbor"
       :cathedral  "Cathedral"
       :plantation "Plantation"
       :palace     "Palace"
       :submit     "Submit"
       :clear      "Clear"
       :add        "Add"
       :signup     "Sign Up"
       :start-game "Start Game"
       :player     "Player"
       :location   "Location"
       :cap        "Cap"
       :support    "Support"
       :figure     "Figure"
       :gold       "Gold"
       :blackmail  "Blackmail"
       :force      "Force"
       :all-tokens-must-be-used  "All tokens must be used."
       :no-more-than-six-figures "No more than six figures can be bid on."
       :game-already-started     "The game has already started."}

  :mx {:general    "General"
       :captain    "Capitán"
       :innkeeper  "Posadero"
       :magistrate "Juez"
       :viceroy    "Virrey"
       :priest     "Sacerdote"
       :aristocrat "Aristócrata"
       :merchant   "Mercader"
       :printer    "Impresor"
       :spy        "Espía"
       :apothecary "Boticario"
       :messenger  "Mensajero"
       :mayor      "Alcalde"
       :constable  "Alguacil"
       :rogue      "Maleante"
       :mercenary  "Mercenario"
       :tavern     "Taberna"
       :market     "Mercado"
       :town-hall  "Ayuntamiento"
       :fortress   "Fortaleza"
       :harbor     "Puerto"
       :cathedral  "Catedral"
       :plantation "Plantación"
       :palace     "Palacio"
       :submit     "Entregar"
       :clear      "Despejar"
       :add        "Añadir"
       :signup     "Contratar"
       :start-game "Empezar Juego"
       :player     "Jugador"
       :location   "Localización"
       :cap        "Límite"
       :support    "Apoyo"
       :figure     "Persona"
       :gold       "Oro"
       :blackmail  "Chantaje"
       :force      "Fuerza"
       :all-tokens-must-be-used  "Todas las fichas deben utilizarse."
       :no-more-than-six-figures "No más de seis cifras pueden pujar por."
       :game-already-started     "El juego ya ha comenzado."}

  :fr {:general    "Général"
       :captain    "Capitaine"
       :innkeeper  "Aubergiste"
       :magistrate "Magistrat"
       :viceroy    "Vice-roi"
       :priest     "Prêtre"
       :aristocrat "Aristocrate"
       :merchant   "Commerçant"
       :printer    "Imprimante"
       :spy        "Espion"
       :apothecary "Apothicaire"
       :messenger  "Messager"
       :mayor      "Maire"
       :constable  "Gendarme"
       :rogue      "Coquin"
       :mercenary  "Mercenaire"
       :tavern     "Taverne"
       :market     "Marché"
       :town-hall  "Mairie"
       :fortress   "Forteresse"
       :harbor     "Port"
       :cathedral  "Cathédrale"
       :plantation "Plantation"
       :palace     "Palais"
       :submit     "Soumettre"
       :clear      "Débarrasser"
       :add        "Ajouter"
       :signup     "Signer"
       :start-game "Démarrer le Jeu"
       :player     "Joueur"
       :location   "Emplacement"
       :cap        "Limite"
       :support    "Appui"
       :figure     "Personnage"
       :gold       "Or"
       :blackmail  "Chantage"
       :force      "Force"
       :all-tokens-must-be-used  "Tous les jetons doivent être utilisés."
       :no-more-than-six-figures "Pas plus de six chiffres peuvent être enchérir sur."
       :game-already-started     "Le jeu a déjà commencé."}})

(def bid0 {:gold 0 :blackmail 0 :force 0})

(def figures
  [{:id :general    :immunities #{:force}}
   {:id :captain    :immunities #{:force}}
   {:id :innkeeper  :immunities #{:blackmail}}
   {:id :magistrate :immunities #{:blackmail}}
   {:id :viceroy    :immunities #{}}
   {:id :priest     :immunities #{}}
   {:id :aristocrat :immunities #{}}
   {:id :merchant   :immunities #{}}
   {:id :printer    :immunities #{}}
   {:id :spy        :immunities #{:blackmail}}
   {:id :apothecary :immunities #{:force}}
   {:id :messenger  :immunities #{}}
   {:id :mayor      :immunities #{:blackmail :force}}
   {:id :constable  :immunities #{:blackmail :force}}
   {:id :rogue      :immunities #{:blackmail :force}}
   {:id :mercenary  :immunities #{:blackmail :force}}])

(def locs
  [{:id :tavern :cap 4}
   {:id :market :cap 5}
   {:id :town-hall :cap 7}
   {:id :fortress :cap 8}
   {:id :harbor :cap 6}
   {:id :cathedral :cap 7}
   {:id :plantation :cap 6}
   {:id :palace :cap 6}])

(defn localize [data key]
  (or
    (get-in languages [(:lang data) key])
    (do
      (js/console.error (str key " is not in " (:lang data) " dictionary"))
      "TRANSLATION MISSING" - (str key))))

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
        :start-game (let [{:keys [players figures locations]} (:setup message)]
          (swap! app-state assoc :figures figures)
          (swap! app-state assoc :locations locations)
          (swap! app-state assoc :players players)
          (swap! app-state assoc :mode :take-bids))
        :take-bids (let [{:keys [turn guard-house banks support influence]} (:status message)
                         my-bank (get banks (:player-id @app-state))
                         figures (:figures @app-state)]
          (swap! app-state assoc :bids (zipmap (map :id figures) (repeat bid0)))
          (swap! app-state assoc :bank my-bank)
          (swap! app-state assoc :original-bank my-bank)
          (swap! app-state assoc :banks banks)
          (swap! app-state assoc :support support)
          (swap! app-state assoc :influence influence)
          (swap! app-state assoc :turn turn)
          (swap! app-state assoc :guard-house guard-house))
        :bids-accepted nil
        :signup (do
          (swap! app-state update-in [:players] #(conj % (:player-id message)))
          (when (= (:player-id @app-state) (:player-id message))
            (swap! app-state assoc :mode :lobby)))
        :game-already-started (js/alert (localize @app-state :game-already-started))
        
        (js/console.warn "type not idendified"))
      (js/console.log "raw websocket message:")
      (js/console.log (str raw))
      (recur))))

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

(defn pos-bid? [bid]
  (or (pos? (:gold bid)) (pos? (:blackmail bid)) (pos? (:force bid))))

(defn nothing-on-figure? [data id]
  (not (pos-bid? (get-in data [:bids id]))))

(defn figure-limit-reached? [data]
  (>= (count (filter pos-bid? (vals (:bids data)))) 6))

(defn denomination-input [data id immunities denomination]
  (let [immune (contains? immunities denomination)
        amount (get-in data [:bids id denomination])]
    (dom/td
      nil
      (let [disabled (or immune
                         (not (denomination-remaining? data denomination))
                         (and (nothing-on-figure? data id) (figure-limit-reached? data)))]
        (dom/button
          #js {:disabled disabled
               :className (if disabled "adjust disabled" "adjust enabled")
               :onClick #(adjust-bid data id denomination 1)}
          "\u2191"))
      (let [disabled (or immune
                           (= 0 (get-in data [:bids id denomination]))
                           (and (nothing-on-figure? data id) (figure-limit-reached? data)))]
        (dom/button
          #js {:disabled disabled
               :className (if disabled "adjust disabled" "adjust enabled")
               :onClick #(adjust-bid data id denomination -1)}
          "\u2193"))
      (dom/input
        #js {:type "text"
             :disabled immune
             :readOnly true
             :size 1
             :value (dont-show-zero amount)
             :onChange (fn [e] (om/transact! data :bids
                         (fn [bids] (assoc-in bids [id denomination] (.-value e)))))}))))

(def immunity-class
  {#{}                  "immunity-none"
   #{:blackmail}        "immunity-blackmail"
   #{:force}            "immunity-force"
   #{:blackmail :force} "immunity-both"})

(defn bid-row [data owner {:keys [id immunities]}]
  (reify
    om/IRender
    (render [this]
      (dom/tr nil
        (dom/td
          #js {:className (str "figure-name " (get immunity-class immunities))}
          (localize data id))
        (denomination-input data id immunities :gold)
        (denomination-input data id immunities :blackmail)
        (denomination-input data id immunities :force)))))

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
        (map #(om/build bid-row data {:opts %1}) figures)))))

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
  (pos-bid? (:bank data)))

(defn too-many-figures? [data]
  (< 6 (count (filter pos-bid? (vals (:bids data))))))

(defn submit-button [data owner]
  (reify
    om/IRender
    (render [this]
       (dom/button
        #js {:disabled (or (tokens-remaining? data) (too-many-figures? data))
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
        (om/build submit-button data)))))

(defn map-area [data owner]
  (reify
    om/IRender
    (render [this]
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
              (dom/td nil (localize data (:id location)))
              (dom/td nil (:cap location))
              (map
                (fn [p] (dom/td nil (get-in data [:influence (:id location) p])))
                (:players data))))
          (:locations data))))))

(defn support-area [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/table nil
        (dom/tr nil
          (dom/td nil (localize data :player))
          (dom/td nil (localize data :support)))
        (map
          (fn [p]
            (dom/tr nil
              (dom/td nil p)
              (dom/td nil (get-in data [:support p]))))
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

(defn signup-area [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/input #js {:ref "player-id"})
        (dom/button
          #js {:onClick
               #(let [player-id (.-value (om/get-node owner "player-id"))]
                  (om/update! data :player-id player-id)
                  (send-signup player-id))}
          (localize data :signup))))))

(defn spy-select [data owner]
  (reify
    om/IRender
    (render [this]
      (let [selection (:spy-selection data)]
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
                            #js {:onClick #(om/update! data :spy-selection combo)}
                            (get-in data [:influence id p])))))
                    (:players data))))
              (:locations data)))
          (dom/button
            #js {:onClick #(om/update! data :spy-selection nil)}
            (localize data :clear))
          (if selection
            (dom/button nil
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
            (dom/button nil
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
                                         (om/update! data :messenger-selection-2 id)
                                         (om/update! data :messenger-selection-1 id))
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
          (dom/button nil
            (localize data :submit)))))))

(defn mayor-select [data owner]
  (reify
    om/IRender
    (render [this]
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
                  #js {:onClick #(om/update! data :mode :take-bids)
                       :disabled (>= (reduce + (vals (get-in data [:influence (:id location)]))) (:cap location))}
                  (localize data (:id location))))
              (dom/td nil (:cap location))
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
        (dom/button
          #js {:onClick #(send-start-game (:player-id data))}
          (localize data :start-game))
        (apply dom/ul nil
          (map (fn [p] (dom/li nil p)) (:players data)))))))

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
     :bids (zipmap (map :id figures) (repeat bid0))}))

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
