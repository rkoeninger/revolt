'use strict';

/*jslint node: true, browser: true, indent: 4*/
/*global phantom*/

var url = "http://localhost:3449/";
var jqueryUrl = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js";
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
    page1.injectJs(jqueryUrl);
    page1.injectJs(helpersUrl);
};
page2.onInitialized = function () {
    page2.injectJs(jqueryUrl);
    page2.injectJs(helpersUrl);
};

page1.open(url, function (status) {
    if (status !== "success") {
        console.log("Unable to access test site");
        phantom.exit(1);
    } else {
        setTimeout(function () {
            page1.evaluate(function () {
                setTimeout(function () {
                    signup("emma");
                }, 500);
            });
        }, 500);
    }
});
page2.open(url, function (status) {
    if (status !== "success") {
        console.log("Unable to access test site");
        phantom.exit(1);
    } else {
        setTimeout(function () {
            page2.evaluate(function () {
                setTimeout(function () {
                    signup("noah");
                    setTimeout(function () {
                        startGame();
                    }, 2000);
                }, 500);
            });
        }, 500);
    }
});