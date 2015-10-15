(ns revolt-test
  (:use revolt.core)
  (:use revolt.setup)
  (:use clojure.test))

(def dummy-callback (constantly {}))

(def rob (->Player "Rob"))
(def joe (->Player "Joe"))
(def moe (->Player "Moe"))
(def players [rob joe moe])

(def hovel  (->Location :hovel  10 2))
(def saloon (->Location :saloon 30 4))
(def farm   (->Location :farm   40 3))
(def castle (->Location :castle 90 5))

(def locs [hovel saloon farm castle])

(def prince (->Figure :prince 0 (->Bid 5 0 0) -f castle nil))
(def beggar (->Figure :beggar 1 (->Bid 0 0 0) b- hovel nil))
(def barber (->Figure :barber 8 (->Bid 0 0 0) -- saloon nil))
(def farmer (->Figure :farmer 1 (->Bid 2 0 0) -- farm nil))
(def axeman (->Figure :axeman 3 (->Bid 0 0 1) bf nil nil))
(def doctor (->Figure :doctor 0 (->Bid 0 2 0) -- nil nil))
(def smithy (->Figure :smithy 1 (->Bid 2 0 0) bf nil nil))

(def figs [prince beggar barber farmer axeman doctor smithy])

(def board (->Board
  1
  locs
  figs
  players
  (zipmap players (repeat (->Bid 3 1 1)))
  (zipmap locs (repeat (zipmap players (repeat 0))))
  (zipmap players (repeat 0))))

(defn with-inf [board location player number]
  (reduce (fn [b _] (add-influence b location player)) board (repeat number 0)))

(defn with-influence [board & more]
  (reduce (fn [b [l p n]] (with-inf b l p n)) board (partition 3 more)))

(defn with-support [board & more]
  (reduce (fn [b [p n]] (add-support b p n)) board (partition 2 more)))

(deftest bids

  (testing "One blackmail is worth more than any amount of gold"
    (is (compare-bids (->Bid 0 1 0) (->Bid 5 0 0)))
    (is (compare-bids (->Bid 1 1 0) (->Bid 5 0 0)))
    (is (compare-bids (->Bid 0 1 0) (->Bid 5 0 0)))
    (is (compare-bids (->Bid 2 2 0) (->Bid 1 2 0))))

  (testing "One force is worth more than any amount of blackmail or gold"
    (is (compare-bids (->Bid 0 0 1) (->Bid 5 5 0)))
    (is (compare-bids (->Bid 0 2 1) (->Bid 5 4 0)))
    (is (compare-bids (->Bid 1 0 1) (->Bid 1 5 0)))
    (is (compare-bids (->Bid 5 5 2) (->Bid 5 5 1)))))

(deftest bid-winner

  (testing "There should be no winner if there are no bids"
    (is (nil? (get-winner {}))))

  (testing "There should be no winner if there are no positive bids"
    (is (nil? (get-winner {:a (->Bid 0 0 0)
                           :b (->Bid 0 0 0)}))))

  (testing "There should be no winner if there is a single non-positive bid"
    (is (nil? (get-winner {:a (->Bid 0 0 0)}))))

  (testing "There should be no winner if there is a tie for first"
    (is (nil? (get-winner {:a (->Bid 1 2 0)
                           :b (->Bid 3 0 0)
                           :c (->Bid 4 1 0)
                           :d (->Bid 1 2 0)}))))

  (testing "There should always be a winner when there is only one positive bid"
    (is (= :a (get-winner {:a (->Bid 1 0 0)}))))

  (testing "There should be a winner even if there is a tie for not-first"
    (is (= :c (get-winner {:a (->Bid 1 2 0)
                           :b (->Bid 1 0 1)
                           :c (->Bid 3 0 1)
                           :d (->Bid 1 0 1)
                           :e (->Bid 4 1 0)})))))

(deftest location-holder

  (testing "There should be no holder if there are no influence units"
    (is (nil? (get-holder board hovel))))

  (testing "There should be no holder if there is a tie for first"
      (is (nil? (-> board
                    (with-influence saloon rob 2
                                    saloon joe 2)
                    (get-holder saloon)))))

  (testing "The should be a holder if there is a tie for not-first"
    (is (= rob (-> board
                   (with-influence saloon rob 2
                                   saloon moe 1
                                   saloon joe 1)
                   (get-holder saloon))))))

