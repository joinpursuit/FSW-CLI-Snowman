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

let gR = obj.guessesRemaining
let cG = obj.correctGuesses
let iG = obj.incorrectGuesses
let bD = obj.board


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
    let input = readline.question("Please enter your guess: ");
    if (guessIsValid(input)) {
      letter = input;
    } else {
      console.log("Please enter a valid letter");
    }
  }
  return x = letter.toLowerCase();
};

let x = ""

const theEnd = () => {
  if ((gR === 0)) {
    console.log("Better luck next time.");
    console.log("The word was " + obj.secretWord.toUpperCase() + ".");
  } else if (obj.secretWord === obj.board.join("")) {
    console.log("You win! Congratulations!");
  }
  if (readline.keyInYNStrict("Would you like to play again? ")) {
    console.clear();
    return startGame();
  }
  else {
    process.exit();
  }
};



//isGameOver function to return boolean if game is over




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
  for (let z = 0; z < cG.length; z++) {
    while (x === cG[z]) {
      console.log("That letter was already guessed. Please try another.")
      getValidLetterGuess()
    }
  }
  for (let z = 0; z < iG.length; z++) {
    while (x === iG[z]) {
      console.log("That letter was already guessed. Please try another.")
      getValidLetterGuess()
    }
  }
}


// const welcome = () => {
//   console.log(" Welcome to the Snowman Game.\n Try to predict the word by guessing individual letters.\n Good luck!\n")
// }
let welcome = readline.question(" Welcome to the Snowman Game.\n Try to predict the word by guessing individual letters.\n Good luck!\n")

const startGame = () => {
  welcome
  obj.secretWord = randomWord();
    buildBoard().join(" ")
    // welcome();
  while (gR > 0 && bD.join("") !== obj.secretWord) {
    console.clear();
    console.log(`Guesses Remaining: ${gR}\n Correct Guesses : ${cG}\n Incorrect Guesses: ${iG}\n ${bD.join(" ")}\n`, obj.secretWord);
    getValidLetterGuess();
    duplicateLetter();                      
    if (wordCompare()) {
      console.log("You guessed right!");
      boardUpdate()
      cG.push(x);
    } else if (!wordCompare()) {
      console.log("Wrong guess.");
      gR -= 1;
      iG.push(x);
    }
  }
};





startGame()
theEnd()



