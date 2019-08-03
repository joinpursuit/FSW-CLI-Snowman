//Grab function from letter.js
let Letter = require('./Letter.js');

let Word = function (word) {

        this.lettersArr = [];

        for (let i = 0; i < word.length; i++) {
          if (word.charAt(i) === ' ') {
            this.lettersArr.push(' ');
          } else {
            this.lettersArr.push(new Letter(word.charAt(i)));
          };
        };

        this.newString = function () {
          let wordString = '';

          this.lettersArr.forEach(function (element) {
            if (element === ' ') {
              wordString += '  ';
            } else {
              wordString += element.populateLetter();
            }
          });

          return wordString;
        };

        this.checkGuessWord = function (guessedLetter) {
          this.lettersArr.forEach(function (element) {

            if (element.letter !== undefined) {
              element.isGuess(guessedLetter);
            }
          });
        };
      };

// class Word {
//   constructor (word) {
//     this.word = word;
//     this.letterArr = [];
//   }
//
//   populateArray() {
//     for (let i = 0; i < word.length; i++) {
//       if (word.charAt(i) === ' ') {
//         this.letterArr.push(' ');
//       } else {
//         this.letterArr.push(new Letter(word.charAt(i)));
//       };
//     };
//   };
//
//   newString() {
//     let wordString = '';
//
//     this.letterArr.forEach(el => {
//       if (element === ' ') {
//         wordString = ' ';
//       } else {
//         wordString += element.populateLetter();
//       }
//     });
//
//     return wordString;
//   };
//
//   checkGuessWord(guessedLetter) {
//     this.letterArr.forEach(el => {
//       if (el.letter !== undefined) {
//         el.isGuess(guessedLetter);
//       }
//     });
//   }
// };

module.exports = Word;
