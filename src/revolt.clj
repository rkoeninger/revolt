(ns revolt
    (:use [clojure.set :only [map-invert]])
    (:use [clojure.math.combinatorics :only [cartesian-product]]))

(load "revolt_helpers")

(defrecord Player [id]
    java.lang.Object
    (toString [_] (name id)))

(defrecord Bid [gold blackmail force]
    java.lang.Comparable
    (compareTo [x y] (serial-compare x y [:force :blackmail :gold]))
    java.lang.Object
    (toString [_] (str "(Bid " gold "g " blackmail "b " force "f)")))

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

(defrecord Board [turn      ; Nat
                  locations ; Collection Location
                  figures   ; Vector Figure
                  players   ; Collection Player
                  banks     ; Map Player Bid
                  influence ; Map Location (Map Player Nat)
                  support]  ; Map Player Nat
    java.lang.Object
    (toString [_] (str "(Board support:" support
                           " influence:" influence
                               " banks:" banks
                                " turn:" turn ")")))

(defmethod print-method Bid [x ^java.io.Writer w] (.write w (str x)))
(defmethod print-method Location [x ^java.io.Writer w] (.write w (str x)))
(defmethod print-method Figure [x ^java.io.Writer w] (.write w (str x)))
(defmethod print-method Player [x ^java.io.Writer w] (.write w (str x)))
(defmethod print-method Board [x ^java.io.Writer w] (.write w (str x)))

(def plus-bid (partial merge-with +))
(def zero-bid (->Bid 0 0 0))
(def zero-bid? (partial = zero-bid))
(def has-blackmail? (comp pos? :blackmail))
(def has-force? (comp pos? :force))
(defn get-support-value [{:keys [gold blackmail force]}]
    (+ gold (* 3 blackmail) (* 5 force)))
(defn get-winner [bid-map] ; [Map Player Bid] -> Player | nil
    (let [winning-bid (unique-max (vals bid-map))]
        (if-not (or (nil? winning-bid) (zero-bid? winning-bid))
            (inverted-get bid-map winning-bid))))
(def has-special? (comp not nil? :special))
(def blackmail-immune? (comp boolean :blackmail :immunities))
(def force-immune? (comp boolean :force :immunities))
(defn validate-bid [fig bid]
    (nor (and (has-blackmail? bid) (blackmail-immune? fig))
         (and (has-force? bid) (force-immune? fig))))
(defn validate-bids [bank  ; Bid
                     bids] ; Map Figure Bid
    (and (> (count bids) 0)
         (<= (count bids) 6)
         (= bank (reduce plus-bid (vals bids)))
         (every? (partial apply validate-bid) bids)))
(defn set-guard-house [board player] (assoc board :guard-house player))
(defn touchable? [board winner player]
    (or (= winner player) (not= player (:guard-house board))))
(defn occupied-influence [board location]
    (reduce + (vals (get-in board [:influence location]))))
(defn available-influence [board location]
    (max 0 (- (:influence-limit location) (occupied-influence board location))))
(defn location-full? [board location]
    (let [occupied (occupied-influence board location)
          limit (:influence-limit location)]
        (>= occupied limit)))
(defn board-full? [board] (every? (partial location-full? board) (:locations board)))
(defn get-influence [board location player] (get-in board [:influence location player]))
(defn has-influence? [board location player]
    (not (zero? (get-influence board location player))))
(defn add-support [board player amount]
    (update-in board [:support player] (partial + amount)))
(defn get-support [board player] (get-in board [:support player]))
(defn get-bank [board player] (get-in board [:banks player]))
(defn add-bank [board player bank]
    (update-in board [:banks player] (partial plus-bid bank)))
(defn clear-banks [board] (assoc board :banks (zipmap (:players board) (repeat zero-bid))))
(defn fill-bank [bank]
    (let [token-count (reduce + (vals bank))
          extra-gold (max 0 (- 5 token-count))]
        (plus-bid bank (->Bid extra-gold 0 0))))
(defn fill-banks [board] (update-in board [:banks] (partial map-vals fill-bank)))
(defn add-influence [board location player]
    (assert (not (location-full? board location)) (str location " already full"))
    (update-in board [:influence location player] inc))
(defn remove-influence [board location player]
    (assert (has-influence? board location player) (str player " has no influence on " location))
    (update-in board [:influence location player] (comp (partial max 0) dec)))
(defn move-influence [board location0 location1 player]
    (-> board
        (remove-influence location0 player)
        (add-influence location1 player)))
(defn replace-influence [board location player0 player1]
    (-> board
        (remove-influence location player0)
        (add-influence location player1)))
(defn swap-influence [board location0 player0 location1 player1]
    (-> board
        (replace-influence location0 player0 player1)
        (replace-influence location1 player1 player0)))
(defn get-current-holder [board location]
    (let [influence (get-in board [:influence location])
          max-inf (unique-max (vals influence))]
        (if-not (or (nil? max-inf) (zero? max-inf)) (inverted-get influence max-inf))))
(defn get-holder [board location]
    (if (location-full? board location) (get-current-holder board location)))
(defn get-holdings [board player]
    (filter #(= player (get-holder board %)) (:locations board)))
(defn get-score [board player]
    (+ (get-support board player)
       (reduce + (map :reduce (get-holdings board player)))
       (get-support-value (get-bank board player))))
(defn get-scores [board]
    (let [players (:players board)]
        (zipmap players (map (partial get-score board) players))))
(def game-over? board-full?)
(defn get-rank [board player]
    (let [ordered-scores (sort (distinct (vals (get-scores board))))]
        (- (count ordered-scores)
           (.indexOf ordered-scores (get-score board player)))))
(defn get-rankings [board]
    (let [players (:players board)]
        (zipmap players (map (partial get-rank board) players))))
(defn get-game-winner [board]
    (let [scores (get-scores board)
          max-score (unique-max (vals scores))]
        (if-not (or (nil? max-score) (zero? max-score))
            (inverted-get scores max-score))))
(defn inc-turn [board] (update-in board [:turn] inc))
(defn run-special [board {:keys [params doable check effect]} player callback]
    (if-not (doable board player)
        board
        (let [args (if (seq params) (callback player params))]
            (assert (check board player args))
            (effect board player args))))
(defn reward-winner [board {:keys [support bank location special]} winner callback]
    (let [eval-support (fn [board] (add-support board winner support))
          eval-bank (fn [board] (add-bank board winner bank))
          eval-influence
              (fn [board] (if (or (nil? location) (location-full? board location)) board
                  (add-influence board location winner)))
          eval-special
              (fn [board] (if (nil? special) board
                  (run-special board special winner callback)))]
        (-> board eval-support eval-bank eval-influence eval-special)))
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
                  board (if (nil? winner) board (reward-winner board figure winner callback))]
                (recur board bids callback (rest figure-list))))))
(defn run-turn [board bids callback]
    (-> board
        clear-banks
        (eval-bids bids callback)
        fill-banks
        inc-turn))

(load "revolt_setup")
