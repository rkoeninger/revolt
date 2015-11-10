(ns revolt-specials-test
  (:use revolt.core
        revolt.setup
        clojure.test
        test-common
        [clojure.pprint :only [pprint]]))

(deftest simple-special
  (let [board (-> special-board
                  (add-influence hideout rob)
                  (add-influence courtroom rob)
                  (add-influence courtroom joe)
                  (add-influence courtroom joe)
                  ((get-in assassin [:special :effect]) rob {:location courtroom :player joe}))]
    (is= 1 (get-influence board hideout rob))
    (is= 0 (get-influence board hideout joe))
    (is= 1 (get-influence board courtroom rob))
    (is= 1 (get-influence board courtroom joe))))

(deftest steal-spot-empty-board
  (let [board special-board
        {:keys [doable check]} steal-spot]
    (is-not (doable board rob))
    (is-not (doable board joe))
    (is-not (check board rob {:location hideout :player rob}))
    (is-not (check board rob {:location hideout :player joe}))
    (is-not (check board joe {:location hideout :player rob}))
    (is-not (check board joe {:location hideout :player joe}))))

(deftest steal-spot-only-other-player-has-guard-house
  (let [{:keys [doable check]} steal-spot
        board (-> special-board
                  (add-influence hideout rob)
                  (add-influence courtroom joe)
                  (add-influence courtroom joe))
        board-rob-in-gh (set-guard-house board rob)
        board-joe-in-gh (set-guard-house board joe)]
    (is-not (touchable? board-joe-in-gh rob joe))
    (is-not (touchable? board-rob-in-gh joe rob))
    (is-not (doable board-joe-in-gh rob))
    (is-not (doable board-rob-in-gh joe))
    (is (doable board-rob-in-gh rob))
    (is (doable board-joe-in-gh joe))))

(deftest steal-spot-single-valid-target
  (let [{:keys [doable check]} steal-spot
        rob-choice {:location courtroom :player joe}
        joe-choice {:location hideout :player rob}
        board (-> special-board
                  (add-influence hideout rob)
                  (add-influence courtroom joe)
                  (add-influence courtroom joe)
                  (add-influence courtroom rob))]
    (is (doable board rob))
    (is (doable board joe))
    (is (check board rob rob-choice))
    (is (check board joe joe-choice))
    (let [board ((:effect steal-spot) board rob rob-choice)]
      (is= 1 (get-influence board hideout rob))
      (is= 0 (get-influence board hideout joe))
      (is= 2 (get-influence board courtroom rob))
      (is= 1 (get-influence board courtroom joe)))
    (let [board ((:effect steal-spot) board joe joe-choice)]
      (is= 0 (get-influence board hideout rob))
      (is= 1 (get-influence board hideout joe))
      (is= 1 (get-influence board courtroom rob))
      (is= 2 (get-influence board courtroom joe)))))

(deftest special-swap-spots

  (testing "swap-spots (apothecary)"
    (let [board special-board
          {:keys [doable check]} swap-spots]

      (testing "when board is empty"
        (testing "should not be doable"
          (is-not-doable-by-any board swap-spots))

        (testing "no set of inputs should be valid"
          (are-not [winner loc1 p1 loc2 p2]
            (check board winner {:location1 loc1 :player1 p1
                                 :location2 loc2 :player2 p2})
            rob hideout rob courtroom joe
            rob courtroom joe hideout rob
            rob hideout joe courtroom rob
            rob courtroom rob hideout joe
            joe hideout rob courtroom joe
            joe courtroom joe hideout rob
            joe hideout joe courtroom rob
            joe courtroom rob hideout joe)))

      (testing "when there is a single cube on the board"
        (let [board (with-influence board courtroom rob 1)]

          (testing "should not be doable"
            (is-not-doable-by-any board swap-spots))))

      (testing "when the other player has the guard house"
        (let [board (with-influence board hideout   rob 1
                                          courtroom joe 2)]
          (let [board (set-guard-house board rob)]
            (is-not (touchable? board joe rob))

            (testing "should not be doable"
              (is-not (doable board joe)))

            (testing ""
              (is-not (check board joe {:location hideout :player rob}))))

          (let [board (set-guard-house board joe)]
            (is-not (touchable? board rob joe))
            (is-not (doable board rob))
            (is (doable board joe))))))))

