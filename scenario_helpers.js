
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
