'use strict';
/*const a = document.querySelector('.message').textContent;
document.querySelector('.message').textContent = 'Congrats';
console.log((document.querySelector('.message').textContent = 'Congrats'));
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value); */
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  //document.querySelector('.message').textContent = 'Please enter any Num';
  displayMsg('Please enter any Num');
  document.querySelector('.guess').value = ' ';
});

document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);
  // when there is no number
  if (!guessNum) {
    console.log(`${guessNum} is NULL`);
    // document.querySelector('.message').textContent = 'Please enter any Num';
    displayMsg('Please enter any Num');
  } // when you rntrt correct number
  else if (guessNum === secretNumber) {
    console.log((document.querySelector('.message').textContent = 'Congrats'));
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNum !== secretNumber) {
    if (score > 0) {
      // document.querySelector('.message').textContent =
      //   guessNum < secretNumber ? 'Too Low' : 'Too High';
      displayMsg(guessNum < secretNumber ? 'Too Low' : 'Too High');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game';
      displayMsg('You lost the game');
    }
  } //when number is less
  /*  else if (guessNum < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } //when number is greater
  else if (guessNum > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
  */
});
