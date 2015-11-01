(ns revolt-specials-test
    (:use revolt.core)
    (:use revolt.setup)
    (:use clojure.test))

(def rob (->Player 1 "Rob"))
(def joe (->Player 2 "Joe"))
(def players [rob joe])

(def hideout   (->Location :hideout   20 1))
(def courtroom (->Location :courtroom 30 6))

(def locs [hideout courtroom])

(def clear-spot
    (->Special :clear-spot
        true
        (fn [board winner]
            (pos? (reduce + (map (partial occupied-influence board) (:locations board)))))
        (fn [board winner {:keys [location player]}] (pos? (get-influence board location player)))
        (fn [board winner {:keys [location player]}] (remove-influence board location player))))

(def assassin (->Figure :assassin 0 (->Bid 0 0 2) -f hideout   clear-spot))
(def judge    (->Figure :judge    4 (->Bid 0 1 0) b- courtroom steal-spot))

(def figs [assassin judge])

(def board (->Board
    1
    locs
    figs
    players
    (zipmap players (repeat zero-bid))
    (zipmap locs (repeat (zipmap players (repeat 0))))
    (zipmap players (repeat 0))))

(defn just-special [special] (->Figure nil nil nil nil nil special))

(deftest simple-special
    (let [board (-> board
                    (add-influence hideout rob)
                    (add-influence courtroom rob)
                    (add-influence courtroom joe)
                    (add-influence courtroom joe)
                    ((get-in assassin [:special :effect]) rob {:location courtroom :player joe}))]
        (is (= 1 (get-influence board hideout rob)))
        (is (= 0 (get-influence board hideout joe)))
        (is (= 1 (get-influence board courtroom rob)))
        (is (= 1 (get-influence board courtroom joe)))))

(deftest steal-spot-empty-board
    (let [doable (:doable steal-spot)
          check (:check steal-spot)]
        (is (not (doable board rob)))
        (is (not (doable board joe)))
        (is (not (check board rob {:location hideout :player rob})))
        (is (not (check board rob {:location hideout :player joe})))
        (is (not (check board joe {:location hideout :player rob})))
        (is (not (check board joe {:location hideout :player joe})))))

(deftest steal-spot-only-other-player-has-guard-house
    (let [doable (:doable steal-spot)
          check (:check steal-spot)
          board (-> board
                    (add-influence hideout rob)
                    (add-influence courtroom joe)
                    (add-influence courtroom joe))
          board-rob-in-gh (set-guard-house board rob)
          board-joe-in-gh (set-guard-house board joe)]
        (is (not (touchable? board-joe-in-gh rob joe)))
        (is (not (touchable? board-rob-in-gh joe rob)))
        (is (not (doable board-joe-in-gh rob)))
        (is (not (doable board-rob-in-gh joe)))
        (is (doable board-rob-in-gh rob))
        (is (doable board-joe-in-gh joe))))

(deftest steal-spot-single-valid-target
    (let [doable (:doable steal-spot)
          check (:check steal-spot)
          rob-choice {:location courtroom :player joe}
          joe-choice {:location hideout :player rob}
          board (-> board
                    (add-influence hideout rob)
                    (add-influence courtroom joe)
                    (add-influence courtroom joe)
                    (add-influence courtroom rob))]
        (is (doable board rob))
        (is (doable board joe))
        (is (check board rob rob-choice))
        (is (check board joe joe-choice))
        (let [board ((:effect steal-spot) board rob rob-choice)]
            (is (= 1 (get-influence board hideout rob)))
            (is (= 0 (get-influence board hideout joe)))
            (is (= 2 (get-influence board courtroom rob)))
            (is (= 1 (get-influence board courtroom joe))))
        (let [board ((:effect steal-spot) board joe joe-choice)]
            (is (= 0 (get-influence board hideout rob)))
            (is (= 1 (get-influence board hideout joe)))
            (is (= 1 (get-influence board courtroom rob)))
            (is (= 2 (get-influence board courtroom joe))))))

