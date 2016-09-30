(ns revolt.core
  (:use [clojure.set :only [map-invert]]))

(defn each [coll f] (map f coll))
(defn inverted-get [m v] ((map-invert m) v))
(defn order [coll & [cmp]]
  (if cmp (sort cmp coll) (sort coll)))
(defn unique-max [coll & [cmp]]
  (case (count coll)
    0 nil
    1 (first coll)
    (let [[x y] (take 2 (reverse (order coll cmp)))]
      (if (not= x y) x))))
(defn other-than [x coll] (filter (partial not= x) coll))
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

(defn or-else [x y] (if (nil? x) y x))

(defn relevel
  ; (Map a (Map b c)) -> (Map b (Map a c))
  ([m]
    (relevel m nil))
  ; ((Map a (Map b c)) c) -> (Map b (Map a c))
  ([m default-val]
    (relevel m default-val (keys m) (set (mapcat keys (vals m)))))
  ; ((Map a (Map b c)) c (Set a) (Set b)) -> (Map b (Map a c))
  ([m default-val all-outer-keys all-inner-keys]
    (let [default-inner-map (zipmap all-outer-keys (repeat default-val))
          or-default #(merge-with or-else (sub-map m %) default-inner-map)]
      (into {} (map #(vector % (or-default %)) all-inner-keys)))))

(defn ->Player [id name] {:id id :name name})

(defn ->Bid [gold blackmail force]
  {:gold gold
   :blackmail blackmail
   :force force})

(defn ->Location [id support method cap]
  {:id id
   :support support
   :method method
   :cap cap})

; TODO rename :requires-input to :certain/:uncertain
; and have it be a function that determines if input is required
; or if special can only have one effect

(defn ->Special [id requires-input doable check effect]
  {:id id           ; Keyword
   :requires-input requires-input ; Boolean
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
  {:mode :ready
   :turn turn           ; Nat
   :locations locations ; Collection Location
   :figures figures     ; Vector Figure
   :players players     ; Collection Player
   :banks banks         ; Map Player Bid
   :influence influence ; Map Location (Map Player Nat)
   :support support})   ; Map Player Nat

(defn fail [message]
  (throw #?(:cljs (js/Error. message)
            :clj (Exception. message))))

(def zero-bid (->Bid 0 0 0))
(def zero-bid? (partial = zero-bid))
(def plus-bid (partial merge-with +))
(def pos-bid? (comp (partial some pos?) vals))
(defn compare-bids [x y]
  (let [x (or x zero-bid)
        y (or y zero-bid)
        {fx :force bx :blackmail gx :gold} x
        {fy :force by :blackmail gy :gold} y]
    (cond
      (> fx fy) 1 (< fx fy) -1
      (> bx by) 1 (< bx by) -1
      (> gx gy) 1 (< gx gy) -1
      :else 0)))
(def less-than-bid? (comp neg? compare-bids))
(def greater-than-bid? (comp pos? compare-bids))
(def has-blackmail? (comp pos? :blackmail))
(def has-force? (comp pos? :force))
(def blackmail-immune? (comp boolean :blackmail :immunities))
(def force-immune? (comp boolean :force :immunities))
(defn get-support-value [{:keys [gold blackmail force]}]
  (reduce + (map * [1 3 5] [gold blackmail force])))
(defn get-winner [bid-map] ; [Map Player Bid] -> Player | nil
  (let [winning-bid (unique-max (vals bid-map) compare-bids)]
    (if (and winning-bid (pos-bid? winning-bid))
      (inverted-get bid-map winning-bid))))
(defn validate-bid [figure bid]
  (not (or (and (has-blackmail? bid) (blackmail-immune? figure))
           (and (has-force? bid) (force-immune? figure)))))
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
(defn available-influence [board {:keys [cap] :as location}]
  (max 0 (- cap (occupied-influence board location))))
(defn location-full? [board {:keys [cap] :as location}]
  (>= (occupied-influence board location) cap))
(defn location-empty? [board location]
  (zero? (occupied-influence board location)))
(defn board-full? [{:keys [locations] :as board}]
  (every? (partial location-full? board) locations))
(defn board-empty? [{:keys [locations] :as board}]
  (every? (partial location-empty? board) locations))
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
(defn winner-take-all? [{:keys [method]}] (= :winner-take-all method))
(defn per-influence? [{:keys [method]}] (= :per-influence method))
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
  (let [influence (get-in board [:influence location])
        max-inf (unique-max (vals influence))]
    (if (and max-inf (pos? max-inf))
      (inverted-get influence max-inf))))
(defn get-holder [board location]
  (if (location-full? board location)
    (get-current-holder board location)))
(defn get-holdings [{:keys [locations] :as board} player]
  (filter #(= player (get-holder board %)) locations))
(defn get-winner-take-all-score [board player]
  (->> (get-holdings board player)
       (filter winner-take-all?)
       (map :support)
       (reduce +)))
(defn get-per-influence-score [{:keys [locations] :as board} player]
  (letfn [(get-support [{:keys [support] :as location}]
            (* support (get-influence board location player)))]
    (reduce + (map get-support (filter per-influence? locations)))))
(defn get-score [{:keys [locations] :as board} player]
  (+ (get-support board player)
     (get-winner-take-all-score board player)
     (get-per-influence-score board player)
     (get-support-value (get-bank board player))))
(defn get-scores [board]
  (let [players (:players board)]
    (zipmap players (map (partial get-score board) players))))
(def game-over? board-full?)
(defn get-rank [board player]
  (let [ordered-scores (sort (distinct (vals (get-scores board))))]
    (- (count ordered-scores)
       (.indexOf ordered-scores (get-score board player)))))
(defn get-rankings [{:keys [players] :as board}]
  (zipmap players (map (partial get-rank board) players)))
(defn get-game-winner [board]
  (let [scores (get-scores board)]
    (if-let [max-score (unique-max (vals scores))]
      (inverted-get scores max-score))))
(defn inc-turn [board] (update board :turn inc))
(defn ready-board [board]
  (-> board
      (dissoc :special-winner)
      (dissoc :special)
      (dissoc :figure-list)
      (assoc :mode :ready)))
(defn suspended-board [board special-winner special figure-list]
  (-> board
      (assoc :special-winner special-winner)
      (assoc :special special)
      (assoc :figure-list figure-list)
      (assoc :mode :suspended)))
(defn ready? [{:keys [mode]}] (= :ready mode))
(defn suspended? [{:keys [mode]}] (= :suspended mode))
(defn reward-influence [board winner location]
  (if (or (nil? location) (location-full? board location))
    board
    (add-influence board location winner)))
(defn reward-winner [board {:keys [support bank location]} winner]
  (-> board
      (add-support winner support)
      (add-bank winner bank)
      (reward-influence winner location)))
(defn eval-bids [board bids figure-list]
  (if (empty? figure-list)
    (ready-board board)
    (let [[figure & figure-list] figure-list
          winner (get-winner (bids figure))
          board (if-not winner board (reward-winner board figure winner))
          special (:special figure)
          {:keys [id requires-input doable effect]} special]
      (if (and winner special (doable board winner))
        (if requires-input
          (suspended-board board winner special figure-list)
          (recur (ready-board (effect board winner nil)) bids figure-list))
        (recur (ready-board board) bids figure-list)))))
(defn finish [board]
  (if (ready? board)
    (-> board
        fill-banks
        inc-turn)
    board))
(defn run-turn [board bids & [args]]
  (cond
    (ready? board)
      (-> board
          clear-banks
          (eval-bids bids (:figures board))
          finish)
    (suspended? board)
      (let [{:keys [special special-winner figure-list]} board
            {:keys [check effect]} special]
        (assert args "Special args must be supplied")
        (assert (check board special-winner args) "Args invalid for this special")
        (-> board
            (effect special-winner args)
            ready-board
            (eval-bids bids figure-list)
            finish))
    :else
      (fail "Board in invalid state")))
