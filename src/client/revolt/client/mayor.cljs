(ns ^:figwheel-always revolt.client.mayor
  (:require [om.core :as om :include-macros true]
            [revolt.client.messaging :refer [send-message]]
            [hyjinks.core :as h]))

(defn send-mayor [location-id]
  (send-message :submit-special
    {:args {:location location-id}}))

(defn mayor-select [data]
  (h/table
    (h/tr
      (h/td :location)
      (h/td :cap)
      (map #(h/td (:name %)) (:players data)))
    (map
      (fn [location]
        (let [disabled (>= (reduce + (vals (get-in data [:influence (:id location)]))) (:cap location))]
          (h/tr
            (h/td
              (h/button
                {:onClick #(send-mayor location)
                 :disabled disabled}
                (:id location)))
            (h/td (:cap location))
            (map
              (fn [{pid :id}]
                (h/td (get-in data [:influence (:id location) pid])))
              (:players data)))))
      (:locations data))))
