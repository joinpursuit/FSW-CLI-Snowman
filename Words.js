// Game start
const readline1 = require('readline-sync')

let nameInput = readline1.question(`Hello,\nWelcome to Hangman !\n\nPlease type in your name: `)

console.log(`Hello. ${nameInput}!`);

// function getValidLetterGuess() {
//   function guessIsValid(letter) {
//     return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
//   }
//   let letter = "";
//   while (!letter) {
//     let input = readline.question("Please enter your guess: ")
//     if (guessIsValid(input)) {
//       letter = input
//     } else {
//       console.log("Please enter a valid letter")
//     }
//   }
//   return letter.toLowerCase()
// }

// getValidLetterGuess()