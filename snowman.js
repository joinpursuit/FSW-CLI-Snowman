const chalk = require("chalk");
const readline = require("readline-sync");
const dictionary = require("./dictionary.js");

let randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
let guessWord = [];
let stats = { guessesRemaining: 7, guessedLetters: "" };

function startGame() {
  for (let i = 0; i < randomWord.length; i++) {
    guessWord.push("_");
  }
  console.log(guessWord.join(" "));
  console.log("\n");
  numOfGuesses();
}

function gameOver() {
  if (stats.guessesRemaining === 0) {
    console.log("\n");
    console.log(chalk.red("No more guesses, better luck next time!"));
    console.log("The word was: " + randomWord);
    console.log("\n");
    return true;
  }
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] !== guessWord[i]) {
      return false;
    }
  }
  console.log("\n");
  console.log(chalk.magenta(
    "You found the word and with " +
      stats.guessesRemaining +
      " guesses remaining!"
  ));
  console.log("\n");
  return true;
}

function numOfGuesses() {
  logGuessesRemaining();
  while (stats.guessesRemaining > 0) {
    let guessedLetter = getValidLetterGuess();
    validLetters(guessedLetter);
  }
}

function getValidLetterGuess() {
  function guessIsValid(letter) {
    if (stats.guessedLetters.includes(letter)) {
      console.log("\n");
      console.log(chalk.cyan("Letter has been guessed before."));
      return false;
    }
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase();
  }
  let letter = "";
  while (!letter) {
    let input = readline.question("Please enter your guess: ");
    if (guessIsValid(input)) {
      letter = input;
      console.log(updateGuessedLetters(letter));
      console.log("\n");
    } else {
      console.log("Please enter a valid letter");
    }
  }
  return letter.toLowerCase();
}

const logGuessesRemaining = () => {
  console.log("\n");
  console.log(`You have ${stats.guessesRemaining} guesses remaining.`);
};

const updateGuessedLetters = (letter) => {
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === letter.toLowerCase()) {
      stats["guessedLetters"] += randomWord[i] + ",";
    }
  }
  if (!randomWord.includes(letter.toLowerCase())) {
    stats["guessedLetters"] += letter.toLowerCase() + ",";
  }
  return chalk.cyan("Guessed Letters: ") + stats["guessedLetters"];
};

const validLetters = (letter) => {
  let found = false;
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === letter.toLowerCase()) {
      guessWord[i] = letter.toLowerCase();
      found = true;
    }
  }
  console.log(guessWord.join(" "));
    if(!found) { 
      stats[stats.guessesRemaining] = stats[--stats.guessesRemaining];
    } 
  if (!gameOver()) {
    logGuessesRemaining();
  } else {
    process.exit(1);
  }
};

startGame();
