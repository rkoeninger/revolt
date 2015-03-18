(defproject revolt "0.0"
    :description "Revolt server"
    :url "http://github.com/rkoeninger/revolt"
    :main revolt
    :source-paths ["src"]
    :test-paths ["test"]
    :resource-paths ["resources" "target/resources"]
    :frodo/config-resource "revolt_server.edn"
    :cljsbuild {
    	:builds [{:source-paths ["src"]
                  :compiler {:output-to "target/resources/js/revolt_server.js"
                             :optimizations :whitespace
                             :pretty-print true}}]}
    :aliases {"dev" ["do"
                        ["shell" "mkdir" "-p" "target/resources"]
                        ["pdo" ["cljsbuild" "auto"] "frodo"]]}
    :plugins [[lein-pdo "0.1.1"]
              [jarohen/lein-frodo "0.4.1"]
              [lein-cljsbuild "1.0.3"]
              [lein-shell "0.4.0"]
              [jarohen/simple-brepl "0.2.1"]]
    :dependencies [[org.clojure/clojure "1.6.0"]
                   [org.clojure/math.combinatorics "0.0.8"]
                   [jarohen/chord "0.6.0"]
                   [ring/ring-core "1.2.0"]
                   [compojure "1.1.5"]
                   [hiccup "1.0.4"]
                   [ring-middleware-format "0.4.0"]
                   [ring-basic-authentication "1.0.5"]
                   [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                   [org.clojure/clojurescript "0.0-2727"]
                   [jarohen/flow "0.3.0-alpha3"]]
    :exclusions [org.clojure/clojure])
