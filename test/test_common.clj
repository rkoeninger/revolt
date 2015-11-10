(ns test-common
  (:use revolt.core
        revolt.setup
        revolt.server
        revolt.server.messaging
        [clojure.core.async :only [chan <!!]]
        [clojure.test :only [is are]]))

(defmacro is= [& more] `(is (= ~@more)))
(defmacro is-not [& more] `(is (not ~@more)))

(defmacro are= [args] `(are [x# y#] (= x# y#) ~@args))
(defmacro are-not [argv expr & args] `(are ~argv (not ~expr) ~@args))

(defn is-doable-by-all [board special]
  (let [{:keys [players]} board
        {:keys [doable]} special]
    (every? #(is (doable board %)) players)))

(defn is-not-doable-by-any [board special]
  (let [{:keys [players]} board
        {:keys [doable]} special]
    (every? #(is-not (doable board %)) players)))

(defn with-inf [board location player number]
  (reduce (fn [b _] (add-influence b location player)) board (repeat number 0)))

(defn with-influence [board & more]
  (reduce (fn [b [l p n]] (with-inf b l p n)) board (partition 3 more)))

(defn with-support [board & more]
  (reduce (fn [b [p n]] (add-support b p n)) board (partition 2 more)))

(defn read-player-*-map [board m]
  (map-keys (partial player-by-id board) m))

(defn read-location-player-*-map [board m]
  (map-kv (partial location-by-id board) (partial read-player-*-map board) m))

(def hovel  (->Location :hovel  10 2))
(def saloon (->Location :saloon 30 4))
(def farm   (->Location :farm   40 3))
(def castle (->Location :castle 90 5))

(def prince (->Figure :prince 0 (->Bid 5 0 0) -f castle nil))
(def beggar (->Figure :beggar 1 (->Bid 0 0 0) b- hovel nil))
(def barber (->Figure :barber 8 (->Bid 0 0 0) -- saloon nil))
(def farmer (->Figure :farmer 1 (->Bid 2 0 0) -- farm nil))
(def axeman (->Figure :axeman 3 (->Bid 0 0 1) bf nil nil))
(def doctor (->Figure :doctor 0 (->Bid 0 2 0) -- nil nil))
(def smithy (->Figure :smithy 1 (->Bid 2 0 0) bf nil nil))

(def rob (->Player 1 "Rob"))
(def joe (->Player 2 "Joe"))
(def moe (->Player 3 "Moe"))

(def standard-board
  (let [locations [hovel saloon farm castle]
        figures [prince beggar barber farmer axeman doctor smithy]
        players [rob joe moe]]
    (->Board
      1
      locations
      figures
      players
      (zipmap players (repeat (->Bid 3 1 1)))
      (zipmap locations (repeat (zipmap players (repeat 0))))
      (zipmap players (repeat 0)))))

(def hideout   (->Location :hideout   20 1))
(def courtroom (->Location :courtroom 30 6))

(def clear-spot
  (->Special :clear-spot
    true
    (fn [board winner]
      (pos? (reduce + (map (partial occupied-influence board) (:locations board)))))
    (fn [board winner {:keys [location player]}]
      (pos? (get-influence board location player)))
    (fn [board winner {:keys [location player]}]
      (remove-influence board location player))))

(def assassin (->Figure :assassin 0 (->Bid 0 0 2) -f hideout   clear-spot))
(def judge    (->Figure :judge    4 (->Bid 0 1 0) b- courtroom steal-spot))

(def special-board
  (let [players [rob joe]
        locs [hideout courtroom]
        figs [assassin judge]]
    (->Board
      1
      locs
      figs
      players
      (zipmap players (repeat zero-bid))
      (zipmap locs (repeat (zipmap players (repeat 0))))
      (zipmap players (repeat 0)))))

(defn harness []
  (let [state (atom (->ServerState))]
    {:state state
     :get-message (fn [pid] (<!! (get-in @state [:player-channels pid])))
     :connect (fn [pid] (swap-in! state [:player-channels] assoc pid (chan)))
     :handle (fn [pid message] (handle-message state (assoc message :player-id pid)))}))

(defn just-special [special] (->Figure nil nil nil nil nil special))

(def loc1 (->Location :loc1 10 2))
(def loc2 (->Location :loc2 20 3))
(def loc3 (->Location :loc3 30 4))

(def reassigner (->Figure :reassigner 0 zero-bid -- nil reassign-spots))

(def reassign-board (->Board
  1
  [loc1 loc2 loc3]
  [reassigner]
  [rob joe]
  (zipmap [rob joe] (repeat zero-bid))
  (zipmap [loc1 loc2 loc3] (repeat (zipmap [rob joe] (repeat 0))))
  (zipmap [rob joe] (repeat 0))))
