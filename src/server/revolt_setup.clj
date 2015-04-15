(in-ns 'revolt)

; Offically, the guard house is like any other Influence Space in that
; it can be swapped with the Apothecary (if the guard house occupant wins the Apoth),
; and the game isn't over if the Guard House is not occupied.
; I don't feel like implementing it that way.

; Occupant of the guard house is immue to rival's use of Spy and Apothecary
(def occupy-guard-house
    (->Special :occupy-guard-house
        (constantly true)
        (constantly true)
        (fn [board winner _] (set-guard-house board winner))))

; Replace one Influence Cube with one of your own.
(def steal-spot
    (->Special :steal-spot
        (fn [board winner]
            (let [pairs (cartesian-product (:locations board) (:players board))]
                (some
                    (fn [[location player]]
                        (and (not= winner player)
                            (touchable? board winner player)
                            (has-influence? board location player)))
                    pairs)))
        (fn [board winner {:keys [location player]}]
            (and (touchable? board winner player)
                (has-influence? board location player)))
        (fn [board winner {:keys [location player]}]
            (replace-influence board location player winner))))

(defn can-swap? [board winner location0 player0 location1 player1]
    (and (not= location0 location1)
        (not= player0 player1)
        (touchable? board winner player0)
        (touchable? board winner player1)
        (has-influence? board location0 player0)
        (has-influence? board location1 player1)))

(defn any-swaps? [board winner]
    (let [pairs (cartesian-product (:locations board) (:players board))
          pair-pairs (cartesian-product pairs pairs)]
        (some
            (fn [[[location0 player0] [location1 player1]]]
                (can-swap? board winner location0 player0 location1 player1))
            pair-pairs)))

; Swap the cubes in any two Influence Spaces.
(def swap-spots
    (->Special :swap-spots
        any-swaps?
        (fn [board winner {:keys [location0 player0 location1 player1]}]
            (can-swap? board winner location0 player0 location1 player1))
        (fn [board _ {:keys [location0 player0 location1 player1]}]
            (swap-influence board location0 player0 location1 player1))))

; Reassign up to two of your cubes already on the board.
(def reassign-spots
    (->Special :reassign-spots
        (fn [board winner]
            (some
                (fn [location]
                    (and
                        (has-influence? board location winner)
                        (some
                            (comp not (partial location-full? board))
                            (other-than (:locations board) location))))
                (:locations board)))
        (fn [board winner {:keys [reassignments]}]
            (and
                (<= (count reassignments) 2)
                (let [existing-cubes (sub-map (:influence board) winner)
                      selected-cubes (frequencies (map first reassignments))
                      diffs (merge-with - existing-cubes selected-cubes)]
                    (every? (comp not neg?) (vals diffs)))
                (let [locations (:locations board)
                      available-spots (zipmap locations (map (partial available-influence board) locations))
                      selected-spots (frequencies (map last reassignments))
                      diffs (merge-with - available-spots selected-spots)]
                    (every? (comp not neg?) (vals diffs)))))
        (fn [board winner {:keys [reassignments]}]
            (reduce
                (fn [board [src dest]] (move-influence board src dest winner))
                board
                reassignments))))

; Influence any open Influence Space.
(def take-open-spot
    (->Special :take-open-spot
        (fn [board _]
            (not (board-full? board)))
        (fn [board _ {:keys [location]}]
            (not (location-full? board location)))
        (fn [board winner {:keys [location]}]
            (add-influence board location winner))))

(def -- #{})
(def b- #{:blackmail})
(def -f #{:force})
(def bf #{:blackmail :force})

(def locations
    [(->Location :tavern     20 4)
     (->Location :market     25 5)
     (->Location :plantation 30 6)
     (->Location :cathedral  35 7)
     (->Location :harbor     40 6)
     (->Location :town-hall  45 7)
     (->Location :fortress   50 8)
     (->Location :palace     55 8)])

(defn- influences [id] (first (filter #(= id (:id %)) locations)))

(def figures
    [(->Figure :general    1  (->Bid 0 0 1) -f (influences :fortress)   nil)
     (->Figure :captain    1  (->Bid 0 0 1) -f (influences :harbor)     nil)
     (->Figure :innkeeper  3  (->Bid 0 1 0) b- (influences :tavern)     nil)
     (->Figure :magistrate 1  (->Bid 0 1 0) b- (influences :town-hall)  nil)
     (->Figure :viceroy    0  (->Bid 0 0 0) -- (influences :palace)     occupy-guard-house)
     (->Figure :priest     6  (->Bid 0 0 0) -- (influences :cathedral)  nil)
     (->Figure :aristocrat 5  (->Bid 3 0 0) -- (influences :plantation) nil)
     (->Figure :merchant   3  (->Bid 5 0 0) -- (influences :market)     nil)
     (->Figure :printer    10 (->Bid 0 0 0) -- nil                      nil)
     (->Figure :spy        0  (->Bid 0 0 0) b- nil                      steal-spot)
     (->Figure :apothecary 0  (->Bid 0 0 0) -f nil                      swap-spots)
     (->Figure :messenger  3  (->Bid 0 0 0) -- nil                      reassign-spots)
     (->Figure :mayor      0  (->Bid 0 0 0) bf nil                      take-open-spot)
     (->Figure :constable  5  (->Bid 0 1 0) bf nil                      nil)
     (->Figure :rogue      0  (->Bid 0 2 0) bf nil                      nil)
     (->Figure :mercenary  0  (->Bid 0 0 1) bf nil                      nil)])

(defn make-board [players]
    (->Board 1
             locations
             figures
             players
             (zipmap players (repeat (->Bid 3 1 1)))
             (zipmap locations (repeat (zipmap players (repeat 0))))
             (zipmap players (repeat 0))))
