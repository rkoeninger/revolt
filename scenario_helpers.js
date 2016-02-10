'use strict';

/*jslint node: true, browser: true, indent: 2*/
/*global phantom, cljs, revolt*/

function delay(millis, func) {
  return {
    type: "delay",
    delay: millis,
    func: func
  };
}

function condition(predicate, func) {
  return {
    type: "condition",
    condition: predicate,
    func: func
  };
}

function mode(modeString, func) {
  return {
    type: "mode",
    mode: modeString,
    func: func
  };
}

function noop() {
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

function waitFor(testFx, onReady, timeOutMillis) {
  var maxtimeOutMillis = timeOutMillis || 10000,
    start = new Date().getTime(),
    condition = false,
    interval = setInterval(function () {
      if (!condition) {
        if (new Date().getTime() - start < maxtimeOutMillis) {
          condition = testFx();
        } else {
          clearInterval(interval);
          console.warn("Timeout waiting after " + maxtimeOutMillis + "ms.");
        }
      } else {
        clearInterval(interval);
        onReady();
      }
    }, 100);
}

function keyword(s) {
  return new cljs.core.Keyword(null, s, s, cljs.core.hash(cljs.core.keyword(s)));
}

function waitForMode(modeString, onReady) {
  waitFor(function () {
    var data = cljs.core.deref.call(null, revolt.client.app_state),
      currentModeKw = cljs.core.get.call(null, data, keyword("mode"));
    return cljs.core._EQ_.call(null, keyword(modeString), currentModeKw);
  }, onReady);
}

function playerCount() {
  var data = cljs.core.deref.call(null, revolt.client.app_state),
    playersVec = cljs.core.get.call(null, data, keyword("players"));
  return cljs.core.count.call(null, playersVec);
}

function sequence(steps) {
  var current, rest, next;
  if (steps && steps.length > 0) {
    current = steps[0];
    rest = steps.slice(1, steps.length);
    next = function () {
      if (current.func) {
        current.func();
      }
      sequence(rest);
    };
    if (current.type === "delay") {
      console.log("Delaying " + current.delay + "ms...");
      setTimeout(next, current.delay);
    } else if (current.type === "condition") {
      waitFor(current.condition, next, current.delay);
    } else if (current.type === "mode") {
      console.log("Waiting to enter mode: " + current.mode);
      waitForMode(current.mode, next);
    } else {
      throw new Error("Unrecognized step type: " + current.type);
    }
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
    console.log("Clicked #start-game-button");
  } else {
    console.error("Couldn't find #start-game-button");
  }
}

function incBid(figure, denomination) {
  waitFor(function () {
    var incButtonId = "bid-" + figure + "-" + denomination + "-up",
      incButton = document.body.querySelector("#" + incButtonId);
    return incButton !== undefined;
  }, function () {
    var incButtonId = "bid-" + figure + "-" + denomination + "-up",
      incButton = document.body.querySelector("#" + incButtonId);
    if (incButton) {
      incButton.click();
    } else {
      console.error("Couldn't find #" + incButtonId);
    }
  });
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
  var i, current;
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
    if (submitButton.disabled) {
      console.log("#submit-button is disabled");
    } else {
      submitButton.click();
      console.log("Clicked #submit-button");
    }
  } else {
    console.error("Couldn't find #submit-button");
  }
}
