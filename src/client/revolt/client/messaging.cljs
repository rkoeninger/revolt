(ns revolt.client.messaging
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [put! <!]]
            [revolt.core :refer [zero-bid]]))

(defonce message-channel (atom nil))

(defn- send-message [type content]
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

(defn send-reset []
  (send-message :reset
    {}))

(defn send-messages! [message-channel server-channel]
  (go-loop []
    ; forever repeatedly pipe messages from message-channel to websocket
    (when-let [message (<! message-channel)]
      (println "sending message...")
      (println message)
      (>! server-channel message)
      (recur))))

(defn- is-me? [{:keys [player-id]} {:keys [id]}] (= player-id id))

(defn- zero-bids [figures] (zipmap (map :id figures) (repeat zero-bid)))

(defn- receive-player-id [state {:keys [player-id players]}]
  (swap! state assoc
    :player-id player-id
    :players players))

(defn- receive-signup [state {:keys [player]}]
  (swap! state update-in [:players] #(conj % player))
  (when (is-me? @state player)
    (swap! state assoc :mode :lobby)))

(defn- receive-start-game [state {:keys [setup]}]
  (let [{:keys [players figures locations]} setup]
    (swap! state assoc
      :figures figures
      :locations locations
      :players players)))

(defn- receive-game-over [state]
  (swap! state assoc :mode :game-over))

(defn- receive-status [state {:keys [turn guard-house banks support influence]}]
  (let [{:keys [player-id]} @state
        my-bank (get banks player-id)]
    (swap! state assoc
      :remaining-bank my-bank
      :banks banks
      :support support
      :influence influence
      :turn turn
      :guard-house guard-house)))

(defn- receive-take-bids [state {:keys [status]}]
  (receive-status state status)
  (swap! state assoc
    :mode :take-bids
    :bids-submitted {}
    :bids (zero-bids (:figures @state))))

(defn- receive-special [state {:keys [status special-winner special-id]}]
  (receive-status state status)
  (if (is-me? @state special-winner)
    (case special-id
      :steal-spot     (swap! state assoc :mode :spy)
      :swap-spots     (swap! state assoc :mode :apothecary)
      :reassign-spots (swap! state assoc :mode :messenger)
      :take-open-spot (swap! state assoc :mode :mayor))))

(defn- receive-bids-submitted [state {:keys [player-id]}]
  (swap! state assoc-in [:bids-submitted player-id] true))

(defn- receive-reset [state]
  (reset! state
   {:lang (:lang @state)
    :mode :signup
    :players []
    :bids-submitted {}
    :bids {}}))

(defn receive-messages! [state server-channel]
  (go-loop []
    (when-let [{:keys [message] :as raw} (<! server-channel)]
      (case (:type message)
        :player-id            (receive-player-id state message)
        :signup               (receive-signup state message)
        :start-game           (receive-start-game state message)
        :game-over            (receive-game-over state message)
        :take-bids            (receive-take-bids state message)
        :special              (receive-special state message)
        :bids-submitted       (receive-bids-submitted state message)
        :invalid-bid          (js/console.error "invalid bid")
        :special-not-expected (js/console.error "special input not expected at this time")
        :invalid-special-args (js/console.error "invalid special args")
        :game-already-started (js/console.error "game has already started")
        :game-not-ready       (js/console.error "game not ready")
        :reset                (receive-reset state message)
        (js/console.error "message type not recognized"))
      (js/console.log "raw websocket message:")
      (js/console.log (str raw))
      (recur))))
