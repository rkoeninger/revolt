'use strict';

/*jslint node: true, browser: true, indent: 2*/
/*global phantom, sequence, signup, startGame, placeBids, submitBids, delay, mode, bid, defer, condition, playerCount*/

var url = "http://localhost:3449/";
var helpersUrl = "scenario_helpers.js";
var webpage = require("webpage");
var playersDoneCount = 0;

function runClient(f) {
  var page = webpage.create();
  page.onConsoleMessage = function (msg) {
    console.log(msg);
  };
  page.onInitialized = function () {
    page.injectJs(helpersUrl);
  };
  page.onCallback = function (data) {
    if (data && data.message === "done") {
      playersDoneCount++;
      console.log("Player " + data.playerId + " is done");
    }
  };
  page.open(url, function (status) {
    if (status !== "success") {
      console.log("Unable to access test site");
      phantom.exit(1);
    } else {
      page.evaluate(f);
    }
  });
}

runClient(function () {
  sequence([
    delay(2000),
    mode("signup"),
    delay(1000, defer(signup, ["emma"])),
    mode("take-bids", defer(placeBids, [[
      bid("priest",     1, 0, 0),
      bid("aristocrat", 0, 1, 0),
      bid("merchant",   1, 0, 0),
      bid("printer",    1, 0, 1)
    ]])),
    delay(1000, submitBids),
    mode("take-bids", defer(placeBids, [[
      bid("captain",   2, 0, 0),
      bid("mercenary", 2, 0, 0),
      bid("innkeeper", 2, 0, 0),
      bid("printer",   2, 0, 0)
    ]])),
    delay(1000, submitBids),
    mode("take-bids", defer(placeBids, [[
      bid("captain",    2, 0, 0),
      bid("magistrate", 1, 0, 2)
    ]])),
    delay(1000, submitBids),
    mode("take-bids", defer(placeBids, [[
      bid("magistrate", 1, 0, 0),
      bid("general",    0, 1, 0),
      bid("captain",    1, 0, 0),
      bid("mercenary",  1, 0, 0),
      bid("merchant",   0, 0, 1)
    ]])),
    delay(1000, submitBids),
    delay(3000, defer(callbackDone, ["emma"]))
  ]);
});

runClient(function () {
  sequence([
    delay(3000),
    mode("signup"),
    delay(1000, defer(signup, ["noah"])),
    mode("lobby"),
    condition(function () {
      return playerCount() === 2;
    }),
    delay(500, startGame),
    mode("take-bids", defer(placeBids, [[
      bid("general",    2, 0, 0),
      bid("captain",    0, 1, 0),
      bid("innkeeper",  0, 0, 1),
      bid("magistrate", 1, 0, 0)
    ]])),
    delay(1000, submitBids),
    mode("take-bids", defer(placeBids, [[
      bid("printer",    0, 1, 0),
      bid("general",    0, 1, 0),
      bid("innkeeper",  1, 0, 1),
      bid("aristocrat", 0, 0, 1)
    ]])),
    delay(1000, submitBids),
    mode("take-bids", defer(placeBids, [[
      bid("captain",    1, 0, 0),
      bid("general",    1, 0, 0),
      bid("mercenary",  1, 0, 0),
      bid("printer",    0, 1, 0),
      bid("magistrate", 0, 0, 1)
    ]])),
    delay(1000, submitBids),
    mode("take-bids", defer(placeBids, [[
      bid("innkeeper",  2, 0, 0),
      bid("printer",    1, 0, 1),
      bid("aristocrat", 0, 0, 1)
    ]])),
    delay(1000, submitBids),
    delay(3000, defer(callbackDone, ["noah"]))
  ]);
});

function waitForDone() {
  if (playersDoneCount === 2) {
    console.log("All players done");
    phantom.exit(0);
  } else {
    setTimeout(waitForDone, 1000);
  }
}

waitForDone();
