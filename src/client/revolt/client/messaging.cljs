(ns ^:figwheel-always revolt.client.messaging
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [put! chan <!]]
            [chord.client :refer [ws-ch]]
            [cemerick.url :refer [url]]
            [revolt.core :as r]))

(defonce message-channel (atom nil))

(defn send-signup [player-name]
  (put! @message-channel
    {:type :signup
     :player-name player-name}))

(defn send-start-game []
  (put! @message-channel
    {:type :start-game}))

(defn send-bids [bids]
  (put! @message-channel
    {:type :submit-bids
     :bids bids}))

(defn send-spy [location-id target-id]
  (put! @message-channel
    {:type :submit-special
     :args {:location location-id
            :player target-id}}))

(defn send-apothecary [location0-id target0-id location1-id target1-id]
  (put! @message-channel
    {:type :submit-special
     :args {:location0 location0-id
            :player0 target0-id
            :location1 location1-id
            :player1 target1-id}}))

(defn send-messenger [reassignments]
  (put! @message-channel
    {:type :submit-special
     :args {:reassignments reassignments}}))

(defn send-mayor [location-id]
  (put! @message-channel
    {:type :submit-special
     :args {:location location-id}}))

(defn send-msgs! [new-msg-ch server-ch]
  (go-loop []
    ; forever repeatedly pipe messages from message-channel to websocket
    (when-let [msg (<! new-msg-ch)]
      (println "sending message...")
      (println msg)
      (>! server-ch msg)
      (recur))))

(defn is-me? [{:keys [player-id]} id] (= player-id id))

(defn receive-status [app-state status]
  (let [{:keys [turn guard-house banks support influence]} status
        {:keys [player-id]} @app-state
        my-bank (get banks player-id)]
    (swap! app-state assoc :bank my-bank)
    (swap! app-state assoc :original-bank my-bank)
    (swap! app-state assoc :banks banks)
    (swap! app-state assoc :support support)
    (swap! app-state assoc :influence influence)
    (swap! app-state assoc :turn turn)
    (swap! app-state assoc :guard-house guard-house)))

(defn zero-bids [figures] (zipmap (map :id figures) (repeat r/zero-bid)))

(defn receive-msgs! [app-state server-ch]
  (go-loop []
    (when-let [{:keys [message] :as raw} (<! server-ch)]
      (let [{:keys [type player-id setup status]} message]
        (case type
          :player-id
            (swap! app-state assoc :player-id player-id)
          :signup (do
            (swap! app-state update-in [:players] #(conj % player-id))
            (when (is-me? @app-state player-id)
              (swap! app-state assoc :mode :lobby)))
          :start-game (let [{:keys [players figures locations]} setup]
            (swap! app-state assoc :figures figures)
            (swap! app-state assoc :locations locations)
            (swap! app-state assoc :players players))
          :game-over (do nil)
          :take-bids (do
            (receive-status app-state status)
            (swap! app-state assoc :mode :take-bids)
            (swap! app-state assoc :bids-submitted {})
            (swap! app-state assoc :bids (zero-bids (:figures @app-state))))
          :special (let [{:keys [special-id special-winner status]} message]
            (receive-status app-state status)
            (if (is-me? @app-state special-winner)
              (case special-id
                :steal-spot     (swap! app-state assoc :mode :spy)
                :swap-spots     (swap! app-state assoc :mode :apothecary)
                :reassign-spots (swap! app-state assoc :mode :messenger)
                :take-open-spot (swap! app-state assoc :mode :mayor))))
          :bids-submitted
            (swap! app-state assoc-in [:bids-submitted player-id] true)
          :invalid-bid (do nil)
          :special-not-expected (do nil)
          :invalid-special-args (do nil)
          :game-already-started (do nil)
          :game-not-ready (do nil)
          (js/console.warn "type not idendified"))
        (js/console.log "raw websocket message:")
        (js/console.log (str raw))
        (recur)))))
