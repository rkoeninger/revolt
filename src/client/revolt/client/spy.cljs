(ns ^:figwheel-always revolt.client.spy
  (:require [om.core :as om :include-macros true]
            [revolt.core :as r]
            [revolt.client.components :refer [score-board-template]]
            [revolt.client.messaging :refer [send-message]]
            [hyjinks.core :as h]))

(defn- send-spy [location-id target-id]
  (send-message :submit-special
    {:args {:location location-id
            :player target-id}}))

(defn spy-select [data]
  (score-board-template
    data
    []
    (fn [lid pid]
      (let [amount (get-in data [:influence lid pid])]
        (if (and (pos? amount) (not= pid (get-in data [:player-id])))
          (h/button {:onClick #(send-spy lid pid)}
            amount))))))
