(ns test-common)

(defmacro is= [& more] `(clojure.test/is (= ~@more)))
(defmacro is-not [& more] `(clojure.test/is (not ~@more)))
