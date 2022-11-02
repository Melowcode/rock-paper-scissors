let playerScore = 0;
let computerScore = 0;
const start = document.querySelector(".start");
const playerScoreBoard = document.querySelector("#playerScore");
const computerScoreBoard = document.querySelector("#ComputerScore");
const playerOption = [...document.querySelectorAll(".player-button")];
const sayHand = document.querySelector("#sayHand");
const choices = ["rock", "paper", "scissors"];
const para = document.querySelector("#para");
// On click start game

start.addEventListener("click", (e) => {
  e.stopPropagation();

  start.classList.add("fadeout");
});

function game() {
  // get player choice on click
  playerOption.forEach((option) => {
    option.addEventListener("click", (e) => {
      e.stopPropagation();
      const playerOption = e.target.closest(".player-button");
      const playerChoice = playerOption.id;
      // get computer choice
      const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];
      console.log(playerChoice);
      console.log(computerChoice);
      // compare player choice and computer choice

      if (playerChoice === computerChoice) {
        sayHand.innerText = "its a tie";
      } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        sayHand.innerText = `Player Won ${playerChoice} beats ${computerChoice}`;
        playerScore += 1;
        playerScoreBoard.textContent = playerScore;
      } else {
        sayHand.innerText = `Computer Won ${computerChoice} beats ${playerChoice}`;
        computerScore += 1;
        computerScoreBoard.textContent = computerScore;
      }

      if (playerScore === 5) {
        para.textContent = "Player Win";

        start.classList.remove("fadeout");
      } else if (computerScore === 5) {
        start.classList.remove("fadeout");
        para.textContent = "Computer Win";
      }
    });
  });
}
game();
