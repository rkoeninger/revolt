(ns revolt-server-test
    (:use revolt)
    (:use revolt-server)
    (:use clojure.test))

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

(deftest simple-bid-validation
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
                                              :bids {:priest {:gold      3
                                                              :blackmail 1
                                                              :force     1}}}})
          (is (= [{:content :bids-already-submitted}] @!transmit-responses))
          (handle {:player-id "joe" :content {:type :submit-bids
                                              :bids {:merchant {:gold      3
                                                                :blackmail 1
                                                                :force     1}}}})
          (is (= [{:content :bids-accepted}] @!transmit-responses))
          (is (= 2 (:turn @!board)))))
