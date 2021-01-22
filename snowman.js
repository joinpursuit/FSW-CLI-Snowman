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
    if (gameStats.secretWord.includes(guessedLetter)) {
      gameStats.updateBoard(guessedLetter);
    } else {
      gameStats.guessesRemaining--;
    }
  }

  if (gameStats.didWin()) {
    console.log("Congrats you won!");
    displayBoard(gameStats.board);
  } else {
    console.log("You lost :-( ");
    console.log(`secret word was: ${gameStats.secretWord}`);
  }

  playAgain(startGame);

}


startGame();
