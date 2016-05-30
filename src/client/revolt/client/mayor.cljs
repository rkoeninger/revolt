(ns ^:figwheel-always revolt.client.mayor
  (:require [om.core :as om :include-macros true]
            [revolt.client.components :refer [score-board-template]]
            [revolt.client.messaging :refer [send-message]]
            [hyjinks.core :as h]))

(defn- send-mayor [location-id]
  (send-message :submit-special
    {:args {:location location-id}}))

(defn mayor-select [data]
  (score-board-template
    data
    []
    (fn [lid pid]
      (if (and (= pid (:player-id data)) (< (reduce + (vals (get-in data [:influence id]))) (get-in data [:locations lid :cap])))
        (h/button {:onClick #(send-mayor lid)}
          :select)))))
