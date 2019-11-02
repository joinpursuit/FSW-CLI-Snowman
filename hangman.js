const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const Board = require("./Board.js")
const Game = require("./Game.js")
const readline = require('readline-sync');

let nameInput = readline.question("Enter your name: ")
console.log("Hello " + nameInput + " !  Welcome to my game of Hangman.")

let computerPlayerA = new ComputerPlayer();
// console.log(computerPlayerA.getSecretWord())
let humanPlayer1 = new HumanPlayer(nameInput);
// console.log(humanPlayer1)
let board1 = new Board(computerPlayerA.getSecretWord());

let game1 = new Game(humanPlayer1, computerPlayerA, board1);

game1.play()

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


