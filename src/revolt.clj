(ns revolt
    (:use [clojure.set :only [map-invert]]))

(defn inverted-get [m v] ((map-invert m) v))
(defn unique-max [x y] (cond (= x y) 0 (> x y) x (> y x) y))
(defn map-vals [f m] (reduce (fn [acc [k v]] (assoc acc k (f v))) {} m))

(defrecord Bid [gold blackmail force])
(def bid0 (->Bid 0 0 0))
(def bid+ (partial merge-with +))
(def has-blackmail? (comp pos? :blackmail))
(def has-force? (comp pos? :force))
(defn zero-bid? [bid] (every? zero? (map (partial get bid) [:gold :blackmail :force])))
(defn compare-bid [x y]
    (cond
        (> (:force x) (:force y)) x
        (> (:force y) (:force x)) y
        (> (:blackmail x) (:blackmail y)) x
        (> (:blackmail y) (:blackmail x)) y
        (> (:gold x) (:gold y)) x
        (> (:gold y) (:gold x)) y
        :else bid0))
(defn get-winner [bid-map]
    (let [winning-bid (reduce compare-bid bid0 (vals bid-map))]
        (if-not (zero-bid? winning-bid) (inverted-get bid-map winning-bid))))

(defrecord Location [id support influence-limit])

(defrecord Figure [id support bank immunities influence-location special])
(def blackmail-immune? (comp :blackmail :immunities))
(def force-immune? (comp :force :immunities))

(defrecord Player [id])

(defrecord Board [locations figures players banks influence support])
(defn clear-banks [board] (assoc board :banks (zipmap (:players board) (repeat bid0))))
(defn occupied-influence [board location] (reduce + (vals (get-in board [:influence location]))))
(defn location-full? [board location] (>= (occupied-influence board location) (:influence-limit influence)))
(defn board-full? [board] (every? (partial location-full? board) (:locations board)))
(defn get-influence [board location player] (get-in board [:influence location player]))
(defn has-influence [board location player] (not (zero? (get-in board [:influence location player]))))
(defn add-support [board player amount] (update-in board [:support player] (partial + amount)))
(defn add-bank [board player bank] (update-in board [:banks player] (partial bid+ bank)))
(def min-token-count 5)
(defn fill-bank [{:keys [gold blackmail force] :as bank}]
    (let [token-count (reduce + (vals bank))]
        (if-not (< token-count min-token-count)
            bank
            (->Bank
                (+ gold (- min-token-count token-count))
                blackmail
                force))))
(defn fill-banks [board] (update-in board [:banks] (partial map-vals fill-bank)))
(defn add-influence [board location player]
    (assert (not (location-full? board location)) (str location " already full"))
    (update-in board [:influence location player] (partial + 1)))
(defn remove-influence [board location player]
    (assert (has-influence board location player) (str player " has no influence on " location))
    (update-in board [:influence location player] (comp (partial max 0) dec)))
(defn move-influence [board location0 location1 player]
    (-> board (remove-influence player location0) (add-influence player location1)))
(defn replace-influence [board location player0 player1]
    (-> board (remove-influence player0 location) (add-influence player1 location)))
(defn swap-influence [board location0 location1 player0 player1]
    (-> board (replace-influence player0 player1 location1) (replace-influence player1 player0 location0)))
(defn get-holder [board location]
    (let [max-inf (apply unique-max (vals inf-map))]
        (if-not (zero? max-inf) (inverted-get (get-in board [:influence location]) max-inf))))

(defn set-guard-house [board player] (assoc board :guard-house player))
(defn prompt-spy [board player] board)
(defn prompt-apothecary [board player] board)
(defn prompt-messenger [board player] board)
(defn prompt-mayor [board player] board)

(defmacro deflocations [sym & loc-defs]
    `(do
        (def ~sym (hash-map ~@(mapcat
            (fn [[k-sym sup inf-limit]]
                (list (keyword k-sym) (list '->Location (keyword k-sym) sup inf-limit)))
            loc-defs)))
        ~@(map (fn [[k-sym]] `(def ~k-sym (~(keyword k-sym) ~sym))) loc-defs)))

(deflocations locations0
    (tavern     20 4)
    (market     25 5)
    (plantation 30 6)
    (cathedral  35 7)
    (harbor     40 6)
    (town-hall  45 7)
    (fortress   50 8)
    (palace     55 8))

