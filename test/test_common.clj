(ns test-common
  (:use revolt.core
  	    revolt.server))

(defmacro is= [& more] `(clojure.test/is (= ~@more)))
(defmacro is-not [& more] `(clojure.test/is (not ~@more)))

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
