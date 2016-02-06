'use strict';

/*jslint node: true, browser: true, indent: 2*/
/*global phantom, sequence, signup, startGame, placeBids, submitBids, delay, mode, bid, defer*/

var url = "http://localhost:3449/";
var helpersUrl = "scenario_helpers.js";
var webpage = require("webpage");

function runClient(f) {
  var page = webpage.create();
  page.onConsoleMessage = function (msg) {
    console.log(msg);
  };
  page.onInitialized = function () {
    page.injectJs(helpersUrl);
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
    mode("signup", defer(signup, ["emma"])),
    mode("take-bids", defer(placeBids, [[
      bid("priest",     1, 0, 0),
      bid("aristocrat", 0, 1, 0),
      bid("merchant",   1, 0, 0),
      bid("printer",    1, 0, 1)]])),
    delay(2000, submitBids)
  ]);
});

runClient(function () {
  sequence([
    delay(2000),
    mode("signup", defer(signup, ["noah"])),
    mode("lobby", startGame),
    mode("take-bids", defer(placeBids, [[
      bid("general",    2, 0, 0),
      bid("captain",    0, 1, 0),
      bid("innkeeper",  0, 0, 1),
      bid("magistrate", 1, 0, 0)]])),
    delay(2000, submitBids)
  ]);
});
