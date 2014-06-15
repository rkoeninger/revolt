
(ns revolt)
(require '[clojure.java.io :as io])
(import '[java.net ServerSocket SocketTimeoutException])

(defn read-all [f]
  (let [sb (StringBuilder.)
        #^java.io.Reader r (io/reader f)]
    (loop [c (.read r)]
      (if (neg? c)
        (str sb)
        (do
          (.append sb (char c))
          (recur (.read r)))))))

(defn write-all [f s]
  (let [w (io/writer f)]
    (.write w s)
    (.flush w)))

(defn gen-id [] (str (java.util.UUID/randomUUID)))

(defn all-bids-in? [stuff]
  (every? (partial contains? (@stuff :pending-bids)) (vals (@stuff :players))))

(defn register-player [stuff name]
  (if (or (not (= :registering (@stuff :state))) (contains? (vals (@stuff :players)) name))
    {:type :rejection, :reason (str "Name " name " aleady taken")}
    (let [id (gen-id)]
      (dosync (commute stuff assoc-in [:players id] name))
      { :type :register, :client-id id })))

(defn list-players [stuff] (@stuff :players))

(defn start-game [stuff] (dosync (commute stuff assoc :state :bidding)))

(defn handle-request [stuff socket]
  (let [request (read-string (read-all socket))
        response (case (request :type)
          :register (register-player stuff (request :name))
          :waiting nil
          :place-bids nil
          :spy-choice nil
          :apothecary-choice nil
          :messenger-choice nil
          :mayor-choice nil
          :list-players (list-players stuff)
          :start-game nil)]
    (write-all socket (pr-str response))))

(defn listener-loop [stuff running server-socket]
  (loop []
    (when @running
      (try
        (with-open [socket (.accept server-socket)]
          (handle-request stuff socket))
        (catch SocketTimeoutException ste nil)
        (catch Exception e (do
          (println "Exception:" e)
          (dosync (ref-set running false)))))
      (recur))))

(defn create-listener [stuff port]
  (let [running (ref true)]
    (.start (Thread. (fn []
      (with-open [server-socket (ServerSocket. port)]
        (.setSoTimeout server-socket 30000)
        (listener-loop stuff running server-socket)))))
    running))

; players = {client-id player-name}
; board = (make-board [])
; pending-bids = {player-name {figure bid}}
; state = registering | bidding | special-* | game-over
(defn create-server [port]
  (let [stuff (ref {:players {} :board nil :pending-bids {} :state :registering })]
    (create-listener stuff port)))
