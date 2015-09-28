(ns ^:figwheel-always revolt-lang)

(def languages {
  :us {:general                  "General"
       :captain                  "Captain"
       :innkeeper                "Innkeeper"
       :magistrate               "Magistrate"
       :viceroy                  "Viceroy"
       :priest                   "Priest"
       :aristocrat               "Aristocrat"
       :merchant                 "Merchant"
       :printer                  "Printer"
       :spy                      "Spy"
       :apothecary               "Apothecary"
       :messenger                "Messenger"
       :mayor                    "Mayor"
       :constable                "Constable"
       :rogue                    "Rogue"
       :mercenary                "Mercenary"
       :tavern                   "Tavern"
       :market                   "Market"
       :town-hall                "Town Hall"
       :fortress                 "Fortress"
       :harbor                   "Harbor"
       :cathedral                "Cathedral"
       :plantation               "Plantation"
       :palace                   "Palace"
       :submit                   "Submit"
       :clear                    "Clear"
       :add                      "Add"
       :signup                   "Sign Up"
       :start-game               "Start Game"
       :player                   "Player"
       :location                 "Location"
       :influence-limit          "Cap"
       :support                  "Support"
       :bids-submitted           "Bids Submitted"
       :figure                   "Figure"
       :gold                     "Gold"
       :blackmail                "Blackmail"
       :force                    "Force"
       :immune-to-blackmail      "Immune to Blackmail"
       :immune-to-force          "Immune to Force"
       :immune-to-both           "Immune to Blackmail and Force"
       :guard-house              "Guard House"
       :occupy-guard-house       "Occupy Guard House"
       :steal-spot               "Replace one unit of influence with one of your own"
       :swap-spots               "Swap any two units of influence"
       :reassign-spots           "Move up to two of your units of influence to empty spaces"
       :take-open-spot           "Influence any open space"
       :all-tokens-must-be-used  "All tokens must be used."
       :no-more-than-six-figures "No more than six figures can be bid on."
       :game-already-started     "The game has already started."}

  :mx {:general                  "General"
       :captain                  "Capitán"
       :innkeeper                "Posadero"
       :magistrate               "Juez"
       :viceroy                  "Virrey"
       :priest                   "Sacerdote"
       :aristocrat               "Aristócrata"
       :merchant                 "Mercader"
       :printer                  "Impresor"
       :spy                      "Espía"
       :apothecary               "Boticario"
       :messenger                "Mensajero"
       :mayor                    "Alcalde"
       :constable                "Alguacil"
       :rogue                    "Maleante"
       :mercenary                "Mercenario"
       :tavern                   "Taberna"
       :market                   "Mercado"
       :town-hall                "Ayuntamiento"
       :fortress                 "Fortaleza"
       :harbor                   "Puerto"
       :cathedral                "Catedral"
       :plantation               "Plantación"
       :palace                   "Palacio"
       :submit                   "Entregar"
       :clear                    "Despejar"
       :add                      "Añadir"
       :signup                   "Contratar"
       :start-game               "Empezar Juego"
       :player                   "Jugador"
       :location                 "Localización"
       :influence-limit          "Límite"
       :support                  "Apoyo"
       :bids-submitted           "Presentan ofertas"
       :figure                   "Persona"
       :gold                     "Oro"
       :blackmail                "Chantaje"
       :force                    "Fuerza"
       :immune-to-blackmail      "Inmune a Chantajear"
       :immune-to-force          "Inmunológico para Forzar"
       :immune-to-both           "Inmune al Chantaje y la Fuerza"
       :guard-house              "Caseta de Vigilancia"
       :occupy-guard-house       "Ocupar Caseta de Vigilancia"
       :steal-spot               "Reemplazar una unidad de influencia con una propia"
       :swap-spots               "Intercambiar dos unidades de influencia"
       :reassign-spots           "Mover hasta dos de sus unidades de influencia a los espacios vacíos"
       :take-open-spot           "Influir en cualquier espacio abierto"
       :all-tokens-must-be-used  "Todas las fichas deben utilizarse."
       :no-more-than-six-figures "No más de seis cifras pueden pujar por."
       :game-already-started     "El juego ya ha comenzado."}

  :fr {:general                  "Général"
       :captain                  "Capitaine"
       :innkeeper                "Aubergiste"
       :magistrate               "Magistrat"
       :viceroy                  "Vice-roi"
       :priest                   "Prêtre"
       :aristocrat               "Aristocrate"
       :merchant                 "Commerçant"
       :printer                  "Imprimante"
       :spy                      "Espion"
       :apothecary               "Apothicaire"
       :messenger                "Messager"
       :mayor                    "Maire"
       :constable                "Gendarme"
       :rogue                    "Coquin"
       :mercenary                "Mercenaire"
       :tavern                   "Taverne"
       :market                   "Marché"
       :town-hall                "Mairie"
       :fortress                 "Forteresse"
       :harbor                   "Port"
       :cathedral                "Cathédrale"
       :plantation               "Plantation"
       :palace                   "Palais"
       :submit                   "Soumettre"
       :clear                    "Débarrasser"
       :add                      "Ajouter"
       :signup                   "Signer"
       :start-game               "Démarrer le Jeu"
       :player                   "Joueur"
       :location                 "Emplacement"
       :influence-limit          "Limite"
       :support                  "Appui"
       :bids-submitted           "Soumissions Présentées"
       :figure                   "Personnage"
       :gold                     "Or"
       :blackmail                "Chantage"
       :force                    "Force"
       :immune-to-blackmail      "à l'abri du Chantage"
       :immune-to-force          "Immunitaire pour Forcer"
       :immune-to-both           "à l'abri du Chantage et de la Force"
       :guard-house              "Corps de Garde"
       :occupy-guard-house       "Cccuper la Maison de Garde"
       :steal-spot               "Reemplazar una unidad de influencia con una propia"
       :swap-spots               "Intercambiar dos unidades de influencia"
       :reassign-spots           "Déplacer jusqu'à deux de vos parts d'influence pour les espaces vides"
       :take-open-spot           "Influencer un espace ouvert"
       :all-tokens-must-be-used  "Tous les jetons doivent être utilisés."
       :no-more-than-six-figures "Pas plus de six chiffres peuvent être enchérir sur."
       :game-already-started     "Le jeu a déjà commencé."}})