(deftest swap-spots-empty-board
    (let [doable (:doable steal-spot)
          check (:check steal-spot)]
        (is (not (doable board rob)))
        (is (not (doable board joe)))
        (is (not (check board rob {:location hideout :player rob})))
        (is (not (check board rob {:location hideout :player joe})))
        (is (not (check board joe {:location hideout :player rob})))
        (is (not (check board joe {:location hideout :player joe})))))

(deftest swap-spots-single-valid-target
    (let [doable (:doable swap-spots)
          check (:check swap-spots)
          choice {:location0 courtroom :player0 joe :location1 hideout :player1 rob}
          board (-> board
                    (add-influence hideout rob)
                    (add-influence courtroom joe)
                    (add-influence courtroom joe)
                    (add-influence courtroom rob))]
        (is (doable board rob))
        (is (doable board joe))
        (is (check board rob choice))
        (let [board ((:effect swap-spots) board rob choice)]
            (is (= 0 (get-influence board hideout rob)))
            (is (= 1 (get-influence board hideout joe)))
            (is (= 2 (get-influence board courtroom rob)))
            (is (= 1 (get-influence board courtroom joe))))))

(deftest swap-spots-only-other-player-has-guard-house
    (let [doable (:doable swap-spots)
          check (:check swap-spots)
          board (-> board
                    (add-influence hideout rob)
                    (add-influence courtroom joe)
                    (add-influence courtroom joe))
          board-rob-in-gh (set-guard-house board rob)
          board-joe-in-gh (set-guard-house board joe)]
        (is (not (touchable? board-joe-in-gh rob joe)))
        (is (not (touchable? board-rob-in-gh joe rob)))
        (is (not (doable board-joe-in-gh rob)))
        (is (not (doable board-rob-in-gh joe)))
        (is (doable board-rob-in-gh rob))
        (is (doable board-joe-in-gh joe))))

(deftest take-open-spot-full-board
    (let [doable (:doable take-open-spot)
          check (:check take-open-spot)
          board (-> board
                    (add-influence hideout joe)
                    (add-influence courtroom rob)
                    (add-influence courtroom rob)
                    (add-influence courtroom rob)
                    (add-influence courtroom rob)
                    (add-influence courtroom rob)
                    (add-influence courtroom rob)
                    (set-guard-house joe))]
        (is (board-full? board))
        (is (not (doable board rob)))
        (is (not (doable board joe)))
        (is (not (check board rob {:location hideout})))
        (is (not (check board joe {:location hideout})))
        (is (not (check board rob {:location courtroom})))
        (is (not (check board joe {:location courtroom})))))

(deftest take-open-spot-one-full-location
    (let [doable (:doable take-open-spot)
          check (:check take-open-spot)
          board (-> board
                    (add-influence hideout joe)
                    (set-guard-house rob))]
        (is (not (board-full? board)))
        (is (not (location-full? board courtroom)))
        (is (location-full? board hideout))
        (is (doable board rob))
        (is (doable board joe))
        (is (not (check board rob {:location hideout})))
        (is (not (check board joe {:location hideout})))
        (is (check board rob {:location courtroom}))
        (is (check board joe {:location courtroom}))))

(deftest take-open-spot-empty-board
    (let [doable (:doable take-open-spot)
          check (:check take-open-spot)]
        (is (not (board-full? board)))
        (is (not (location-full? board courtroom)))
        (is (not (location-full? board hideout)))
        (is (doable board rob))
        (is (doable board joe))
        (is (check board rob {:location hideout}))
        (is (check board joe {:location hideout}))
        (is (check board rob {:location courtroom}))
        (is (check board joe {:location courtroom}))))

(def loc1 (->Location :loc1 10 2))
(def loc2 (->Location :loc2 20 3))
(def loc3 (->Location :loc3 30 4))

(def reassigner (->Figure :reassigner 0 zero-bid -- nil reassign-spots))

(def reassign-board (->Board
    1
    [loc1 loc2 loc3]
    [reassigner]
    [rob joe]
    (zipmap players (repeat zero-bid))
    (zipmap [loc1 loc2 loc3] (repeat (zipmap players (repeat 0))))
    (zipmap players (repeat 0))))

