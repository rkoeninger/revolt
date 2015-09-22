(ns revolt.client.dev
    (:require [figwheel.client :as fw]
              [revolt.client]))

(fw/start {:websocket-url "ws://localhost:3449/figwheel-ws"})
