
const readline = require('readline-sync');

 const readlineSync = require('readline-sync');
//
// Wait for user's response.
let userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password).
let favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');

if (readlineSync.keyInYN('Do you want this module?')) {
  // 'Y' key was pressed.
  console.log('Installing now...');
  // Do something...
} else {
  // Another key was pressed.
  console.log('Searching another...');
  // Do something...
}


function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }
  let letter = ""
  while (!letter) {
    let input = readline.question("Please enter your guess: ")
    if (guessIsValid(input)) {
      letter = input
    } else {
      console.log("Please enter a valid letter")
    }
  }
  return letter.toLowerCase()
}

let wordArr = ["able", "about", "account", "acid", "across", "addition", "adjustment",
"advertisement", "after", "again", "against", "agreement", "almost", "among", "amount",
"amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval",
"arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority",
"automatic", "awake"];
//
 // let randomWord = ;
// let lettersInWord = [];
// let numOfDashes = 0;
// let rightGuesses = [];
// let wrongGuesses = [];
// let numOfWins = 0
// let numOfLosses = 0
// let numOfGuesses = 5;
let newWord = []

const beginNow = (arr) => {

  // numOfGuesses = 5;
  let randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
  lettersInWord = randomWord.split("");
  // numOfDashes = lettersInWord.length;
  return lettersInWord
    console.log(lettersInWord);

}

// rightGuesses = [];
  // wrongGuesses = [];

// for (let i = 0; i < .length; i++) {
//   rightGuesses.push("_");
//   }
//
//   console.log(rightGuesses);
//   return numOfGuesses;
//   return rightGuesses.join(" ");
//   return wrongGuesses.join(" ");
//
//
//   console.log(randomWord)

//  const answerWord = () => {
//  let newArr = [];
//  for (let i = 0; i < randomWord.length; i++) {
//  newArr[i] = "_";
//   }
//
//   let lettersLeft = randomWord.length
//   return newArr
//   }
//
//  console.log(answerWord())
// //
// //  // while (lettersLeft > 0)
// //
//  console.log(newArr.join(" "))

// const playContinues = () => {
//     alert(newArr.join(" "));
//   }
//
