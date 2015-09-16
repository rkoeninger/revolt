(ns flow.cursors)

;; Most of this adapted from either from CLJS core or Om, thanks David
;; Nolan & contributors for the design ideas, inspiration and code :)

;; The Clojure implementation is a small subset of the CLJS cursor
;; functionality (due to the difference in interfaces between Clojure
;; 1.6 and CLJS). It's really only meant for testing Flow.

(defprotocol Cursor
  (-value [_])
  (-!state [_])
  (-path [_])
  (->atom [_ extra-path]))

(defprotocol Keyable
  (-keyed-by [_ f]))

(defn cursor? [v]
  (satisfies? Cursor v))

(defn get-at-path [m [p & more-path :as path]]
  (if (and m (seq path))
    (cond
      (and (vector? p) (= (first p) ::pk))
      (let [[_ key-fn key-value] p]
        (get-at-path (first (filter (comp #(= key-value %) key-fn) m)) more-path))

      (or                                         
                 (satisfies?        ILookup m)
          (nil? m))
      
      (get-at-path (get m p) more-path)

      (number? p)
      (get-at-path (nth m p) more-path))
    
    m))

(defn assoc-at-path [m [p & more-path :as path] v]
  (if (seq path)
    (cond
      (and (vector? p) (= (first p) ::pk))
      (let [[_ key-fn key-value] p]
        (into (empty m) (for [el m]
                          (if (= key-value (key-fn el))
                            (assoc-at-path el more-path v)
                            el))))

      (or                                             
                 (satisfies?        IAssociative m)
          (nil? m))
      (assoc m p (assoc-at-path (get m p) more-path v))

      (and (seq? m)
           (number? p))
      (if (zero? p)
        (cons (assoc-at-path (first m) more-path v)
              (rest m))
        (cons (first m)
              (assoc-at-path (rest m) (cons (dec p) more-path) v))))
    
    v))

     
                                
        
          
                                
                        
                    
                          
                                                           
    
                       
                 
                                   

      
(defn cursor->atom [!state path]
  ;; This part adapted from CLJS core.
  (reify
    Cursor
    (-value [this] @this)
    (-!state [_] !state)
    (-path [_] path)
    (->atom [_ extra-path]
      (cursor->atom !state (vec (concat path extra-path))))
    
    IEquiv
    (-equiv [this other]
      (and (cursor? other)
           (identical? !state (-!state other))
           (= path (path other))))

    IMeta
    (-meta [_]
      {:!state !state
       :path path})
    
    IDeref
    (-deref [_]
      (get-at-path @!state path))

    IReset
    (-reset! [this new-value]
      (let [old-value (-deref this)]
        (swap! !state assoc-at-path path new-value)
        new-value))

    ISwap
    (-swap! [this f]
      (reset! this (f (-deref this))))
    (-swap! [this f a1]
      (reset! this (f (-deref this) a1)))
    (-swap! [this f a1 a2]
      (reset! this (f (-deref this) a1 a2)))
    (-swap! [this f a1 a2 as]
      (reset! this (apply f (-deref this) a1 a2 as)))

    IPrintWithWriter
    (-pr-writer [this writer opts]
      (-write writer "#<Atom: ")
      (-write writer (pr-str @this))
      (-write writer ">"))

    IHash
    (-hash [this]
      (goog/getUid this))))

(declare ->cursor)

     
                                    
        
          
                      
                        
                    
                          
                                                           
    
                        
                   
                       
                             
                                      
                               
                                           
                      
    
                    
                    
                   
                              
                             

                        
               
                                
                        
                                                                            
                     
    
                               
                  
                                                 
                  
                                                  

      
(defn map-cursor [value !state path]
  (reify
    Cursor
    (-value [_] value)
    (-!state [_] !state)
    (-path [_] path)
    (->atom [_ extra-path]
      (cursor->atom !state (vec (concat path extra-path))))
    
    IWithMeta
    (-with-meta [_ new-meta]
      (map-cursor (with-meta value new-meta) !state path))
    IMeta
    (-meta [_]
      (meta value))

    ICloneable
    (-clone [_]
      (map-cursor value !state path))
    
    ICounted
    (-count [_]
      (count value))

    ICollection
    (-conj [this o]
      (->cursor (-conj value o) !state path))

    ILookup
    (-lookup [this k]
      (-lookup this k nil))
    (-lookup [this k not-found]
      (let [v (-lookup value k not-found)]
        (if-not (= v not-found)
          (->cursor v !state (conj path k))
          not-found)))
    
    IFn
    (-invoke [this k]
      (-lookup this k))
    (-invoke [this k not-found]
      (-lookup this k not-found))

    ISeqable
    (-seq [this]
      (when (pos? (count value))
        (map (fn [[k v]]
               [k (->cursor v !state (conj path k))])
             value)))
    
    IAssociative
    (-contains-key? [_ k]
      (-contains-key? value k))
    (-assoc [_ k v]
      (map-cursor (-assoc value k v) !state path))

    IMap
    (-dissoc [_ k]
      (map-cursor (-dissoc value k) !state path))

    IEquiv
    (-equiv [_ other]
      (if (cursor? other)
        (= value (-value other))
        (= value other)))

    IPrintWithWriter
    (-pr-writer [_ writer opts]
      (-write writer (pr-str value)))))

     
                                           
                   
                      
                                      
                  
          
            
                        
                          
                      
                            
                                                             

             
                      
                                         
    
                             

                                        
                
                      

                          
                     
                         
                               
                               

                      
                      
                     
                                
                               

                          
                   
                                                      
                             
                               
                                                       
                     

                          
                 
                               
                                
                                                                  
                               

                              
                       
                                                    

      
(defn vec-cursor [value !state path key-fn]
  (letfn [(pk [v i]
            (if key-fn
              [::pk key-fn (key-fn v)]
              i))]
    (reify
      Cursor
      (-value [_] value)
      (-!state [_] !state)
      (-path [_] path)
      (->atom [_ extra-path]
        (cursor->atom !state (vec (concat path extra-path))))

      Keyable
      (-keyed-by [_ f]
        (vec-cursor value !state path f))
      
      ISequential

      IWithMeta
      (-with-meta [_ new-meta]
        (vec-cursor (with-meta value new-meta) !state path key-fn))
      IMeta
      (-meta [_]
        (meta value))

      ICloneable
      (-clone [_]
        (vec-cursor value !state path key-fn))

      ICounted
      (-count [_]
        (count value))
      ICollection
      (-conj [_ o]
        (vec-cursor (conj value o) !state path key-fn))

      ILookup
      (-lookup [this n]
        (-nth this n nil))
      (-lookup [this n not-found]
        (-nth this n not-found))

      IFn
      (-invoke [this k]
        (-lookup this k))
      (-invoke [this k not-found]
        (-lookup this k not-found))

      IIndexed
      (-nth [this n]
        (let [v (nth value n)]
          (->cursor v !state (conj path (pk v n)))))
      
      (-nth [this n not-found]
        (if (< n (-count value))
          (let [v (nth value n)]
            (->cursor v !state (conj path (pk v n))))
          
          not-found))

      ISeqable
      (-seq [this]
        (when (not-empty value)
          (map-indexed (fn [i v]
                         (->cursor v !state (conj path (pk v i))))
                       value)))

      IAssociative
      (-contains-key? [_ k]
        (-contains-key? value k))
      (-assoc [this n v]
        (vec-cursor (-assoc-n value n v) !state path key-fn))

      IStack
      (-peek [this]
        (vec-cursor (-peek value) !state path key-fn))
      (-pop [this]
        (vec-cursor (-pop value) !state path key-fn))
      
      IEquiv
      (-equiv [_ other]
        (if (cursor? other)
          (= value (-value other))
          (= value other)))
      
      IPrintWithWriter
      (-pr-writer [_ writer opts]
        (-write writer (pr-str value))))))

      
(defn cloneable->cursor [value !state path]
  (specify value
    Cursor
    (-value [_] value)
    (-!state [_] !state)
    (-path [_] path)
    (->atom [_ extra-path]
      (cursor->atom !state (vec (concat path extra-path))))
    
    IEquiv
    (-equiv [_ other]
      (if (cursor? other)
        (= val (-value other))
        (= val other)))))

(defn ->cursor [value !state path]
  (cond
    (cursor? value) value

    (map? value) (map-cursor value !state path)
    (or (coll? value) (seq? value)) (vec-cursor value !state path nil)

           (satisfies? ICloneable value)
           (cloneable->cursor value !state path)

    :else value))

(defn keyed-by [f coll]
  (cond
    (satisfies? Keyable coll) (-keyed-by coll f)

    (or (sequential? coll)
               (seqable? coll))
    (map (fn [el]
           (if (cursor? el)
             (->cursor (-value el)
                       (-!state el)
                       (concat (butlast (-path el)) [[::pk f (f el)]]))
             el))
         coll)
    
    (nil? coll) nil))


;;;;;;;;;;;; This file autogenerated from src/flow/cursors.cljx
