let playerWins = 0;
let computerWins = 0;
let roundCounter = 0;

function computerPlay() {
  let randomNum = Math.floor(Math.random()*3);
  const choices = ['rock', 'paper', 'scissors'];
  return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
    roundCounter++;
    console.log('The computer chose rock. The round is a tie!');
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
      roundCounter++;
      computerWins++;
      console.log('The computer chose paper. You lose the round!');
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors' ) {
      roundCounter++;
      playerWins++;
     console.log('The computer chose scissors. You win the round!');
  }

if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
  roundCounter++;
  playerWins++;
  console.log('The computer chose rock. You win the round!');
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
      roundCounter++;
      console.log('The computer chose paper. The round is a tie!');
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors' ) {
      roundCounter++;  
      computerWins++;
      console.log('The computer chose scissors. You lose the round!');
  }

  if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
    roundCounter++;
    computerWins++;
    console.log('The computer chose rock. You lose the round!');
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
      roundCounter++;  
      playerWins++;
      console.log('The computer chose paper. You win the round!');
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors' ) {
      roundCounter++;  
      console.log('The computer chose scissors. The round is a tie!');
  }
}

function game() {
  while (roundCounter < 5) {
    playRound(getPlayerChoice(), computerPlay());
  }
  if (roundCounter === 5 && playerWins > computerWins) {
    alert('You win the game!');
  } else if (roundCounter === 5 && computerWins > playerWins) {
    alert('The computer won the game!');
  }
    else if (roundCounter === 5 && playerWins === computerWins) {
      alert('The game is a tie!')
    }
}

function getPlayerChoice() {
  return prompt('Rock, Paper or Scissors?');
}

game();
