(ns revolt-test
    (:use [clojure.test revolt]))

(def rob (->Player "Rob"))
(def joe (->Player "Joe"))
(def players [rob joe])

(def hovel  (->Location :hovel  10 2))
(def saloon (->Location :saloon 30 4))
(def farm   (->Location :farm   40 6))
(def castle (->Location :castle 90 8))

(def locs (id-map [hovel estate farm palace]))

(def nil-fn (fn [b w p] b))

(def fig1 (figure :prince 0 (->Bank 5 0 0) -f castle))
(def fig2 (figure :beggar 1 (->Bank 0 0 0) b- hovel))
(def fig3 (figure :barber 8 (->Bank 0 0 0) -- saloon))
(def fig4 (figure :farmer 1 (->Bank 2 0 0) -- farmer))
(def fig5 (figure :axeman 3 (->Bank 0 0 1) bf))
(def fig6 (figure :doctor 0 (->Bank 0 2 0) --))

(def fig-order [fig1 fig2 fig3 fig4 fig5 fig6])
(def figs (id-map figs-order))

(def board (->Board
    locs
    figs
    fig-order
    players
    (zipmap players (repeat (->Bank 3 1 1)))
    (zipmap (vals locs) (repeat (zipmap players (repeat 0))))
    (zipmap players (repeat 0))
    1))





; TODO   VVVVV   re-write all this    VVVVV

(deftest bid-validation
    (is (validate-bid board :constable [3 1 0]))
    (is (not (validate-fig-bid board :constable [3 0 1])))
    (is (validate-fig-bid board :spy [0 0 1]))
    (is (not (validate-fig-bid board :spy [1 1 1]))))

(deftest player-bids-validation
  (is (validate-player-bids board "rob" {:general [3 1 0] :printer [0 0 1]}))
  (is (not (validate-player-bids board "rob" {:general [3 0 0] :printer [0 0 1]})))
  (is (not (validate-player-bids board "rob" {:general [3 1 0] :printer [1 0 1]})))
  (is (validate-player-bids
    (add-bank (make-board ["rob" "joe"]) "rob" [2 0 0])
    "rob"
    {
      :general [1 0 0]
      :printer [1 0 1]
      :messenger [1 0 0]
      :priest [1 0 0]
      :rogue [1 0 0]
      :apothecary [0 1 0]
    }))
  (is (not (validate-player-bids
    (add-bank (make-board ["rob" "joe"]) "rob" [3 0 0])
    "rob"
    {
      :general [1 0 0]
      :printer [1 0 1]
      :messenger [1 0 0]
      :mercenary [1 0 0]
      :priest [1 0 0]
      :rogue [1 0 0]
      :apothecary [0 1 0]
    })))
  (is (not (validate-player-bids
    (make-board ["rob" "joe"])
    "rob"
    {
      :general [1 0 0]
      :printer [1 0 1]
    })))
  (is (not (validate-player-bids
    (make-board ["rob" "joe"])
    "rob"
    { :general [3 1 1] }))))

(deftest bid-comparison
  (let [x [2 0 1] y [4 2 0] z [0 0 1] w [1 3 1] u [0 2 0] v [1 0 1]]
    (is (= x (compare-bids x y)))
    (is (= w (compare-bids z w)))
    (is (= x (compare-bids u x)))
    (is (= z (compare-bids z y)))
    (is (= y (compare-bids y u)))
    (is (nil? (compare-bids v v)))
    (is (= x (compare-bids v x)))))

(deftest bid-winner
  (is (=
    "rob"
    (get-winner {
      "rob" [2 0 1]
      "joe" [1 3 0]
      "jack" [1 0 1]
      "jesse" [4 2 0]})))
  (is (nil? (get-winner {})))
  (is (nil? (get-winner {"rob" [0 0 0]}))))

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