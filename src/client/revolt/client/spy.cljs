(ns ^:figwheel-always revolt.client.spy
  (:require [om.core :as om :include-macros true]
            [revolt.client.components :refer [score-board-template]]
            [revolt.client.messaging :refer [send-message]]
            [hyjinks.core :as h]))

(defn send-spy [location-id target-id]
  (send-message :submit-special
    {:args {:location location-id
            :player target-id}}))

(defn spy-select [data]
  (let [selection {:spy-selection data}]
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
                (fn [p]
                  (let [combo [id (:id p)]
                        selected (= combo selection)]
                    (h/td {:className (if selected "selected")}
                      (h/button {:onClick #(om/update! data :spy-selection combo)}
                        (get-in data [:influence id (:id p)])))))
                (:players data))))
          (:locations data)))
      (h/button
        {:onClick #(om/update! data :spy-selection nil)}
        :clear)
      (if selection
        (h/button
          {:onClick #(apply send-spy selection)}
          :submit)))))
