const readline = require("readline-sync");
const dictionary = require("./dictionary");

class Game {
  constructor() {
    this.secretWord = "";
    this.board = [];
    this.guessesRemaining = 10;
    this.guessedLetters = [];
  }

  addGuessedLetter(letter) {
    this.guessedLetters.push(letter);
  }

  reset() {
    this.secretWord = "";
    this.board = [];
    this.guessesRemaining = 10;
    this.guessedLetters = [];
  }

  updateBoard(letter) {
    for (let i = 0; i < this.secretWord.length; i++) {
      const char = this.secretWord[i];
      if (char === letter) {
        this.board[i] = letter;
      }
    }
  }

  didWin() {
    return this.guessesRemaining > 0 && !this.board.includes("_");
  }

  secretWordIncludes(letter) {
    return this.secretWord.includes(letter);
  }

  decrementGuessesRemaining() {
    this.guessesRemaining--;
  }

  guessIsValid(letter) {
    return (
      letter.length === 1 &&
      letter.toUpperCase() !== letter.toLowerCase() &&
      !this.guessedLetters.includes(letter)
    );
  }

  getValidLetterGuess() {
    let letter = "";
    while (!letter) {
      let input = readline.question("Please enter your guess: ").trim();
      if (this.guessIsValid(input)) {
        letter = input;
      } else {
        console.log("Please enter a valid letter");
      }
    }
    return letter.toLowerCase();
  }

  assignRandomSecretWord() {
    const randomIdx = Math.floor(Math.random() * dictionary.length);
    this.secretWord = dictionary[randomIdx];
  }

  makeBoard() {
    this.board = new Array(this.secretWord.length).fill("_");
  }
  displayBoard() {
    console.log(this.board.join(" "));
  }

  displayState() {
    console.log(`You have ${this.guessesRemaining} guess(es) remaining`);
    console.log(
      `You've guessed these letters: ${this.guessedLetters.join(", ")}`
    );
    this.displayBoard();
  }
  isGameOver() {
    return this.guessesRemaining <= 0 || !this.board.includes("_");
  }

  displayWinOrLose() {
    if (this.didWin()) {
      console.log("Congrats you won!");
      this.displayBoard();
    } else {
      console.log("You lost :-( ");
      console.log(`secret word was: ${this.secretWord}`);
    }
  }

  playAgain(startGame) {
    if (readline.keyInYN("Play Again?")) {
      startGame();
    } else {
      console.log("Goodbye");
      process.exit();
    }
  }
}

module.exports = Game;
