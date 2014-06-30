(ns revolt
    (:use [clojure.set :only [map-invert]]))

(defn inverted-get [m v] ((map-invert m) v))
(defn unique-max [x y] (cond (= x y) 0 :else (max x y)))
(defn hm-map [f m] (into {} (for [[k v] m] [k (f v)])))

; flip-nested-map : Map a (Map b c) -> Map b (Map a c)
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
(defn compare-bid [{:keys [gx bx fx] :as x} {:keys [gy by fy] :as y}]
    (cond
        (> fx fy) x (> fy fx) y
        (> bx by) x (> by bx) y
        (> gx gy) x (> gy gx) y
        :else bid0))
(defn get-support-value [{:keys [g b f]}] (+ g (* 3 b) (* 5 f)))
(defn get-winner [bid-map] ; bid-map : Map Player Bid
    (let [winning-bid (reduce compare-bid bid0 (vals bid-map))]
        (if-not (zero-bid? winning-bid) (inverted-get bid-map winning-bid))))

(defrecord Location [id support influence-limit])

; immunities : Set Keyword
; location : Option Location
; special : Option Special
(defrecord Figure [id support bank immunities location special])
(def has-special? (comp not nil? :special))
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

; locations : Map Keyword Location
; figures : Map Keyword Figure
; fig-order : Vector Figure
; players : Vector Player
; banks : Map Player Bid
; influence : Map Player (Map Location Nat)
; support : Map Player Nat
; turn : Nat
(defrecord Board [locations figures fig-order players banks influence support turn])
(defn clear-banks [board] (assoc board :banks (zipmap (:players board) (repeat bid0))))
(defn occupied-influence [board location] (reduce + (vals (get-in board [:influence location]))))
(defn location-full? [board location]
    (let [occupied (occupied-influence board location)
          limit (:influence-limit location)]
        (assert (<= occupied limit))
        (= occupied limit)))
(defn board-full? [board] (every? (partial location-full? board) (:locations board)))
(defn get-influence [board location player] (get-in board [:influence location player]))
(defn has-influence [board location player] (not (zero? (get-in board [:influence location player]))))
(defn add-support [board player amount] (update-in board [:support player] (partial + amount)))
(defn get-support [board player] (get-in board [:support player]))
(defn add-bank [board player bank] (update-in board [:banks player] (partial bid+ bank)))
(defn get-bank [board player] (get-in board [:banks player]))
(defn clear-banks [board] (assoc board :banks (zipmap (:players board) (repeat bid0))))
(def min-token-count 5)
(defn fill-bank [{:keys [gold blackmail force] :as bank}]
    (let [token-count (reduce + (vals bank))
          extra-gold (max 0 (- min-token-count token-count))]
        (if (zero? extra-gold) bank (update-in bank [:gold] (partial + extra-gold)))))
(defn fill-banks [board] (update-in board [:banks] (partial hm-map fill-bank)))
(defn add-influence [board location player]
    (assert (not (location-full? board location)) (str location " already full"))
    (update-in board [:influence location player] inc))
(defn remove-influence [board location player]
    (assert (has-influence board location player) (str player " has no influence on " location))
    (update-in board [:influence location player] (comp (partial max 0) dec)))
(defn move-influence [board location0 location1 player]
    (-> board (remove-influence location0 player) (add-influence location1 player)))
(defn replace-influence [board location player0 player1]
    (-> board (remove-influence location player0) (add-influence location player1)))
(defn swap-influence [board location0 player0 location1 player1]
    (-> board (replace-influence location0 player0 player1) (replace-influence location1 player1 player0)))
(defn get-holder [board location]
    (let [inf-map (get-in board [:influence location])
          max-inf (reduce unique-max 0 (vals inf-map))]
        (if-not (zero? max-inf) (inverted-get inf-map max-inf))))
(defn get-holdings [board player]
    (filter (fn [loc] (= player (get-holder board loc))) (:locations board)))
; => Seq Location
(defn get-score [board player]
    (+
        (get-in board [:support player])
        (reduce + (map :support (get-holdings board player)))
        (get-support-value (get-in board [:banks player]))))
(defn get-scores [board]
    (into {} (map (partial get-score board) (:players board))))
; => Map Player Nat
(def game-over? board-full?)
(defn get-game-winner [board]
    (let [scores (get-scores board)
          max-score (reduce unique-max 0 (vals scores))]
        (if-not (zero? max-score) (inverted-get scores max-score))))

; params : Map Keyword Type
; f : (Board, Player, Map Keyword Object) -> Board
(defrecord Special [params f])

(def occupy-guard-house
    (Special. {} (fn [board winner _] (assoc board :guard-house winner))))

(def steal-spot
    (Special. {:location "Location" :player "Player"}
        (fn [board winner {:keys [location player]}]
            (replace-influence location player winner))))

(def switch-spots
    (Special. {:location0 "Location" :player0 "Player" :location1 "Location" :player1 "Player"}
        (fn [board winner {:keys [location0 player0 location1 player1]}]
            (swap-influence location0 player0 location1 player1))))

