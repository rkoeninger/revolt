(ns revolt-server-test
    (:use revolt)
    (:use revolt-server)
    (:use clojure.test))

(deftest read-functions
    (let [f1 (->Figure :f1 0 zero-bid #{} nil nil)
          f2 (->Figure :f2 0 zero-bid #{} nil nil)
          f3 (->Figure :f3 0 zero-bid #{} nil nil)
          p1 (->Player :p1)
          p2 (->Player :p2)
          board (->Board nil nil [f1 f2 f3] [p1 p2] nil nil nil)]
        (is (= {f1 (->Bid 3 0 0) f2 (->Bid 0 1 0) f3 (->Bid 0 0 1)}
               (read-figure-bid-map board {:f1 {:gold 3} :f2 {:blackmail 1} :f3 {:force 1}})))
        (is (= {p1 {f1 (->Bid 3 0 0) f2 (->Bid 0 1 0) f3 (->Bid 0 0 1)}
                p2 {f1 (->Bid 1 0 0) f2 (->Bid 1 1 0) f3 (->Bid 1 0 1)}}
               (read-player-figure-bid-map
                   board
                   {:p1 {:f1 {:gold 3} :f2 {:blackmail 1} :f3 {:force 1}}
                    :p2 {:f1 {:gold 1} :f2 {:gold 1 :blackmail 1} :f3 {:gold 1 :force 1}}})))))

(deftest signup-rejected-after-game-has-started
    (let [!board (atom nil)
          !player-ids (atom #{})
          !transmit-responses (atom [])
          !broadcast-responses (atom [])
          transmit (partial swap! !transmit-responses conj)
          broadcast (partial swap! !broadcast-responses conj)
          handle #(do (reset! !transmit-responses [])
                      (reset! !broadcast-responses [])
                      (handle-message % transmit broadcast !board nil !player-ids))]
        (handle {:player-id "rob" :content {:type :signup}})
        (is (= #{"rob"} @!player-ids))
        (is (= [{:content :signup-accepted :player-id "rob"}] @!broadcast-responses))
        (handle {:player-id "joe" :content {:type :signup}})
        (is (= #{"rob" "joe"} @!player-ids))
        (is (= [{:content :signup-accepted :player-id "joe"}] @!broadcast-responses))
        (handle {:player-id "rob" :content {:type :start-game}})
        (is @!board)
        (handle {:player-id "moe" :content {:type :signup}})
        (is (= #{"rob" "joe"} @!player-ids))
        (is (= [{:content :game-already-started}] @!transmit-responses))
        (handle {:player-id "moe" :content {:type :start-game}})
        (is (= [{:content :game-already-started}] @!transmit-responses))))

(deftest simple-bid-validation-first-turn-scenario
    (let [!board (atom nil)
          !bids (atom {})
          !player-ids (atom #{})
          !transmit-responses (atom [])
          !broadcast-responses (atom [])
          transmit (partial swap! !transmit-responses conj)
          broadcast (partial swap! !broadcast-responses conj)
          handle #(do (reset! !transmit-responses [])
                      (reset! !broadcast-responses [])
                      (handle-message % transmit broadcast !board !bids !player-ids))]
        (handle {:player-id "rob" :content {:type :signup}})
        (handle {:player-id "joe" :content {:type :signup}})
        (handle {:player-id "rob" :content {:type :start-game}})
        (handle {:player-id "rob" :content {:type :submit-bids
                                            :bids {:priest {:gold      3
                                                            :blackmail 1
                                                            :force     1}}}})
        (is (= [{:content :bids-accepted}] @!transmit-responses))
        (handle {:player-id "rob" :content {:type :submit-bids
                                            :bids {:printer {:gold      3
                                                             :blackmail 1
                                                             :force     1}}}})
        (is (= [{:content :bids-already-submitted}] @!transmit-responses))
        (is (= 1 (:turn @!board)))
        (handle {:player-id "joe" :content {:type :submit-bids
                                            :bids {:merchant  {:blackmail 1
                                                               :force     1}
                                                   :mercenary {:gold      2}
                                                   :printer   {:gold      1}}}})
        (is (= [{:content :bids-accepted}] @!transmit-responses))
        (is (= 2 (:turn @!board)))
        (is (= (->Bid 5 0 0) (get-bank @!board (->Player "rob"))))
        (is (= (->Bid 5 0 1) (get-bank @!board (->Player "joe"))))
        (is (= 6 (get-support @!board (->Player "rob"))))
        (is (= 13 (get-support @!board (->Player "joe"))))))

(defn location-by-id [board location-id] (by-id (:locations board) location-id))

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
          !board (atom board)
          !bids (atom {})
          !player-ids (atom #{})
          !transmit-responses (atom [])
          !broadcast-responses (atom [])
          transmit (partial swap! !transmit-responses conj)
          broadcast (partial swap! !broadcast-responses conj)
          handle #(do (reset! !transmit-responses [])
                      (reset! !broadcast-responses [])
                      (handle-message % transmit broadcast !board !bids !player-ids))]
        (handle {:player-id "rob" :content {:type :submit-bids
                                            :bids {:printer {:gold 1}}}})
        (handle {:player-id "joe" :content {:type :submit-bids
                                            :bids {:printer {:gold 1}}}})
        (is (= [{:content :bids-accepted}]
               @!transmit-responses))
        (is (= [{:content (board-status @!board)}
                {:type :game-over
                 :results {:rankings {"rob" 1   "joe" 2}
                           :scores   {"rob" 155 "joe" 75}}}]
               @!broadcast-responses))))
