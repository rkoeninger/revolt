(ns revolt-server-test
  (:use revolt.core
        revolt.setup
        revolt.server
        revolt.server.messaging
        [clojure.test :only [deftest testing is]]
        [clojure.core.async :only [<!! chan]]
        test-common))

(deftest read-functions
  (let [l1 (->Location :l1 0 :all 0)
        l2 (->Location :l2 0 :all 0)
        l3 (->Location :l3 0 :all 0)
        f1 (->Figure :f1 0 zero-bid #{} nil nil)
        f2 (->Figure :f2 0 zero-bid #{} nil nil)
        f3 (->Figure :f3 0 zero-bid #{} nil nil)
        p1 (->Player :p1 "rob")
        p2 (->Player :p2 "joe")
        board (->Board nil [l1 l2 l3] [f1 f2 f3] [p1 p2] nil nil nil)]
    (is= {f1 (->Bid 3 0 0) f2 (->Bid 0 1 0) f3 (->Bid 0 0 1)}
         (read-figure-bid-map board {:f1 {:gold 3} :f2 {:blackmail 1} :f3 {:force 1}}))
    (is= {p1 {f1 (->Bid 3 0 0) f2 (->Bid 0 1 0) f3 (->Bid 0 0 1)}
          p2 {f1 (->Bid 1 0 0) f2 (->Bid 1 1 0) f3 (->Bid 1 0 1)}}
         (read-player-figure-bid-map board
          {:p1 {:f1 {:gold 3} :f2 {:blackmail 1} :f3 {:force 1}}
           :p2 {:f1 {:gold 1} :f2 {:gold 1 :blackmail 1} :f3 {:gold 1 :force 1}}}))
    (is= {:player p1 :location l1}
         (read-special-response board :steal-spot
          {:player :p1 :location :l1}))
    (is= {:player0 p1 :location0 l1 :player1 p2 :location1 l2}
         (read-special-response board :swap-spots
          {:player0 :p1 :location0 :l1 :player1 :p2 :location1 :l2}))
    (is= {:reassignments [[l1 l2] [l1 l3]]}
         (read-special-response board :reassign-spots
          {:reassignments [[:l1 :l2] [:l1 :l3]]}))))

(deftest signup-rejected-after-game-has-started
  (let [{:keys [state get-message connect handle]} (harness)]

    (connect 1)
    (handle 1 {:type :signup :player-name "rob"})
    (is= {1 "rob"} (:player-names @state))
    (is= {:type :signup :player-id 1 :player-name "rob"} (get-message 1))

    (connect 2)
    (handle 2 {:type :signup :player-name "joe"})
    (is= {1 "rob" 2 "joe"} (:player-names @state))
    (is= {:type :signup :player-id 2 :player-name "joe"} (get-message 1))
    (is= {:type :signup :player-id 2 :player-name "joe"} (get-message 2))

    (handle 1 {:type :start-game})
    (is (:board @state))

    (connect 3)
    (handle 3 {:type :signup :player-name "moe"})
    (is= {1 "rob" 2 "joe"} (:player-names @state))
    (is= {:type :game-already-started} (get-message 3))

    (handle 3 {:type :start-game})
    (is= {:type :game-already-started} (get-message 3))))

(deftest simple-bid-validation-first-turn-scenario
  (let [{:keys [state get-message connect handle]} (harness)]

    (connect 1)
    (connect 2)
    (handle 1 {:type :signup :player-name "rob"})
    (get-message 1)
    (get-message 2)
    (handle 2 {:type :signup :player-name "joe"})
    (get-message 1)
    (get-message 2)
    (handle 1 {:type :start-game})
    (get-message 1)
    (get-message 2)
    (get-message 1)
    (get-message 2)

    ; TODO find a way to clear messages

    (handle 1 {:type :submit-bids :bids {:priest (->Bid 3 1 1)}})
    (is= {:type :bids-submitted :player-id 1} (get-message 1))
    (get-message 2)

    ; TODO test bid-resubmission?

    (is= 1 (get-in @state [:board :turn]))
    (handle 2 {:type :submit-bids :bids {:merchant (->Bid 0 1 1)
                                  :mercenary (->Bid 2 0 0)
                                  :printer (->Bid 1 0 0)}})
    (is= {:type :bids-submitted :player-id 2} (get-message 1))
    (get-message 2)

    (let [{:keys [board]} @state
          rob (->Player 1 "rob")
          joe (->Player 2 "joe")]
      (is (ready? board))
      (is= 2 (:turn board))
      (is= (->Bid 5 0 0) (get-bank board rob))
      (is= (->Bid 5 0 1) (get-bank board joe))
      (is= 6 (get-support board rob))
      (is= 16 (get-support board joe))
      (is= 1 (get-influence board (location-by-id board :cathedral) rob))
      (is= 1 (get-influence board (location-by-id board :market) joe)))))

(deftest last-turn-scenario
  (let [{:keys [state get-message connect handle]} (harness)
        rob (->Player 1 "rob")
        joe (->Player 2 "joe")]

    (connect 1)
    (connect 2)
    (reset-in! state [:board] (make-board [rob joe]))
    (reset-in! state [:board :influence] (read-location-player-*-map (:board @state)
     {:tavern     {1 3, 2 1}
      :market     {1 2, 2 3}
      :plantation {1 3, 2 3}
      :cathedral  {1 4, 2 3}
      :harbor     {1 6, 2 0}
      :town-hall  {1 3, 2 4}
      :fortress   {1 4, 2 4}}))
    (reset-in! state [:board :banks] (read-player-*-map (:board @state)
     {1 (->Bid 1 0 0)
      2 (->Bid 1 0 0)}))

    (handle 1 {:type :submit-bids :bids {:printer (->Bid 1 0 0)}})
    (get-message 1)
    (get-message 2)
    (handle 2 {:type :submit-bids :bids {:printer (->Bid 1 0 0)}})
    (get-message 1)
    (get-message 2)

    (is (game-over? (:board @state)))
    (let [game-over-message {:type :game-over
                             :results {:rankings {1 1,   2 2}
                                       :scores   {1 100, 2 75}}}]
    (is= game-over-message (get-message 1)))))

(deftest first-turn-special-scenario
  (let [{:keys [state get-message connect handle]} (harness)
        rob (->Player 1 "rob")
        joe (->Player 2 "joe")]
    (connect 1)
    (connect 2)
    (handle 1 {:type :signup :player-name "rob"})
    (handle 2 {:type :signup :player-name "joe"})
    (handle 1 {:type :start-game})
    (handle 1 {:type :submit-bids :bids {:priest  (->Bid 3 1 1)}})
    (handle 2 {:type :submit-bids :bids {:spy     (->Bid 3 0 1)
                                         :printer (->Bid 0 1 0)}})
    (let [{:keys [board]} @state
          {:keys [special special-winner]} board]
      (is (suspended? board))
      (is= steal-spot special)
      (is= joe special-winner)

      (handle 2 {:type :submit-special :args {:location :cathedral :player 1}})
      (let [{:keys [board]} @state]
        (is (ready? board))
        (is= 2 (:turn board))
        (is= (->Bid 5 0 0) (get-bank board rob))
        (is= (->Bid 5 0 0) (get-bank board joe))
        (is= 6 (get-support board rob))
        (is= 10 (get-support board joe))
        (is= 0 (get-influence board (location-by-id board :cathedral) rob))
        (is= 1 (get-influence board (location-by-id board :cathedral) joe))))))
