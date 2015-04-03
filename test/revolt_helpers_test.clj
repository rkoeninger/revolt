(ns revolt-helpers-test
    (:use revolt)
    (:use clojure.test))

(deftest relevel-provides-default-values
	(let [test-data {:a {:x 1 :y 2}
		             :b {:y 3 :z 4}
		             :c {:x 5 :y 6 :z 7}}
		  expected  {:x {:a 1 :b 0 :c 5}
		             :y {:a 2 :b 3 :c 6}
		             :z {:a 0 :b 4 :c 7}}
		  expected2 {:x {:a 1 :b 0 :c 5 :d 0 :e 0 :f 0}
		             :y {:a 2 :b 3 :c 6 :d 0 :e 0 :f 0}
		             :z {:a 0 :b 4 :c 7 :d 0 :e 0 :f 0}
		             :w {:a 0 :b 0 :c 0 :d 0 :e 0 :f 0}
		             :t {:a 0 :b 0 :c 0 :d 0 :e 0 :f 0}}]
		(is (= expected (relevel test-data 0)))
		(is (= expected2 (relevel test-data 0 #{:a :b :c :d :e :f} #{:x :y :z :w :t})))))
