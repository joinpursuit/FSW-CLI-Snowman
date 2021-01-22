const readline = require("readline-sync");
const dictionary = require("./dictionary");
const GameStats = require("./gameStats");
/// Game Stats
// Builds an object with:
//secretWord = "", board = [], guessesRemaining = 10, guessedLetters = [];
// methods: addGuessedLetter(letter), updateBoard(letter), 
//    secretWordIncludes(letter), didWin, decrementGuessesRemaining
const {
  getValidLetterGuess, // returns validLetterGuess
  chooseRandomWord, // gets random word from array
  makeBoard,       // takes in length and returns [_, _, _]
  displayBoard,     // takes in board and prints it
  displayState,      //takes in gameStats and prints all info
  isGameOver,      // takes in gameStats returns boolean
  playAgain,       // takes in a function to call if they want to play again
  displayWinOrLose,  // takes in gameStats and displays win or lose info
} = require("./helpers");

function startGame() {}

startGame();
