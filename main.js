function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  const index = Math.floor(Math.random() * 3);
  return options[index];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {return 'Tie! Rock is the same as Rock!'}
    else if (computerSelection === 'paper') {return 'You lose! Paper beats Rock!'}
    else if (computerSelection === 'scissors') {return 'You win! Rock beats Scissors!'}
  } 
  else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {return 'You win! Paper beats Rock!'}
    else if (computerSelection === 'paper') {return 'Tie! Paper is the same as Paper!'}
    else if (computerSelection === 'scissors') {return 'You lose! Scissors beat Paper!'}
  } 
  else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {return 'You lose! Rock beats Scissors!'}
    else if (computerSelection === 'paper') {return 'You win! Scissors beat Paper!'}
    else if (computerSelection === 'scissors') {return 'Tie! Scissors is the same as Scissors!'}
  }
}

function game() {
  console.log('Beginning new game, best of 5.');
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;
  while (playerScore < 3 && round < 5) {
    const player = prompt('Rock, Paper, or Scissors?').toLowerCase();
    if (['rock', 'paper', 'scissors'].indexOf(player) === -1) {continue};
    const computer = computerPlay();
    const result = playRound(player, computer);
    console.log(result);
    if (result.includes('win')) {playerScore++;}
    else if (result.includes('lose')) {computerScore++;}
    round++;
  }
  console.log('Game over. Results:');
  console.log(`Your score: ${playerScore}`);
  console.log(`Computer's score: ${computerScore}`);
  console.log();
}