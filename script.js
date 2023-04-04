'use strict';
// console.log(document.querySelector('.message'));

// document.querySelector('.message').textContent = 'correct Number';
// document.querySelector('.number').textContent = 77;
// document.querySelector('.score').textContent = 13;

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess)
    // document.querySelector('.message').textContent = '⛔️ No Number !';
    displayMessage('⛔️ No Number !');
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🤩 Correct Number !';
    displayMessage('🤩 Correct Number !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!!' : 'Too Low!!';
      displayMessage(guess > secretNumber ? 'Too high!!' : 'Too Low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   'You Lost the game dumbass!!';
      displayMessage('You Lost the game dumbass!!');
      document.querySelector('.score').textContent = '0';
    }
  }
});
// } else if (guess < secretNumber) {
//   document.querySelector('.message').textContent = ' Too Low';
//   score--;
//   document.querySelector('.score').textContent = score;
// } else if (guess > secretNumber) {
//   document.querySelector('.message').textContent = ' Too High';
//   score--;
//   document.querySelector('.score').textContent = score;
// }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Guess The number!';
  displayMessage('Guess The number!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
