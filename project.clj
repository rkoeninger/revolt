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
          :output-to "resources/public/js/compiled/revolt_client.js"
          :output-dir "resources/public/js/compiled/out"
          :asset-path "js/compiled/out"
          :optimizations :none
          :main revolt.client.dev
          :source-map true
          :source-map-timestamp true
          :cache-analysis true}}
      :min {
        :source-paths ["src/shared" "src/client"]
        :compiler {
          :output-to "resources/public/js/compiled/revolt_client.js"
          :main revolt.client
          :optimizations :advanced
          :pretty-print false}}}
    :test-commands {"test" ["phantomjs" "scenarios.js"]}}
  :plugins [
    [lein-cljsbuild "1.1.0"]
    [lein-figwheel "0.4.0"]]
  :dependencies [
    [org.clojure/clojure "1.7.0"]
    [org.clojure/clojurescript "1.7.122"]
    [org.clojure/math.combinatorics "0.1.1"]
    [org.clojure/core.async "0.1.346.0-17112a-alpha"]
    [jarohen/chord "0.6.0"]
    [hyjinks "0.0.2-SNAPSHOT"]
    [ring/ring-core "1.4.0"]
    [ring-middleware-format "0.6.0"]
    [compojure "1.4.0"]
    [com.cemerick/url "0.1.1"]
    [figwheel "0.4.0"]
    [org.omcljs/om "0.9.0" :exclusions [cljsjs/react]]
    [cljs-react-test "0.1.3-SNAPSHOT"]
    [cljsjs/react-with-addons "0.13.3-0"]
    [prismatic/om-tools "0.3.12"]]
  :exclusions
    [org.clojure/clojure]
  :figwheel {
    :http-server-root "public" ; default and assumes "resources"
    :server-port 3449
    ; :nrepl-port 7888
    :css-dirs ["resources/public/css"]
    :ring-handler revolt.server/app
    :server-logfile "logs/figwheel_server.log"})
