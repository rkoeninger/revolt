(ns revolt
    (:use [clojure.set :only [map-invert]]))

(defn inverted-get [m v] ((map-invert m) v))
(defn unique-max [& xs]
    (case (count xs)
        0 nil
        1 (first xs)
        (let [[x1 x2] (take 2 (reverse (sort xs)))]
            (if (not= x1 x2) x1))))
(defn hm-map [f m] (into {} (for [[k v] m] [k (f v)])))

(defrecord Bid [gold blackmail force]
    java.lang.Comparable
    (compareTo [{gx :gold bx :blackmail fx :force}
                {gy :gold by :blackmail fy :force}]
        (cond
            (> fx fy) 1 (> fy fx) -1
            (> bx by) 1 (> by bx) -1
            (> gx gy) 1 (> gy gx) -1
            :else 0))
    java.lang.Object
    (toString [_] (str "(Bid " gold " " blackmail " " force ")")))
(defmethod print-method Bid [x ^java.io.Writer w] (.write w (str x)))
(def bid0 (->Bid 0 0 0))
(def bid+ (partial merge-with +))
(def has-blackmail? (comp pos? :blackmail))
(def has-force? (comp pos? :force))
(def zero-bid? (partial = bid0))
(defn get-support-value [{:keys [gold blackmail force]}]
    (+ gold (* 3 blackmail) (* 5 force)))
(defn get-winner [bid-map] ; bid-map : Map Player Bid
    (let [winning-bid (apply unique-max (vals bid-map))]
        (if-not (or (nil? winning-bid) (zero-bid? winning-bid)) (inverted-get bid-map winning-bid))))

(defrecord Location [id support influence-limit]
    java.lang.Object
    (toString [_] (name id)))
(defmethod print-method Location [x ^java.io.Writer w] (.write w (str x)))

; immunities : Set Keyword
; location : Option Location
; special : Option Special
(defrecord Figure [id support bank immunities location special]
    java.lang.Object
    (toString [_] (name id)))
(defmethod print-method Figure [x ^java.io.Writer w] (.write w (str x)))
(def has-special? (comp not nil? :special))
(def blackmail-immune? (comp boolean :blackmail :immunities))
(def force-immune? (comp boolean :force :immunities))
(defn validate-bid [fig bid]
    (not (or
        (and (has-blackmail? bid) (blackmail-immune? fig))
        (and (has-force? bid) (force-immune? fig)))))
(defn validate-bids [bank bids] ; bids : Map Figure Bid
    (and
        (> (count bids) 0)
        (<= (count bids) 6)
        (= bank (reduce bid+ (vals bids)))
        (every? (partial apply validate-bid) bids)))

(defrecord Player [id]
    java.lang.Object
    (toString [_] (name id)))
(defmethod print-method Player [x ^java.io.Writer w] (.write w (str x)))
(defn touchable? [board winner player] (or (= winner player) (not= player (:guard-house board))))

; locations : Map Keyword Location
; figures : Map Keyword Figure
; fig-order : Vector Figure
; players : Vector Player
; banks : Map Player Bid
; influence : Map Player (Map Location Nat)
; support : Map Player Nat
; turn : Nat
(defrecord Board [locations figures fig-order players banks influence support turn]
    java.lang.Object
    (toString [_] (str "(Board support:" support " influence:" influence " banks:" banks " turn:" turn ")")))
(defmethod print-method Board [x ^java.io.Writer w] (.write w (str x)))
(defn clear-banks [board] (assoc board :banks (zipmap (:players board) (repeat bid0))))
(defn occupied-influence [board location] (reduce + (vals (get-in board [:influence location]))))
(defn location-full? [board location]
    (let [occupied (occupied-influence board location)
          limit (:influence-limit location)]
        (assert (<= occupied limit))
        (= occupied limit)))
(defn board-full? [board] (every? (partial location-full? board) (vals (:locations board))))
(defn get-influence [board location player] (get-in board [:influence location player]))
(defn has-influence [board location player] (not (zero? (get-in board [:influence location player]))))
(defn add-support [board player amount] (update-in board [:support player] (partial + amount)))
(defn get-support [board player] (get-in board [:support player]))
(defn add-bank [board player bank] (update-in board [:banks player] (partial bid+ bank)))
(defn get-bank [board player] (get-in board [:banks player]))
(defn clear-banks [board] (assoc board :banks (zipmap (:players board) (repeat bid0))))
(def min-token-count 5)
(defn fill-bank [bank]
    (let [token-count (reduce + (vals bank))
          extra-gold (max 0 (- min-token-count token-count))]
        (bid+ bank (->Bid extra-gold 0 0))))
(defn fill-banks [board] (update-in board [:banks] (partial hm-map fill-bank)))
(defn add-influence [board location player]
    (assert (not (location-full? board location)) (str location " already full"))
    (update-in board [:influence location player] (comp inc #(or % 0))))
(defn remove-influence [board location player]
    (assert (has-influence board location player) (str player " has no influence on " location))
    (update-in board [:influence location player] (comp (partial max 0) dec)))
(defn move-influence [board location0 location1 player]
    (-> board (remove-influence location0 player) (add-influence location1 player)))
(defn replace-influence [board location player0 player1]
    (-> board (remove-influence location player0) (add-influence location player1)))
(defn swap-influence [board location0 player0 location1 player1]
    (-> board (replace-influence location0 player0 player1) (replace-influence location1 player1 player0)))
(defn get-current-holder [board location]
    (let [inf-map (get-in board [:influence location])
          max-inf (apply unique-max (vals inf-map))]
        (if-not (or (nil? max-inf) (zero? max-inf)) (inverted-get inf-map max-inf))))
(defn get-holder [board location]
    (if (location-full? board location) (get-current-holder board location)))
(defn get-holdings [board player]
    (filter (fn [loc] (= player (get-holder board loc))) (vals (:locations board))))
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
          max-score (apply unique-max (vals scores))]
        (if-not (or (nil? max-score) (zero? max-score)) (inverted-get scores max-score))))
