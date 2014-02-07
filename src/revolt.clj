
(ns revolt)
(use 'clojure.set)
(use 'clojure.pprint)

(defn map-vals [f map] (reduce (fn [m2 [k v]] (assoc m2 k (f v))) {} map))

(defn clear-banks [board] 
  (update-in board [:player-bank] (partial map-vals (fn [_] [0 0 0]))))

(defn fill-banks [board]
  (update-in board [:player-bank] (partial map-vals (fn [bank]
    (let [token-count (reduce + bank) [c b f] bank]
      (if (< token-count 5)
        [(+ c (- 5 token-count)) b f]
        bank))))))

(defn add-sup [board player amount]
  (update-in board [:player-sup player] (partial + amount)))

(defn +nil [x y] (+ (or x 0) (or y 0)))

(defn +bank [[c1 b1 f1] [c2 b2 f2]] [(+nil c1 c2) (+nil b1 b2) (+nil f1 f2)])

(defn add-bank [board player bank]
  (update-in board [:player-bank player] (partial +bank bank)))

(defn loc-full? [board loc]
  (>=
    (reduce + (vals (get-in board [:player-inf loc])))
    (get-in board [:locs loc :inf-limit])))

(defn board-full? [board]
  (every? (partial loc-full? board) (keys (board :locs))))

(defn add-inf [board player loc]
  (if (loc-full? board loc)
    (throw (Exception. (str loc " is already full")))
    (update-in board [:player-inf loc player] (partial + 1))))

(defn rem-inf [board player loc]
  (if (zero? (get-in board [:player-inf loc player]))
    (throw (Exception. (str player " has no influence on " loc)))
    (update-in board [:player-inf loc player] #(max 0 (- %1 1)))))

(defn move-inf [board player loc-from loc-to]
  (-> board (rem-inf player loc-from) (add-inf player loc-to)))

(defn replace-inf [board player-out player-in loc]
  (-> board (rem-inf player-out loc) (add-inf player-in loc)))

(defn swap-inf [board p1 loc1 p2 loc2]
  (-> board (replace-inf p1 p2 loc2) (replace-inf p2 p1 loc1)))

(defn total-inf [board loc]
  (reduce + (vals (get-in board [:player-inf loc]))))

(defn zero-bid? [x] (or (nil? x) (= x [0 0 0])))

(defn bid-has-blackmail [[c b f]] (and (not (nil? b)) (> b 0)))

(defn bid-has-force [[c b f]] (and (not (nil? f)) (> f 0)))

(defn compare-bids [x y]
  (let [[c1 b1 f1] x [c2 b2 f2] y]
    (cond
      (and (zero-bid? x) (zero-bid? y)) nil
      (zero-bid? y) x (zero-bid? x) y
      (> f1 f2) x (< f1 f2) y
      (> b1 b2) x (< b1 b2) y
      (> c1 c2) x (< c1 c2) y
      :else nil)))

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

(defn print-board [board]
  (do
    (println)
    (println "Guard House:")
    (pprint (board :guard-house))
    (println "Support:")
    (pprint (board :player-sup))
    (println "Influence:")
    (pprint (board :player-inf))
    (println "Bank:")
    (pprint (board :player-bank))
    (flush)))

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

(defn validate-fig-bid [fig bid]
  (not
    (or
      (and (bid-has-blackmail bid) (fig :b-immune))
      (and (bid-has-force bid) (fig :f-immune)))))

(defn validate-player-bids [board player bids]
  (and
    (<= (count bids) 6)
    (= (get-in board [:player-bank player]) (reduce +bank (vals bids)))
    (every? #(validate-fig-bid %1 (bids %1)) (keys bids))))

(defn read-bid [board player]
  (do
    (println player "has bank =" (get-in board [:player-bank player]))
    (flush)
    (let [bids (read-string (read-line))]
      (if (validate-player-bids board player bids)
        bids
        (do (println "invalid bid") (flush) (recur board player))))))

(defn prompt-bids [board]
  (do
    (print-board board)
    (map-conj (map
      (fn [p] (combine-bid-keys (read-bid board p) p))
      (keys (board :player-sup))))))

(defn prompt-spy [board winner]
  (do
    (println)
    (println winner "wins the Spy")
    (print-board board)
    (println "Pick location, player")
    (flush)
    (let [loc (keyword (read-line))
          player (read-line)]
      (replace-inf board player winner loc))))

(defn prompt-apothecary [board winner]
  (do
    (println)
    (println winner "wins the Apothecary")
    (print-board board)
    (println "Pick location, player, location, player")
    (flush)
    (let [loc1 (keyword (read-line))
          p1 (read-line)
          loc2 (keyword (read-line))
          p2 (read-line)]
      (swap-inf board p1 loc1 p2 loc2))))

(defn prompt-messenger [board winner]
  (do
    (println)
    (println winner "wins the Messenger")
    (print-board board)
    (println "Reassign count? (0 - 2) ")
    (flush)
    (let [reassign-count (min 2 (max 0 (int (read-line))))]
      (loop [i 0 b board]
        (if (< i reassign-count)
          (do
            (println "Pick location, location: ")
            (let [loc-from (keyword (read-line))
                  loc-to (keyword (read-line))]
              (recur (inc i) (move-inf b winner loc-from loc-to))))
          b)))))

(defn prompt-mayor [board winner]
  (do
    (println)
    (println winner "wins the Mayor")
    (print-board board)
    (println "Pick location: ")
    (flush)
    (let [loc (keyword (read-line))]
      (add-inf board winner loc))))

(defn set-guard-house [board player]
  (assoc board :guard-house player))

; bid-map :: {(player figure) bid}
(defn run-turn [board bid-map]
  (fill-banks
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
      (clear-banks board)
      (board :fig-eval-order))))

(defn get-game-winner [player-sup]
  (let [max-sup (max (vals player-sup))]
    (if (val-unique? player-sup max-sup) (inverted-get player-sup max-sup))))

(defn run-game [board]
  (if (board-full? board)
    (do
      (println)
      (println "GAME OVER")
      (println)
      (println "The winner is:" (get-game-winner (board :player-sup)))
      (flush)
      board)
    (do
      (println)
      (run-game (run-turn board (prompt-bids board))))))

(defn make-loc [sup inf] {:sup-val sup, :inf-limit inf})

(defn make-fig [sup bank b-immune f-immune & [loc special]] {
  :sup-val sup
  :bank-val bank
  :b-immune b-immune
  :f-immune f-immune
  :inf-loc loc
  :special special
})

(defn make-board [players]
  (let [
      init-bank [3 1 1]
      locs {
        :tavern     (make-loc 20 4)
        :market     (make-loc 25 5)
        :plantation (make-loc 30 6)
        :cathedral  (make-loc 35 7)
        :harbor     (make-loc 40 6)
        :town-hall  (make-loc 45 7)
        :fortress   (make-loc 50 8)
        :palace     (make-loc 55 8)
      }
      figs {
        :printer    (make-fig 10 [0 0 0] false false)
        :constable  (make-fig 5  [0 1 0] true  true)
        :rogue      (make-fig 0  [0 2 0] true  true)
        :mercenary  (make-fig 0  [0 0 1] true  true)
        :general    (make-fig 1  [0 0 1] false true  :fortress)
        :captain    (make-fig 1  [0 0 1] false true  :harbor)
        :innkeeper  (make-fig 3  [0 1 0] true  false :tavern)
        :magistrate (make-fig 1  [0 1 0] true  false :town-hall)
        :priest     (make-fig 6  [0 0 0] false false :cathedral)
        :aristocrat (make-fig 5  [3 0 0] false false :plantation)
        :merchant   (make-fig 3  [5 0 0] false false :market)
        :viceroy    (make-fig 0  [0 0 0] false false :palace set-guard-house)
        :spy        (make-fig 0  [0 0 0] true  false nil prompt-spy)
        :apothecary (make-fig 0  [0 0 0] false true  nil prompt-apothecary)
        :messenger  (make-fig 3  [0 0 0] false false nil prompt-messenger)
        :mayor      (make-fig 0  [0 0 0] true  true  nil prompt-mayor)
      }
      fig-eval-order [
        :general       :captain       :innkeeper     :magistrate
        :viceroy       :priest        :aristocrat    :merchant
        :printer       :spy           :apothecary    :messenger
        :mayor         :constable     :rogue         :mercenary
      ]
      players-to-0s (zipmap players (repeat 0))
    ]

    {
      :guard-house nil
      :player-sup players-to-0s
      :player-inf (zipmap (keys locs) (repeat players-to-0s))
      :player-bank (zipmap players (repeat init-bank))
      :locs locs
      :figs figs
      :fig-eval-order fig-eval-order
    }))

(defn play-game []
  (do
    (println "Enter players names: ")
    (flush)
    (run-game (make-board (read-string (str "[" (read-line) "]"))))))
