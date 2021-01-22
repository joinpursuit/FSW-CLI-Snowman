class GameStats {
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
}

module.exports = GameStats;
