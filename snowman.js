"use strict";
const readline = require('readline-sync');
const dictionary = require('./dictionary.js');
let word = dictionary[Math.floor(Math.random() * dictionary.length)];
let wordSplit = word.split("");
let board = displayUnderscores()
let gameDataObj = {};
let guessCountDecrement = 7;
let turnTaken = 1;
// console.log(word)


////////////////validate user input ///////////////////// default code ////
function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() !== letter.toLowerCase() && !Object.values(gameDataObj).includes(letter)
  }
  let letter = ""
  while (!letter) {
    console.log(`\n${board.join(" ")}\n`) // display board
    let input = readline.question("Please enter your guess: ")
    if (guessIsValid(input)) {
      letter = input
      console.log(displayLettersGuessed(letter)) // display user input
      compareLetters(letter) // comapre if user input is in secret word
    } else {
      console.clear()
      console.log(displayLettersGuessed(letter)) // display user input
      console.log("Please enter a valid letter")
    }
  }
  return letter.toLowerCase() 
}

//////////////////// compareLetters //////////////////////
function compareLetters (userInput) {
  let isGuessCorrect = false;
  for (let i = 0; i < wordSplit.length; i++) {
     if (userInput.toLowerCase() === wordSplit[i]) {
      board[i] = wordSplit[i]
      isGuessCorrect = true;
    } 
  } 
  if (isGuessCorrect === false) {
    guessCountDecrement--
  }
}

////////////// check for win ////////////////
const isBoardFull = () => !board.includes("_") 

///////////// log of user guesses in an object /////////////////////
const displayLettersGuessed = (userInput) => {
  if (userInput) {
    gameDataObj[turnTaken] = userInput.toLowerCase()
      turnTaken++
    }
    console.clear()
    return `Letters guessed: ${Object.values(gameDataObj).join(", ")} `
  }

///////////////////// create a board with blank spaces ////////////////////////// ES5 hoisting
function displayUnderscores() { 
  return wordSplit.map((el) => {
    return (el = "_");
  });
};

//////////////////// display guess count and win lose message //////////////////////////
const printGuessCount = () => {
  console.clear()
  console.log("")
  while(!isBoardFull()) {
    if (guessCountDecrement === 7) {
        console.log(`You have 7 guesses total`)
    } else if (guessCountDecrement > 1) {
        console.log(`You have ${guessCountDecrement} guesses left`)
    } else if (guessCountDecrement === 1) {
        console.log(`You have ${guessCountDecrement} guess left`)
    } else {
        console.log(`\nSorry. You lose\n\nThe word was: ${word}`)
        quitGame();
    }
    getValidLetterGuess()
}
return console.log(`\n${board.join(" ")}\n\nYou're Brilliant! You Won!\n\nIt took ${winCount(turnTaken)} guesses.`)
};

///////////////// tally total guesses used //////////////////////////////
const winCount = turnTaken => turnTaken  - 1;

//////////////// end game //////////////////
const quitGame = () => process.exit()


///////////// user choose to start game ///////////////////
const startGame = () => {
  console.clear()
    return readline.keyInYNStrict("Welcome!\n\nWould you like to play The Snowman Game?") ? printGuessCount() : console.log("\nYou're no fun.")
  };

startGame();



