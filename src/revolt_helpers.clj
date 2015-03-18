(in-ns 'revolt)

(defn compare-or [x y fs]
    (let [f (first fs)]
       (cond (empty? fs)     0
              (> (f x) (f y)) 1
              (< (f x) (f y)) -1
              :else           (recur x y (rest fs)))))
(defn nor [& xs] (not (some true? xs)))
(defn inverted-get [m v] ((map-invert m) v))
(defn unique-max [& xs]
    (case (count xs)
        0 nil
        1 (first xs)
        (let [[x1 x2] (take 2 (reverse (sort xs)))]
            (if (not= x1 x2) x1))))
(defn other-than [xs x] (filter (partial not= x) xs))
(defn map-vals [f m] (into {} (for [[k v] m] [k (f v)])))

; (Map a (Map b c)), b -> Map a c
(defn sub-map [outer-map inner-key]
    (reduce-kv
        (fn [result-map ; Map a c
        	 outer-key  ; a
        	 inner-map] ; Mab b c
            (assoc result-map outer-key (inner-map inner-key)))
        {}
        outer-map))