(defmacro deffigures [sym & fig-defs]
    `(do
        (def ~sym (hash-map ~@(mapcat
            (fn [[k-sym sup bank-vec immunities & [loc special]]]
                (list (keyword k-sym) (list '->Figure (keyword k-sym) sup (apply ->Bid bank-vec) immunities loc special)))
            fig-defs)))
        ~@(map (fn [[k-sym]] `(def ~k-sym (~(keyword k-sym) ~sym))) fig-defs)))

(def -- #{})
(def b- #{:blackmail})
(def -f #{:force})
(def bf #{:blackmail :force})

(deffigures figures0
    (printer    10 [0 0 0] --)
    (constable  5  [0 1 0] bf)
    (rogue      0  [0 2 0] bf)
    (mercenary  0  [0 0 1] bf)
    (general    1  [0 0 1] -f fortress)
    (captain    1  [0 0 1] -f harbor)
    (innkeeper  3  [0 1 0] b- tavern)
    (magistrate 1  [0 1 0] b- town-hall)
    (priest     6  [0 0 0] -- cathedral)
    (aristocrat 5  [3 0 0] -- plantation)
    (merchant   3  [5 0 0] -- market)
    (viceroy    0  [0 0 0] -- palace set-guard-house)
    (spy        0  [0 0 0] b- nil prompt-spy)
    (apothecary 0  [0 0 0] -f nil prompt-apothecary)
    (messenger  3  [0 0 0] -- nil prompt-messenger)
    (mayor      0  [0 0 0] bf nil prompt-mayor))

(def init-bank (->Bank 3 1 1))






; {(player figure) bid}
; {player (figure bid)}
; {figure (player bid)}





(defn filter-map-keys [m key-value select-key map-key]
  (let [filtered-keys (filter (comp (partial = key-value) select-key) (keys m))]
    (apply merge (map (fn [k] {(map-key k) (m k)}) filtered-keys))))

; {(player figure) bid} -> {figure bid}
(defn filter-player [m player] (filter-map-keys m player first second))

; {(player figure) bid} -> {player bid}
(defn filter-figure [m figure] (filter-map-keys m figure second first))

(defn combine-bid-keys [m player]
  (apply merge (map (fn [k] {[player k] (m k)}) (keys m))))

(defn validate-fig-bid [board fig-sym bid]
  (not
    (or
      (and (bid-has-blackmail bid) (get-in board [:figs fig-sym :b-immune]))
      (and (bid-has-force bid) (get-in board [:figs fig-sym :f-immune])))))

(defn validate-player-bids [board player bids]
  (and
    (<= (count bids) 6)
    (= (get-in board [:player-bank player]) (reduce +bank (vals bids)))
    (every? #(validate-fig-bid board %1 (bids %1)) (keys bids))))

(defn inc-turn [board]
  (update-in board [:turn] (partial + 1)))

; bid-map :: {(player figure) bid}
(defn run-bids [board bid-map]
  (reduce
    (fn [b fig-sym]
      (let [winner (get-winner (filter-figure bid-map fig-sym))]
        (if (nil? winner)
          b
          (let [
              fig (get-in b [:figs fig-sym])
              fig-loc (fig :inf-loc)
              fig-special (fig :special)
              b (add-sup b winner (fig :sup-val))
              b (add-bank b winner (fig :bank-val))
              b (if (nil? fig-loc) b (add-inf b winner fig-loc))
              b (if (nil? fig-special) b (fig-special b winner))
            ]
            b))))
    board
    (board :fig-eval-order)))

(defn run-turn [board bid-map]
  (-> board
    inc-turn
    clear-banks
    (run-bids bid-map)
    fill-banks))

(defn get-game-winner [player-sup]
  (let [max-sup (max (vals player-sup))]
    (if (val-unique? player-sup max-sup) (inverted-get player-sup max-sup))))



      fig-eval-order [
        :general       :captain       :innkeeper     :magistrate
        :viceroy       :priest        :aristocrat    :merchant
        :printer       :spy           :apothecary    :messenger
        :mayor         :constable     :rogue         :mercenary
      ]
      players-to-0s (zipmap players (repeat 0))
    ]

    {
      :turn 0
      :fig-eval-order fig-eval-order
    }))
