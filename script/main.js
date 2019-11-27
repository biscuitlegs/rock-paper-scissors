function computerPlay() {
  let randomNum = Math.floor(Math.random()*3);
  const choices = ['rock', 'paper', 'scissors'];
  return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
    roundCounter++;
    results.textContent = 'The computer chose rock. The round is a tie!';
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
      roundCounter++;
      computerWins++;
      computerWinDisplay.textContent = computerWins;
      results.textContent = 'The computer chose paper. You lose the round!';
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors' ) {
      roundCounter++;
      playerWins++;
      playerWinDisplay.textContent = playerWins;
      results.textContent = 'The computer chose scissors. You win the round!';
  }

if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
  roundCounter++;
  playerWins++;
  playerWinDisplay.textContent = playerWins;
  results.textContent = 'The computer chose rock. You win the round!';
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
      roundCounter++;
      results.textContent = 'The computer chose paper. The round is a tie!';
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors' ) {
      roundCounter++;  
      computerWins++;
      computerWinDisplay.textContent = computerWins;
      results.textContent = 'The computer chose scissors. You lose the round!';
  }

  if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
    roundCounter++;
    computerWins++;
    computerWinDisplay.textContent = computerWins;
    results.textContent = 'The computer chose rock. You lose the round!';
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
      roundCounter++;  
      playerWins++;
      playerWinDisplay.textContent = playerWins;
      results.textContent = 'The computer chose paper. You win the round!';
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors' ) {
      roundCounter++;  
      results.textContent = 'The computer chose scissors. The round is a tie!';
  }
  checkWinner();
}

function checkWinner() {
  if (roundCounter === 5 && playerWins > computerWins) {
    alert('You won the game!');
    resetGame();
  } else if (roundCounter === 5 && computerWins > playerWins) {
    alert('The computer won the game!');
    resetGame();
  }
    else if (roundCounter === 5 && playerWins === computerWins) {
      alert('The game is a tie!')
      resetGame();
    }
}

function resetGame() {
    playerWins = 0;
    playerWinDisplay.textContent = playerWins;
    computerWins = 0;
    computerWinDisplay.textContent = computerWins;
    roundCounter = 0;
    results.textContent = 'The results of a round will be shown here.'
}

function getPlayerChoice() {
  return prompt('Rock, Paper or Scissors?');
}

let playerWins = 0;
let computerWins = 0;
let roundCounter = 0;

 const rockButton = document.querySelector('#rockButton');
 const paperButton = document.querySelector('#paperButton');
 const scissorsButton = document.querySelector('#scissorsButton');

 rockButton.addEventListener('click', () => {
   playRound('rock', computerPlay());
 });

 paperButton.addEventListener('click', () => {
  playRound('paper', computerPlay());
});

scissorsButton.addEventListener('click', () => {
  playRound('scissors', computerPlay());
});

const results = document.querySelector('#results');

const playerWinDisplay = document.querySelector('#playerWins p');
playerWinDisplay.textContent = playerWins;

const computerWinDisplay = document.querySelector('#computerWins p');
computerWinDisplay.textContent = computerWins;