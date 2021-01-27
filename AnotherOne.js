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
    } else {
      console.log("\nPlease enter a valid letter");
    }
  }
  return x = letter.toLowerCase();
};

let x = ""

const theEnd = () => {
  if ((obj.guessesRemaining === 0)) {
    console.log("Better luck next time.");
    console.log("The word was " + obj.secretWord.toUpperCase() + ".");
  } else if (obj.secretWord === obj.board.join("")) {
    console.log("You win! Congratulations!\n");
  }
  if (readline.keyInYNStrict("Would you like to play again? ")) {
    obj.guessesRemaining = 9,
    obj.correctGuesses =  [],
    obj.incorrectGuesses = [],
    obj.secretWord = "",
    obj.board = [],
    
    startGame();
    theEnd();
    console.clear();
  }
  else {
    process.exit();
  }
};







const wordCompare = () => {
    return obj.secretWord.includes(x)
}

const boardUpdate = () => {
    for (let j = 0; j < obj.secretWord.length; j++) {
        if (obj.secretWord[j] === x) {
            obj.board[j] = x
        }
    }
    return obj.board
}



const duplicateLetter = () => {
  for (let z = 0; z < obj.correctGuesses.length; z++) {
    while (x === obj.correctGuesses[z]) {
      console.log("That letter was already guessed. Please try another.")
      getValidLetterGuess()
    }
  }
  for (let z = 0; z < obj.incorrectGuesses.length; z++) {
    while (x === obj.incorrectGuesses[z]) {
      console.log("That letter was already guessed. Please try another.")
      getValidLetterGuess()
    }
  }
}





const startGame = () => {
  readline.question(" Welcome to the Snowman Game.\n Try to predict the word by guessing individual letters.\n Good luck!\n")
  obj.secretWord = randomWord();
    buildBoard().join(" ")
  while (obj.guessesRemaining > 0 && obj.board.join("") !== obj.secretWord) {
    console.clear();
    console.log(`Guesses Remaining: ${obj.guessesRemaining}\n Correct Guesses : ${obj.correctGuesses}\n Incorrect Guesses: ${obj.incorrectGuesses}\n ${obj.board.join(" ")}\n`, obj.secretWord);
    getValidLetterGuess();
    duplicateLetter();                      
    if (wordCompare()) {
      console.log("\nYou guessed right!");
      boardUpdate()
      obj.correctGuesses.push(x);
    } else if (!wordCompare()) {
      console.log("\nWrong guess.");
      obj.guessesRemaining -= 1;
      obj.incorrectGuesses.push(x);
    }
  }
};





startGame()
theEnd()



