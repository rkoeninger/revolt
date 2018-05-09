(defproject revolt "0.0.0"
  :description "Revolt"
  :url "http://github.com/rkoeninger/revolt"
  :repl-options {:init-ns revolt.core}
  :source-paths ["src/shared" "src/server"]
  :clean-targets ^{:protect false} [
    "target"
    "logs"
    "resources/public/js/compiled"]
  :test-paths ["test"]
  :cljsbuild {
    :builds {
      :dev {
        :source-paths ["src/shared" "src/client" "src/client_dev"]
        :compiler {
          :optimizations :none
          :output-to "resources/public/js/compiled/revolt_client.js"
          :output-dir "resources/public/js/compiled/out"
          :asset-path "js/compiled/out"
          :main revolt.client.dev
          :source-map true
          :source-map-timestamp true
          :cache-analysis true}}
      :min {
        :source-paths ["src/shared" "src/client"]
        :compiler {
          :optimizations :advanced
          :output-to "resources/public/js/compiled/revolt_client.js"
          :main revolt.client
          :pretty-print false}}}}
  :plugins [
    [lein-cljsbuild "1.1.1"]
    [lein-figwheel "0.5.8"]]
  :dependencies [
    [org.clojure/clojure "1.8.0"]
    [org.clojure/clojurescript "1.8.51"]
    [org.clojure/math.combinatorics "0.1.4"]
    [org.clojure/core.async "0.1.346.0-17112a-alpha"]
    [jarohen/chord "0.6.0"]
    [hyjinks "0.0.4-SNAPSHOT"]
    [ring/ring-core "1.4.0"]
    [ring-middleware-format "0.6.0"]
    [compojure "1.4.0"]
    [com.cemerick/url "0.1.1"]
    [figwheel "0.4.0"]
    [reagent "0.6.0"]]
  :exclusions
    [org.clojure/clojure]
  :jvm-opts ["--add-modules" "java.xml.bind"]
  :figwheel {
    :server-port 3449
    :ring-handler revolt.server/app
    :css-dirs ["resources/public/css"]
    :server-logfile "logs/figwheel_server.log"
    :repl false})
