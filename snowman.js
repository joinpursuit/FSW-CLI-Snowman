let readline = require("readline-sync");
let dictionary = require("./dictionary.js");
function wordToGuess() {
  dictionary[Math.floor(Math.random() * dictionary.length)];
}

let stats = {
  guess: "",
  dashArr: [],
  guessCount: wordToGuess.length + 5,
  guessedLetters: [],
};
function lettersGuessed() {
  if (stats.guess) {
    stats.guessedLetters.push(stats.guess);
  }
  if (stats.guessedLetters.length > 1) {
    console.log(`Letters Guessed: ${stats.guessedLetters}`);
  } else {
    console.log(`Letter Guessed: ${stats.guessedLetters}`);
  }
}
function guessIsValid(letter) {
  return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase();
}

function getValidLetterGuess() {
  let letter = "";
  while (!letter) {
    let input = readline.question("Please enter your guess: ");
    if (guessIsValid(input)) {
      letter = input;
    } else {
      console.log("Please enter a valid letter");
    }
  }
  stats.guess = letter.toLowerCase();
  return stats.guess;
}

function keepPlaying(guessCount, dashArr) {
  for (let i = 0; i < dashArr.length; i++) {
    if (dashArr[i] === "_" && guessCount > 0) {
      return true;
    }
  }
  return false;
}

function booleanWin(dashArr) {
  for (i = 0; i < dashArr.length; i++) {
    if (dashArr[i] === "_") {
      return false;
    }
  }
  return true;
}

//get random word from array

//dash set up
let dashArr = [];
for (let i = 0; i < wordToGuess.length; i++) {
  dashArr.push("_");
}

let guessCount = wordToGuess.length + 5;

while (keepPlaying(guessCount, dashArr) === true) {
  console.log(dashArr.join(" "));
  console.log("You have " + guessCount + " guesses left");
  stats.guess = getValidLetterGuess();
  guessCount--;
  for (let i = 0; i < wordToGuess.length; i++) {
    if (stats.guess === wordToGuess[i]) {
      dashArr[i] = stats.guess;
    }
  }
  lettersGuessed();
}
let output = booleanWin(dashArr);
if (output === true) {
  console.log("You win! The word is " + wordToGuess);
} else {
  console.log("Sorry, you're out of guesses. The word was " + wordToGuess);
}
