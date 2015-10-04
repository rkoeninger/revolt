
function sequence(delay, functions) {
    if (functions && functions.length > 0) {
        setTimeout(function () {
            var current = functions[0],
                rest = functions.slice(1, functions.length);
            current();
            if (rest && rest.length > 0) {
                sequence(delay, rest);
            }
        }, delay);
    }
}

function defer(f, args) {
    return function () {
        return f.apply(this, args || []);
    };
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

function placeBids(bids) {
    
}
