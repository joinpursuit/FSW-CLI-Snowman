const readline = require("readline-sync");
const dictionary = require("./dictionary.js");

let randomDictionaryWord =
  dictionary[Math.floor(Math.random() * dictionary.length)];
let secretWord = randomDictionaryWord;
console.log(secretWord); // - remove this when done working!!

let gameBoard = makeGameBoard();

let correctGuessesMade = 0;
let numOfGuessesRemaining = 5;
let guessedLetters = [];
let dups = [];

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
    return (
      letter.length === 1 &&
      letter.toUpperCase() != letter.toLowerCase() &&
      !guessedLetters.includes(letter)
    );
  }
  let letter = "";
  while (!letter) {
    console.log(gameBoard.join(" "));
    let input = readline.question(`\nPlease enter your guess: `);
    if (guessIsValid(input)) {
      letter = input;
      // updateGameBoard(letter); // -consider placing this somewhere else. // moved to displayGuessedLetters()
      displayGuessedLetters(letter);
    } else {
      console.log(`Please enter a valid letter\n`);
    }
  }
  return letter.toLowerCase();
}

function displayNumOfGuessesRemaining() {
  while (numOfGuessesRemaining >= 0 && !isFullGameBoard()) {
    if (numOfGuessesRemaining === 5 || numOfGuessesRemaining > 1) {
      console.log(`You have ${numOfGuessesRemaining} guesses remaining`);
    } else if (numOfGuessesRemaining === 1) {
      console.log(`You have ${numOfGuessesRemaining} guess remaining`);
    } else if (numOfGuessesRemaining === 0) {
      console.log(`You have no guesses remaining`);
      break;
    }
    getValidLetterGuess(); // not sure this goes here
  }
  isEndGame();
}

function updateGameBoard(letter) {
  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === letter) {
      gameBoard[i] = letter;
    }
  }
}

function displayGuessedLetters(letter) {
  guessedLetters.push(letter);
  if (!secretWord.includes(letter)) {
    numOfGuessesRemaining--;
  } else {
    correctGuessesMade++; // -- should not count duplicate letters
    updateGameBoard(letter);
  }
  console.log(`Guessed Letters: ${guessedLetters}\n`);
}

// function removeDuplicateLetters(guessedLetters) {
//   guessedLetters.forEach((letter) => {
//     if (!dups.includes(letter)) {
//       dups.push(letter);
//     }
//   });
//   // return dups;
// }

function isEndGame() {
  if (isFullGameBoard()) {
    console.log(`YOU WON!!!
You made ${correctGuessesMade} correct guesses!`); // -- numOfGuessesRemaining !== to # of guesses taken
  }
  if (numOfGuessesRemaining === 0) {
    console.log(`You lost :(
The word was ${secretWord}!`)
    // getValidLetterGuess(); // -- this should be a gameLoop
  } else {
    process.exit();
  }
}

function isFullGameBoard() {
  return !gameBoard.includes("_");
}

// function loseAndEndGame() {}

// startGame();
displayNumOfGuessesRemaining();
