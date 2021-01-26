const readline = require("readline-sync");
const dictionary = require("./dictionary.js");

let randomDictionaryWord =
  dictionary[Math.floor(Math.random() * dictionary.length)];
let secretWord = randomDictionaryWord;
console.log(secretWord); // - remove this when done working!!

let gameBoard = makeGameBoard();

let gameData = {
  correctGuessesMade: 0,
  numOfGuessesRemaining: 5,
};

let guessedLetters = [];

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
  while (gameData.numOfGuessesRemaining >= 0 && !isFullGameBoard()) {
    if (
      gameData.numOfGuessesRemaining === 5 ||
      gameData.numOfGuessesRemaining > 1
    ) {
      console.log(
        `You have ${gameData.numOfGuessesRemaining} guesses remaining`
      );
    } else if (gameData.numOfGuessesRemaining === 1) {
      console.log(`You have ${gameData.numOfGuessesRemaining} guess remaining`);
    } else if (gameData.numOfGuessesRemaining === 0) {
      console.log(`You have no guesses remaining`);
      break;
    }
    getValidLetterGuess(); // not sure this goes here
  }
  isEndGame();
}

function updateGameBoard(letter) {
  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === letter.toLowerCase()) {
      gameBoard[i] = letter.toLowerCase();
    }
  }
}

function displayGuessedLetters(letter) {
  guessedLetters.push(letter.toLowerCase());
  if (!secretWord.includes(letter.toLowerCase())) {
    gameData.numOfGuessesRemaining--;
  } else {
    gameData.correctGuessesMade++; // -- should not count duplicate letters
    updateGameBoard(letter.toLowerCase());
  }
  console.log(`Guessed Letters: ${guessedLetters}\n`);
}

function isEndGame() {
  if (isFullGameBoard()) {
    console.log(`YOU WON!!!
You made ${gameData.correctGuessesMade} correct guesses!`); // -- gameData.numOfGuessesRemaining !== to # of guesses taken
  }
  if (gameData.numOfGuessesRemaining === 0) {
    console.log(`You lost :(
The word was ${secretWord}!`);
    // getValidLetterGuess(); // -- this should be a gameLoop
  } else {
    process.exit();
  }
}

function isFullGameBoard() {
  return !gameBoard.includes("_");
}

displayNumOfGuessesRemaining();