(deftest reassign-spots-empty-board
    (let [doable (:doable reassign-spots)
          check (:check reassign-spots)
          board reassign-board]
        (is (not (doable board rob)))
        (is (not (doable board joe)))
        (is (check board rob {:reassignments []}))
        (is (check board joe {:reassignments []}))
        (is (not (check board rob {:reassignments [[loc1 loc2]]})))
        (is (not (check board rob {:reassignments [[loc2 loc1]]})))
        (is (not (check board joe {:reassignments [[loc3 loc2]]})))
        (is (not (check board joe {:reassignments [[loc2 loc3]]})))
        (is (not (check board rob {:reassignments [[loc1 loc3] [loc2 loc3]]})))
        (is (not (check board rob {:reassignments [[loc3 loc1] [loc3 loc2]]})))
        (is (not (check board joe {:reassignments [[loc1 loc3] [loc2 loc3]]})))
        (is (not (check board joe {:reassignments [[loc3 loc1] [loc3 loc2]]})))))

(deftest reassign-spots-full-board
    (let [doable (:doable reassign-spots)
          check (:check reassign-spots)
          board (-> reassign-board
                    (add-influence loc1 joe)
                    (add-influence loc1 rob)
                    (add-influence loc2 rob)
                    (add-influence loc2 rob)
                    (add-influence loc2 rob)
                    (add-influence loc3 rob)
                    (add-influence loc3 joe)
                    (add-influence loc3 joe)
                    (add-influence loc3 rob))]
        (is (board-full? board))
        (is (not (doable board rob)))
        (is (not (doable board joe)))
        (is (check board rob {:reassignments []}))
        (is (check board joe {:reassignments []}))
        (is (not (check board rob {:reassignments [[loc1 loc2]]})))
        (is (not (check board rob {:reassignments [[loc2 loc1]]})))
        (is (not (check board joe {:reassignments [[loc3 loc2]]})))
        (is (not (check board joe {:reassignments [[loc2 loc3]]})))
        (is (not (check board rob {:reassignments [[loc1 loc3] [loc2 loc3]]})))
        (is (not (check board rob {:reassignments [[loc3 loc1] [loc3 loc2]]})))
        (is (not (check board joe {:reassignments [[loc1 loc3] [loc2 loc3]]})))
        (is (not (check board joe {:reassignments [[loc3 loc1] [loc3 loc2]]})))))

(deftest reassign-one-from-location-with-one-cube
    (let [doable (:doable reassign-spots)
          check (:check reassign-spots)
          board (-> reassign-board
                    (add-influence loc1 joe))]
        (is (doable board joe))
        (is (check board joe {:reassignments [[loc1 loc3]]}))))

(deftest reassign-one-from-location-with-two-cubes
    (let [doable (:doable reassign-spots)
          check (:check reassign-spots)
          board (-> reassign-board
                    (add-influence loc1 joe)
                    (add-influence loc1 joe))]
        (is (doable board joe))
        (is (check board joe {:reassignments [[loc1 loc3]]}))))

(deftest reassign-two-from-same-location-with-one-cube
    (let [doable (:doable reassign-spots)
          check (:check reassign-spots)
          board (-> reassign-board
                    (add-influence loc1 joe))]
        (is (doable board joe))
        (is (not (check board joe {:reassignments [[loc1 loc3] [loc1 loc3]]})))))

(deftest reassign-two-from-same-location-with-two-cubes
    (let [doable (:doable reassign-spots)
          check (:check reassign-spots)
          board (-> reassign-board
                    (add-influence loc1 joe)
                    (add-influence loc1 joe))]
        (is (doable board joe))
        (is (check board joe {:reassignments [[loc1 loc3] [loc1 loc3]]}))))

(deftest reassign-one-to-location-with-one-open-spaces
    (let [doable (:doable reassign-spots)
          check (:check reassign-spots)
          board (-> reassign-board
                    (add-influence loc1 rob)
                    (add-influence loc2 joe))]
        (is (doable board joe))
        (is (check board joe {:reassignments [[loc2 loc1]]}))))

(deftest reassign-one-to-location-with-two-open-spaces
    (let [doable (:doable reassign-spots)
          check (:check reassign-spots)
          board (-> reassign-board
                    (add-influence loc2 joe)
                    (add-influence loc2 joe))]
        (is (doable board joe))
        (is (check board joe {:reassignments [[loc2 loc1]]}))))

