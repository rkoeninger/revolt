[![Build Status](https://travis-ci.org/rkoeninger/revolt.svg?branch=master)](https://travis-ci.org/rkoeninger/revolt)

# Revolt

Revolt is a bidding game based around the theme of a 19th century revolution. Each turn, players "bid" on public figures by bribing them with money, persuading them with blackmail or compelling them by force. By gaining control over a figure for that turn, a player gains public support, influence over locations in town or the ability to have more money, blackmail or force at their disposal the following turn. The game ends when all of the locations in town have reached their influence limit. Whoever has the most support at the end of the game wins.

The Revolt server is written in Clojure and will maintain and process all changes to the games state, taking input from clients. The clients can be implemented for multiple platforms, but the one in focus for now is Android.

Revolt is intended to be a learning project for me and not for commerical gain. It will not be sold. Here's hoping [Steve Jackson Games](http://www.sjgames.com/revolution/) is cool with it.