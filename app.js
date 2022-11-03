let playerScore = 0;
let computerScore = 0;
const start = document.querySelector(".start");
const playerScoreBoard = document.querySelector("#playerScore");
const computerScoreBoard = document.querySelector("#ComputerScore");
const playerOption = [...document.querySelectorAll(".player-button")];
const computerOption = document.querySelectorAll(".computer-button");
const cRockBtn = document.querySelector("#c-rock");
const cPaperBtn = document.querySelector("#c-paper");
const cScissorsBtn = document.querySelector("#c-scissors");
const sayHand = document.querySelector("#sayHand");
const choices = ["rock", "paper", "scissors"];
const para = document.querySelector("#para");
// On click start game

start.addEventListener("click", (e) => {
  e.stopPropagation();

  start.classList.add("fadeout");
});

playerOption.forEach((option) => option.addEventListener("click", playRound));

function playRound(e) {
  const playerChoice = e.target.closest(".player-button");

  playerChoice.classList.add("active");

  const playerSelection = playerChoice.id;
  const computerSelection = getComputerChoice();
  compareHands(playerSelection, computerSelection);
  checkWinner(playerSelection, computerSelection);
  console.log(playerSelection);
  console.log(computerSelection);
}

function getPlayerChoice() {}

function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (computerChoice === "rock") {
    cRockBtn.classList.add("active");
    cPaperBtn.classList.remove("active");
    cScissorsBtn.classList.remove("active");
  } else if (computerChoice === "paper") {
    cRockBtn.classList.remove("active");
    cScissorsBtn.classList.remove("active");
    cPaperBtn.classList.add("active");
  } else {
    cRockBtn.classList.remove("active");
    cScissorsBtn.classList.add("active");
    cPaperBtn.classList.remove("active");
  }
  return computerChoice;
}

function compareHands(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    ((playerSelection === "scissors") === computerSelection) === "paper"
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function checkWinner(playerSelection, computerSelection) {
  let winner = compareHands(playerSelection, computerSelection);
  if (winner === "tie") {
    sayHand.textContent = "Its a tie!";
  } else if (winner === "player") {
    playerScore++;
    playerScoreBoard.textContent = playerScore;
    sayHand.textContent = `Player Won ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    computerScoreBoard.textContent = computerScore;
    sayHand.textContent = `Computer Won ${computerSelection} beats ${playerSelection}`;
  }
}
