(ns revolt.core
    (:use [clojure.set :only [map-invert]]))

(defn in? [x coll] (some #(= x %) coll))
(defn nor [& coll] (not (some true? coll)))

; (Ord b) => (a, a, [a -> b]) -> 0 | 1 | -1
(defn serial-compare [x y fs]
    (let [f (first fs)]
        (cond (empty? fs)       0
              (> (f x) (f y))   1
              (< (f x) (f y))  -1
              :else            (recur x y (rest fs)))))
(defn inverted-get [m v] ((map-invert m) v))
(defn unique-max
    ([coll] (unique-max nil coll))
    ([cmp coll]
        (case (count coll)
            0 nil
            1 (first coll)
            (let [[x y] (take 2 (reverse (if cmp (sort cmp coll) (sort coll))))]
                (if (not= x y) x)))))
(defn other-than [coll x] (filter (partial not= x) coll))
(defn map-kv [f g m] (into {} (for [[k v] m] [(f k) (g v)])))
(defn map-vals [f m] (map-kv identity f m))
(defn map-keys [f m] (map-kv f identity m))
(defn map-entries [f m] (into {} (map (partial apply f) m)))

; ((Map a (Map b c)) b) -> (Map a c)
(defn sub-map [outer-map inner-key]
    (reduce-kv
        ; ((Map a c) a (Map b c)) -> (Map a c)
        (fn [result-map outer-key inner-map]
            (assoc result-map outer-key (inner-map inner-key)))
        {}
        outer-map))

(defn first-not-nil [x y] (if (nil? x) y x))

(defn relevel
    ; (Map a (Map b c)) -> (Map b (Map a c))
    ([m]
        (relevel m nil))
    ; ((Map a (Map b c)) c) -> (Map b (Map a c))
    ([m default-val]
        (relevel m default-val (keys m) (set (mapcat keys (vals m)))))
    ; ((Map a (Map b c)) c (Set a) (Set b)) -> (Map b (Map a c))
    ([m default-val all-outer-keys all-inner-keys]
        (let [default-inner-map
              (zipmap all-outer-keys (repeat default-val))
              or-default
              #(merge-with first-not-nil (sub-map m %) default-inner-map)]
            (into {} (map #(vector % (or-default %)) all-inner-keys)))))

(defn ->Player [id] {:id id})

(defn ->Bid [gold blackmail force]
  {:gold gold
   :blackmail blackmail
   :force force})

(defn ->Location [id support influence-limit]
  {:id id
   :support support
   :influence-limit influence-limit})

(defn ->Special [id doable check effect]
  {:id id           ; Keyword
   :doable doable   ; [Board  Player] -> Boolean
                    ;     Returns true if winner can meaningfully perform special
   :check check     ; [Board  Player  (Map Keyword Object)] -> Boolean
                    ;     Returns true if provided args are valid
   :effect effect}) ; [Board  Player  (Map Keyword Object)] -> Board
                    ;     Returns altered board according to args

(defn ->Figure [id support bank immunities location special]
  {:id id                 ; Keyword
   :support support       ; Nat
   :bank bank             ; Bid
   :immunities immunities ; Set Keyword
   :location location     ; Location | nil
   :special special})     ; Special | nil

(defn ->Board [turn locations figures players banks influence support]
  {:turn turn           ; Nat
   :locations locations ; Collection Location
   :figures figures     ; Vector Figure
   :players players     ; Collection Player
   :banks banks         ; Map Player Bid
   :influence influence ; Map Location (Map Player Nat)
   :support support})   ; Map Player Nat

(def zero-bid (->Bid 0 0 0))
(def zero-bid? (partial = zero-bid))
(def plus-bid (partial merge-with +))
(def pos-bid? (comp (partial some pos?) vals))
(defn compare-bids [x y]
    (pos?
        (serial-compare
            (or x zero-bid)
            (or y zero-bid)
            (map #(fnil % 0) [:force :blackmail :gold]))))
(def bid-comparator (comparator (complement compare-bids)))
(def has-blackmail? (comp pos? :blackmail))
(def has-force? (comp pos? :force))
(def blackmail-immune? (comp boolean :blackmail :immunities))
(def force-immune? (comp boolean :force :immunities))
(defn get-support-value [{:keys [gold blackmail force]}]
    (reduce + (map * [1 3 5] [gold blackmail force])))
(defn get-winner [bid-map] ; [Map Player Bid] -> Player | nil
    (if-let [winning-bid (unique-max bid-comparator (vals bid-map))]
        (if (pos-bid? winning-bid)
            (inverted-get bid-map winning-bid))))
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
(defn board-full? [board]
    (every? (partial location-full? board) (:locations board)))
(defn get-influence [board location player]
    (get-in board [:influence location player]))
(defn has-influence? [board location player]
    (pos? (get-influence board location player)))
(defn add-support [board player amount]
    (update-in board [:support player] + amount))
(defn get-support [board player] (get-in board [:support player]))
(defn get-bank [board player] (get-in board [:banks player]))
(defn add-bank [board player bank]
    (update-in board [:banks player] plus-bid bank))
(defn clear-banks [board]
    (assoc board :banks (zipmap (:players board) (repeat zero-bid))))
(defn fill-bank [bank]
    (let [token-count (reduce + (vals bank))
          extra-gold (max 0 (- 5 token-count))]
        (plus-bid bank (->Bid extra-gold 0 0))))
(defn fill-banks [board]
    (update board :banks (partial map-vals fill-bank)))
(defn add-influence [board location player]
    (assert (not (location-full? board location))
        (str location " already full"))
    (update-in board [:influence location player] inc))
(defn remove-influence [board location player]
    (assert (has-influence? board location player)
        (str player " has no influence on " location))
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
    (let [influence (get-in board [:influence location])]
        (if-let [max-inf (unique-max (vals influence))]
            (if (pos? max-inf)
                (inverted-get influence max-inf)))))
(defn get-holder [board location]
    (if (location-full? board location)
        (get-current-holder board location)))
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
    (let [scores (get-scores board)]
        (if-let [max-score (unique-max (vals scores))]
              (inverted-get scores max-score))))
(defn inc-turn [board] (update board :turn inc))
(defn reward-winner [board
                     {:keys [support bank location]}
                     winner]
    (let [eval-support (fn [board] (add-support board winner support))
          eval-bank (fn [board] (add-bank board winner bank))
          eval-influence
              (fn [board]
                  (if (or (nil? location) (location-full? board location))
                      board
                      (add-influence board location winner)))]
        (-> board
            eval-support
            eval-bank
            eval-influence)))
(defn eval-bids [board
                 bids
                 figure-list
                 {:keys [special player args] :as special-input}]
                 ; {:special Special :player Player :args ?}
    (if special-input
        (let [{:keys [check effect]} special]
            (if (check board player args)
                (recur (effect board player args) bids figure-list nil)
                (throw #?(:cljs (js/Error. "Invalid special arguments")
                          :clj (Exception. "Invalid special arguments")))))
        (if (empty? figure-list)
            {:mode :complete :board board}
            (let [figure (first figure-list)
                  winner (get-winner (bids figure))
                  board (if-not winner
                            board
                            (reward-winner board figure winner))
                  special (:special figure)
                  doable (:doable special)]
                (if (and special (doable board winner))
                ; TODO occupy-guard-house
                    {:mode (:id special) :winner winner :figure-list (rest figure-list) :board board}
                    (recur board bids (rest figure-list) nil))))))
(defn resume-turn [board bids figure-list special-input]
    (let [{:keys [mode board] :as result} (eval-bids board bids figure-list special-input)]
        (assoc result
            :board
            (if (= :complete mode)
                (-> board
                    fill-banks
                    inc-turn)
                board))))
(defn run-turn [board bids]
    (resume-turn (clear-banks board) bids (:figures board) nil))
