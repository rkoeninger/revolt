(ns revolt
    (:use [clojure.set :only [map-invert]])
    (:use [clojure.math.combinatorics :only [cartesian-product]]))

(load "revolt_helpers")

(defrecord Player [id])

(defrecord Bid [gold blackmail force]
    java.lang.Comparable
    (compareTo [x y] (serial-compare x y [:force :blackmail :gold])))

(defrecord Special [id
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
                   special])  ; Special | nil

(defrecord Board [turn      ; Nat
                  locations ; Collection Location
                  figures   ; Vector Figure
                  players   ; Collection Player
                  banks     ; Map Player Bid
                  influence ; Map Location (Map Player Nat)
                  support]) ; Map Player Nat
(comment
(defmethod print-method Bid [{:keys [gold blackmail force]} ^java.io.Writer w]
  (.write w (str "<Bid " gold "g " blackmail "b " force "f>")))
(defmethod print-method Figure [{:keys [id]} ^java.io.Writer w] (.write w (name id)))
(defmethod print-method Player [{:keys [id]} ^java.io.Writer w] (.write w (name id)))
(defmethod print-method Board [{:keys [support influence banks turn guard-house]} ^java.io.Writer w]
  (.write w (str "(Board support:" support
                     " influence:" influence
                         " banks:" banks
                          " turn:" turn
                   " guard-house:" guard-house ")")))
)
(def plus-bid (partial merge-with +))
(def zero-bid (->Bid 0 0 0))
(def zero-bid? (partial = zero-bid))
(def pos-bid? (comp (partial some pos?) vals))
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
(defn validate-bid [figure bid]
    (nor (and (has-blackmail? bid) (blackmail-immune? figure))
         (and (has-force? bid) (force-immune? figure))))
(defn validate-bids [bank  ; Bid
                     bids] ; Map Figure Bid
    (let [bid-count (count (filter pos-bid? (vals bids)))]
        (and (> bid-count 0)
             (<= bid-count 6)
             (= bank (reduce plus-bid (vals bids)))
             (every? (partial apply validate-bid) bids))))
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
       (reduce + (map :support (get-holdings board player)))
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
(defn run-special [board
                   {{:keys [doable check effect]} :special :as figure}
                   player
                   callback]
    (if-not (doable board player)
        board
        (let [args (callback board player figure)]
            (if (check board player args)
                (effect board player args)
                (do
                    (println "Board " board)
                    (println "Player " player)
                    (println "Args " args)
                    (throw (Exception. "Invalid special arguments")))))))
(defn reward-winner [board
                     {:keys [support bank location special] :as figure}
                     winner
                     callback]
    (let [eval-support (fn [board] (add-support board winner support))
          eval-bank (fn [board] (add-bank board winner bank))
          eval-influence
              (fn [board] (if (or (nil? location) (location-full? board location)) board
                  (add-influence board location winner)))
          eval-special
              (fn [board] (if (nil? special) board
                  (run-special board figure winner callback)))]
        (-> board eval-support eval-bank eval-influence eval-special)))
(defn eval-bids
    ([board bids callback] (eval-bids board bids callback (:figures board)))
    ([board        ; Board
      bids         ; Map Figure (Map Player Bid)
      callback     ; [Board Player Figure] -> Map Keyword Any
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