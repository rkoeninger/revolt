(defproject revolt "0.0"
    :description "Revolt server"
    :url "http://github.com/rkoeninger/revolt"
    :main revolt
    :source-paths ["src/server"]
    :clean-targets ^{:protect false} ["resources/public/js/compiled"]
    :test-paths ["test"]
    :cljsbuild {
      :builds [{:id "dev"
                :source-paths ["src/client" "dev_src"]
                :compiler {:output-to "resources/public/js/compiled/revolt_client.js"
                           :output-dir "resources/public/js/compiled/out"
                           :optimizations :none
                           :main revolt.client
                           :asset-path "js/compiled/out"
                           :source-map true
                           :source-map-timestamp true
                           :cache-analysis true}}
               {:id "min"
                :source-paths ["src/client"]
                :compiler {:output-to "resources/public/js/compiled/revolt_client.js"
                           :main revolt.client
                           :optimizations :advanced
                           :pretty-print false}}]}
    :plugins [[lein-cljsbuild "1.0.4"]
              [lein-figwheel "0.2.5-SNAPSHOT"]]
    :dependencies [[org.clojure/clojure "1.6.0"]
                   [org.clojure/math.combinatorics "0.0.8"]
                   [jarohen/chord "0.6.0"]
                   [ring/ring-core "1.2.0"]
                   [compojure "1.1.5"]
                   [hiccup "1.0.4"]
                   [ring-middleware-format "0.4.0"]
                   [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                   [org.clojure/clojurescript "0.0-2850"]
                   [jarohen/flow "0.3.0-alpha3"]
                   [com.cemerick/url "0.1.1"]
                   [figwheel "0.2.5-SNAPSHOT"]
                   [sablono "0.3.4"]
                   [org.omcljs/om "0.8.8"]]
    :exclusions [org.clojure/clojure]
    :figwheel {
             :http-server-root "public" ;; default and assumes "resources" 
             :server-port 3449 ;; default
             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             :ring-handler revolt-server/app

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log" 
             })
