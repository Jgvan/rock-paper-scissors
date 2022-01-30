const hand = ["Rock", "Paper", "Scissors"];
let playerWinCount = 0;
let computerWinCount = 0;
const divStartGame = document.querySelector(".start-game");
const divPlayerOptions = document.querySelector(".player-options");
const startButton = document.querySelector(".start-game");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const playerHand = document.querySelector(".player")
const aiHand = document.querySelector(".ai");
const textResult = document.querySelector(".result h2");
const selectionButtons = document.querySelectorAll(".player-options button");
const AIScore = document.querySelector(".AI-score");
const playerScore = document.querySelector(".player-score");

startButton.addEventListener("click", startGame);

//Enables hand buttons, disables start game
function startGame() {
    resetGame();
    divStartGame.setAttribute("style", "visibility: hidden;");
    divPlayerOptions.classList.add("game-running");
    divPlayerOptions.classList.remove("wait-for-start");
    selectionButtons.forEach(btn => btn.addEventListener("click", playRound));
}
//Disables hand buttons, enable start game button
function endGame(winner) {
    divStartGame.setAttribute("style", "visibility: visible;")
    divPlayerOptions.classList.remove("game-running");
    divPlayerOptions.classList.add("wait-for-start");
    selectionButtons.forEach(btn => btn.removeEventListener("click", playRound));
    textResult.textContent = `${winner} wins the game!`
}

//Receives input from the selected button, selects random hand for AI and decides who wins.
function playRound(event) {
    let playerSelection = event.target.value;
    let AISelection = randomHand();

    updateHandIcon(playerSelection, playerHand);
    updateHandIcon(AISelection, aiHand);

    if (playerSelection === AISelection) {
        textResult.textContent = `Both players picked ${playerSelection}`;
        aiHand.setAttribute("style", "background: white")
        playerHand.setAttribute("style", "background: white")
    }
    else if ((playerSelection === "Rock" && AISelection === "Scissors") ||
        (playerSelection === "Paper" && AISelection === "Rock") ||
        (playerSelection === "Scissors" && AISelection === "Paper")) {
        playerWins();
    }
    else {
        AIWins();
    }
}
//Change icon of the target player to the selected hand
function updateHandIcon(hand, target) {
    let icon;

    switch (hand) {
        case "Rock":
            icon = "✊";
            break;
        case "Paper":
            icon = "🤚";
            break;
        case "Scissors":
            icon = "✌";
            break;
    }
    target.textContent = icon;
}

// function playRound2() {
//     playerWinCount = 0;
//     computerWinCount = 0;
//     for (let i = 0; i < 5; i++) {
//         let playerHand = prompt("Input Rock, Paper or Scissors");
//         let computerHand = formHand();
//         playerHand = capitalize(playerHand);
//         console.log("Player selected: " + playerHand);
//         console.log("Computer selected: " + computerHand);

//         if (playerHand === computerHand) {
//             console.log("It's a draw. Try again!")
//             i--;
//         }
//         else if (!hand.includes(playerHand)) {
//             console.log("Invalid input. Make sure you spell it correctly");
//             i--;
//         }
//         else if ((playerHand === "Rock" && computerHand === "Scissors") ||
//             (playerHand === "Paper" && computerHand === "Rock") ||
//             (playerHand === "Scissors" && computerHand === "Paper")) {
//             playerWins(i);
//         }
//         else {
//             computerWins(i);
//         }
//     }
//     if (playerWinCount > computerWinCount) {
//         console.log("Player wins with " + playerWinCount + " wins against " + computerWinCount);
//     }
//     else {
//         console.log("Computer wins with " + computerWinCount + " wins against " + playerWinCount);
//     }
// }

//Future TODO AI tactical selection?
function randomHand() {
    let randomHand = Math.floor(Math.random() * hand.length);
    return hand[randomHand];
}

function capitalize(word) {
    word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playerWins() {
    playerWinCount++;


    playerScore.textContent = playerWinCount;
    playerHand.setAttribute("style", "background: green")
    aiHand.setAttribute("style", "background: red")
    textResult.textContent = "Player wins the round!"
    if (playerWinCount == 5) {
        endGame("Player");
    }
}

function AIWins() {
    computerWinCount++;


    AIScore.textContent = computerWinCount;
    playerHand.setAttribute("style", "background: red")
    aiHand.setAttribute("style", "background: green")
    textResult.textContent = "AI wins the round!"
    if (computerWinCount == 5) {
        endGame("AI");
    }
}

function resetGame() {
    playerWinCount = 0;
    computerWinCount = 0;

    playerScore.textContent = "0";
    AIScore.textContent = "0";

    aiHand.setAttribute("style", "background: white")
    playerHand.setAttribute("style", "background: white")
    textResult.textContent = "Fight!";
}