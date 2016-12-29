(ns ^:figwheel-always revolt.client.messaging
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [put! <!]]
            [revolt.core :refer [zero-bid]]))

(defonce message-channel (atom nil))

(defn send-message [type content]
  (put! @message-channel (assoc content :type type)))

(defn send-spy [location-id target-id]
  (send-message :submit-special
    {:args {:location location-id
            :player target-id}}))

(defn send-mayor [location-id]
  (send-message :submit-special
    {:args {:location location-id}}))

(defn send-apothecary [location0-id target0-id location1-id target1-id]
  (send-message :submit-special
    {:args {:location0 location0-id
            :player0 target0-id
            :location1 location1-id
            :player1 target1-id}}))

(defn send-messenger [reassignments]
  (send-message :submit-special
    {:args {:reassignments (or reassignments [])}}))

(defn send-signup [player-name]
  (send-message :signup
    {:player-name player-name}))

(defn send-start-game []
  (send-message :start-game
    {}))

(defn send-bids [bids]
  (send-message :submit-bids
    {:bids bids}))

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
    (swap! app-state assoc :remaining-bank my-bank)
    (swap! app-state assoc :banks banks)
    (swap! app-state assoc :support support)
    (swap! app-state assoc :influence influence)
    (swap! app-state assoc :turn turn)
    (swap! app-state assoc :guard-house guard-house)))

(defn zero-bids [figures] (zipmap (map :id figures) (repeat zero-bid)))

(defn receive-msgs! [app-state server-ch]
  (go-loop []
    (when-let [{:keys [message] :as raw} (<! server-ch)]
      (let [{:keys [type player-id setup status]} message]
        (case type
          :player-id
            (let [{:keys [players]} message]
              (swap! app-state assoc
                :player-id player-id
                :players players))
          :signup
            (let [{:keys [player]} message]
              (swap! app-state update-in [:players] #(conj % player))
              (when (is-me? @app-state (:id player))
                (swap! app-state assoc :mode :lobby)))
          :start-game
            (let [{:keys [players figures locations]} setup]
              (swap! app-state assoc
                :figures figures
                :locations locations
                :players players))
          :game-over
            (swap! app-state assoc :mode :game-over)
          :take-bids
            (do
              (receive-status app-state status)
              (swap! app-state assoc
                :mode :take-bids
                :bids-submitted {}
                :bids (zero-bids (:figures @app-state))))
          :special
            (let [{:keys [special-id special-winner status]} message]
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
