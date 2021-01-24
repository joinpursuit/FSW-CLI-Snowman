"use strict"
const rls = require('readline-sync');
const dictionary = require('./dictionary')

let randomWord = dictionary[Math.floor(Math.random() * dictionary.length)]
console.log(randomWord) //DNFTR...for debugging
let randomWordSplit = randomWord.split("")

/**
 * GAME OBJECT: Used to key into the key/value pairs (BOARD, GUESSES, & GUESSES ARRAY) denoted.
 */
let gameObj = {
  board: addBlanks(),
  guesses: 7,
  guessesArray: []
};


// /**
//  * WELCOME/START/QUIT
//  * Welcomes the user.
//  * Starts the game by prompting the user to play.
//  * Calls either startGame() or quitGame().
//  */
const startGame = () => {
const name = rls.question("Welcome to AnJu's Snowman Game! What's your name?"); {
  console.log("What's up, " + name + "?")
  console.log("")
  if(rls.keyInYNStrict("Do you want to play?")) {
        countGuesses()
      } else {
          quitGame()
      }
  }
}

/** 
 * BLANKS
 * Creates the blank spaces for the board.
*/
function addBlanks() {
  let wordArray = [];
  for (let i = 0; i < randomWord.length; i++) {
    wordArray[i] = "_";
  }
  return wordArray
}

/** 
 * FILL BLANKS
 * Denotes the board is full.
*/
const fillBlanks = () => {
  return gameObj["board"].every((el) => {
    return el !== "_"
  })
}
// console.log(fillBlanks())

// let goToGuessCount = enterGuessCount()

/** 
 * COUNT GUESSES
 * Indicates the number of guesses the user has left.
*/
const countGuesses = () => {
  while(gameObj.guesses >= 0 && !fillBlanks()) {
    if(gameObj.guesses === 7) {
      console.log(`You have ${gameObj.guesses} guesses.`)
    } else if(gameObj.guesses >= 2) {
      console.log(`You have ${gameObj.guesses} guesses remaining.`)
    } else if(gameObj.guesses === 1) {
        console.log(`You have ${gameObj.guesses} guess remaining.`)
    } else if (gameObj.guesses === 0) {
      console.log("")
      console.log(`Sorry! You did not guess correctly! The word was ${randomWord}.`)
      gameOver();
    }
    getValidLetterGuess()
  }
  return console.log(`You won in ${guessesTaken(gameObj.guesses)} guesses!!! Nice job guessing the word: ${gameObj.board.join("")}`)
}

/** 
 * GUESSES TAKEN
 * Calculates the number of guesses the user makes.
*/
const guessesTaken = (guesses) => {
  if(gameObj.guesses === 7) {
    return randomWord.length
  } else {
    return (7-guesses) + randomWord.length
  }
}

/** 
 * DEFAULT CODE: VALID LETTER GUESS
 * Ask the user to input a guess and assesses validity of the input.
*/
function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase() && !gameObj["guessesArray"].includes(letter)
  }
  let letter = ""
  while (!letter) {
    console.log(gameObj.board.join(" "))
    let input = rls.question("Please enter your guess: ")
    if (guessIsValid(input)) {
      letter = input
      rightGuesses(letter.toLowerCase())
      guessesMade(letter.toLowerCase())
    } else {
      console.log("Please enter a valid letter")
    }
  }
  return letter.toLowerCase()
}

/** 
 * RIGHT GUESSES
 * Updates the board with the correct input.
*/
const rightGuesses = (rightInput) => {
  for (let i = 0; i < randomWordSplit.length; i++) {
    if(rightInput === randomWordSplit[i]) {
        gameObj.board[i] = randomWordSplit[i]
    }
  } 
}

/** 
 * GUESSES MADE
 * Assesses the user's inputs and keeps a tab on the letters the user chooses.
*/
const guessesMade = (userInput) => {
    for (let i = 0; i < randomWordSplit.length; i++) {
      if(userInput === randomWordSplit[i] && !gameObj["guessesArray"].includes(randomWordSplit[i])) {
        gameObj["guessesArray"].push(randomWordSplit[i])
      } 
    }       
      if(!randomWordSplit.includes(userInput) && !gameObj["guessesArray"].includes(userInput)) {
        gameObj["guessesArray"].push(userInput)
        gameObj.guesses--
    }
    return console.log(`Guessed letters: ${gameObj["guessesArray"]}`) 
}

/** 
 * GAME OVER
 * Calls game over when the user loses.
*/
const gameOver = () => {
    console.log("GAME OVER! Better luck next time!")
    process.exit()
  }

  /** 
 * QUIT NAME
 * Quits the game if the user doesn't want to play.
*/
const quitGame = () => {
  console.log("Peace out then!")
    process.exit()
}

/** 
 * START GAME CALL
 * Calls the game to start.
*/
startGame()



// const userInput = () => {
//   while(true) {
//     let someVariable = guessRandomletter
//     console.log(someVariable)
//   }
// }

// const enterGuessCount = () => {
//   if (guesses >= 0 && !rightGuesses() && !fillBlanks()) {
//     countGuesses()
//   }
// }

//TO LOG WRONG GUESSES, DOESN'T WORK
// const wrongGuesses = (wrongInput) => {
//   let wrongGuessArray = []
//   for (let i = 0; i < randomWordSplit.length; i++) {
//     if(wrongInput !== randomWordSplit[i]) {
//       wrongGuessArray.push(wrongInput)
//       console.log(`Guessed letters: ${wrongGuessArray}`)
//     }
//   }
// }

/** 
//  * LOWERCASE/UPPERCASE
//  * Matches the case regardless whether the user inputs lower or uppercase letters.
// */
// const swapCase = (userInput) => {
//   return userInput.replace(/([a-z]+|([A-Z]+))/g, function(match,char) {
//       return char ? match.toUpperCase() : match.toLowerCase();
//   });
// }