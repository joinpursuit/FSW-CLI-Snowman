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

function startGame() {
  while (!isEndOfGame()) {
    console.clear();

    
    const guessedLetter = getValidLetterGuess();
    displayGuessedLetters(guessedLetter);

    if (secretWord.includes(guessedLetter)) {
      updateGameBoard(guessedLetter); //if the guess letter is included in the random word then update game board
    } else {
      decrementNumOfGuessesRemaining();
    }
  }
  winOrLoseDisplay();
}

function makeGameBoard() {
  // do I want to return or console.log with this function?
  let blankedOutWord = [];
  for (let i = 0; i < secretWord.length; i++) {
    blankedOutWord.push("_");
  }
  return blankedOutWord.join(" ");
}

// -- this function is the guessedLetter!!!
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
    let input = readline.question(`\nPlease enter your guess: `);
    if (guessIsValid(input)) {
      letter = input;
      // updateGameBoard(letter); // -consider placing this somewhere else. // moved to displayGuessedLetters()
      // displayGuessedLetters(letter);
    } else {
      console.log(`Please enter a valid letter\n`);
    }
  }
  return letter.toLowerCase();
}


function updateGameBoard(letter) {
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letter) {
            gameBoard[i] = letter;
        }
    }
    console.log(gameBoard); // moved here from getValidLetterGuess
}

//consider breaking down this function for readability in ^^^ game flow. it is doing more than one thing
function displayGuessedLetters(letter) {
  guessedLetters.push(letter);
  console.log(`Guessed Letters: ${guessedLetters}\n`);
}

// this function only displays number of guesses user has left. it does not decrement guesses. consider putting this in decrement function
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
  }
}

function decrementNumOfGuessesRemaining() {
  if (!secretWord.includes(letter)) {
    numOfGuessesRemaining--;
    displayNumOfGuessesRemaining();
  } else {
    correctGuessesMade++;
    //   updateGameBoard(guessedLetter);
  }
}


function isFullGameBoard() {
  return !gameBoard.includes("_");
}

// this function tells me if the game is over. the game is over if the gameboard is full or if numOfGuessesRemaining = 0
function isEndOfGame() {
  return isFullGameBoard() || numOfGuessesRemaining === 0;
}

function winOrLoseDisplay() {
  if (isFullGameBoard) {
    console.log(`YOU WON!!!
You made ${correctGuessesMade} correct guesses!`); // -- numOfGuessesRemaining !== to # of guesses taken
  } else {
    console.log(`You lost :(
The word was ${secretWord}!`);
  }
}

// readline.keyInYN(`\nWould you like to play again?`);
// restart(); // -- this should be a gameLoop/ restart function that calls startGame

startGame();
