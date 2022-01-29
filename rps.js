const hand = ["Rock", "Paper", "Scissors"];
let playerWinCount = 0;
let computerWinCount = 0;
const divStartGame = document.querySelector(".start-game");
const divPlayerOptions = document.querySelector(".player-options");
const startButton = document.querySelector(".start-game");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

//Event Listeners
startButton.addEventListener("click", () => { startGame() });
rockButton.addEventListener("click", () => { playRound("Rock") })
paperButton.addEventListener("click", () => { playRound("Paper") })
scissorsButton.addEventListener("click", () => { playRound("Scissors") })

//Enables hand buttons, disables start game
function startGame() {
    divStartGame.setAttribute("style", "visibility: hidden;");
    divPlayerOptions.classList.add("game-running");
    divPlayerOptions.classList.remove("wait-for-start");
}
//Disables hand buttons, enabled start game
//TODO Print final score and declare winner
function endGame() {
    divStartGame.setAttribute("style", "visibility: visible;")
    divPlayerOptions.classList.remove("game-running");
    divPlayerOptions.classList.add("wait-for-start");
}

//Receives input from the selected button, selects random hand for AI and decides who wins.
function playRound(playerSelection) {
    let AISelection = randomHand();
    
    if (playerSelection === AISelection) {
        console.log("It's a draw. Try again!")
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

function playRound2() {
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
    // console.log("Player wins round " + (i + 1));

    let playerScore = document.querySelector(".player-score");
    playerScore.textContent = playerWinCount;

}

function AIWins() {
    computerWinCount++;
    // console.log("Computer wins round " + (i + 1));

    let AIScore = document.querySelector(".AI-score");
    AIScore.textContent = computerWinCount;
}