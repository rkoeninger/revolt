(ns revolt-shared)

(def zero-bid (zipmap [:gold :blackmail :force] (repeat 0)))
(def zero-bid? (partial = zero-bid))
(def plus-bid (partial merge-with +))