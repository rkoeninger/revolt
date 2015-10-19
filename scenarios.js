'use strict';

/*jslint node: true, browser: true, indent: 2*/
/*global phantom*/

var url = "http://localhost:3449/";
var helpersUrl = "scenario_helpers.js";

var webpage = require("webpage"),
    page1 = webpage.create(),
    page2 = webpage.create();

page1.onConsoleMessage = function (msg) {
  console.log(msg);
};
page2.onConsoleMessage = function (msg) {
  console.log(msg);
};

page1.onInitialized = function () {
  page1.injectJs(helpersUrl);
};
page2.onInitialized = function () {
  page2.injectJs(helpersUrl);
};

page1.open(url, function (status) {
  if (status !== "success") {
    console.log("Unable to access test site");
    phantom.exit(1);
  } else {
    page1.evaluate(function () {
      waitForMode(lobbyKeyword, function () {
        console.log("          !!!!!!!!!!!!IN THE LOBBY!!!!!!!");
      });
      sequence([
        step(4000, defer(signup, ["emma"])),
        step(8000, defer(placeBids, [[
          bid("priest",     1, 0, 0),
          bid("aristocrat", 0, 1, 0),
          bid("merchant",   1, 0, 0),
          bid("viceroy",    1, 0, 1)]])),
        step(2000, defer(submitBids))
      ]);
    });
  }
});
page2.open(url, function (status) {
  if (status !== "success") {
    console.log("Unable to access test site");
    phantom.exit(1);
  } else {
    page2.evaluate(function () {
      sequence([
        step(4000, defer(signup, ["noah"])),
        step(4000, defer(startGame)),
        step(4000, defer(placeBids, [[
          bid("general",    2, 0, 0),
          bid("captain",    0, 1, 0),
          bid("innkeeper",  0, 0, 1),
          bid("magistrate", 1, 0, 0)]])),
        step(2000, defer(submitBids))
      ]);
    });
  }
});
