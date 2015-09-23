(in-ns 'revolt)

(defn in? [x coll] (some #(= x %) coll))
(defn nor [& coll] (not (some true? coll)))

; (Ord b) => (a, a, [a -> b]) -> 0 | 1 | -1
(defn serial-compare [x y fs]
    (let [f (first fs)]
        (cond (empty? fs)       0
              (> (f x) (f y))   1
              (< (f x) (f y))  -1
              :else            (recur x y (rest fs)))))
(defn inverted-get [m v] ((map-invert m) v))
(defn unique-max
    ([coll]
    (case (count coll)
        0 nil
        1 (first coll)
        (let [[x y] (take 2 (reverse (sort coll)))]
            (if (not= x y) x))))
    ([cmp coll]
    (case (count coll)
        0 nil
        1 (first coll)
        (let [[x y] (take 2 (reverse (sort cmp coll)))]
            (if (not= x y) x)))))
(defn other-than [coll x] (filter (partial not= x) coll))
(defn map-kv [f g m] (into {} (for [[k v] m] [(f k) (g v)])))
(defn map-vals [f m] (map-kv identity f m))
(defn map-keys [f m] (map-kv f identity m))
(defn map-entries [f m] (into {} (map (partial apply f) m)))

; [Map a (Map b c), b] -> Map a c
(defn sub-map [outer-map inner-key]
    (reduce-kv
        ; (Map a c, a, Map b c) -> Map a c
        (fn [result-map outer-key inner-map]
            (assoc result-map outer-key (inner-map inner-key)))
        {}
        outer-map))

(defn first-not-nil [x y] (if (nil? x) y x))

; [Map a (Map b c)] -> Map b (Map a c)
; [Map a (Map b c), c] -> Map b (Map a c)
; [Map a (Map b c), c, Set a, Set b] -> Map b (Map a c)
(defn relevel
    ([m] (relevel m nil))
    ([m default-val] (relevel m default-val (keys m) (set (mapcat keys (vals m)))))
    ([m default-val all-outer-keys all-inner-keys]
        (let [default-inner-map (zipmap all-outer-keys (repeat default-val))
              or-default #(merge-with first-not-nil (sub-map m %) default-inner-map)]
            (into {} (map #(vector % (or-default %)) all-inner-keys)))))
