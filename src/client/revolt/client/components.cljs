(ns ^:figwheel-always revolt.client.components
  (:require [hyjinks.core :as h]))

(defn- name-row [data]
  (h/tr
    (h/th {:colSpan 2} :player)
    (map (comp h/th :name) (:players data))))

(def check-mark
  (h/img {:className "check-mark" :src "/img/check_mark.png" :alt "X"}))

(defn- ready-row [data]
  (h/tr
    (h/th {:colSpan 2} :ready)
    (map
      (fn [{pid :id}] (h/td (if (get-in data [:bids-submitted pid]) check-mark)))
      (:players data))))

(defn- support-row [data]
  (h/tr
    (h/th {:colSpan 2} :support)
    (map
      (fn [{pid :id}] (h/td (get-in data [:support pid])))
      (:players data))))

(defn- bank-row [data denomination]
  (h/tr
    (h/th {:colSpan 2} denomination)
    (map
      (fn [{pid :id}] (h/td (get-in data [:banks pid denomination])))
      (:players data))))

(defn- influence-row [data location-player-cell {:keys [id cap]}]
  (h/tr
    (h/th {:className "location-name"} id)
    (h/td {:className "influence-cap"} cap)
    (map
      (fn [{pid :id}] (h/td (location-player-cell id pid)))
      (:players data))))

(defn score-board-template [data additional-rows location-player-cell]
  (h/div {:className "score-board"}
    (h/table
      (name-row data)
      (ready-row data)
      (support-row data)
      additional-rows
      (bank-row data :gold)
      (bank-row data :blackmail)
      (bank-row data :force)
      (map
        (partial influence-row data location-player-cell)
        (:locations data)))))
