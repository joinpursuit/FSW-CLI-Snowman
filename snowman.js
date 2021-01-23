const Game = require("./game");

function startGame() {
  const game = new Game()
  game.assignRandomSecretWord();
  game.makeBoard();

  while (!game.isGameOver()) {
    console.clear();
    game.displayState();
    
    const guessedLetter = game.getValidLetterGuess();
    game.addGuessedLetter(guessedLetter);

    if (game.secretWordIncludes(guessedLetter)) {
      game.updateBoard(guessedLetter);
    } else {
      game.decrementGuessesRemaining();
    }
  }

  game.displayWinOrLose();
  game.playAgain(startGame);
}


startGame();


