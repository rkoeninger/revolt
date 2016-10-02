[![Build Status](https://travis-ci.org/rkoeninger/revolt.svg?branch=master)](https://travis-ci.org/rkoeninger/revolt)

# Revolt

Revolt is a bidding game based around the theme of a 19th century revolution. Each turn, players "bid" on public figures by bribing them with money, persuading them with blackmail or compelling them by force. By gaining control over a figure for that turn, a player gains public support, influence over locations in town or the ability to have more money, blackmail or force at their disposal the following turn. The game ends when all of the locations in town have reached their influence limit. Whoever has the most support at the end of the game wins.

## Getting it to Run

Prerequisites:

  * Java 1.7+
  * [Leiningen](http://leiningen.org/)

Instructions:

  1. `git clone git@github.com:rkoeninger/revolt.git`
  2. `lein test`
  3. `lein figwheel`
  4. `npm install -g phantomjs-prebuilt`
  5. `phantomjs scenarios.js` or open 1+ tabs with the site. Default URL is [localhost:3449](http://localhost:3449/)

## Technology

The server is written in pure Clojure and is built on Ring/Compojure. It has a simple clojure.test test suite.

The client is written in pure ClojureScript and is built on Om (ReactJS) and my own [hyjinks](http://github.com/rkoeninger/hyjinks) library.

The server and client communicate via websockets and both make use of core.async to handle messaging.

Figwheel is used to run the test server.

Automated feature tests are run using PhantomJS.

## Future Work

  * Get some client-side unit tests written
  * Expansion selection (Base set, The Palace, Anarchy!)
  * Customizable/optional house rules
  * More elaborate graphics, maybe some animations
  * More elaborate lobby area so games can be arranged
  * Android, iOS clients?

## Disclaimer

Revolt is intended to be a learning project for me and is not a commercial product. It will not be sold. Imagery, names and other trademarks are property of [Steve Jackson Games](http://www.sjgames.com/revolution/).
