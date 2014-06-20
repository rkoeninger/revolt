(ns revolt)

(use 'clojure.set)
(use 'clojure.pprint)

(defrecord Bid [gold blackmail force])
(defn +bid [x y] (merge-with + x y))
(def has-blackmail? (comp pos? :blackmail))
(def has-force? (comp pos? :force))
(defn zero-bid? [bid] (every? zero? (map bid [:gold :blackmail :force])))
(defn compare-bid [x y]
    (cond (> (:force x) (:force y)) x
          (> (:force y) (:force x)) y
          (> (:blackmail x) (:blackmail y)) x
          (> (:blackmail y) (:blackmail x)) y
          (> (:gold x) (:gold y)) x
          (> (:gold y) (:gold x)) y
          (->Bid 0 0 0)))

(defrecord Location [support influence-limit])

(defrecord Figure [support bank immunities influence-location special])
(def blackmail-immune? (comp :blackmail :immunities))
(def force-immune? (comp :force :immunities))

(defrecord Player [id])

(defrecord Board [locations figures players banks influence support])
(defn clear-banks [board] (assoc board :banks (zipmap players (repeat (->Bid 0 0 0)))))
(defn occupied-influence [board location] (reduce + (vals (get-in board [:influence location]))))
(defn location-full? [board location] (>= (occupied-influence board location) (:influence-limit influence)))
(defn board-full? [board] (every? (partial location-full? board) (:locations board)))
(defn get-influence [board location player] (get-in board [:influence location player]))
(defn has-influence [board location player] (not (zero? (get-in board [:influence location player]))))
(defn add-support [board player amount] (update-in board [:support player] (partial + amount)))
(defn add-bank [board player bank] (update-in board [:banks player] (partial +bid bank)))
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

(defn set-guard-house [board player] (assoc board :guard-house player))
(def prompt-spy nil)
(def prompt-apothecary nil)
(def prompt-messenger nil)
(def prompt-mayor nil)

(defmacro deflocation [sym support influence-limit]
    `(def ~sym (->Location ~support ~influence-limit)))

(deflocation tavern     20 4)
(deflocation market     25 5)
(deflocation plantation 30 6)
(deflocation cathedral  35 7)
(deflocation harbor     40 6)
(deflocation town-hall  45 7)
(deflocation fortress   50 8)
(deflocation palace     55 8)

(defmacro deffigure [sym support bank-vec immunities & [influence-location special]]
    `(def ~sym (->Figure ~support (apply ->Bid ~bank-vec) immunities influence-location special)))

(def -- #{})
(def b- #{:blackmail})
(def -f #{:force})
(def bf #{:blackmail :force})

(deffigure printer    10 [0 0 0] --)
(deffigure constable  5  [0 1 0] bf)
(deffigure rogue      0  [0 2 0] bf)
(deffigure mercenary  0  [0 0 1] bf)
(deffigure general    1  [0 0 1] -f fortress)
(deffigure captain    1  [0 0 1] -f harbor)
(deffigure innkeeper  3  [0 1 0] b- tavern)
(deffigure magistrate 1  [0 1 0] b- town-hall)
(deffigure priest     6  [0 0 0] -- cathedral)
(deffigure aristocrat 5  [3 0 0] -- plantation)
(deffigure merchant   3  [5 0 0] -- market)
(deffigure viceroy    0  [0 0 0] -- palace set-guard-house)
(deffigure spy        0  [0 0 0] b- nil prompt-spy)
(deffigure apothecary 0  [0 0 0] -f nil prompt-apothecary)
(deffigure messenger  3  [0 0 0] -- nil prompt-messenger)
(deffigure mayor      0  [0 0 0] bf nil prompt-mayor)









(defn map-vals [f map] (reduce (fn [m2 [k v]] (assoc m2 k (f v))) {} map))

(defn fill-banks [board]
  (update-in board [:player-bank] (partial map-vals (fn [bank]
    (let [token-count (reduce + bank) [c b f] bank]
      (if (< token-count 5)
        [(+ c (- 5 token-count)) b f]
        bank))))))


(defn inverted-get [map val] ((map-invert map) val))

(defn val-unique? [map val] (= 1 ((frequencies (vals map)) val)))

(defn max-by [f coll]
  (reduce (fn [mx cur] (if (or (nil? mx) (> 0 (f mx cur))) cur mx)) nil coll))

(defn get-winner [bid-map]
  (if-not (empty? bid-map)
    (let [max-bid (reduce compare-bids nil (vals bid-map))]
      (if-not (nil? max-bid) (inverted-get bid-map max-bid)))))

(defn get-owner [board loc]
  (let [inf-map (get-in board [:player-inf loc])]
    (if-not (empty? inf-map)
      (let [max-inf (apply max (vals inf-map))]
        (if (val-unique? inf-map max-inf) (inverted-get inf-map max-inf))))))

(defn map-conj [maps]
  (cond
    (empty? maps) {}
    (= 1 (count maps)) (first maps)
    :else (apply conj maps)))

(defn filter-map-keys [m key-value select-key map-key]
  (let [filtered-keys (filter (comp (partial = key-value) select-key) (keys m))]
    (map-conj (map (fn [k] {(map-key k) (m k)}) filtered-keys))))

; {(player figure) bid} -> {figure bid}
(defn filter-player [m player] (filter-map-keys m player first second))

; {(player figure) bid} -> {player bid}
(defn filter-figure [m figure] (filter-map-keys m figure second first))

(defn combine-bid-keys [m player]
  (map-conj (map (fn [k] {[player k] (m k)}) (keys m))))

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

(defn make-board [players]
  (let [
      init-bank [3 1 1]
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
      :guard-house nil
      :player-sup players-to-0s
      :player-inf (zipmap (keys locs) (repeat players-to-0s))
      :player-bank (zipmap players (repeat init-bank))
      :locs locs
      :figs figs
      :fig-eval-order fig-eval-order
    }))
