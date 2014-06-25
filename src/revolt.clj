(ns revolt
    (:use [clojure.set :only [map-invert]]))

(defn inverted-get [m v] ((map-invert m) v))
(defn unique-max [x y] (cond (= x y) 0 :else (max x y)))
(defn hm-map [f m] (into {} (for [[k v] m] [k (f v)])))
(defn flip-nested-map
    ([m] (flip-nested-map (keys m) (distinct (mapcat keys (vals m))) m))
    ([outer-key-domain inner-key-domain m]
        (into {} (map (fn [inner-key] [inner-key
            (into {} (map (fn [outer-key] [outer-key
                ((m outer-key) inner-key)])
            outer-key-domain))])
        inner-key-domain))))

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
(defn get-winner [bid-map] ; bid-map : Map<Player, Bid>
    (let [winning-bid (reduce compare-bid bid0 (vals bid-map))]
        (if-not (zero-bid? winning-bid) (inverted-get bid-map winning-bid))))

(defrecord Location [id support influence-limit])

(defrecord Figure [id support bank immunities influence-location special])
(def blackmail-immune? (comp :blackmail :immunities))
(def force-immune? (comp :force :immunities))
(defn validate-bid [fig bid]
    (not (or
        (and (has-blackmail? bid) (blackmail-immune? fig))
        (and (has-force? bid) (force-immune? fig)))))
(defn validate-bids [bank bids]
    (and
        (> (count bids) 0)
        (<= (count bids) 6)
        (= bank (reduce bid+ (vals bids)))
        (every? (partial apply validate-bid) bids)))

(defrecord Player [id])

(defrecord Board [locations figures players banks influence support turn])
(defn clear-banks [board] (assoc board :banks (zipmap (:players board) (repeat bid0))))
(defn occupied-influence [board location] (reduce + (vals (get-in board [:influence location]))))
(defn location-full? [board location]
    (let [occupied (occupied-influence board location) limit (:influence-limit location)]
        (assert (<= occupied limit))
        (= occupied limit)))
(defn board-full? [board] (every? (partial location-full? board) (:locations board)))
(defn get-influence [board location player] (get-in board [:influence location player]))
(defn has-influence [board location player] (not (zero? (get-in board [:influence location player]))))
(defn add-support [board player amount] (update-in board [:support player] (partial + amount)))
(defn add-bank [board player bank] (update-in board [:banks player] (partial bid+ bank)))
(def min-token-count 5)
(defn fill-bank [{:keys [gold blackmail force] :as bank}]
    (let [token-count (reduce + (vals bank))
          extra-gold (max 0 (- min-token-count token-count))]
        (if-not (zero? extra-gold)
            bank
            (->Bid
                (+ gold extra-gold)
                blackmail
                force))))
(defn fill-banks [board] (update-in board [:banks] (partial hm-map fill-bank)))
(defn add-influence [board location player]
    (assert (not (location-full? board location)) (str location " already full"))
    (update-in board [:influence location player] inc))
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
    (let [inf-map (get-in board [:influence location])
          max-inf (apply unique-max (vals inf-map))]
        (if-not (zero? max-inf) (inverted-get inf-map max-inf))))

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
                (list (keyword k-sym) (list '->Figure (keyword k-sym) sup `(->Bid ~@(list* bank-vec)) immunities loc special)))
            fig-defs)))
        ~@(map (fn [[k-sym]] `(def ~k-sym (~(keyword k-sym) ~sym))) fig-defs)
        (def ~(symbol (str sym "-eval-order")) (vector ~@(map (fn [[k-sym]] (keyword k-sym)) fig-defs)))))

(def -- #{})
(def b- #{:blackmail})
(def -f #{:force})
(def bf #{:blackmail :force})

(deffigures figures0
    (general    1  [0 0 1] -f fortress)
    (captain    1  [0 0 1] -f harbor)
    (innkeeper  3  [0 1 0] b- tavern)
    (magistrate 1  [0 1 0] b- town-hall)
    (viceroy    0  [0 0 0] -- palace set-guard-house)
    (priest     6  [0 0 0] -- cathedral)
    (aristocrat 5  [3 0 0] -- plantation)
    (merchant   3  [5 0 0] -- market)
    (printer    10 [0 0 0] --)
    (spy        0  [0 0 0] b- nil prompt-spy)
    (apothecary 0  [0 0 0] -f nil prompt-apothecary)
    (messenger  3  [0 0 0] -- nil prompt-messenger)
    (mayor      0  [0 0 0] bf nil prompt-mayor)
    (constable  5  [0 1 0] bf)
    (rogue      0  [0 2 0] bf)
    (mercenary  0  [0 0 1] bf))

(def init-bank (->Bid 3 1 1))

(defn board [players]
    (->Board
        locations0 ; : Map<Keyword, Location>
        figures0 ; : Map<Keyword, Figure>
        players ; : Vector<Player>
        (zipmap players (repeat init-bank)) ; : Map<Player, Bid>
        (zipmap locations0 (repeat (zipmap players (repeat 0)))) ; : Map<Location, Map<Player, Nat>>
        (zipmap players (repeat 0)) ; : Map<Player, Nat>
        0))

(defn inc-turn [board] (update-in board [:turn] inc))






(comment

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
)