const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const computerChoice = choice[Math.floor(Math.random() * choice.length)];

  return computerChoice;
}

function checkwiner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const winer = checkwiner(playerSelection, computerSelection);
  if (winer === "tie") {
    return "it's a tie!";
  } else if (winer === "player") {
    return `Player Won ${playerSelection} beats ${computerSelection}`;
  } else {
    return `computer Won ${computerSelection} beats ${playerSelection}`;
  }
}

function getplayerChoice() {
  let validateInput = false;
  while (validateInput === false) {
    const select = prompt(choice);
    if (select === null) {
      continue;
    }
    const selectInlower = select.toLowerCase();

    if (choice.includes(selectInlower)) {
      validateInput = true;
      return selectInlower;
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getplayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    if (checkwiner(playerSelection, computerSelection) === "player") {
      playerScore++;
    } else if (checkwiner(playerSelection, computerSelection) === "computer") {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log("Player Win");
  } else if (playerScore < computerScore) {
    console.log("Computer Win");
  } else {
    console.log("its a tie");
  }
}
game();

document.querySelector("body").style.backgroundColor = "black";
