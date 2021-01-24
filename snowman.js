const readline = require("readline-sync");
const dictionary = require("./dictionary.js")

let randomDictionaryWord =
  dictionary[Math.floor(Math.random() * dictionary.length)];
let secretWord = randomDictionaryWord;
console.log(secretWord); // - remove this when done working!!

let gameBoard = makeGameBoard();

let guessCount = 5;
let guessedLetters = [];

// function startGame() {

// }

function makeGameBoard() {
  let blankedOutWord = [];
  for (let i = 0; i < secretWord.length; i++) {
    blankedOutWord.push("_");
  }
  return blankedOutWord;
}

function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase();
  }
  let letter = "";
  while (!letter) {
    console.log(gameBoard.join(" "));
    let input = readline.question(`\nPlease enter your guess: `);
    if (guessIsValid(input)) {
      letter = input;
      updateGameBoard(letter); // -consider placing this somewhere else.
      console.log(displayGuessedLetters(letter));
    } else {
      console.log(`Please enter a valid letter\n`);
    }
  }
  return letter.toLowerCase();
}

function displayGuessCount() {
  while (guessCount >= 0 && !isFullGameBoard()) {
    if (guessCount === 5 || guessCount > 1) {
      console.log(`You have ${guessCount} guesses remaining`);
    } else if (guessCount === 1) {
      console.log(`You have ${guessCount} guess remaining`);
    } else if (guessCount === 0) {
      console.log(`You have no guesses remaining`);
    }
    getValidLetterGuess(); // not sure this goes here
  }
  winAndEndGame();
}

function updateGameBoard(letter) {
  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === letter) {
      gameBoard[i] = letter;
    }
  }
}

function displayGuessedLetters(letter) {
  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === letter) {
      guessedLetters.push(secretWord[i]);
    }
  }
  if (!secretWord.includes(letter)) {
    guessedLetters.push(letter);
    guessCount--;
  } else if (secretWord.includes(letter)) {
  }
  return `Guessed Letters: ${guessedLetters}\n`;
}

function winAndEndGame() {
  if (isFullGameBoard()) {
    console.log(`YOU WON!!!
You took ${guessCount} guesses`); // -- guessCount !== to # of guesses taken
  }
  if (readline.keyInYN(`\nWould you like to play again?`)) {
    getValidLetterGuess(); // -- this should be a gameLoop
  } else {
    process.exit();
  }
}

function isFullGameBoard() {
  return !gameBoard.includes("_");
}

// function loseAndEndGame() {}

// startGame();
displayGuessCount();
