(ns revolt-server-test
    (:use revolt)
    (:use revolt-setup)
    (:use revolt-server)
    (:use clojure.test))

(deftest read-functions
    (let [l1 (->Location :l1 0 0)
          l2 (->Location :l2 0 0)
          l3 (->Location :l3 0 0)
          f1 (->Figure :f1 0 zero-bid #{} nil nil)
          f2 (->Figure :f2 0 zero-bid #{} nil nil)
          f3 (->Figure :f3 0 zero-bid #{} nil nil)
          p1 (->Player :p1)
          p2 (->Player :p2)
          board (->Board nil [l1 l2 l3] [f1 f2 f3] [p1 p2] nil nil nil)]
        (is (= {f1 (->Bid 3 0 0) f2 (->Bid 0 1 0) f3 (->Bid 0 0 1)}
               (read-figure-bid-map board {:f1 {:gold 3} :f2 {:blackmail 1} :f3 {:force 1}})))
        (is (= {p1 {f1 (->Bid 3 0 0) f2 (->Bid 0 1 0) f3 (->Bid 0 0 1)}
                p2 {f1 (->Bid 1 0 0) f2 (->Bid 1 1 0) f3 (->Bid 1 0 1)}}
               (read-player-figure-bid-map board
                   {:p1 {:f1 {:gold 3} :f2 {:blackmail 1} :f3 {:force 1}}
                    :p2 {:f1 {:gold 1} :f2 {:gold 1 :blackmail 1} :f3 {:gold 1 :force 1}}})))
        (is (= {:player p1 :location l1}
               (read-special-response board :steal-spot
                   {:player :p1 :location :l1})))
        (is (= {:player0 p1 :location0 l1 :player1 p2 :location1 l2}
               (read-special-response board :swap-spots
                   {:player0 :p1 :location0 :l1 :player1 :p2 :location1 :l2})))
        (is (= {:reassignments [[l1 l2] [l1 l3]]}
               (read-special-response board :reassign-spots
                   {:reassignments [[:l1 :l2] [:l1 :l3]]})))))

(deftest signup-rejected-after-game-has-started
    (let [state (atom
            {:queries {}
             :channels #{}
             :board nil
             :player-ids #{}
             :bids {}})
          !transmit-responses (atom [])
          !broadcast-responses (atom [])
          transmit (partial swap! !transmit-responses conj)
          query nil
          broadcast (partial swap! !broadcast-responses conj)
          handle #(do (reset! !transmit-responses [])
                      (reset! !broadcast-responses [])
                      (handle-message % transmit query broadcast state))]
        (handle {:player-id "rob" :content {:type :signup}})
        (is (= #{"rob"} (:player-ids @state)))
        (is (= [{:type :signup :player-id "rob"}] @!broadcast-responses))
        (handle {:player-id "joe" :content {:type :signup}})
        (is (= #{"rob" "joe"} (:player-ids @state)))
        (is (= [{:type :signup :player-id "joe"}] @!broadcast-responses))
        (handle {:player-id "rob" :content {:type :start-game}})
        (is (:board @state))
        (handle {:player-id "moe" :content {:type :signup}})
        (is (= #{"rob" "joe"} (:player-ids @state)))
        (is (= [{:type :game-already-started}] @!transmit-responses))
        (handle {:player-id "moe" :content {:type :start-game}})
        (is (= [{:type :game-already-started}] @!transmit-responses))))

(deftest simple-bid-validation-first-turn-scenario
    (let [state (atom
            {:queries {}
             :channels #{}
             :board nil
             :player-ids #{}
             :bids {}})
          !transmit-responses (atom [])
          !broadcast-responses (atom [])
          transmit (partial swap! !transmit-responses conj)
          query nil
          broadcast (partial swap! !broadcast-responses conj)
          handle #(do (reset! !transmit-responses [])
                      (reset! !broadcast-responses [])
                      (handle-message % transmit query broadcast state))]
        (handle {:player-id "rob" :content {:type :signup}})
        (handle {:player-id "joe" :content {:type :signup}})
        (handle {:player-id "rob" :content {:type :start-game}})
        (handle {:player-id "rob" :content {:type :submit-bids
                                            :bids {:priest {:gold      3
                                                            :blackmail 1
                                                            :force     1}}}})
        (is (= [{:type :bids-submitted :player "rob"}] @!broadcast-responses))
        (handle {:player-id "rob" :content {:type :submit-bids
                                            :bids {:printer {:gold      3
                                                             :blackmail 1
                                                             :force     1}}}})
        (is (= [{:type :bids-already-submitted}] @!transmit-responses))
        (is (= 1 (:turn (:board @state))))
        (handle {:player-id "joe" :content {:type :submit-bids
                                            :bids {:merchant  {:blackmail 1
                                                               :force     1}
                                                   :mercenary {:gold      2}
                                                   :printer   {:gold      1}}}})
        (is (in? {:type :bids-submitted :player "joe"} @!broadcast-responses))
        (is (= 2 (:turn (:board @state))))
        (is (= (->Bid 5 0 0) (get-bank (:board @state) (->Player "rob"))))
        (is (= (->Bid 5 0 1) (get-bank (:board @state) (->Player "joe"))))
        (is (= 6 (get-support (:board @state) (->Player "rob"))))
        (is (= 13 (get-support (:board @state) (->Player "joe"))))
        (is (= 1 (get-influence (:board @state) (location-by-id (:board @state) :cathedral) (->Player "rob"))))
        (is (= 1 (get-influence (:board @state) (location-by-id (:board @state) :market) (->Player "joe"))))))

(defn read-player-*-map [board m]
    (map-keys (partial player-by-id board) m))

(defn read-location-player-*-map [board m]
    (map-kv (partial location-by-id board) (partial read-player-*-map board) m))

(deftest last-turn-scenario
    (let [board (make-board [(->Player "rob") (->Player "joe")])
          board (assoc board :influence (read-location-player-*-map board
              {:tavern     {"rob" 3 "joe" 1}
               :market     {"rob" 2 "joe" 3}
               :plantation {"rob" 3 "joe" 3}
               :cathedral  {"rob" 4 "joe" 3}
               :harbor     {"rob" 6 "joe" 0}
               :town-hall  {"rob" 3 "joe" 4}
               :fortress   {"rob" 4 "joe" 4}
               :palace     {"rob" 6 "joe" 2}}))
          board (assoc board :banks (read-player-*-map board
              {"rob" (->Bid 1 0 0)
               "joe" (->Bid 1 0 0)}))
          state (atom
            {:queries {}
             :channels #{}
             :board board
             :player-ids #{}
             :bids {}})
          !transmit-responses (atom [])
          !broadcast-responses (atom [])
          transmit (partial swap! !transmit-responses conj)
          query nil
          broadcast (partial swap! !broadcast-responses conj)
          handle #(do (reset! !transmit-responses [])
                      (reset! !broadcast-responses [])
                      (handle-message % transmit query broadcast state))]
        (handle {:player-id "rob" :content {:type :submit-bids
                                            :bids {:printer {:gold 1}}}})
        (is (in? {:type :bids-submitted :player "rob"}
                 @!broadcast-responses))
        (handle {:player-id "joe" :content {:type :submit-bids
                                            :bids {:printer {:gold 1}}}})
        (is (in? {:type :bids-submitted :player "joe"}
                 @!broadcast-responses))
        (is (in? {:type :take-bids
                  :status (board-status (:board @state))}
                 @!broadcast-responses))
        (is (in? {:type :game-over
                  :results {:rankings {"rob" 1   "joe" 2}
                            :scores   {"rob" 155 "joe" 75}}}
                 @!broadcast-responses))))

(deftest first-turn-special-scenario
    (let [state (atom {:board (make-board [(->Player "rob") (->Player "joe")])
                       :bids {}
                       :player-ids #{"rob" "joe"}
                       :queries {"joe"
                                 (fn [{:keys [special figure] :as message}]
                                    (is (= special :steal-spot))
                                    (is (= figure :spy))
                                    {:content {:player "rob" :location :cathedral}})}})
          !transmit-responses (atom [])
          !broadcast-responses (atom [])
          transmit (partial swap! !transmit-responses conj)
          query nil
          broadcast (partial swap! !broadcast-responses conj)
          handle #(do (reset! !transmit-responses [])
                      (reset! !broadcast-responses [])
                      (handle-message % transmit query broadcast state))]
        (handle {:player-id "rob" :content {:type :submit-bids
                                            :bids {:priest {:gold      3
                                                            :blackmail 1
                                                            :force     1}}}})
        (handle {:player-id "joe" :content {:type :submit-bids
                                            :bids {:spy {:gold 3 :force 1}
                                                   :printer {:blackmail 1}}}})
        (is (= 2 (:turn (:board @state))))
        (is (= (->Bid 5 0 0) (get-bank (:board @state) (->Player "rob"))))
        (is (= (->Bid 5 0 0) (get-bank (:board @state) (->Player "joe"))))
        (is (= 6 (get-support (:board @state) (->Player "rob"))))
        (is (= 10 (get-support (:board @state) (->Player "joe"))))
        (is (= 0 (get-influence (:board @state) (location-by-id (:board @state) :cathedral) (->Player "rob"))))
        (is (= 1 (get-influence (:board @state) (location-by-id (:board @state) :cathedral) (->Player "joe"))))))
