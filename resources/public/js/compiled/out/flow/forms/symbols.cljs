(ns flow.forms.symbols
  (:require                             
            [flow.state :as fs]))

(defn build-symbol [sym-fn]
  (fn []
    (letfn [(update-symbol! []
              [(sym-fn) update-symbol!])]
      (update-symbol!))))

     
                                  
                                
                                  
         

     
                                                                         
                                                        

     
                                                                            
                               

;;;;;;;;;;;; This file autogenerated from src/flow/forms/symbols.cljx
