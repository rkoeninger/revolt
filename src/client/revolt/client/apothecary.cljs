(ns ^:figwheel-always revolt.client.apothecary
  (:require [om.core :as om :include-macros true]
            [revolt.client.messaging :refer [send-message]]
            [hyjinks.core :as h]))

(defn send-apothecary [location0-id target0-id location1-id target1-id]
  (send-message :submit-special
    {:args {:location0 location0-id
            :player0 target0-id
            :location1 location1-id
            :player1 target1-id}}))

(defn apothecary-select [data]
  (let [selection-1 (:apothecary-selection-1 data)
        selection-2 (:apothecary-selection-2 data)]
    (h/div
      (h/table
        (h/tr
          (h/td :location)
          (h/td :cap)
          (map #(h/td (:name %)) (:players data)))
        (map
          (fn [{:keys [id cap]}]
            (h/tr
              (h/td id)
              (h/td cap)
              (map
                (fn [{pid :id}]
                  (let [combo [id pid]
                        selected (or (= combo selection-1) (= combo selection-2))]
                    (h/td
                      {:className (if selected "selected")}
                      (h/button
                        {:onClick #(if selection-1
                                       (om/update! data :apothecary-selection-2 combo)
                                       (om/update! data :apothecary-selection-1 combo))}
                        (get-in data [:influence id pid])))))
                (:players data))))
          (:locations data)))
      (h/button
        {:onClick #(do (om/update! data :apothecary-selection-1 nil)
                       (om/update! data :apothecary-selection-2 nil))}
        :clear)
      (if (and selection-1 selection-2)
        (h/button
          {:onClick #(apply send-apothecary (concat selection-1 selection-2))}
          :submit)))))
