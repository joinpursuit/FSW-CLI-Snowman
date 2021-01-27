const readline = require("readline-sync");
const dictionary = require("./dictionary.js");

let gameData = {
  secretWord: dictionary[Math.floor(Math.random() * dictionary.length)],
  correctGuessesMade: 0,
  numOfGuessesRemaining: 5, 
  guessedLetters: [],
};

let gameBoard = makeGameBoard();

function makeGameBoard() {
  let blankedOutWord = [];
  for (let i = 0; i < gameData.secretWord.length; i++) {
    blankedOutWord.push("_");
  }
  return blankedOutWord;
}

function getValidLetterGuess() {
  function guessIsValid(letter) {
    return (
      letter.length === 1 &&
      letter.toUpperCase() != letter.toLowerCase() &&
      !gameData.guessedLetters.includes(letter.toLowerCase())
    );
  }
  let letter = "";
  while (!letter) {
    console.log(gameBoard.join(" "));
    let input = readline.question(`\nPlease enter your guess: `);
    if (guessIsValid(input)) {
      letter = input;
      displayGuessedLetters(letter);
    } else {
      console.log(`Please enter a valid letter\n`);
    }
  }
  return letter.toLowerCase();
}

function displayNumOfGuessesRemaining() {
  while (gameData.numOfGuessesRemaining >= 0 && !isFullGameBoard()) {
    if (gameData.numOfGuessesRemaining > 1) {
      console.log(`You have ${gameData.numOfGuessesRemaining} guesses remaining`);
    } else if (gameData.numOfGuessesRemaining === 1) {
      console.log(`You have ${gameData.numOfGuessesRemaining} guess remaining`);
    } else if (gameData.numOfGuessesRemaining === 0) {
      console.log(`You have no guesses remaining`);
      break;
    }
    getValidLetterGuess();
  }
  isEndGame();
}

function updateGameBoard(letter) {
  for (let i = 0; i < gameData.secretWord.length; i++) {
    if (gameData.secretWord[i] === letter.toLowerCase()) {
      gameBoard[i] = letter.toLowerCase();
    }
  }
}

function displayGuessedLetters(letter) {
  gameData.guessedLetters.push(letter.toLowerCase());
  if (!gameData.secretWord.includes(letter.toLowerCase())) {
    gameData.numOfGuessesRemaining--;
    gameData.correctGuessesMade++;
  } else {
    gameData.correctGuessesMade++;
    updateGameBoard(letter.toLowerCase());
  }
  console.log(`Guessed Letters: ${gameData.guessedLetters}\n`);
}

function isEndGame() {
  if (isFullGameBoard()) {
    console.log(`YOU WON!!!
You made ${gameData.correctGuessesMade} guesses!
The word was ${gameData.secretWord}!`);
  }
  if (gameData.numOfGuessesRemaining === 0) {
    console.log(`You lost :(
The word was ${gameData.secretWord}!`);
  } else {
    process.exit();
  }
}

function isFullGameBoard() {
  return !gameBoard.includes("_");
}

displayNumOfGuessesRemaining();
