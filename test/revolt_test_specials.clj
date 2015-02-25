(ns revolt-test
    (:use revolt)
    (:use clojure.test))

(def rob (->Player "Rob"))
(def joe (->Player "Joe"))
(def players [rob joe])

(def hideout   (->Location :hideout   20 1))
(def courtroom (->Location :courtroom 30 6))

(def locs (apply id-map [hideout courtroom]))

(def clear-spot
    (Special. {:location "Location" :player "Player"}
        (fn [board winner] (not-every? #(zero? (occupied-influence board %)) (:locations board)))
        (fn [board winner {:keys [location player]}] (pos? (get-influence board location player)))
        (fn [board winner {:keys [location player]}] (remove-influence board location player))))

(def assassin (figure :assassin 0 [0 0 2] -f hideout   clear-spot))
(def judge    (figure :judge    4 [0 1 0] b- courtroom steal-spot))

(def figs-order [assassin judge])
(def figs (apply id-map figs-order))

(def board (->Board
    locs
    figs
    figs-order
    players
    (zipmap players (repeat (->Bid 0 0 0)))
    (zipmap (vals locs) (repeat (zipmap players (repeat 0))))
    (zipmap players (repeat 0))
    1))

(deftest scenario-mid-game-with-specials
    (let [bids {assassin {rob (->Bid 0 0 0) joe (->Bid 0 0 0)}
    	        judge    {rob (->Bid 0 0 0) joe (->Bid 0 0 0)}}
    	  callback (fn [player params] params)
    	  board (-> board
                    (add-influence hideout rob)
                    (add-influence courtroom rob)
                    (add-influence courtroom joe)
                    (add-influence courtroom joe)
                    (add-influence courtroom joe)
                    (add-support rob 10)
                    (add-support joe 15))
    				(add-bank rob (->Bid 4 1 0))
    				(add-bank joe (->Bid 3 0 2))
    				(run-turn bids callback)]
        ))
