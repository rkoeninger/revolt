'use strict';

/*jslint node: true, browser: true, indent: 4*/
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
            sequence(2000, [
                defer(signup, ["emma"])
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
            sequence(2000, [
                defer(signup, ["noah"]),
                startGame
            ]);
        });
    }
});
