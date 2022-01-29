const hand = ["Rock", "Paper", "Scissors"];
let playerWinCount = 0;
let computerWinCount = 0;
let gameInProgress = false;
const divStartGame = document.querySelector(".start-game");
const divPlayerOptions = document.querySelector(".player-options");
const startButton = document.querySelector(".start-game");

function startGame() {
    divStartGame.setAttribute("style", "visibility: hidden;");
    divPlayerOptions.classList.add("game-running");
    divPlayerOptions.classList.remove("wait-for-start");
}

function endGame() {
    divStartGame.setAttribute("style", "visibility: visible;")
    divPlayerOptions.classList.remove("game-running");
    divPlayerOptions.classList.add("wait-for-start");
}

endGame();
// function toggleGameState(bool) {
//     console.log("start game clicked");
//     if (gameInProgress) {
//         startGame.setAttribute("style", "visibility: hidden;");
//         divPlayerOptions.classList.add("game-running");
//         divPlayerOptions.classList.remove(".wait-for-start");
//     }
//     else {
//         startGame.setAttribute("style", "visibility: visible;")
//         divPlayerOptions.classList.remove(".game-running");
//         divPlayerOptions.classList.add("wait-for-start");
//     }
// }
//}

startButton.addEventListener("click", () => { startGame() });

// changeGameInProgress(gameInProgress);

function playRound() {
    playerWinCount = 0;
    computerWinCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerHand = prompt("Input Rock, Paper or Scissors");
        let computerHand = formHand();
        playerHand = capitalize(playerHand);
        console.log("Player selected: " + playerHand);
        console.log("Computer selected: " + computerHand);

        if (playerHand === computerHand) {
            console.log("It's a draw. Try again!")
            i--;
        }
        else if (!hand.includes(playerHand)) {
            console.log("Invalid input. Make sure you spell it correctly");
            i--;
        }
        else if ((playerHand === "Rock" && computerHand === "Scissors") ||
            (playerHand === "Paper" && computerHand === "Rock") ||
            (playerHand === "Scissors" && computerHand === "Paper")) {
            playerWins(i);
        }
        else {
            computerWins(i);
        }
    }
    if (playerWinCount > computerWinCount) {
        console.log("Player wins with " + playerWinCount + " wins against " + computerWinCount);
    }
    else {
        console.log("Computer wins with " + computerWinCount + " wins against " + playerWinCount);
    }
}

function formHand() {
    let randomHand = Math.floor(Math.random() * hand.length);
    return hand[randomHand];
}

function capitalize(word) {
    word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playerWins(i) {
    playerWinCount++;
    console.log("Player wins round " + (i + 1));
}

function computerWins(i) {
    computerWinCount++;
    console.log("Computer wins round " + (i + 1));
}