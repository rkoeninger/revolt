(ns revolt-test
    (:use revolt)
    (:use clojure.test))

(def dummy-callback (constantly {}))

(def rob (->Player "Rob"))
(def joe (->Player "Joe"))
(def players [rob joe])

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

(def figs [prince beggar barber farmer axeman doctor])

(def board (->Board
    1
    locs
    figs
    players
    (zipmap players (repeat (->Bid 3 1 1)))
    (zipmap locs (repeat (zipmap players (repeat 0))))
    (zipmap players (repeat 0))))

(deftest bid-operations
    (is (= (->Bid 2 0 1) (unique-max [(->Bid 1 1 0) (->Bid 2 0 1)])))
    (is (nil? (unique-max [(->Bid 3 1 0) (->Bid 3 1 0)])))
    (is (= (->Bid 1 4 2) (plus-bid (->Bid 0 2 1) (->Bid 1 2 1))))
    (is (= (->Bid 3 0 1) (plus-bid (->Bid 1 0 1) zero-bid (->Bid 2 0 0))))
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
        (is (= [saloon] (get-holdings board rob)))
        (is (= [] (get-holdings board joe)))
        (is (= rob (get-holder board saloon)))
        (is (not= joe (get-holder board saloon)))
        (let [board (-> board
                        (add-influence farm joe)
                        (move-influence saloon farm joe)
                        (add-influence farm rob))]
            (is (thrown? AssertionError (remove-influence board saloon joe)))
            (is (not (location-full? board saloon)))
            (is (nil? (get-holder board saloon)))
            (is (location-full? board farm))
            (is (= [] (get-holdings board rob)))
            (is (= [farm] (get-holdings board joe)))
            (is (= joe (get-holder board farm)))
            (let [board (-> board
                            (add-influence hovel rob)
                            (add-influence hovel joe))]
                (is (location-full? board hovel))
                (is (nil? (get-holder board hovel)))
                (is (= [] (get-holdings board rob)))
                (is (= [farm] (get-holdings board joe)))
                (is (thrown? AssertionError (add-influence board hovel rob)))
                (is (thrown? AssertionError (remove-influence board castle joe)))
                (let [board (-> board
                                (add-influence castle joe)
                                (add-influence castle joe)
                                (add-influence castle rob)
                                (add-influence castle joe)
                                (add-influence castle joe))]
                    (is (location-full? board castle))
                    (is (not (location-full? board saloon)))
                    (is (= 3 (occupied-influence board saloon)))
                    (is (location-full? board farm))
                    (is (location-full? board hovel))
                    (is (not (board-full? board)))
                    (is (= [] (get-holdings board rob)))
                    (is (= [farm castle] (get-holdings board joe)))
                    (let [board (-> board
                                    (replace-influence castle joe rob)
                                    (swap-influence hovel joe saloon rob)
                                    (add-influence saloon joe))]
                        (is (location-full? board saloon))
                        (is (= [hovel] (get-holdings board rob)))
                        (is (= [farm castle] (get-holdings board joe)))
                        (is (board-full? board))))))))

(deftest ranking-all-unique-scores
    (let [board (-> (make-board [:a :b :c :d :e])
                    (add-support :a 34)
                    (add-support :b 25)
                    (add-support :c 61)
                    (add-support :d 33)
                    (add-support :e 44))]
        (is (= 3 (get-rank board :a)))
        (is (= 5 (get-rank board :b)))
        (is (= 1 (get-rank board :c)))
        (is (= 4 (get-rank board :d)))
        (is (= 2 (get-rank board :e)))
        (is (= {:a 3 :b 5 :c 1 :d 4 :e 2} (get-rankings board)))
        (is (= :c (get-game-winner board)))))

(deftest ranking-duplicate-middle-scores
    (let [board (-> (make-board [:a :b :c :d :e])
                    (add-support :a 33)
                    (add-support :b 25)
                    (add-support :c 61)
                    (add-support :d 33)
                    (add-support :e 25))]
        (is (= 2 (get-rank board :a)))
        (is (= 3 (get-rank board :b)))
        (is (= 1 (get-rank board :c)))
        (is (= 2 (get-rank board :d)))
        (is (= 3 (get-rank board :e)))
        (is (= {:a 2 :b 3 :c 1 :d 2 :e 3} (get-rankings board)))
        (is (= :c (get-game-winner board)))))

(deftest ranking-duplicate-highest-scores
    (let [board (-> (make-board [:a :b :c :d :e])
                    (add-support :a 33)
                    (add-support :b 25)
                    (add-support :c 61)
                    (add-support :d 33)
                    (add-support :e 61))]
        (is (= 2 (get-rank board :a)))
        (is (= 3 (get-rank board :b)))
        (is (= 1 (get-rank board :c)))
        (is (= 2 (get-rank board :d)))
        (is (= 1 (get-rank board :e)))
        (is (= {:a 2 :b 3 :c 1 :d 2 :e 1} (get-rankings board)))
        (is (= nil (get-game-winner board)))))

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
