(in-ns 'revolt)

(defn inverted-get [m v] ((map-invert m) v))
(defn unique-max [& xs]
    (case (count xs)
        0 nil
        1 (first xs)
        (let [[x1 x2] (take 2 (reverse (sort xs)))]
            (if (not= x1 x2) x1))))
(defn hm-map [f m] (into {} (for [[k v] m] [k (f v)])))
(defn other-than [xs x] (filter (partial not= x) xs))
