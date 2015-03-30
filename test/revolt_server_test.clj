(ns revolt-server-test
	(:use revolt)
	(:use revolt-server)
	(:use clojure.test))

(deftest signup-rejected-after-game-has-started
	(let [board-atom (atom nil)
		  player-ids-atom (atom #{})
		  sender-channel nil
		  transmit-responses (atom [])
		  broadcast-responses (atom [])
		  clear-responses (fn [] (do (reset! transmit-responses []))
		  	                         (reset! broadcast-responses []))
		  transmit (fn [_ message] (swap! transmit-responses conj message))
		  broadcast (fn [message] (swap! broadcast-responses conj message))]
		(handle-message sender-channel
			            {:user-name "rob"
			             :content {:type :signup}}
			            transmit
			            broadcast
			            board-atom
			            nil
			            player-ids-atom)
		(is (= #{"rob"} @player-ids-atom))
		(is (= [{:content :signup-accepted :user-name "rob"}] @broadcast-responses))
		(clear-responses)
		(handle-message sender-channel
			            {:user-name "joe"
			             :content {:type :signup}}
			            transmit
			            broadcast
			            board-atom
			            nil
			            player-ids-atom)
		(is (= #{"rob" "joe"} @player-ids-atom))
		(is (= [{:content :signup-accepted :user-name "joe"}] @broadcast-responses))
		(clear-responses)
		(handle-message sender-channel
                        {:user-name "rob"
                         :content {:type :start-game}}
                        transmit
                        broadcast
                        board-atom
                        nil
                        player-ids-atom)
        (is @board-atom)
        (clear-responses)
        (handle-message sender-channel
                        {:user-name "moe"
                         :content {:type :signup}}
                        transmit
                        broadcast
                        board-atom
                        nil
                        player-ids-atom)
        (is (= #{"rob" "joe"} @player-ids-atom))
        (is (= [{:content :game-already-started}] @transmit-responses))
        (clear-responses)
        (handle-message sender-channel
                        {:user-name "moe"
                         :content {:type :start-game}}
                        transmit
                        broadcast
                        board-atom
                        nil
                        player-ids-atom)
        (is (= [{:content :game-already-started}] @transmit-responses))))
