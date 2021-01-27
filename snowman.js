const readLineSync = require("readline-sync");
const dictionary = require("./dictionary");

let gameObject = {
  gameBoard: {},
  guessesLeft: 7,
  guessedLetters: [],
  guessCounter: 0,
};

let secretWord;

// get random word
const getWord = () => {
  secretWord = dictionary[Math.floor(Math.random() * dictionary.length)];
  // console.log("\nThe secret word is: " + secretWord);
};

// Start game function - will reset the game if you want to play again
const startGame = () => {
  console.clear();
  gameObject["guessesLeft"] = 7;
  gameObject["guessedLetters"] = [];
  gameObject["gameBoard"] = {};
  gameObject["guessCounter"] = 0;

  getWord();
  lettersRemaining = secretWord.length;

  welcomeMessage();
  displayBoard();

  while (gameObject["guessesLeft"] > 0 && lettersRemaining > 0) {
    const guess = getValidLetterGuess();
    if (!hasLetterBeenGuessedAlready(guess)) {
      updateGameBoard(guess);
      deincrementGuess(guess);
      guessedLettersArray(guess);
      winGame(lettersRemaining);
      gameOver(gameObject["guessesLeft"]);
    }
  }
};

// Displays the opening welcome message
const welcomeMessage = () => {
  console.log("Welcome to Snowman! You have 7 guesses - Enjoy!\n");
};

// The loop creating the answer array - will update with correct guesses
const displayBoard = () => {
  for (let i = 0; i < secretWord.length; i++) {
    gameObject.gameBoard[i] = "_";
  }
  console.log(Object.values(gameObject.gameBoard).join(" "));
};

// deincrement guess
const deincrementGuess = (letter) => {
  if (secretWord.includes(letter)) {
    console.log("\nGood guess!");
  } else {
    gameObject["guessesLeft"]--;
  }
  console.log(
    "\nYou have " + gameObject["guessesLeft"] + " guesses remaining\n"
  );
};

// adds guessed letters to array and displays it
const guessedLettersArray = (letter) => {
  gameObject["guessedLetters"].push(letter);
  console.log("\nGuessed letters: " + gameObject["guessedLetters"]);
};

// updates gameboard if correct letter chosen
const updateGameBoard = (letter) => {
  console.clear();
  for (k = 0; k < secretWord.length; k++) {
    if (secretWord[k] === letter) {
      gameObject.gameBoard[k] = letter;
      lettersRemaining--;
    }
  }
  console.log(Object.values(gameObject.gameBoard).join(" "));
};

// displays win game message when players guesses word correctly
const winGame = (lettersRemaining) => {
  if (lettersRemaining === 0) {
    console.log("\nCongratulations YOU HAVE WON!!");
    console.log("\nIt took you " + gameObject["guessCounter"] + " guesses!");
    console.log("\nThe word was: " + secretWord);
    if (readLineSync.keyInYN("\nWould you like to try again?")) {
      startGame();
    } else {
      process.exit();
    }
  }
};

// displays game over message when player runs out of guesses
const gameOver = () => {
  if (gameObject["guessesLeft"] === 0 && lettersRemaining !== 0) {
    console.log("\nSorry you ran out of guesses! Better luck next time!");
    console.log("\nThe word was: " + secretWord);
    if (readLineSync.keyInYN("\nWould you like to try again?")) {
      startGame();
    } else {
      process.exit();
    }
  }
};

// has letter already been guessed function
const hasLetterBeenGuessedAlready = (letter) => {
  for (let p = 0; p < gameObject["guessedLetters"].length; p++) {
    if (gameObject.guessedLetters[p] === letter) {
      console.log(
        "\n YOU ALREADY GUESSED THAT LETTER - PLEASE TRY A DIFFERENT GUESS"
      );
      return true;
    }
  }
  return false;
};

// Get a valid letter guess
function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase();
  }
  let letter = "";
  while (!letter) {
    let input = readLineSync.question("\nPlease enter your guess: ");
    if (guessIsValid(input)) {
      letter = input.toLowerCase();

      gameObject["guessCounter"]++;
    } else {
      console.log("\nPlease enter a valid letter");
    }
  }

  return letter.toLowerCase();
}
startGame();
