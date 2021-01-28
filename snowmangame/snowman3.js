const readline = require("readline-sync");
const readLineSync = require("readLine-sync");
const dictionary = require("./dictionary");
let randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
let guessWord = [];
let stats = {
  guessesRemaining: 7,
  guessedLetters: "",
};
function gameStart() {
  console.log("Welcome to my Snowman Game!");
  console.log("To win the game all you have to do is guess the word!");
  console.log("Good Luck!");
  console.log(randomWord); // Shows word
  for (let i = 0; i < randomWord.length; i++) {
    guessWord.push("_");
  }
  console.log(guessWord.join(" "));
  console.log("\n");
  guessesLeft();
}

function gameOver() {
  if (stats.guessesRemaining === 0) {
    console.log("\n");
    console.log("Yikes! Looks like you're out of guesses!");
    console.log("The word was: " + randomWord);
    restartGame();
    return true;
  }
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] !== guessWord[i]) {
      return false;
    }
  }
  console.log("\n");
  console.log(
    "Awesome you guessed the word and had " +
      stats.guessesRemaining +
      " guesses remaining!"
  );
  restartGame();
  console.log("\n");
  return true;
}

function guessesLeft() {
  guessesLeftover();
  while (stats.guessesRemaining > 0) {
    let guessedLetter = getValidLetterGuess();
    validLetters(guessedLetter);
  }
}

function getValidLetterGuess() {
  function guessIsValid(letter) {
    if (stats.guessedLetters.includes(letter)) {
      console.log("This letter has already been used.");
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
      console.log("\n");
    }
  }
  return letter.toLowerCase();
}

const guessesLeftover = () => {
  console.log(`You have ${stats.guessesRemaining} guesses remaining.`);
};

const updateGuessedLetters = (letter) => {
  if (!stats.guessedLetters.includes(letter.toLowerCase())) {
    stats["guessedLetters"] += letter.toLowerCase() + ",";
    console.log(letter);
  }
  return "Guessed Letters: " + stats["guessedLetters"];
};

const validLetters = (letter) => {
  let letterGuessed = false;
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === letter.toLowerCase()) {
      guessWord[i] = letter.toLowerCase();
      letterGuessed = true;
    }
  }
  console.log(guessWord.join(" "));
  if (!letterGuessed) {
    stats[stats.guessesRemaining] = stats[--stats.guessesRemaining];
  }
  if (!gameOver()) {
    guessesLeftover();
  } else {
    process.exit(1);
  }
};

const restartGame = () => {
  if (readLineSync.keyInYN("Would you like to play again?")) {
    console.clear();
    randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    guessWord = [];
    stats.guessesRemaining = 7;
    stats.guessedLetters = "";
    gameStart();
  } else {
    leaveGame();
  }
};

const leaveGame = () => {
  console.log("Thanks for playing!");
  process.exit();
};

gameStart();
