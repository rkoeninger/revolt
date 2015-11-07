(ns revolt.setup
  (:use revolt.core
        [clojure.math.combinatorics :only [cartesian-product]]))

; Offically, the guard house is like any other Influence Space in that
; it can be swapped with the Apothecary (if the guard house occupant wins the Apoth),
; and the game isn't over if the Guard House is not occupied.
; I don't feel like implementing it that way.

; Occupant of the guard house is immue to rival's use of Spy and Apothecary
(def occupy-guard-house
  (->Special :occupy-guard-house
    false
    (constantly true)
    (constantly true)
    (fn [board winner _] (set-guard-house board winner))))

; Replace one Influence Cube with one of your own.
(def steal-spot
  (->Special :steal-spot
    true
    (fn [{:keys [locations players] :as board} winner]
      (let [pairs (cartesian-product locations players)]
        (letfn [(target? [[location player]]
                  (and (not= winner player)
                    (touchable? board winner player)
                    (has-influence? board location player)))]
          (some target? pairs))))
    (fn [board winner {:keys [location player]}]
      (and (touchable? board winner player)
           (has-influence? board location player)))
    (fn [board winner {:keys [location player]}]
      (replace-influence board location player winner))))

; Swap the cubes in any two Influence Spaces.
(def swap-spots
  (letfn [(can-swap? [board winner location0 player0 location1 player1]
            (and (not= location0 location1)
                 (not= player0 player1)
                 (touchable? board winner player0)
                 (touchable? board winner player1)
                 (has-influence? board location0 player0)
                 (has-influence? board location1 player1)))
          (swap? [board winner [[location0 player0] [location1 player1]]]
            (can-swap? board winner location0 player0 location1 player1))]
    (->Special :swap-spots
      true
      (fn [{:keys [locations players] :as board} winner]
        (let [pairs (cartesian-product locations players)
              pair-pairs (cartesian-product pairs pairs)]
          (some (partial swap? board winner) pair-pairs)))
      (fn [board winner {:keys [location0 player0 location1 player1]}]
        (can-swap? board winner location0 player0 location1 player1))
      (fn [board _ {:keys [location0 player0 location1 player1]}]
        (swap-influence board location0 player0 location1 player1)))))

; Reassign up to two of your cubes already on the board.
(def reassign-spots
  (->Special :reassign-spots
    true
    (fn [{:keys [locations] :as board} winner]
      (letfn [(spot-available-elsewhere [location]
                (some
                  (comp not (partial location-full? board))
                  (other-than location locations)))
              (can-reassign-from [location]
                (and
                  (has-influence? board location winner)
                  (spot-available-elsewhere location)))]
        (some can-reassign-from locations)))
    (fn [{:keys [influence locations] :as board} winner {:keys [reassignments]}]
      (and
        (<= (count reassignments) 2)
        (let [existing-cubes (sub-map influence winner)
              selected-cubes (frequencies (map first reassignments))
              diffs (merge-with - existing-cubes selected-cubes)]
          (every? (comp not neg?) (vals diffs)))
        (let [available-spots (zipmap locations (map (partial available-influence board) locations))
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
    true
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

; The Palace is part of the The Palace expansion

; Anarchy! additional locations

; :garden [:each 10] 6
; :asylum [:winner -30] 5
; :jail [:winner -30] 6

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

; Mayor, Messenger, Constable and Viceroy are from The Palace expansion
; as is the concept of the Guard Post (:guard-post board)

; Anarchy! additional figures

; "Four support. Reclaim one token.
; Place an opponent's cube to jail, replacing a cube if building is full."
; :warden     4  (->Bid 0 0 0) -- (and reclaim-one-token place-opponent-in-jail :replace)

; "One Force. One Blackmail. Influence Asylum, replacing a cube if building is full."
; :heretic    0  (->Bid 0 1 1) -- (influences :replace :asylum) nil

; "Influence any open space. Add any opponent's cube to any open space.
; Immune to blackmail and to force."
; :governor   0  (->Bid 0 0 0) bf nil   (and take-open-spot place-opponent-anywhere)

; "Gain the reward in any other space."
; :anarchist  0  (->Bid 0 0 0) bf nil    mimic-other-figure

(defn make-board [players]
  (->Board
    1
    locations
    figures
    players
    (zipmap players (repeat (->Bid 3 1 1)))
    (zipmap locations (repeat (zipmap players (repeat 0))))
    (zipmap players (repeat 0))))