(deftest reassign-two-to-same-location-with-one-open-spaces
    (let [doable (:doable reassign-spots)
          check (:check reassign-spots)
          board (-> reassign-board
                    (add-influence loc1 joe)
                    (add-influence loc2 rob)
                    (add-influence loc3 rob))]
        (is (= 1 (available-influence board loc1)))
        (is (doable board rob))
        (is (not (check board rob {:reassignments [[loc2 loc1] [loc3 loc1]]})))))

(deftest reassign-two-to-same-location-with-two-open-spaces
    (let [doable (:doable reassign-spots)
          check (:check reassign-spots)
          board (-> reassign-board
                    (add-influence loc1 rob)
                    (add-influence loc2 joe)
                    (add-influence loc3 rob))]
        (is (= 2 (available-influence board loc2)))
        (is (doable board rob))
        (is (check board rob {:reassignments [[loc1 loc2] [loc3 loc2]]}))))

(deftest reassign-one-from-b-to-c-then-from-a-to-b
    (let [doable (:doable reassign-spots)
          check (:check reassign-spots)
          board (-> reassign-board
                    (add-influence loc1 rob)
                    (add-influence loc2 rob))]
        (is (doable board rob))
        (is (check board rob {:reassignments [[loc2 loc3] [loc1 loc2]]}))))

(deftest reassign-one-from-a-to-b-then-from-b-to-c
    (let [doable (:doable reassign-spots)
          check (:check reassign-spots)
          board (-> reassign-board
                    (add-influence loc1 rob))]
        (is (doable board rob))
        (is (not (check board rob {:reassignments [[loc1 loc2] [loc3 loc2]]})))))

(deftest scenario-reassign
    (let [bids {reassigner {rob (->Bid 1 0 0) joe (->Bid 0 0 0)}}
          board (-> reassign-board
                    (add-bank rob (->Bid 1 0 0))
                    (add-influence loc1 rob)
                    (add-influence loc2 joe)
                    (add-influence loc3 rob)
                    (run-turn bids))]
        (is (= reassign-spots (:special board)))
        (let [board (run-turn board
                              bids
                              {:reassignments [[loc1 loc2] [loc3 loc2]]})]
            (is (ready? board))
            (is (= 0 (get-influence board loc1 rob)))
            (is (= 0 (get-influence board loc1 joe)))
            (is (= 2 (get-influence board loc2 rob)))
            (is (= 1 (get-influence board loc2 joe)))
            (is (= 0 (get-influence board loc3 rob)))
            (is (= 0 (get-influence board loc3 joe))))))

(deftest scenario-mid-game-with-specials
    (let [bids {assassin {rob (->Bid 1 0 0) joe (->Bid 0 0 0)}
                judge    {rob (->Bid 0 0 0) joe (->Bid 1 0 0)}}
          board (-> board
                    (add-influence hideout rob)
                    (add-influence courtroom rob)
                    (add-influence courtroom joe)
                    (add-influence courtroom joe)
                    (add-bank rob (->Bid 1 0 0))
                    (add-bank joe (->Bid 1 0 0)))]
        (is (= 1 (get-influence board courtroom rob)))
        (is (= 2 (get-influence board courtroom joe)))
        (is (= 1 (get-influence board hideout rob)))
        (is (= 0 (get-influence board hideout joe)))
        (let [board (run-turn board bids)]
            (is (suspended? board))
            (is (= clear-spot (:special board)))
            (let [board (run-turn board
                                  bids
                                  {:location courtroom :player joe})]
                (is (suspended? board))
                (is (= steal-spot (:special board)))
                (let [board (run-turn board
                                      bids
                                      {:location hideout :player rob})]
                    (is (ready? board))
                    (is (= 1 (get-influence board courtroom rob)))
                    (is (= 2 (get-influence board courtroom joe)))
                    (is (= 0 (get-influence board hideout rob)))
                    (is (= 1 (get-influence board hideout joe)))
                    (is (= (->Bid 3 0 2) (get-bank board rob)))
                    (is (= (->Bid 4 1 0) (get-bank board joe))))))))

; TODO board should not get suspended if no winner for figure with special
