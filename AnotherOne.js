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

obj.secretWord = randomWord()


const buildBoard = () => {
  let board = [];
  for (let i = 0; i < obj.secretWord.length; i++) {
    board[i] = "_";
  }
  return board;
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
  return letter.toLowerCase();
};



// const gameOver = () => {
//   if ((guessesRemaining === 0)) {
//     console.log("Better luck next time.");
//     console.log("The word was " + word + ".");
//   } else if (obj.secretWord === obj.board.join("")) {
//     console.log("You win! Congratulations!");
//   }
// };

//isGameOver function to return boolean if game is over
// get validLetterGuess used once saved to variable
//updateBoard should take one letter and change board when correct


const wordCompare = () => {
    let x = getValidLetterGuess()
    return obj.secretWord.includes(x)
}

const boardUpdate = () => {
    for (let j = 0; j < obj.secretWord.length; j++) {
        if (obj.board[j] === obj.secretWord[j]) {
            obj.board[j] = obj.secretWord[j]
        }
    }
    return obj.board
}




const startGame = () => {
    obj.secretWord = randomWord();
    obj.board = buildBoard().join(" ")
  while (obj.guessesRemaining > 1) {
    // getValidLetterGuess();                      
    if (wordCompare()) {
      console.log("You guessed right!");
      boardUpdate()
      obj.correctGuesses.push();
      console.log(obj);
    } else if (!wordCompare()) {
      console.log("Wrong guess.");
      boardUpdate()
      obj.guessesRemaining -= 1;
      obj.incorrectGuesses.push();
      console.log(obj);
    }
  }
};


startGame()

// console.log("a", buildBoard());
// console.log("b", obj);
// getValidLetterGuess();
// updater();
