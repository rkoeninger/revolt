(ns revolt-test)

(use 'revolt)
(use 'clojure.test)

(def rob (->Player "Rob"))
(def joe (->Player "Joe"))
(def players [rob joe])

(def hovel  (->Location :hovel  10 2))
(def saloon (->Location :saloon 30 4))
(def farm   (->Location :farm   40 6))
(def castle (->Location :castle 90 8))

(def locs (apply id-map [hovel saloon farm castle]))

(def nil-fn (fn [b w p] b))

(def prince (figure :prince 0 [5 0 0] -f castle))
(def beggar (figure :beggar 1 [0 0 0] b- hovel))
(def barber (figure :barber 8 [0 0 0] -- saloon))
(def farmer (figure :farmer 1 [2 0 0] -- farmer))
(def axeman (figure :axeman 3 [0 0 1] bf))
(def doctor (figure :doctor 0 [0 2 0] --))

(def figs-order [prince beggar barber farmer axeman doctor])
(def figs (apply id-map figs-order))

(def board (->Board
    locs
    figs
    figs-order
    players
    (zipmap players (repeat (->Bid 3 1 1)))
    (zipmap (vals locs) (repeat (zipmap players (repeat 0))))
    (zipmap players (repeat 0))
    1))

(deftest bid-operations
    (is (= (->Bid 2 0 1) (unique-max (->Bid 1 1 0) (->Bid 2 0 1))))
    (is (nil? (unique-max (->Bid 3 1 0) (->Bid 3 1 0))))
    (is (= (->Bid 1 4 2) (bid+ (->Bid 0 2 1) (->Bid 1 2 1))))
    (is (= (->Bid 3 0 1) (bid+ (->Bid 1 0 1) bid0 (->Bid 2 0 0))))
    (is (= :c (get-winner {:a (->Bid 1 1 0) :b (->Bid 2 0 1) :c (->Bid 1 2 1) :d (->Bid 3 1 0)})))
    (is (= nil (get-winner {:a (->Bid 1 1 0) :b (->Bid 2 0 1) :c (->Bid 2 0 1) :d (->Bid 3 1 0) :e (->Bid 0 1 0)})))
    (is (= :d (get-winner {:a (->Bid 1 1 0) :b (->Bid 2 0 1) :c (->Bid 2 0 1) :d (->Bid 3 1 1) :e (->Bid 0 1 0)}))))

(deftest validation-operations
    (is (validate-bid prince (->Bid 2 1 0)))
    (is (validate-bid prince (->Bid 1 0 0)))
    (is (not (validate-bid prince (->Bid 1 0 1))))
    (is (validate-bid beggar (->Bid 2 0 0)))
    (is (validate-bid beggar (->Bid 1 0 1)))
    (is (not (validate-bid beggar (->Bid 1 1 0))))
    (is (validate-bids (->Bid 3 1 1) {prince (->Bid 1 1 0) axeman (->Bid 2 0 0) farmer (->Bid 0 0 1)}))
    (is (not (validate-bids (->Bid 3 2 1) {prince (->Bid 1 1 0) axeman (->Bid 2 0 0) farmer (->Bid 0 0 1)})))
    (is (not (validate-bids (->Bid 3 2 1) {prince (->Bid 1 1 1) axeman (->Bid 2 0 0) farmer (->Bid 0 1 0)}))))

(deftest influence
    (let [board (-> board
                    (add-influence saloon rob)
                    (add-influence saloon rob)
                    (add-influence saloon joe)
                    (add-influence saloon rob))]
        (is (location-full? board saloon))
        (is (= rob (get-holder board saloon)))))

; TODO   VVVVV   re-write all this    VVVVV
(comment

(deftest influence
  (let [board (-> board
          (add-inf "rob" :tavern)
          (add-inf "joe" :tavern)
          (add-inf "joe" :tavern)
          (add-inf "joe" :tavern))]
    (is (loc-full? board :tavern))
    (let [board (-> board
            (move-inf "rob" :tavern :market)
            (replace-inf "joe" "rob" :tavern)
            (add-inf "joe" :market)
            (swap-inf "rob" :market "joe" :tavern))]
      (is (= 2 (total-inf board :market)))
      (is (= 3 (total-inf board :tavern))))))

(deftest support
  (let [board (-> board
          (add-sup "rob" 6)
          (add-sup "joe" 3)
          (add-sup "rob" 1)
          (add-sup "rob" 1)
          (add-sup "joe" 10))]
    (is (= (get-in board [:player-sup "rob"]) 8))
    (is (= (get-in board [:player-sup "joe"]) 13))))

(deftest bank
  (let [board (-> board
          clear-banks
          (add-bank "rob" [2 0 1])
          (add-bank "joe" [0 1 1])
          (add-bank "joe" [1 1 2])
          (add-bank "rob" [3 2 0]))]
    (is (= (get-in board [:player-bank "rob"]) [5 2 1]))
    (is (= (get-in board [:player-bank "joe"]) [1 2 3]))))

(deftest turn
  (let [result (run-turn (make-board ["rob" "joe"]) {
      ["rob" :general] [2 1 0]
      ["rob" :printer] [0 0 1]
      ["joe" :priest] [0 1 1]
      ["joe" :printer] [3 0 0]
      ["rob" :mercenary] [1 0 0]})]
    (is (= (get-in result [:player-bank "rob"]) [3 0 2]))
    (is (= (get-in result [:player-bank "joe"]) [5 0 0]))
    (is (= (get-in result [:player-sup "rob"]) 11))
    (is (= (get-in result [:player-sup "joe"]) 6))))
)