(deftest ranking

  (testing "There should be no winner when there is a tie for first"
    (let [board (-> (make-board [:a :b :c :d :e])
                    (with-support :a 33 :b 25 :c 61 :d 33 :e 61))]
      (is (= (get-rankings board) {:a 2 :b 3 :c 1 :d 2 :e 1}))
      (is (nil? (get-game-winner board)))))

  (testing "There should be no winner when there are no players"
    (is (nil? (get-game-winner (make-board [])))))

  (testing "There should always be a winner when there is only one player"
    (is (= :a (get-game-winner (make-board [:a])))))

  (testing "There should be a winner even if the unique max score is zero"
    (let [board (-> (make-board [:a :b :c])
                    (with-support :a 0 :b -13 :c -5))]
      (= :a (get-game-winner (make-board [:a])))))

  (testing "There should be a winner even if there is a tie for not-first"
    (let [board (-> (make-board [:a :b :c :d :e])
                    (with-support :a 33 :b 25 :c 61 :d 33 :e 25))]
      (is (= (get-rankings board) {:a 2 :b 3 :c 1 :d 2 :e 3}))
      (is (= :c (get-game-winner board)))))

  (testing "There should be a winner when there is a set of unique scores"
    (let [board (-> (make-board [:a :b :c :d :e])
                    (with-support :a 34 :b 25 :c 61 :d 33 :e 44))]
      (is (= (get-rankings board) {:a 3 :b 5 :c 1 :d 4 :e 2}))
      (is (= :c (get-game-winner board))))))

(deftest bid-validation

  (testing "Bid is invalid if a token is used on a figure that is immune to it"
    (is (not (validate-bid prince (->Bid 1 0 1))))
    (is (not (validate-bid beggar (->Bid 1 1 0)))))

  (testing "Bid is valid if figure is not immune to tokens being used"
    (is (validate-bid prince (->Bid 2 1 0)))
    (is (validate-bid prince (->Bid 1 0 0)))
    (is (validate-bid beggar (->Bid 2 0 0)))
    (is (validate-bid beggar (->Bid 1 0 1))))

  (testing "Bids are invalid if not all tokens were used"
    (is (not (validate-bids (->Bid 3 2 1) {prince (->Bid 1 1 0)
                                           axeman (->Bid 2 0 0)
                                           farmer (->Bid 0 0 1)}))))

  (testing "Bids are invalid if more than six figures were bid on"
    (is (not (validate-bids (->Bid 7 0 0) {prince (->Bid 1 0 0)
                                           axeman (->Bid 1 0 0)
                                           farmer (->Bid 1 0 0)
                                           beggar (->Bid 1 0 0)
                                           doctor (->Bid 1 0 0)
                                           barber (->Bid 1 0 0)
                                           smithy (->Bid 1 0 0)})))))

(deftest influence
  (testing "AssertionError should be thrown when adding to full location"
    (is (thrown-with-msg? AssertionError #"already full"
      (-> board
          (with-influence hovel rob (:influence-limit hovel))
          (add-influence hovel rob)))))

  (testing "AssertionError should be thrown when removing player from
            location where they have no influence"
    (is (thrown-with-msg? AssertionError #"has no influence"
      (remove-influence board hovel rob)))))

(deftest rewards
    (let [board (-> (clear-banks board)
                    (reward-winner farmer rob dummy-callback)
                    (reward-winner prince joe dummy-callback))]
        (is (= 0 (get-support board joe)))
        (is (= 1 (get-support board rob)))
        (is (= (->Bid 2 0 0) (get-bank board rob)))
        (is (= (->Bid 5 0 0) (get-bank board joe)))
        (is (= 1 (get-influence board farm rob)))
        (is (= 1 (get-influence board castle joe)))
        (is (= 3 (get-score board rob)))
        (is (= 5 (get-score board joe)))))

(deftest scenario-first-turn
    (let [bids {prince {rob (->Bid 0 1 0) joe (->Bid 0 0 0)}
                beggar {rob (->Bid 1 0 0) joe (->Bid 0 0 0)}
                barber {rob (->Bid 0 0 1) joe (->Bid 0 1 0)}
                farmer {rob (->Bid 0 0 0) joe (->Bid 0 0 1)}
                axeman {rob (->Bid 2 0 0) joe (->Bid 3 0 0)}
                doctor {rob (->Bid 0 0 0) joe (->Bid 0 0 0)}}
          board (run-turn board bids dummy-callback)]
        (is (= rob (get-current-holder board castle)))
        (is (= rob (get-current-holder board hovel)))
        (is (= rob (get-current-holder board saloon)))
        (is (= joe (get-current-holder board farm)))
        (is (= 1 (get-influence board castle rob)))
        (is (= 1 (get-influence board hovel rob)))
        (is (= 1 (get-influence board saloon rob)))
        (is (= 0 (get-influence board farm rob)))
        (is (= 0 (get-influence board castle joe)))
        (is (= 0 (get-influence board hovel joe)))
        (is (= 0 (get-influence board saloon joe)))
        (is (= 1 (get-influence board farm joe)))
        (is (not (location-full? board saloon)))
        (is (not (location-full? board farm)))
        (is (not (location-full? board castle)))
        (is (not (location-full? board hovel)))
        (is (= 9 (get-support board rob)))
        (is (= 4 (get-support board joe)))
        (is (= (->Bid 5 0 0) (get-bank board rob)))
        (is (= (->Bid 4 0 1) (get-bank board joe))) ; joe gets 2 extra gold in (fill-banks)
        (is (not (game-over? board)))))
