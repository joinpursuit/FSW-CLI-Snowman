//This file will store information on whether our letters were guessed correctly or not
let Letter = function (letter) {
    this.letter = letter;
    this.guessed = false;

    this.populateLetter = function () {
        if (this.guessed) {
          return this.letter + ' ';
        } else {
          return '_ ';
        };
      };

    this.isGuess = function (guess) {
        if (guess === this.letter) {
          this.guessed = true;
        }
      };
  };

// class Letter {
//   constructor(letter, guessed = false) {
//     this.letter = letter;
//     this.guessed = guessed;
//   }
//
//   populateLetter() {
//     if (this.guessed) {
//       return this.letter + ' ';
//     } else {
//       return '_ ';
//     }
//   }
//
//   isGuess(guess) {
//     if (guess === this.letter) {
//       this.guessed = true;
//     }
//   }
//
// };

module.exports = Letter;