(defn inc-turn [board] (update-in board [:turn] inc))

; params : Map Keyword Type
; doable : (Board, Player) -> Boolean
;     Returns true if special can be performed in a meaningful way
; check : (Board, Player, Map Keyword Object) -> Boolean
;     Returns true if provided args are valid
; effect : (Board, Player, Map Keyword Object) -> Board
;     Returns altered board (might raise assertion errors)
(defrecord Special [params doable check effect])

(defn run-special [board {:keys [params doable check effect] :as special} player callback]
    (if-not (doable board player)
        board
        (let [args (if (seq params) (callback player params))]
            (assert (check args))
            (effect board player args))))

(defn eval-special [board special player callback]
    (if (not (nil? special))
        (run-special board special player callback)
        board))

(defn eval-influence [board location player]
    (if-not (or (nil? location) (location-full? board location))
        (add-influence board location player)
        board))

; callback : Player (Map Keyword String) -> Map Keyword Object
(defn reward-winner [board figure winner callback]
    (-> board
        (add-support winner (:support figure))
        (add-bank winner (:bank figure))
        (eval-influence (:location figure) winner)
        (eval-special (:special figure) winner callback)))

(defn eval-reward [board figure winner callback]
    (if (nil? winner)
        board
        (reward-winner board figure winner callback)))

; figure-list : Vector Figure
; bids : Map Figure (Map Player Bid)
; callback : Player (Map Keyword String) -> Map Keyword Object
; => Board
(defn eval-bids
    ([board bids callback]
        (eval-bids board bids callback (:fig-order board)))
    ([board bids callback figure-list]
        (if (empty? figure-list)
            board
            (let [figure (first figure-list)
                  winner (get-winner (bids figure))
                  board (eval-reward board figure winner callback)]
                (eval-bids board bids callback (rest figure-list))))))

(defn run-turn [board bids callback]
    (-> board
        clear-banks
        (eval-bids bids callback)
        fill-banks
        inc-turn))

; Offically, the guard house is like any other Influence Space in that
; it can be swapped with the Apothecary (if the guard house occupant wins the Apoth),
; and the game isn't over if the Guard House is not occupied.
; I don't feel like implementing it that way.
(def occupy-guard-house
    (Special. {}
        (constantly true)
        (constantly true)
        (fn [board winner _] (assoc board :guard-house winner))))

(def steal-spot
    (Special. {:location "Location" :player "Player"}
        (fn [board winner]
            (some
                (fn [location]
                    (let [inf-map (dissoc (get-in board [:influence location]) (:guard-house board))]
                        (pos? (reduce + (vals inf-map)))))
                (vals (:locations board))))
        (fn [board winner {:keys [location player]}]
            (and
                (touchable? board winner player)
                ))
        (fn [board winner {:keys [location player]}]
            (assert (touchable? board winner player))
            (replace-influence location player winner))))

(def switch-spots
    (Special. {:location0 "Location" :player0 "Player" :location1 "Location" :player1 "Player"}
        (fn [board winner] nil)
        (fn [board winner {:keys [location0 player0 location1 player1]}] false)
        (fn [board winner {:keys [location0 player0 location1 player1]}]
            (assert (touchable? board winner player0))
            (assert (touchable? board winner player1))
            (swap-influence location0 player0 location1 player1))))

(defn eval-reassignment [winner board [location0 location1]]
    (move-influence board location0 location1 winner))

(def reassign-up-to-2-spots
    (Special. {:reassignments "[(Location, Location)]"}
        (fn [board winner] nil)
        (fn [board winner {:keys [reassignments]}] false)
        (fn [board winner {:keys [reassignments]}]
            (reduce (partial eval-reassignment winner) board reassignments))))

(def take-open-spot
    (Special. {:location "Location"}
        (fn [board _] (not (board-full? board)))
        (fn [board _ {:keys [location]}] (not (location-full? board location)))
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
    (->Location :palace     55 8)))

(defn figure [id support bank immunities & [location special]]
    (->Figure id support (apply ->Bid bank) immunities location special))

; locations-map : Map Keyword Location
(defn make-figures [locations]
    (let [figs [(figure :general    1  [0 0 1] -f (:fortress   locations))
                (figure :captain    1  [0 0 1] -f (:harbor     locations))
                (figure :innkeeper  3  [0 1 0] b- (:tavern     locations))
                (figure :magistrate 1  [0 1 0] b- (:town-hall  locations))
                (figure :viceroy    0  [0 0 0] -- (:palace     locations) occupy-guard-house)
                (figure :priest     6  [0 0 0] -- (:cathedral  locations))
                (figure :aristocrat 5  [3 0 0] -- (:plantation locations))
                (figure :merchant   3  [5 0 0] -- (:market     locations))
                (figure :printer    10 [0 0 0] --)
                (figure :spy        0  [0 0 0] b- nil steal-spot)
                (figure :apothecary 0  [0 0 0] -f nil switch-spots)
                (figure :messenger  3  [0 0 0] -- nil reassign-up-to-2-spots)
                (figure :mayor      0  [0 0 0] bf nil take-open-spot)
                (figure :constable  5  [0 1 0] bf)
                (figure :rogue      0  [0 2 0] bf)
                (figure :mercenary  0  [0 0 1] bf)]]
        [(id-map figs) figs]))
; => [Map Keyword Figure, Vector Figure]

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
