(ns revolt.server
  (:require [ring.util.response :refer [response]]
            [compojure.core :refer [defroutes GET]]
            [chord.http-kit :refer [wrap-websocket-handler]]
            [clojure.core.async :refer [<! >! go go-loop chan]]
            [hyjinks.core :refer [tag->string html head title favicon import-css import-js body div]])
  (:use revolt.core
        revolt.setup
        revolt.server.messaging))

(defn ->ServerState [] {
  :player-names {} ; {player-id player-name}
  :player-channels {} ; {player-id chan}
  :board nil
  :bids {}}) ; {player-id Bid}

(defn handle-turn [state & [args]]
  (let [{:keys [board bids]} @state
        bids (relevel (read-player-figure-bid-map board bids))
        board (run-turn board bids args)]
    (reset-in! state [:board] board)
    (cond
      (suspended? board) (broadcast-special state board)
      (game-over? board) (broadcast-game-over state board)
      :else
        (do (reset-in! state [:bids] {})
            (broadcast-take-bids state board)))))

; TODO make sure submitted by the right player
;     (already handled by the player-id being associated with the ws-channel?)
; TODO make sure correct special was submitted for?
(defn handle-submit-special [state player-id args]
  (let [{:keys [board]} @state
        {:keys [id check]} (:special board)
        player (player-by-id board player-id)
        args (read-special-response board id args)]
    (cond
      (not (suspended? board))        (transmit-special-not-expected state player-id)
      (not (check board player args)) (transmit-invalid-special-args state player-id)
      :else
        (do (broadcast-special-submitted state player-id id args)
            (handle-turn state args)))))

(defn invalid-bids? [board player-id bids]
  (not (validate-bids (get-bank board (player-by-id board player-id))
                      (read-figure-bid-map board bids))))

(defn all-bids-submitted? [state]
  (let [{:keys [board bids]} @state
        {:keys [players]} board]
    (= (count players) (count bids))))

; TODO check that bids are being submitted for the current turn?
; if we allow re-submits, then we can't let re-submission be applied to next turn
(defn handle-submit-bids [state player-id bids]
  (let [{:keys [board]} @state]
    (cond
      (not (ready? board))                 (transmit-game-not-ready state player-id)
      (invalid-bids? board player-id bids) (transmit-invalid-bid state player-id)
      :else
        (do (swap-in! state [:bids] assoc player-id bids)
            (broadcast-bids-submitted state player-id)
            (if (all-bids-submitted? state)
                (handle-turn state))))))

(defn handle-start-game [state player-id]
  (let [{:keys [board player-names]} @state]
    (if board
      (transmit-game-already-started state player-id)
      (let [board (make-board (mapv (partial apply ->Player) player-names) palace-figures palace-locations)]
        (do (reset-in! state [:board] board)
            (broadcast-start-game state board)
            (broadcast-take-bids state board))))))

(defn handle-signup [state player-id player-name]
  (if (:board @state)
    (transmit-game-already-started state player-id)
    (do (swap-in! state [:player-names] assoc player-id player-name)
        (broadcast-signup state player-id player-name))))

(defn handle-reset [state]
  (let [{:keys [logging player-channels]} @state]
    (reset! state (assoc (->ServerState)
      :logging logging
      :player-channels player-channels)))
  (broadcast-reset state))

(defn handle-message [state {:keys [player-id type player-name bids args]}]
  (case type
    :signup         (handle-signup state player-id player-name)
    :start-game     (handle-start-game state player-id)
    :submit-bids    (handle-submit-bids state player-id bids)
    :submit-special (handle-submit-special state player-id args)
    :reset          (handle-reset state)
    (transmit state player-id {:type :unrecognized-message})))

;;;; Everything after this point is impure / doesn't get unit tested ;;;;

(def state (atom (->ServerState)))

(def server-channel (chan))

(defmacro go-message-loop [channel binding & more]
  `(go-loop []
    (when-let [~binding (<! ~channel)]
      ~@more
      (recur))))

(go-message-loop server-channel message
  (handle-message state message))

(def player-counter (atom 0))

; TODO move signup into this loop?
(defn ws-handler [{:keys [ws-channel]}]
  (let [player-id (swap! player-counter inc)]
    (swap-in! state [:player-channels] assoc player-id ws-channel)
    (go (>! ws-channel {
      :type :player-id
      :player-id player-id
      :players (map (partial apply ->Player) (:player-names @state))}))
    (println "connected to client" player-id)
    (go-message-loop ws-channel {:keys [message error] :as raw}
      ; handle error
      (println "message from player" player-id)
      (println raw)
      (if message
        (>! server-channel (assoc message :player-id player-id))))))

(swap! state assoc :logging true)

(def page-frame
  (tag->string
    (html
      (head
        (title "Revolt")
        (favicon "/favicon.png")
        (import-css "css/style.css")
        (import-js "js/compiled/revolt_client.js"))
      (body
        (div {:id "content"})))))

(defroutes app-routes
  (GET "/"   [] (response page-frame))
  (GET "/ws" [] (wrap-websocket-handler ws-handler)))

(def app #'app-routes)
