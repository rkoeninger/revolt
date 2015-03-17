(ns revolt
    (:use [clojure.set :only [map-invert]])
    (:use [clojure.math.combinatorics :only [cartesian-product]]))

(load "revolt_helpers")

(defrecord Player [id]
    java.lang.Object
    (toString [_] (name id)))

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

(defrecord Location [id support influence-limit]
    java.lang.Object
    (toString [_] (name id)))

(defrecord Special [params   ; Map Keyword String
                             ;     Description of arguments needed by special
                    doable   ; [Board  Player] -> Boolean
                             ;     Returns true if winner can meaningfully perform special
                    check    ; [Board  Player  (Map Keyword Object)] -> Boolean
                             ;     Returns true if provided args are valid
                    effect]) ; [Board  Player  (Map Keyword Object)] -> Board
                             ;     Returns altered board according to args

(defrecord Figure [id
                   support    ; Nat
                   bank       ; Bid
                   immunities ; Set Keyword
                   location   ; Location | nil
                   special]   ; Special | nil
    java.lang.Object
    (toString [_] (name id)))

(defrecord Board [locations ; Collection Location
                  figures   ; Vector Figure
                  players   ; Collection Player
                  banks     ; Map Player Bid
                  influence ; Map Location (Map Player Nat)
                  support   ; Map Player Nat
                  turn]     ; Nat
    java.lang.Object
    (toString [_] (str "(Board support:" support " influence:" influence " banks:" banks " turn:" turn ")")))

(def bid0 (->Bid 0 0 0))
(def bid+ (partial merge-with +))
(def has-blackmail? (comp pos? :blackmail))
(def has-force? (comp pos? :force))
(def zero-bid? (partial = bid0))
(defn get-support-value [{:keys [gold blackmail force]}]
    (+ gold (* 3 blackmail) (* 5 force)))
(defn get-winner [bid-map] ; [Map Player Bid] => Player | nil
    (let [winning-bid (apply unique-max (vals bid-map))]
        (if-not (or (nil? winning-bid) (zero-bid? winning-bid)) (inverted-get bid-map winning-bid))))
(def has-special? (comp not nil? :special))
(def blackmail-immune? (comp boolean :blackmail :immunities))
(def force-immune? (comp boolean :force :immunities))
(defn validate-bid [fig bid]
    (not (or
        (and (has-blackmail? bid) (blackmail-immune? fig))
        (and (has-force? bid) (force-immune? fig)))))
(defn validate-bids [bank bids] ; [Bid  (Map Figure Bid)] => Boolean
    (and
        (> (count bids) 0)
        (<= (count bids) 6)
        (= bank (reduce bid+ (vals bids)))
        (every? (partial apply validate-bid) bids)))
(defn set-guard-house [board player] (assoc board :guard-house player))
(defn touchable? [board winner player] (or (= winner player) (not= player (:guard-house board))))
(defn occupied-influence [board location] (reduce + (vals (get-in board [:influence location]))))
(defn available-influence [board location] (max 0 (- (:influence-limit location) (occupied-influence board location))))
(defn location-full? [board location]
    (let [occupied (occupied-influence board location)
          limit (:influence-limit location)]
        (>= occupied limit)))
(defn not-full? [board location] (not (location-full? board location)))
(defn board-full? [board] (every? (partial location-full? board) (:locations board)))
(defn get-influence [board location player] (get-in board [:influence location player]))
(defn has-influence? [board location player] (not (zero? (get-in board [:influence location player]))))
(defn add-support [board player amount] (update-in board [:support player] (partial + amount)))
(defn get-support [board player] (get-in board [:support player]))
(defn get-bank [board player] (get-in board [:banks player]))
(defn add-bank [board player bank] (update-in board [:banks player] (partial bid+ bank)))
(defn clear-banks [board] (assoc board :banks (zipmap (:players board) (repeat bid0))))
(def min-token-count nil) ; Forward declare, actual value is specified later
(defn fill-bank [bank]
    (let [token-count (reduce + (vals bank))
          extra-gold (max 0 (- min-token-count token-count))]
        (bid+ bank (->Bid extra-gold 0 0))))
