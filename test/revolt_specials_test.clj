(ns revolt-specials-test
    (:use revolt)
    (:use clojure.test))

(def rob (->Player "Rob"))
(def joe (->Player "Joe"))
(def players [rob joe])

(def hideout   (->Location :hideout   20 1))
(def courtroom (->Location :courtroom 30 6))

(def locs (apply id-map [hideout courtroom]))

(def clear-spot
    (->Special {:location "Location" :player "Player"}
        (fn [board winner]
            (pos? (reduce + (map (partial occupied-influence board) (vals (:locations board))))))
        (fn [board winner {:keys [location player]}] (pos? (get-influence board location player)))
        (fn [board winner {:keys [location player]}] (remove-influence board location player))))

(def assassin (figure :assassin 0 [0 0 2] -f hideout   clear-spot))
(def judge    (figure :judge    4 [0 1 0] b- courtroom steal-spot))

(def figs-order [assassin judge])
(def figs (apply id-map figs-order))

(def board (->Board
    locs
    figs
    figs-order
    players
    (zipmap players (repeat (->Bid 0 0 0)))
    (zipmap (vals locs) (repeat (zipmap players (repeat 0))))
    (zipmap players (repeat 0))
    1))

(deftest simple-special
    (let [callback (constantly {:location courtroom :player joe})
          board (-> board
                    (add-influence hideout rob)
                    (add-influence courtroom rob)
                    (add-influence courtroom joe)
                    (add-influence courtroom joe)
                    (run-special clear-spot rob callback))]
        (is (= 1 (get-influence board hideout rob)))
        (is (= 0 (get-influence board hideout joe)))
        (is (= 1 (get-influence board courtroom rob)))
        (is (= 1 (get-influence board courtroom joe)))))

(deftest steal-spot-empty-board
    (let [doable (:doable steal-spot) check (:check steal-spot)]
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
          board-rob-in-gh (assoc board :guard-house rob)
          board-joe-in-gh (assoc board :guard-house joe)]
        (is (not (touchable? board-joe-in-gh rob joe)))
        (is (not (touchable? board-rob-in-gh joe rob)))
        (is (not (doable board-joe-in-gh rob)))
        (is (not (doable board-rob-in-gh joe)))
        (is (doable board-rob-in-gh rob))
        (is (doable board-joe-in-gh joe))))

(deftest steal-spot-single-valid-target)

(deftest swap-spots-empty-board
    (is (not ((:doable swap-spots) board rob)))
    (is (not ((:doable swap-spots) board joe)))
    (is (not ((:check swap-spots) board rob {:location hideout :player rob})))
    (is (not ((:check swap-spots) board rob {:location hideout :player joe})))
    (is (not ((:check swap-spots) board joe {:location hideout :player rob})))
    (is (not ((:check swap-spots) board joe {:location hideout :player joe}))))

(deftest swap-spots-only-one-player-on-board)

(deftest swap-spots-only-other-player-has-guard-house)

(deftest scenario-mid-game-with-specials
    (let [bids {assassin {rob (->Bid 1 0 0) joe (->Bid 0 0 0)}
                judge    {rob (->Bid 0 0 0) joe (->Bid 1 0 0)}}
          callback (fn [player params]
                       (cond
                           (= player rob) {:location courtroom :player joe}
                           (= player joe) {:location hideout   :player rob}))
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
        (let [board (run-turn board bids callback)]
            (is (= 1 (get-influence board courtroom rob)))
            (is (= 2 (get-influence board courtroom joe)))
            (is (= 0 (get-influence board hideout rob)))
            (is (= 1 (get-influence board hideout joe)))
            (is (= (->Bid 3 0 2) (get-bank board rob)))
            (is (= (->Bid 4 1 0) (get-bank board joe))))))
