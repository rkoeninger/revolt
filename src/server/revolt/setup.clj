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

    ; TODO special doesn't require input if only one open spot left
    true

    ; Special is not doable if board is full
    (fn [board _]
      (not (board-full? board)))

    ; Input is invalid if selected location is full
    (fn [board _ {:keys [location]}]
      (not (location-full? board location)))

    (fn [board winner {:keys [location]}]
      (add-influence board location winner))))

; Reclaiming is interpreted as getting any token the player wants.

; TODO ability to run two specials?
; TODO or just request user input for both abilities at the same time

; Reclaim one token.
; Place an opponent's cube to jail, replacing a cube if building is full.
(def put-other-in-jail
  (->Special :put-other-in-jail
    false
    (fn [board winner]
      false)
    (fn [board winner {:keys []}]
      false)
    (fn [board winner {:keys []}]
      board)))

; For the Heretic, influencing gets implemented as a special
; because a selection needs to be made.

; Influence Asylum, replacing a cube if building is full.
(def put-self-in-asylum
  (->Special :put-self-in-asylum
    false
    (fn [board winner]
      false)
    (fn [board winner {:keys []}]
      false)
    (fn [board winner {:keys []}]
      board)))

; Add any opponent's cube to any open space.
(def put-other-open-spot
  (->Special :put-other-open-spot
    false
    (fn [board winner]
      false)
    (fn [board winner {:keys []}]
      false)
    (fn [board winner {:keys []}]
      board)))

; Gain the reward in any other space.
(def do-whatever
  (->Special :do-anything
    false
    (fn [board winner]
      false)
    (fn [board winner {:keys []}]
      false)
    (fn [board winner {:keys []}]
      board)))

(defmacro deflocation [id support method cap]
  `(def ~id
    (->Location
      ~(keyword id)
      ~support
      ~method
      ~cap)))

(defmacro deffigure [id support bank immunities location special]
  `(def ~id
    (->Figure
      ~(keyword id)
      ~support
      ~(apply ->Bid bank)
      ~immunities
      ~location
      ~special)))

(deflocation tavern     20 :winner-take-all 4)
(deflocation market     25 :winner-take-all 5)
(deflocation plantation 30 :winner-take-all 6)
(deflocation cathedral  35 :winner-take-all 7)
(deflocation harbor     40 :winner-take-all 6)
(deflocation town-hall  45 :winner-take-all 7)
(deflocation fortress   50 :winner-take-all 8)
(deflocation palace     55 :winner-take-all 8)
(deflocation garden     10 :per-influence   6)
(deflocation asylum    -30 :winner-take-all 5)
(deflocation jail      -30 :winner-take-all 6)

(def locations [tavern market plantation cathedral harbor town-hall fortress])
(def palace-locations (concat locations [palace]))
(def anarchy-locations (concat locations [garden asylum jail]))

(def -- #{})
(def b- #{:blackmail})
(def -f #{:force})
(def bf #{:blackmail :force})

(deffigure general    1  (0 0 1) -f fortress   nil)
(deffigure captain    1  (0 0 1) -f harbor     nil)
(deffigure innkeeper  3  (0 1 0) b- tavern     nil)
(deffigure magistrate 1  (0 1 0) b- town-hall  nil)
(deffigure priest     6  (0 0 0) -- cathedral  nil)
(deffigure aristocrat 5  (3 0 0) -- plantation nil)
(deffigure merchant   3  (5 0 0) -- market     nil)
(deffigure printer    10 (0 0 0) -- nil        nil)
(deffigure spy        0  (0 0 0) b- nil        steal-spot)
(deffigure apothecary 0  (0 0 0) -f nil        swap-spots)
(deffigure rogue      0  (0 2 0) bf nil        nil)
(deffigure mercenary  3  (0 0 1) bf nil        nil)
(deffigure viceroy    0  (0 0 0) -- palace     occupy-guard-house)
(deffigure messenger  3  (0 0 0) -- nil        reassign-spots)
(deffigure mayor      0  (0 0 0) bf nil        take-open-spot)
(deffigure constable  5  (0 1 0) bf nil        nil)
(deffigure warden     4  (0 0 0) -- nil        put-other-in-jail)
(deffigure heretic    0  (0 1 1) -- nil        put-self-in-asylum)
(deffigure governor   0  (0 0 0) bf nil        put-other-open-spot)
(deffigure anarchist  0  (0 0 0) bf nil        do-whatever)

(def figures
  [general    captain    innkeeper  magistrate
   priest     aristocrat merchant   printer
   rogue      spy        apothecary mercenary])
(def palace-figures
  [general    captain    innkeeper  magistrate
   viceroy    priest     aristocrat merchant
   printer    spy        apothecary messenger
   mayor      constable  rogue      mercenary])
#_ (def anarchy-figures
  [general    captain    innkeeper  magistrate
   priest     aristocrat merchant   printer
   warden     spy        apothecary heretic
   governor   rogue      mercenary  anarchist])

(defn make-board [players]
  (->Board
    1
    locations
    figures
    players
    (zipmap players (repeat (->Bid 3 1 1)))
    (zipmap locations (repeat (zipmap players (repeat 0))))
    (zipmap players (repeat 0))))
