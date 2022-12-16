const options = ["rock", "paper", "scissors"];
const computerText = document.querySelector(".computer");
const playerText = document.querySelector(".player");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resultText = document.querySelector(".result");

let playerSelection;
let computerSelection; options[Math.floor(Math.random() * 3)];

rockButton.addEventListener("click", () => {
    playerSelection = "rock";
    playerText.textContent = `Player: ${playerSelection}`;
    computerSelection = options[Math.floor(Math.random() * 3)];
    computerText.textContent = `Computer: ${computerSelection}`;
    playRound(playerSelection, computerSelection);
});
paperButton.addEventListener("click", () => {
    playerSelection = "paper";
    playerText.textContent = `Player: ${playerSelection}`;
    computerSelection = options[Math.floor(Math.random() * 3)];
    computerText.textContent = `Computer: ${computerSelection}`;
    playRound(playerSelection, computerSelection);
});
scissorsButton.addEventListener("click", () => {
    playerSelection = "scissors";
    playerText.textContent = `Player: ${playerSelection}`;
    computerSelection = options[Math.floor(Math.random() * 3)];
    computerText.textContent = `Computer: ${computerSelection}`;
    playRound(playerSelection, computerSelection);
});


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            resultText.textContent = "It's a tie.";
        }
        else if (computerSelection == "paper") {
            resultText.textContent = "You lose! Paper beats rock.";
        }
        else {
            resultText.textContent = "You win! Rock beats scissors.";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            resultText.textContent = "You win! Papers beats rock.";
        }
        else if (computerSelection == "paper") {
            resultText.textContent = "It's a tie.";
        }
        else {
            resultText.textContent = "You lose! Scissors beats paper.";
        }
    }
    else {
        if (computerSelection == "rock") {
            resultText.textContent ="You lose! Rock beats scissors.";
        }
        else if (computerSelection == "paper") {
            resultText.textContent = "You win! Scissors beats paper.";
        }
        else {
            resultText.textContent = "It's a tie.";
        }
    }
}









