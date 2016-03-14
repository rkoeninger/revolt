(ns revolt.server.messaging
  (:use revolt.core
        [clojure.core.async :only [put!]]))

(defn bank-setup [bank]
  (select-keys bank (keys zero-bid)))

(defn location-setup [location]
  (select-keys location [:id :support :cap]))

(defn board-status [{:keys [turn support banks influence guard-house]}]
  {:turn        turn
   :support     (map-keys :id support)
   :banks       (map-kv :id bank-setup banks)
   :influence   (map-kv :id (partial map-keys :id) influence)
   :guard-house (:id guard-house)})

(defn figure-setup [{:keys [id support bank immunities location special]}]
  {:id          id
   :support     support
   :bank        (bank-setup bank)
   :immunities  immunities
   :location-id (:id location)
   :special-id  (:id special)})

(defn board-setup [{:keys [players figures locations]}]
  {:players   players
   :figures   (mapv figure-setup figures)
   :locations (mapv location-setup locations)
   :specials  (filterv identity (map (comp :id :special) figures))})

(defn game-results [board]
  {:scores   (map-keys :id (get-scores board))
   :rankings (map-keys :id (get-rankings board))})

(defn by-id [coll id] (first (filter #(= id (:id %)) coll)))

(defn player-by-id [{:keys [players]} player-id]
  (by-id players player-id))

(defn figure-by-id [{:keys [figures]} figure-id]
  (by-id figures figure-id))

(defn location-by-id [{:keys [locations]} location-id]
  (by-id locations location-id))

(defn special-by-id [{:keys [figures]} special-id]
  (by-id (map :special figures) special-id))

(defn read-figure-bid-map [board bids]
  (map-kv (partial figure-by-id board) (partial merge zero-bid) bids))

(defn read-player-figure-bid-map [board bids]
  (map-kv (partial player-by-id board) (partial read-figure-bid-map board) bids))

(defn read-take-open-spot [board {:keys [location]}]
  {:location (location-by-id board location)})

(defn read-steal-spot [board {:keys [location player]}]
  {:location (location-by-id board location)
   :player (player-by-id board player)})

(defn read-swap-spots [board {:keys [location0 player0 location1 player1]}]
  {:location0 (location-by-id board location0)
   :player0   (player-by-id board player0)
   :location1 (location-by-id board location1)
   :player1   (player-by-id board player1)})

(defn read-reassign-spots [board {:keys [reassignments]}]
  {:reassignments (mapv (partial mapv (partial location-by-id board)) reassignments)})

(defn read-special-response [board special-id args]
  (case special-id
    :take-open-spot (read-take-open-spot board args)
    :steal-spot     (read-steal-spot board args)
    :swap-spots     (read-swap-spots board args)
    :reassign-spots (read-reassign-spots board args)
    args))

(defn transmit [state player-id message]
  (let [player-channel (get-in @state [:player-channels player-id])]
    (if (:logging @state)
      (do
        (println "transmitting to" player-id)
        (println message)))
    (put! player-channel message)))

(defn transmit-game-not-ready [state player-id]
  (transmit state player-id {:type :game-not-ready}))

(defn transmit-game-already-started [state player-id]
  (transmit state player-id {:type :game-already-started}))

(defn transmit-invalid-bid [state player-id]
  (transmit state player-id {:type :invalid-bid}))

(defn transmit-special-not-expected [state player-id]
  (transmit state player-id {:type :special-not-expected}))

(defn transmit-invalid-special-args [state player-id]
  (transmit state player-id {:type :invalid-special-args}))

(defn broadcast [state message]
  (let [{:keys [player-channels]} @state]
    (if (:logging @state)
      (do
        (println "broadcasting")
        (println message)))
    (doseq [ch (vals player-channels)] (put! ch message))))

(defn broadcast-signup [state player-id player-name]
  (broadcast state {:type :signup :player {:id player-id :name player-name}}))

(defn broadcast-start-game [state board]
  (broadcast state {:type :start-game :setup (board-setup board)}))

(defn broadcast-bids-submitted [state player-id]
  (broadcast state {:type :bids-submitted :player-id player-id}))

(defn broadcast-special-submitted [state player-id special-id args]
  (broadcast state {:type :special-submitted
                    :special-id special-id
                    :special-winner player-id
                    :args args}))

(defn broadcast-take-bids [state board]
  (broadcast state {:type :take-bids :status (board-status board)}))

(defn broadcast-special [state board]
  (let [{:keys [special special-winner]} board]
    (broadcast state {:type :special
                      :special-id (:id special)
                      :special-winner (:id special-winner)
                      :status (board-status board)})))

(defn broadcast-game-over [state board]
  (broadcast state {:type :game-over :results (game-results board)}))
