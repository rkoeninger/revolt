(ns revolt-specials-test
  (:use revolt.core
        revolt.setup
        clojure.test
        test-common))

(deftest special-steal-spot
  (testing "steal-spot (spy)"
    (let [{:keys [doable check effect]} steal-spot
          board special-board]

      (testing "when the board is empty"
        (is (board-empty? board))

        (testing "should not be doable"
          (is-not-doable-by-any board steal-spot))

        (testing "no location should be valid input for any winner"
          (are-not [location winner target]
            (check board winner {:location location :player target})
            hideout rob joe
            hideout joe rob
            courtroom rob joe
            courtroom joe rob))

        (testing "attempting to steal any spot should throw an error"
          (are-thrown? AssertionError #"has no influence on"
            [winner location player]
            (effect board winner {:location location :player player})
            rob hideout joe
            joe hideout rob
            rob courtroom joe
            joe courtroom rob)))

      (testing "when the board is half full"
        (let [board (with-influence board hideout rob 1
                                          courtroom joe 3)]

          (testing "should be doable"
            (is-doable-by-all board steal-spot))

          (testing "when the other player has the guard house"
            (let [board (set-guard-house board rob)]
              
              (testing "they should not be a valid target by the other player"
                (is-not (check board joe {:location hideout :player rob})))

              (testing "they should be able to target themselves"
                (is (check board rob {:location hideout :player rob}))))

            (let [board (set-guard-house board joe)]
              
              (testing "they should not be a valid target by the other player"
                (is-not (check board rob {:location courtroom :player joe})))

              (testing "they should be able to target themselves"
                (is (check board joe {:location courtroom :player joe})))))

          (testing "where opponent has no cubes"
            (testing "winner should not be able to steal cube from there"
              (is-not (check board rob {:location hideout :player joe}))
              (is-not (check board joe {:location courtroom :player rob}))))

          (testing "applying special to opponent's cube should steal it"
            (let [board (effect board rob {:location courtroom :player joe})]
              (is= 1 (get-influence board courtroom rob))
              (is= 2 (get-influence board courtroom joe)))
            (let [board (effect board joe {:location hideout :player rob})]
              (is= 1 (get-influence board hideout joe))
              (is= 0 (get-influence board hideout rob))))

          (testing "applying special to winner's own cube should have no effect"
            (is= board (effect board rob {:location hideout :player rob}))
            (is= board (effect board joe {:location courtroom :player joe})))))

      (testing "when one player has no cubes"
        (let [board (with-influence board courtroom joe 3)]

          (testing "when the other player is in the guard house"
            (let [board (set-guard-house board joe)]

              (testing "should not be doable by player with no cubes"
                (is-not (doable board rob)))))

          (testing "attempting to steal spot from player with no cubes should fail"
            (are-thrown? AssertionError #"has no influence on"
              [winner location player]
              (effect board winner {:location location :player player})
              rob courtroom rob
              rob courtroom rob
              rob hideout rob
              rob hideout rob)))))))

(deftest special-swap-spots

  (testing "swap-spots (apothecary)"
    (let [{:keys [doable check effect]} swap-spots
          board special-board]

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

            (testing "choices involving other player's cubes should be invalid"
              (is-not (check board joe {:location hideout :player rob}))))

          (let [board (set-guard-house board joe)]
            (is-not (touchable? board rob joe))

            (testing "should not be doable"
              (is-not (doable board rob)))

            (testing "choices involving other player's cubes should be invalid"
              (is-not (check board joe {:location hideout :player rob})))))))))

(deftest special-take-open-spot

  (testing "take-open-spot (mayor)"
    (let [{:keys [doable check effect]} take-open-spot
          board special-board]

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
    (let [{:keys [doable check effect]} reassign-spots
          board reassign-board]

      (testing "when the board is empty"
        (is (board-empty? board))

        (testing "should not be doable by anyone"
          (is-not-doable-by-any board reassign-spots))

        (testing "all non-empty combinations of inputs should be invalid"
          (are-not [winner reassignments]
            (check board winner {:reassignments reassignments})
            rob [[loc1 loc2]]
            rob [[loc1 loc3]]
            rob [[loc2 loc1]]
            rob [[loc2 loc3]]
            rob [[loc3 loc2]]
            rob [[loc3 loc1]]
            joe [[loc1 loc2]]
            joe [[loc1 loc3]]
            joe [[loc2 loc1]]
            joe [[loc2 loc3]]
            joe [[loc3 loc2]]
            joe [[loc3 loc1]]))

        (testing "empty inputs should still be valid"
          (is (check board rob {:reassignments []}))
          (is (check board joe {:reassignments []}))))

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
