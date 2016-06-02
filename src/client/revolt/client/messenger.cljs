(ns ^:figwheel-always revolt.client.messenger
  (:require [om.core :as om :include-macros true]
            [revolt.client.messaging :refer [send-message]]
            [hyjinks.core :as h]))



      ;       (h/tr
      ;         {:className (if (or (= id selection-1) (= id selection-2)) "selected")}
      ;         (h/td
      ;           (h/button
      ;             {:onClick #(if selection-1
      ;                            (om/update! data :messenger-selection-2 id)
      ;                            (om/update! data :messenger-selection-1 id))
      ;              :disabled (or (and (not selection-1) (= 0 (get-in data [:influence id "Rob"])))
      ;                            (and selection-1 (<= cap (reduce + (vals (get-in data [:influence id]))))))}
      ;             id))
      ;         (h/td cap)
      ;         (map
      ;           (fn [{pid :id}]
      ;             (h/td (get-in data [:influence id pid])))
      ;           (:players data))))
      ;     (:locations data)))
      ; (if any-reassignments
      ;   (h/ul
      ;     (map
      ;       (fn [[lid1 lid2]] (h/li [lid1 " -> " lid2])))
      ;       reassignments))
      ; (h/button
      ;   {:onClick #(do (om/update! data :messenger-reassignments [])
      ;                  (om/update! data :messenger-selection-1 nil)
      ;                  (om/update! data :messenger-selection-2 nil))}
      ;   :clear)
      ; (if (and selection-1 selection-2 (> 2 (count reassignments)))
      ;   (h/button
      ;     {:onClick #(do (om/transact! data [:messenger-reassignments] (fn [rs] (conj rs [selection-1 selection-2])))
      ;                    (om/update! data :messenger-selection-1 nil)
      ;                    (om/update! data :messenger-selection-2 nil))}
      ;     :add))
      ; (h/button
      ;   {:onClick #(send-messenger reassignments)}
      ;   :submit))))