(def reassign-up-to-2-spots
    (Special. {:reassignments "[(Location, Location)]"}
        (fn [board winner {:keys [reassignments]}]
            (reduce (fn [board [location0 location1]] (move-influence board location0 location1 winner)) board reassignments))))

(def take-open-spot
    (Special. {:location "Location"}
        (fn [board winner {:keys [location]}]
            (add-influence board location winner))))

(defn id-map [& things] (into {} (map (fn [x] [(:id x) x]) things)))

(def -- #{})
(def b- #{:blackmail})
(def -f #{:force})
(def bf #{:blackmail :force})

(defn make-locations [] (id-map
    (->Location :tavern     20 4)
    (->Location :market     25 5)
    (->Location :plantation 30 6)
    (->Location :cathedral  35 7)
    (->Location :harbor     40 6)
    (->Location :town-hall  45 7)
    (->Location :fortress   50 8)
    (->Location :palace     55 8)
))

(defn figure [id support bank immunities & [location special]]
    (->Figure id support bank immunities location special))

; locations-map : Map Keyword Location
(defn make-figures [locations]
    (let [figs [(figure :general    1  (->Bid 0 0 1) -f (:fortress   locations))
                (figure :captain    1  (->Bid 0 0 1) -f (:harbor     locations))
                (figure :innkeeper  3  (->Bid 0 1 0) b- (:tavern     locations))
                (figure :magistrate 1  (->Bid 0 1 0) b- (:town-hall  locations))
                (figure :viceroy    0  (->Bid 0 0 0) -- (:palace     locations) occupy-guard-house)
                (figure :priest     6  (->Bid 0 0 0) -- (:cathedral  locations))
                (figure :aristocrat 5  (->Bid 3 0 0) -- (:plantation locations))
                (figure :merchant   3  (->Bid 5 0 0) -- (:market     locations))
                (figure :printer    10 (->Bid 0 0 0) --)
                (figure :spy        0  (->Bid 0 0 0) b- nil steal-spot)
                (figure :apothecary 0  (->Bid 0 0 0) -f nil switch-spots)
                (figure :messenger  3  (->Bid 0 0 0) -- nil reassign-up-to-2-spots)
                (figure :mayor      0  (->Bid 0 0 0) bf nil take-open-spot)
                (figure :constable  5  (->Bid 0 1 0) bf)
                (figure :rogue      0  (->Bid 0 2 0) bf)
                (figure :mercenary  0  (->Bid 0 0 1) bf)]]
        [(id-map figs) figs]))
; => (Map Keyword Figure, Vector Figure)

(def init-bank (->Bid 3 1 1))

(defn make-board [players]
    (let [locations (make-locations)
          [figures figure-order] (make-figures locations)]
        (->Board
            locations ; : Map Keyword Location
            figures ; : Map Keyword Figure
            figure-order ; : Vector Figure
            players ; : Vector Player
            (zipmap players (repeat init-bank)) ; : Map Player Bid
            (zipmap (vals locations) (repeat (zipmap players (repeat 0)))) ; : Map Location (Map Player Nat)
            (zipmap players (repeat 0)) ; : Map Player Nat
            1)))

(defn inc-turn [board] (update-in board [:turn] inc))

(defn reward-winner [board figure winner]
    "Does not run Special"
    (let [location (:location figure)
          special (:special figure)
          board (add-support board winner (:support figure))
          board (add-bank board winner (:bank figure))
          board (if-not (or (nil? location) (location-full? board location)) (add-influence board location winner) board)]
        board))

; figure-list : Vector Figure
; player-figure-bids : Map Figure (Map Player Bid)
(defn run-until-special [board figure-list figure-player-bids]
    (if (empty? figure-list)
        board
        (let [current-figure (first figure-list)
              player-bids (figure-player-bids current-figure)
              winner (get-winner player-bids)]
            (if (nil? winner)
                board
                (let [board (reward-winner board current-figure winner)]
                    (if-not (has-special? current-figure)
                        (run-until-special board (rest figure-list) figure-player-bids)
                        [board (rest figure-list) (:special current-figure)]))))))
; => [Board (Vector Figure) Special?]









(defn run-figure-bids [board figure player-bids] ; player-bids : Map Player Bid
    "Does not run Special"
    (let [winner (get-winner player-bids)] (if (nil? winner) board (reward-winner board figure winner))))

(defn run-all-bids [board figure-player-bids] ; player-figure-bids : Map Figure (Map Player Bid)
    (reduce
        (fn [b figure] (run-figure-bids b figure (figure-player-bids figure)))
        board
        (:figure-order board)))

(defn run-turn [board figure-player-bids] ; figure-player-bids : Map Figure (Map Player Bid)
    (let [board (-> board
                    clear-banks
                    (run-all-bids figure-player-bids)
                    inc-turn)]
        (if (board-full? board) board (fill-banks board))))