(deftest special-take-open-spot

  (testing "take-open-spot (mayor)"
    (let [board special-board
          {:keys [doable check]} take-open-spot]

      (testing "when board is empty"
        (is (board-empty? board))

        (testing "should be doable"
          (is-doable-by-all board take-open-spot))

        (testing "all locations should be valid choices"
          (are [location winner] (check board winner {:location location})
            hideout joe
            hideout rob
            courtroom joe
            courtroom rob)))

      (testing "when board board is full"
        (let [board (with-influence board hideout joe (:cap hideout)
                                          courtroom rob (:cap courtroom))]
          (is (board-full? board))

          (testing "should not be doable"
            (is-not-doable-by-any board take-open-spot))

          (testing "no location should be a valid choice"
            (are-not [location winner] (check board winner {:location location})
              hideout joe
              hideout rob
              courtroom joe
              courtroom rob))))

      (testing "when there is only one open spot"
        (let [board (with-influence board hideout joe (:cap hideout)
                                          courtroom rob (dec (:cap courtroom)))]
          (is-not (board-full? board))

          (testing "should be doable"
            (is-doable-by-all board take-open-spot))

          (testing "only that one location should be a valid choice"
            (is (check board joe {:location courtroom}))
            (is (check board rob {:location courtroom}))
            (is-not (check board joe {:location hideout}))
            (is-not (check board rob {:location hideout})))))

      (testing "when one location is full"
        (let [board (with-influence board hideout joe 1)]

          (testing "should be doable"
            (is-doable-by-all board take-open-spot))

          (testing "full location is not a valid choice"
            (are-not [location winner] (check board winner {:location location})
              hideout rob
              hideout joe))

          (testing "any other location is a valid choice"
            (are [location winner] (check board winner {:location location})
              courtroom rob
              courtroom joe)))))))

(deftest special-reassign-spots

  (testing "reassign-spots (messenger)"
    (let [{:keys [doable check]} reassign-spots
          board reassign-board]

      (testing "when the board is empty"
        (is (board-empty? board))

        (testing "should not be doable by anyone"
          (is-not-doable-by-any board reassign-spots))

        (testing "all non-empty combination of inputs should be invalid"
          ))

      (testing "when the winner has no cubes on the board"
        (let [board (add-influence board loc2 rob)]

          (testing "should not be doable"
            (is-not (doable board joe)))))

      (testing "when the winner has the only cube on the board"
        (let [board (add-influence board loc1 joe)]

          (testing "should be doable by the player with a cube on the board"
            (is (doable board joe)))

          (testing "should not be doable by the player without a cube on the board"
            (is-not (doable board rob)))

          (testing "winner should be able to move that one cube"
            (is (check board joe {:reassignments [[loc1 loc3]]}))
            (is (check board joe {:reassignments [[loc1 loc2]]})))

          (testing "winner should not be able to move that same cube twice"
            (is-not (check board joe {:reassignments [[loc1 loc3] [loc1 loc3]]}))
            (is-not (check board joe {:reassignments [[loc1 loc2] [loc1 loc2]]}))
            (is-not (check board joe {:reassignments [[loc1 loc3] [loc1 loc2]]}))
            (is-not (check board joe {:reassignments [[loc1 loc2] [loc1 loc3]]})))))

      (testing "when the winner has only two cubes on the board"
        (testing "at the same location"
          (let [board (with-influence board loc1 joe 2)]

            (testing "should be doable"
              (is (doable board joe)))

            (testing "should be able to move just one cube"
              (is (check board joe {:reassignments [[loc1 loc3]]}))
              (is (check board joe {:reassignments [[loc1 loc2]]})))

            (testing "winner should be able to move both cubes"
              (is (check board joe {:reassignments [[loc1 loc3] [loc1 loc3]]}))
              (is (check board joe {:reassignments [[loc1 loc2] [loc1 loc2]]}))
              (is (check board joe {:reassignments [[loc1 loc3] [loc1 loc2]]}))
              (is (check board joe {:reassignments [[loc1 loc2] [loc1 loc3]]})))))

        (testing "at different locations"
          (let [board (with-influence board loc1 joe 1
                                            loc2 joe 1)]

            (testing "should be doable"
              (is (doable board joe)))

            (testing "should be able to move just one cube"
              (is (check board joe {:reassignments [[loc1 loc2]]}))
              (is (check board joe {:reassignments [[loc2 loc1]]}))
              (is (check board joe {:reassignments [[loc1 loc3]]}))
              (is (check board joe {:reassignments [[loc2 loc3]]})))

            (testing "winner should be able to move both cubes"
              (is (check board joe {:reassignments [[loc1 loc3] [loc2 loc3]]}))))))

      (testing "when there is only one open space on the board"
        (let [board (with-influence board loc1 rob 2
                                          loc2 rob 1
                                          loc2 joe 2
                                          loc3 rob 1
                                          loc3 rob 2)]

          (testing "should be doable"
            (is-doable-by-all board reassign-spots))

          (testing "winner should be able to move one cube to location with open spot"
            (is (check board joe {:reassignments [[loc2 loc3]]}))
            (is (check board rob {:reassignments [[loc1 loc3]]})))

          (testing "winner should not be able to move two cubes to that one open spot"
            (is-not (check board joe {:reassignments [[loc2 loc3] [loc2 loc3]]}))
            (is-not (check board rob {:reassignments [[loc1 loc3] [loc2 loc3]]})))))

      (testing "when the board is full"
        (let [board (with-influence board loc1 rob 2
                                          loc2 joe 3
                                          loc3 rob 2
                                          loc3 rob 2)]
          (is (board-full? board))

          (testing "should not be doable by anyone"
            (is-not-doable-by-any board reassign-spots)))))))

