const readline = require('readline-sync');
const dictionary = require("./dictionary");
let secretWord = "";
let board = [];
let guessesRemaining = 10 
let guessedLetters = [];

function resetGame() {
  secretWord = "";
  board = [];
  guessesRemaining = 10;
  guessedLetters = [];
}

function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() !== letter.toLowerCase() && !guessedLetters.includes(letter)
  }
  let letter = ""
  while (!letter) {
    let input = readline.question("Please enter your guess: ").trim();
    if (guessIsValid(input)) {
      letter = input
    } else {
      console.log("Please enter a valid letter")
    }
  }
  return letter.toLowerCase()
}

function chooseRandomWord(words){
  const randomIdx = Math.floor(Math.random() * words.length);
  return words[randomIdx];
}

function makeBoard(length){
  return new Array(length).fill("_");
}

function displayBoard() {
  console.log(board.join(" "))
}

function updateBoard(letter) {
  for(let i = 0; i < secretWord.length; i++) {
    const char = secretWord[i];
    if(char === letter) {
      board[i] = letter; 
    }
  }
}

function isGameOver() {
  return guessesRemaining <= 0 || !board.includes("_")
}

function displayState() {
  console.log(`You have ${guessesRemaining} guess(es) remaining`);
  console.log(`You've guessed these letters: ${guessedLetters.join(", ")}`);
  displayBoard()
}


function startGame() {
  secretWord = chooseRandomWord(dictionary);
  board = makeBoard(secretWord.length);
  while(!isGameOver()) {
    console.clear();
    displayState();
    const guessedLetter = getValidLetterGuess();
    guessedLetters.push(guessedLetter)
    if(secretWord.includes(guessedLetter)) {
      updateBoard(guessedLetter)
    } else {
      guessesRemaining--;
    }
  }

  if(guessesRemaining > 0) {
    console.log("Congrats you won!")
    displayBoard();
  } else {
    console.log("You lost :-( ")
    console.log(`secret word was: ${secretWord}`)
  }

  if(readline.keyInYN("Play Again?")) {
    resetGame();
    startGame();
  } else {
    console.log("Goodbye")
    process.exit();
  }

}

startGame();