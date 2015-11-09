(ns revolt-test
  (:use revolt.core
        revolt.setup
        clojure.test
        test-common))

(deftest bids

  (testing "Bids are made of gold, blackmail and force"
    (let [{:keys [gold blackmail force]} (->Bid 3 2 1)]
      (is= 3 gold)
      (is= 2 blackmail)
      (is= 1 force)))

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
    (is-not (get-winner {})))

  (testing "There should be no winner if there are no positive bids"
    (is-not (get-winner {:a (->Bid 0 0 0)
                         :b (->Bid 0 0 0)}))
    (is-not (get-winner {:a (->Bid 0 0 0)})))

  (testing "There should be no winner if there is a tie for first"
    (is-not (get-winner {:a (->Bid 1 2 0)
                         :b (->Bid 3 0 0)
                         :c (->Bid 4 1 0)
                         :d (->Bid 1 2 0)})))

  (testing "There should always be a winner when there is only one positive bid"
    (is= :a (get-winner {:a (->Bid 1 0 0)})))

  (testing "There should be a winner even if there is a tie for not-first"
    (is= :c (get-winner {:a (->Bid 1 2 0)
                         :b (->Bid 1 0 1)
                         :c (->Bid 3 0 1)
                         :d (->Bid 1 0 1)
                         :e (->Bid 4 1 0)}))))

(deftest location-holder

  (testing "There should be no holder if there are no influence units"
    (is-not (get-holder standard-board hovel)))

  (testing "There should be no holder if there is a tie for first"
    (is-not (-> standard-board
                (with-influence saloon rob 2
                                saloon joe 2)
                (get-holder saloon))))

  (testing "The should be a holder if there is a tie for not-first"
    (is= rob (-> standard-board
                 (with-influence saloon rob 2
                                 saloon moe 1
                                 saloon joe 1)
                 (get-holder saloon)))))

(deftest ranking

  (testing "There should be no winner when there is a tie for first"
    (let [board (-> (make-board [:a :b :c :d :e])
                    (with-support :a 33 :b 25 :c 61 :d 33 :e 61))]
      (is= (get-rankings board) {:a 2 :b 3 :c 1 :d 2 :e 1})
      (is-not (get-game-winner board))))

  (testing "There should be no winner when there are no players"
    (is-not (get-game-winner (make-board []))))

  (testing "There should always be a winner when there is only one player"
    (is= :a (get-game-winner (make-board [:a]))))

  (testing "There should be a winner even if the unique max score is zero"
    (let [board (-> (make-board [:a :b :c])
                    (with-support :a 0 :b -13 :c -5))]
      (is= :a (get-game-winner (make-board [:a])))))

  (testing "There should be a winner even if there is a tie for not-first"
    (let [board (-> (make-board [:a :b :c :d :e])
                    (with-support :a 33 :b 25 :c 61 :d 33 :e 25))]
      (is= (get-rankings board) {:a 2 :b 3 :c 1 :d 2 :e 3})
      (is= :c (get-game-winner board))))

  (testing "There should be a winner when there is a set of unique scores"
    (let [board (-> (make-board [:a :b :c :d :e])
                    (with-support :a 34 :b 25 :c 61 :d 33 :e 44))]
      (is= (get-rankings board) {:a 3 :b 5 :c 1 :d 4 :e 2})
      (is= :c (get-game-winner board)))))

(deftest bid-validation

  (testing "Bid is invalid if a token is used on a figure that is immune to it"
    (is-not (validate-bid prince (->Bid 1 0 1)))
    (is-not (validate-bid beggar (->Bid 1 1 0))))

  (testing "Bid is valid if figure is not immune to tokens being used"
    (is (validate-bid prince (->Bid 2 1 0)))
    (is (validate-bid prince (->Bid 1 0 0)))
    (is (validate-bid beggar (->Bid 2 0 0)))
    (is (validate-bid beggar (->Bid 1 0 1))))

  (testing "Bids are invalid if not all tokens were used"
    (is-not (validate-bids (->Bid 3 2 1) {prince (->Bid 1 1 0)
                                          axeman (->Bid 2 0 0)
                                          farmer (->Bid 0 0 1)})))

  (testing "Bids are invalid if more than six figures were bid on"
    (is-not (validate-bids (->Bid 7 0 0) {prince (->Bid 1 0 0)
                                          axeman (->Bid 1 0 0)
                                          farmer (->Bid 1 0 0)
                                          beggar (->Bid 1 0 0)
                                          doctor (->Bid 1 0 0)
                                          barber (->Bid 1 0 0)
                                          smithy (->Bid 1 0 0)}))))

(deftest influence

  (testing "AssertionError should be thrown when adding to full location"
    (is (thrown-with-msg? AssertionError #"already full"
      (-> standard-board
          (with-influence hovel rob (:cap hovel))
          (add-influence hovel rob)))))

  (testing "AssertionError should be thrown when removing player from
            location where they have no influence"
    (is (thrown-with-msg? AssertionError #"has no influence"
      (remove-influence standard-board hovel rob)))))

(deftest rewards

  (testing "The winner of a figure receives that figure's reward"
    (let [board (-> (clear-banks standard-board)
                    (reward-winner farmer rob)
                    (reward-winner prince joe))]
      (is= 0 (get-support board joe))
      (is= 1 (get-support board rob))
      (is= (->Bid 2 0 0) (get-bank board rob))
      (is= (->Bid 5 0 0) (get-bank board joe))
      (is= 1 (get-influence board farm rob))
      (is= 1 (get-influence board castle joe))
      (is= 3 (get-score board rob))
      (is= 5 (get-score board joe)))))

(deftest turn-resume

  (testing "Turn should eval completely if no specials are won"
    (let [board (run-turn standard-board {doctor {rob (->Bid 3 1 1)}
                                 farmer {joe (->Bid 3 1 1)}
                                 barber {moe (->Bid 3 1 1)}})]
      (is (ready? board))
      (is= 2 (:turn board))
      (is= 0 (get-support board rob))
      (is= 1 (get-support board joe))
      (is= 8 (get-support board moe))
      (is= (->Bid 3 2 0) (get-bank board rob))
      (is= (->Bid 5 0 0) (get-bank board joe))
      (is= (->Bid 5 0 0) (get-bank board moe))
      (is= 1 (get-influence board farm joe))
      (is= 1 (get-influence board saloon moe)))))
