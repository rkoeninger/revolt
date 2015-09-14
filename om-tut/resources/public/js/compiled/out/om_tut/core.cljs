(ns ^:figwheel-always om-tut.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

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
       :support    "Support"
       :figure     "Figure"
       :gold       "Gold"
       :blackmail  "Blackmail"
       :force      "Force"
       :all-tokens-must-be-used  "All tokens must be used."
       :no-more-than-six-figures "No more than six figures can be bid on."}

  :mx {:general    "General"
       :captain    "Capitán"
       :innkeeper  "Posadero"
       :magistrate "Magistrado"
       :viceroy    "Virrey"
       :priest     "Sacerdote"
       :aristocrat "Aristócrata"
       :merchant   "Comerciante"
       :printer    "Impresor"
       :spy        "Espía"
       :apothecary "Boticario"
       :messenger  "Mensajero"
       :mayor      "Alcalde"
       :constable  "Alguacil"
       :rogue      "Pícaro"
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
       :player     "Jugador"
       :support    "Apoyo"
       :figure     "Persona"
       :gold       "Oro"
       :blackmail  "Chantaje"
       :force      "Fuerza"
       :all-tokens-must-be-used  "Todas las fichas deben utilizarse."
       :no-more-than-six-figures "No más de seis cifras pueden pujar por."}

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
       :player     "Joueur"
       :support    "Appui"
       :figure     "Personnage"
       :gold       "Or"
       :blackmail  "Chantage"
       :force      "Force"
       :all-tokens-must-be-used  "Tous les jetons doivent être utilisés."
       :no-more-than-six-figures "Pas plus de six chiffres peuvent être enchérir sur."}})

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

(def ps ["Rob" "Joe" "Moe"])

(def locs
  [:tavern
   :market
   :town-hall
   :fortress
   :harbor
   :cathedral
   :plantation
   :palace])

(defonce app-state
  (atom
    {:lang :us
     :mode :signup
     :reassignments []
     :bids (zipmap (map :id figures) (repeat bid0))
     :players ps
     :support (zipmap ps (repeat 0))
     :locations locs
     :influence (zipmap locs (repeat (zipmap ps (repeat 0))))
     :original-bank {:gold 5 :blackmail 1 :force 1}
     :bank {:gold 5 :blackmail 1 :force 1}}))

(defn localize [data key]
  (or
    (get-in languages [(:lang data) key])
    (get-in languages [:us key])
    (name key)))

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
      (dom/button
        #js {:disabled (or immune
                           (not (denomination-remaining? data denomination))
                           (and (nothing-on-figure? data id) (figure-limit-reached? data)))
             :onClick #(adjust-bid data id denomination 1)}
        "\u2191")
      (dom/button
        #js {:disabled (or immune
                           (= 0 (get-in data [:bids id denomination]))
                           (and (nothing-on-figure? data id) (figure-limit-reached? data)))
             :onClick #(adjust-bid data id denomination -1)}
        "\u2193")
      (dom/input
        #js {:type "text"
             :disabled immune
             :readOnly true
             :size 1
             :id (str (name id) "-" (name denomination))
             :value (dont-show-zero amount)}))))

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
    (dom/input
      #js {:type "text"
           :readOnly true
           :size 1
           :id (str "bank-" (name denomination))
           :value (str remaining "/" total)})))

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
             :onClick #(println "submitting...")}
        (localize data :submit)))))

(defn error-label [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/span
        #js {:className (if (or (tokens-remaining? data) (too-many-figures? data))
                            "error-label"
                            "hide")}
        (cond (tokens-remaining? data) (localize data :all-tokens-must-be-used)
              (too-many-figures? data) (localize data :no-more-than-six-figures)
              :else "")))))

(defn bank-area [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (localize data :gold)
        (bank-denomination data :gold)
        (localize data :blackmail)
        (bank-denomination data :blackmail)
        (localize data :force)
        (bank-denomination data :force)
        (om/build submit-button data)
        (om/build error-label data)))))

(defn map-area [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/table nil
        (apply dom/tr nil
          (dom/td nil)
          (map
            (partial dom/td nil)
            (:players data)))
        (map
          (fn [location]
            (apply dom/tr nil
              (dom/td nil (localize data location))
              (map
                (fn [p] (dom/td nil (get-in data [:influence location p])))
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
        (dom/input nil)
        (dom/button
          #js {:onClick #(om/update! data :mode :take-bids)}
          (localize data :signup))))))

(defn spy-select [data owner]
  (reify
    om/IRender
    (render [this]
      (let [selection (:spy-selection data)]
        (dom/div nil
          (apply dom/table nil
            (apply dom/tr nil
              (dom/td nil)
              (map
                (partial dom/td nil)
                (:players data)))
            (map
              (fn [location]
                (apply dom/tr nil
                  (dom/td nil (localize data location))
                  (map
                    (fn [p]
                      (let [combo [location p]
                            selected (= combo selection)]
                        (dom/td 
                          #js {:className (if selected "selected")}
                          (dom/button
                            #js {:onClick
                                 #(om/update! data :spy-selection combo)}
                            (get-in data [:influence location p])))))
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
              (dom/td nil)
              (map
                (partial dom/td nil)
                (:players data)))
            (map
              (fn [location]
                (apply dom/tr nil
                  (dom/td nil (localize data location))
                  (map
                    (fn [p]
                      (let [combo [location p]
                            selected (or (= combo selection-1) (= combo selection-2))]
                        (dom/td
                          #js {:className (if selected "selected")}
                          (dom/button
                            #js {:onClick
                                 #(if selection-1
                                      (om/update! data :apothecary-selection-2 combo)
                                      (om/update! data :apothecary-selection-1 combo))}
                            (get-in data [:influence location p])))))
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
              (dom/td nil)
              (map
                (partial dom/td nil)
                (:players data)))
            (map
              (fn [location]
                (apply dom/tr
                  #js {:className (if (or (= location selection-1) (= location selection-2)) "selected")}
                  (dom/td nil
                    (dom/button
                      #js {:onClick #(if selection-1
                                         (om/update! data :messenger-selection-2 location )
                                         (om/update! data :messenger-selection-1 location))}
                      (localize data location)))
                  (map
                    (fn [player]
                      (dom/td nil (get-in data [:influence location player])))
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
          (if (> 2 (count reassignments))
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
          (dom/td nil)
          (map
            (partial dom/td nil)
            (:players data)))
        (map
          (fn [location]
            (apply dom/tr nil
              (dom/td nil
                (dom/button
                  #js {:onClick #(om/update! data :mode :take-bids)}
                  (localize data location)))
              (map
                (fn [p] (dom/td nil (get-in data [:influence location p])))
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
          #js {:onClick #(om/update! data :mode :take-bids)}
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

(om/root root-view app-state
  {:target (. js/document (getElementById "contacts"))})
