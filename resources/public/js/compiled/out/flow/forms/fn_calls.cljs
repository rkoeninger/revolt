(ns flow.forms.fn-calls
  (:require                             ))

(defn build-fn-call [call-fn]
  (fn []
    (letfn [(update-call! []
              [(call-fn) update-call!])]
      
      (update-call!))))

     
                                                       
                        
                                                                       

     
                                                          
                                                  

;;;;;;;;;;;; This file autogenerated from src/flow/forms/fn_calls.cljx