(deftest scenario-reassign
  (let [bids {reassigner {rob (->Bid 1 0 0) joe (->Bid 0 0 0)}}
        board (-> reassign-board
                  (add-bank rob (->Bid 1 0 0))
                  (add-influence loc1 rob)
                  (add-influence loc2 joe)
                  (add-influence loc3 rob)
                  (run-turn bids))]
    (is= reassign-spots (:special board))
    (let [board (run-turn board
                          bids
                          {:reassignments [[loc1 loc2] [loc3 loc2]]})]
      (is (ready? board))
      (is= 0 (get-influence board loc1 rob))
      (is= 0 (get-influence board loc1 joe))
      (is= 2 (get-influence board loc2 rob))
      (is= 1 (get-influence board loc2 joe))
      (is= 0 (get-influence board loc3 rob))
      (is= 0 (get-influence board loc3 joe)))))

(deftest scenario-mid-game-with-specials
  (let [bids {assassin {rob (->Bid 1 0 0) joe (->Bid 0 0 0)}
              judge    {rob (->Bid 0 0 0) joe (->Bid 1 0 0)}}
        board (-> special-board
                  (add-influence hideout rob)
                  (add-influence courtroom rob)
                  (add-influence courtroom joe)
                  (add-influence courtroom joe)
                  (add-bank rob (->Bid 1 0 0))
                  (add-bank joe (->Bid 1 0 0)))]
    (is= 1 (get-influence board courtroom rob))
    (is= 2 (get-influence board courtroom joe))
    (is= 1 (get-influence board hideout rob))
    (is= 0 (get-influence board hideout joe))
    (let [board (run-turn board bids)]
      (is (suspended? board))
      (is= clear-spot (:special board))
      (let [board (run-turn board
                            bids
                            {:location courtroom :player joe})]
        (is (suspended? board))
        (is= steal-spot (:special board))
        (let [board (run-turn board
                              bids
                              {:location hideout :player rob})]
          (is (ready? board))
          (is= 1 (get-influence board courtroom rob))
          (is= 2 (get-influence board courtroom joe))
          (is= 0 (get-influence board hideout rob))
          (is= 1 (get-influence board hideout joe))
          (is= (->Bid 3 0 2) (get-bank board rob))
          (is= (->Bid 4 1 0) (get-bank board joe)))))))

(deftest board-should-not-get-suspended-if-no-special-won
  (let [board (-> (make-board [rob joe])
                  (add-bank rob (->Bid 1 0 0))
                  (add-bank joe (->Bid 1 0 0)))
        bids {(get-in board [:figures 5]) {rob (->Bid 1 0 0) joe (->Bid 0 0 0)}
              (get-in board [:figures 6]) {rob (->Bid 0 0 0) joe (->Bid 1 0 0)}}
        board (run-turn board bids)]
    (is (ready? board))
    (is= 2 (:turn board))))
