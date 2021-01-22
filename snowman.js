const readline = require("readline-sync");
const dictionary = require("./dictionary");
const GameStats = require("./gameStats");

const {
  getValidLetterGuess,
  chooseRandomWord,
  makeBoard,
  displayBoard,
  displayState,
  isGameOver,
  playAgain,
  displayWinOrLose,
} = require("./helpers");


function startGame() {
  const gameStats = new GameStats()
  gameStats.secretWord = chooseRandomWord(dictionary);
  gameStats.board = makeBoard(gameStats.secretWord.length);

  while (!isGameOver(gameStats)) {
    console.clear();
    displayState(gameStats);
    
    const guessedLetter = getValidLetterGuess(gameStats);
    gameStats.addGuessedLetter(guessedLetter);

    if (gameStats.secretWordIncludes(guessedLetter)) {
      gameStats.updateBoard(guessedLetter);
    } else {
      gameStats.decrementGuessesRemaining();
    }
  }

  displayWinOrLose(gameStats);
  playAgain(startGame);
}


startGame();


