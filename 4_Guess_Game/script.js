'use strict';

/*
DOM - Document Object Model

It is structured representation of HTML documents. Allows Javascript to access HTML elements and styles to manipulate them.

-e can change text, HTML attributes and even CSS styles

DOM is automatically created by the web page as soon as HTML document got load. It is like tree structure 
Reference: https://www.w3schools.com/js/js_htmldom.asp

Document:
Special object that is the entry point to the DOM.
Example: document.querySelector()

NOTE:
DOM Methods and properties for DOM manipulation are not the part of JavaScript.
DOM Methods and properties are part of Web APIs. This Web APIs can interact with JavaScript

// For Html Element: Nothing required
// For class use:  .className
// For Id use: #IdName

// document.querySelector("body")
// document.querySelector(".className")
// document.querySelector("#idName")

// Reading Content
console.log(document.querySelector('.message').textContent);

// Setting Content
document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

// For Input fields we need to use Value property
document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').value);

// For other we need to use text content
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

*/

// Random -> Gives number between 0 and 1. If you want number between 1 to 20, then it should be multiplied with 20.
// Trunc -> To cut off decimal parts
const generateRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

// Secret Number. This needs to declared outside the event
let secretNumber = generateRandomNumber();
let score = 20; // State Variable
let highScore = 0;

// Events
// Class Name: btn check. But using check class as it is unique one
// AddEventListener accepts two parameters (event, eventHandler)
document.querySelector('.check').addEventListener('click', function () {
  checkGuess();
});

document.querySelector('.again').addEventListener('click', function () {
  tryAgain();
});

const checkGuess = () => {
  const guessedNumber = Number(document.querySelector('.guess').value);

  // No Input Supplied
  if (!guessedNumber) {
    setMessage('No Number!');
    // When Player wins
  } else if (guessedNumber === secretNumber) {
    bingo();
    // When Guess is Wrong
  } else if (guessedNumber !== secretNumber) {
    score > 1
      ? wrongGuess(guessedNumber > secretNumber ? 'Too High' : 'Too Low')
      : gameLost();
  }
};

const tryAgain = () => {
  score = 20;
  secretNumber = generateRandomNumber();
  resetHTML();
  resetCSS(false);
};

const resetHTML = () => {
  // Secret Number
  setNumber('?');
  // User Input
  setGuess('');
  // Message
  setMessage('Start guessing...');
  // Score
  setScore(score);
  // High Score
  setHighScore(highScore);
};

const resetCSS = gameWon => {
  if (gameWon) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  }
};

const gameLost = () => {
  setMessage('You lost the game. Try Again');
  setScore(0);
};

const wrongGuess = message => {
  setMessage(message);
  score--;
  setScore(score);
};

const bingo = () => {
  highScore = highScore > score ? highScore : score;
  setNumber(secretNumber);
  setMessage('Correct Number');
  setHighScore(highScore);
  resetCSS(true);
};

const setScore = score => {
  document.querySelector('.score').textContent = score;
};

const setMessage = message => {
  document.querySelector('.message').textContent = message;
};

const setNumber = number => {
  document.querySelector('.number').textContent = number;
};

const setHighScore = highScore => {
  document.querySelector('.highscore').textContent = highScore;
};

const setGuess = guess => {
  document.querySelector('.guess').value = guess;
};
