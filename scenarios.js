'use strict';

/*jslint node: true, browser: true, indent: 4*/
/*global phantom*/

var webpage = require("webpage"),
    page1 = webpage.create(),
    page2 = webpage.create();

page1.onConsoleMessage = function (msg) {
    console.log(msg);
};
page2.onConsoleMessage = function (msg) {
    console.log(msg);
};

page1.open("http://localhost:3449/", function (status) {
    if (status !== "success") {
        console.log("Unable to access test site");
        phantom.exit(1);
    } else {
        page2.open("http://localhost:3449/", function (status) {
            if (status !== "success") {
                console.log("Unable to access test site");
                phantom.exit(1);
            } else {
                setTimeout(function () {
                    page1.evaluate(function () {
                        var signupInput = document.body.querySelector("#signup-input"),
                            signupButton = document.body.querySelector("#signup-button");
                        if (signupInput) {
                            if (signupButton) {
                                signupInput.value = "rob";
                                signupButton.click();
                            } else {
                                console.error("Couldn't find #signup-button");
                            }
                        } else {
                            console.error("Couldn't find #signup-input");
                        }
                    });
                    page2.evaluate(function () {
                        var signupInput = document.body.querySelector("#signup-input"),
                            signupButton = document.body.querySelector("#signup-button");
                        if (signupInput) {
                            if (signupButton) {
                                signupInput.value = "joe";
                                signupButton.click();
                            } else {
                                console.error("Couldn't find #signup-button");
                            }
                        } else {
                            console.error("Couldn't find #signup-input");
                        }
                    });
                }, 500);
            }
        });
    }
});