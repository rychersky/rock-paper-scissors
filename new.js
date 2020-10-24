let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = '';

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function buttonClick(choice) {
  function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const index = Math.floor(Math.random() * 3);
    return options[index];
  }
  
  function playerWin() {
    document.querySelector('.round > .player').classList.add('win');
    playerScore++;
  }
  
  function computerWin() {
    document.querySelector('.round > .comp').classList.add('win');
    computerScore++;
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
      if (computerSelection === 'Rock') return;
      else if (computerSelection === 'Paper') computerWin();
      else if (computerSelection === 'Scissors') playerWin();
    } 
    else if (playerSelection === 'Paper') {
      if (computerSelection === 'Rock') playerWin();
      else if (computerSelection === 'Paper') return;
      else if (computerSelection === 'Scissors') computerWin();
    } 
    else if (playerSelection === 'Scissors') {
      if (computerSelection === 'Rock') computerWin();
      else if (computerSelection === 'Paper') playerWin();
      else if (computerSelection === 'Scissors') return;
    }
  }

  document.querySelector('.round > .player').classList.remove('win');
  document.querySelector('.round > .comp').classList.remove('win');
  
  playerSelection = choice;
  computerSelection = computerPlay();

  document.querySelector('#playerPick').textContent = playerSelection;
  document.querySelector('#compPick').textContent = computerSelection;

  playRound(playerSelection, computerSelection);

  document.querySelector('#playerScore').textContent = playerScore.toString();
  document.querySelector('#compScore').textContent = computerScore.toString();

  
}

rock.addEventListener('click', () => buttonClick('Rock'));
paper.addEventListener('click', () => buttonClick('Paper'));
scissors.addEventListener('click', () => buttonClick('Scissors'));