const readline = require("readline-sync");

function getValidLetterGuess(gameStats) {
  function guessIsValid(letter) {
    return (
      letter.length === 1 &&
      letter.toUpperCase() !== letter.toLowerCase() &&
      !gameStats.guessedLetters.includes(letter)
    );
  }
  let letter = "";
  while (!letter) {
    let input = readline.question("Please enter your guess: ").trim();
    if (guessIsValid(input)) {
      letter = input;
    } else {
      console.log("Please enter a valid letter");
    }
  }
  return letter.toLowerCase();
}

function chooseRandomWord(words) {
  const randomIdx = Math.floor(Math.random() * words.length);
  return words[randomIdx];
}

function makeBoard(length) {
  return new Array(length).fill("_");
}

function displayBoard(board) {
  console.log(board.join(" "));
}

function displayState(gameStats) {
  console.log(`You have ${gameStats.guessesRemaining} guess(es) remaining`);
  console.log(
    `You've guessed these letters: ${gameStats.guessedLetters.join(", ")}`
  );
  displayBoard(gameStats.board);
}

function isGameOver(gameStats) {
  return gameStats.guessesRemaining <= 0 || !gameStats.board.includes("_");
}


function playAgain(startGame) {
  if (readline.keyInYN("Play Again?")) {
    startGame();
  } else {
    console.log("Goodbye");
    process.exit();
  }
}

module.exports = {
  getValidLetterGuess,
  chooseRandomWord,
  makeBoard,
  displayBoard,
  displayState,
  isGameOver,
  playAgain,
};