(defn fill-banks [board] (update-in board [:banks] (partial hm-map fill-bank)))
(defn add-influence [board location player]
    (assert (not (location-full? board location)) (str location " already full"))
    (update-in board [:influence location player] (comp inc #(or % 0))))
(defn remove-influence [board location player]
    (assert (has-influence? board location player) (str player " has no influence on " location))
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
(defn get-holdings [board player] ; [Board  Player] => Seq Location
    (filter #(= player (get-holder board %)) (:locations board)))
(defn get-score [board player]
    (+
        (get-in board [:support player])
        (reduce + (map :support (get-holdings board player)))
        (get-support-value (get-bank board player))))
(defn get-scores [board] ; [Board] => Map Player Nat
    (into {} (map (partial get-score board) (:players board))))
(def game-over? board-full?)
(defn get-game-winner [board]
    (let [scores (get-scores board)
          max-score (apply unique-max (vals scores))]
        (if-not (or (nil? max-score) (zero? max-score)) (inverted-get scores max-score))))
(defn inc-turn [board] (update-in board [:turn] inc))

(defn run-special [board {:keys [params doable check effect] :as special} player callback]
    (if-not (doable board player)
        board
        (let [args (if (seq params) (callback player params))]
            (assert (check board player args))
            (effect board player args))))

(defn eval-special [board special player callback]
    (if (not (nil? special))
        (run-special board special player callback)
        board))

(defn eval-influence [board location player]
    (if-not (or (nil? location) (location-full? board location))
        (add-influence board location player)
        board))

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

(defn eval-bids
    ([board bids callback] (eval-bids board bids callback (:figures board)))
    ([board        ; Board
      bids         ; Map Figure (Map Player Bid)
      callback     ; [Player  (Map Keyword String)] -> Map Keyword Object
      figure-list] ; Vector Figure
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

; Occupant of the guard house is immue to rival's use of Spy and Apothecary
(def occupy-guard-house
    (Special. {}
        (constantly true)
        (constantly true)
        (fn [board winner args] (set-guard-house board winner))))

(defn can-steal? [board winner player location]
    (and (not= winner player)
        (touchable? board winner player)
        (has-influence? board location player)))

; Replace one Influence Cube with one of your own.
(def steal-spot
    (Special. {:location "Location" :player "Player"}
        (fn [board winner]
            (let [pairs (cartesian-product (:locations board) (:players board))]
                (some
                    (fn [[location player]]
                        (can-steal? board winner player location))
                    pairs)))
        (fn [board winner {:keys [location player]}]
            (and (touchable? board winner player)
                (has-influence? board location player)))
        (fn [board winner {:keys [location player]}]
            (replace-influence board location player winner))))

(defn can-swap? [board winner location0 player0 location1 player1]
    (and (not= location0 location1)
        (not= player0 player1)
        (touchable? board winner player0)
        (touchable? board winner player1)
        (has-influence? board location0 player0)
        (has-influence? board location1 player1)))

(defn any-swaps? [board winner]
    (let [pairs (cartesian-product (:locations board) (:players board))
          pair-pairs (cartesian-product pairs pairs)]
        (some
            (fn [[[location0 player0] [location1 player1]]]
                (can-swap? board winner location0 player0 location1 player1))
            pair-pairs)))

; Swap the cubes in any two Influence Spaces.
(def swap-spots
    (Special. {:location0 "Location" :player0 "Player" :location1 "Location" :player1 "Player"}
        any-swaps?
        (fn [board winner {:keys [location0 player0 location1 player1]}]
            (can-swap? board winner location0 player0 location1 player1))
        (fn [board winner {:keys [location0 player0 location1 player1]}]
            (swap-influence board location0 player0 location1 player1))))

; Reassign up to two of your cubes already on the board.
(def reassign-spots
    (Special. {:reassignments "[[Location Location]]"}
        (fn [board winner]
            (some
                (fn [location]
                    (and
                        (has-influence? board location winner)
                        (some
                            (comp not (partial location-full? board))
                            (other-than (:locations board) location))))
                (:locations board)))
        (fn [board winner {:keys [reassignments]}]
            (and
                (<= (count reassignments) 2)
                (let [existing-cubes (into {} (map #(vector (first %) (get (last %) winner)) (:influence board)))
                      selected-cubes (frequencies (map first reassignments))
                      diffs (merge-with - existing-cubes selected-cubes)]
                    (every? (comp not neg?) (vals diffs)))
                (let [available-spots (into {} (map #(vector % (available-influence board %)) (:locations board)))
                      selected-spots (frequencies (map last reassignments))
                      diffs (merge-with - available-spots selected-spots)]
                    (every? (comp not neg?) (vals diffs)))))
        (fn [board winner {:keys [reassignments]}]
            (reduce
                (fn [board [src dest]] (move-influence board src dest winner))
                board
                reassignments))))

; Influence any open Influence Space.
(def take-open-spot
    (Special. {:location "Location"}
        (fn [board winner]
            (not (board-full? board)))
        (fn [board winner {:keys [location]}]
            (not (location-full? board location)))
        (fn [board winner {:keys [location]}]
            (add-influence board location winner))))

(def -- #{})
(def b- #{:blackmail})
(def -f #{:force})
(def bf #{:blackmail :force})

(def locations [
    (->Location :tavern     20 4)
    (->Location :market     25 5)
    (->Location :plantation 30 6)
    (->Location :cathedral  35 7)
    (->Location :harbor     40 6)
    (->Location :town-hall  45 7)
    (->Location :fortress   50 8)
    (->Location :palace     55 8)
])

(defn location [id] (first (filter (fn [l] (= id (:id l))) locations)))

(def figures [
    (->Figure :general    1  (->Bid 0 0 1) -f (location :fortress)   nil)
    (->Figure :captain    1  (->Bid 0 0 1) -f (location :harbor)     nil)
    (->Figure :innkeeper  3  (->Bid 0 1 0) b- (location :tavern)     nil)
    (->Figure :magistrate 1  (->Bid 0 1 0) b- (location :town-hall)  nil)
    (->Figure :viceroy    0  (->Bid 0 0 0) -- (location :palace)     occupy-guard-house)
    (->Figure :priest     6  (->Bid 0 0 0) -- (location :cathedral)  nil)
    (->Figure :aristocrat 5  (->Bid 3 0 0) -- (location :plantation) nil)
    (->Figure :merchant   3  (->Bid 5 0 0) -- (location :market)     nil)
    (->Figure :printer    10 (->Bid 0 0 0) -- nil nil)
    (->Figure :spy        0  (->Bid 0 0 0) b- nil steal-spot)
    (->Figure :apothecary 0  (->Bid 0 0 0) -f nil swap-spots)
    (->Figure :messenger  3  (->Bid 0 0 0) -- nil reassign-spots)
    (->Figure :mayor      0  (->Bid 0 0 0) bf nil take-open-spot)
    (->Figure :constable  5  (->Bid 0 1 0) bf nil nil)
    (->Figure :rogue      0  (->Bid 0 2 0) bf nil nil)
    (->Figure :mercenary  0  (->Bid 0 0 1) bf nil nil)
])

(def init-bank (->Bid 3 1 1))

(def min-token-count 5)

(defn make-board [players]
    (->Board
        locations
        figures
        players
        (zipmap players (repeat init-bank))
        (zipmap locations (repeat (zipmap players (repeat 0))))
        (zipmap players (repeat 0))
        1))

(defmethod print-method Bid [x ^java.io.Writer w] (.write w (str x)))
(defmethod print-method Location [x ^java.io.Writer w] (.write w (str x)))
(defmethod print-method Figure [x ^java.io.Writer w] (.write w (str x)))
(defmethod print-method Player [x ^java.io.Writer w] (.write w (str x)))
(defmethod print-method Board [x ^java.io.Writer w] (.write w (str x)))
