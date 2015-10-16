'use strict';

/*jslint node: true, browser: true, indent: 2*/
/*global phantom*/

function step(delay, func) {
  return {
    delay: delay,
    func: func
  };
}

function sequence(steps) {
  var current, rest;
  if (steps && steps.length > 0) {
    current = steps[0];
    rest = steps.slice(1, steps.length);
    setTimeout(function () {
      current.func();
      sequence(rest);
    }, current.delay);
  }
}

function defer(f, args) {
  return function () {
    return f.apply(this, args || []);
  };
}

function repeatAction(n, f) {
  var i;
  for (i = 0; i < n; ++i) {
    f();
  }
}

function signup(username) {
  var signupInput = document.body.querySelector("#signup-input"),
      signupButton = document.body.querySelector("#signup-button");
  if (signupInput) {
    if (signupButton) {
      signupInput.value = username;
      signupButton.click();
    } else {
      console.error("Couldn't find #signup-button");
    }
  } else {
    console.error("Couldn't find #signup-input");
  }
}

function startGame() {
  var startGameButton = document.body.querySelector("#start-game-button");
  if (startGameButton) {
    startGameButton.click();
  } else {
    console.error("Couldn't find #start-game-button");
  }
}

function incBid(figure, denomination) {
  var incButtonId = "bid-" + figure + "-" + denomination + "-up",
      incButton = document.body.querySelector("#" + incButtonId);
  if (incButton) {
    incButton.click();
  } else {
    console.error("Couldn't find #" + incButtonId);
  }
}

function bid(figure, gold, blackmail, force) {
  return {
    figure: figure,
    gold: gold,
    blackmail: blackmail,
    force: force
  };
}

function placeBids(bids) {
  var i, j, current;
  for (i = 0; i < bids.length; ++i) {
    current = bids[i];
    repeatAction(current.gold, defer(incBid, [current.figure, "gold"]));
    repeatAction(current.blackmail, defer(incBid, [current.figure, "blackmail"]));
    repeatAction(current.force, defer(incBid, [current.figure, "force"]));
  }
}

function submitBids() {
  var submitButton = document.body.querySelector("#submit-button");
  if (submitButton) {
    submitButton.click();
  } else {
    console.error("Couldn't find #submit-button");
  }
}
