const { get } = require("https");
const readline = require("readline-sync");
const dictionary = require("./dictionary")




let obj = {
  guessesRemaining: 9,
  correctGuesses: [],
  incorrectGuesses: [],
  secretWord: "",
  board: [],
};



const randomWord = () => {
  let word = dictionary[Math.floor(Math.random() * dictionary.length)];
  return word;
};




const buildBoard = () => {
  for (let i = 0; i < obj.secretWord.length; i++) {
    obj.board[i] = "_";
  }
  return obj.board;
};



const getValidLetterGuess = () => {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() !== letter.toLowerCase();
  }
  let letter = "";
  while (!letter) {
    let input = readline.question("\nPlease enter your guess: ");
    if (guessIsValid(input)) {
      letter = input;
    } 
    else {
      console.log("\nPlease enter a valid letter");
    }
  }
  return playerInput = letter.toLowerCase();
};

let playerInput = ""

const theEnd = () => {
  if ((obj.guessesRemaining === 0)) {
    console.log("The word was " + obj.secretWord.toUpperCase() + ".\n");
    console.log("You had a total of " + (obj.correctGuesses.length + obj.incorrectGuesses.length) + " valid guesses.");
    console.log("Better luck next time.\n");
  } 
  else if (obj.secretWord === obj.board.join("")) {
    console.log("The word was " + obj.secretWord.toUpperCase() + ".\n")
    console.log("You had a total of " + (obj.correctGuesses.length + obj.incorrectGuesses.length) + " valid guesses.");
    console.log("You win! Congratulations!\n");
  }
  if (readline.keyInYNStrict("\nWould you like to play again? \n")) {
    obj.guessesRemaining = 9,
    obj.correctGuesses =  [],
    obj.incorrectGuesses = [],
    obj.secretWord = "",
    obj.board = [],
    console.log();
    startGame();
    theEnd();
    console.clear();
  }
  else {
    console.log("Thanks for playing.\n","Goodbye!\n")
    process.exit();
  }
};







const wordCompare = () => {
    return obj.secretWord.includes(playerInput)
}

const boardUpdate = () => {
    for (let j = 0; j < obj.secretWord.length; j++) {
        if (obj.secretWord[j] === playerInput) {
            obj.board[j] = playerInput
        }
    }
    return obj.board
}



const duplicateLetter = () => {
  for (let z = 0; z < obj.correctGuesses.length; z++) {
    while (playerInput === obj.correctGuesses[z]) {
      console.log("That letter was already guessed. Please try another.")
      getValidLetterGuess()
    }
  }
  for (let z = 0; z < obj.incorrectGuesses.length; z++) {
    while (playerInput === obj.incorrectGuesses[z]) {
      console.log("That letter was already guessed. Please try another.")
      getValidLetterGuess()
    }
  }
}

const keepPlaying = () => {
  return obj.guessesRemaining > 0 && obj.board.join("") !== obj.secretWord
}



const startGame = () => {
  readline.question(" Welcome to the Snowman Game.\n Try to predict the word by guessing individual letters.\n Good luck!\n\nPress ENTER/RETURN to begin.")
  obj.secretWord = randomWord();
    buildBoard().join(" ")
  while (keepPlaying()) {
    console.clear();
    console.log(`SNOWMAN\n Guesses Remaining: ${obj.guessesRemaining}\n Correct Guesses : ${obj.correctGuesses}\n Incorrect Guesses: ${obj.incorrectGuesses}\n ${obj.board.join(" ")}\n`, obj.secretWord);
    getValidLetterGuess();
    duplicateLetter();                      
    if (wordCompare()) {
      console.log("\nYou guessed right!");
      boardUpdate()
      obj.correctGuesses.push(playerInput);
    } else {
      console.log("\nWrong guess.");
      obj.guessesRemaining -= 1;
      obj.incorrectGuesses.push(playerInput);
    }
  }
  theEnd();
};





startGame()




