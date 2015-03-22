(in-ns 'revolt)

; (Ord b) => (a, a, [a -> b]) -> 0 | 1 | -1
(defn serial-compare [x y fs]
    (let [f (first fs)]
        (cond (empty? fs)      0
              (> (f x) (f y))  1
              (< (f x) (f y)) -1
              :else            (recur x y (rest fs)))))
(defn nor [& coll] (not (some true? coll)))
(defn inverted-get [m v] ((map-invert m) v))
(defn unique-max [coll]
    (case (count coll)
        0 nil
        1 (first coll)
        (let [[x y] (take 2 (reverse (sort coll)))]
            (if (not= x y) x))))
(defn other-than [coll x] (filter (partial not= x) coll))
(defn map-vals [f m] (into {} (for [[k v] m] [k (f v)])))

; [Map a (Map b c), b] -> Map a c
(defn sub-map [outer-map inner-key]
    (reduce-kv
        ; (Map a c, a, Map b c) -> Map a c
        (fn [result-map outer-key inner-map]
            (assoc result-map outer-key (inner-map inner-key)))
        {}
        outer-map))
