const dictionary = require("./dictionary")
const readline = require("readline-sync");
// i is always a number not the element in the array. We use that number to key in to the array

let mistakes = 0;
let guessed = [];

let stats = {dash: [], guesses: 7, word: '', board: ""}

function startGame() {
  console.log("Welcome to Snowman!!\n");
  console.log("A game where you have to guess the word I'm thinking");
  console.log(`"You have ${stats.guesses} guesses to figure out the word"`);
  console.log("Are you brave enough?\n");
  let input = readline.keyInYN("Do you want to play?\n");
  if (input) {
    randomWord();
  } else {
    leaveGame();
  }
  console.log(stats.word);
  wordDashes(stats.word);
  while (stats.guesses >= 0 ) { //|| stats.dash.includes("_")
    console.log(`"You have ${stats.guesses} guesses remaining"`);
    console.log(stats.dash.join(" "));
    stats.board = getValidLetterGuess();
    if (!stats.word.includes(stats.board)) {
      stats.guesses--;
    } else {
      letterHolder(stats.board);
    }
    
  }
  winOrLoose();
  lostGame();
  //   guesses--;
  //   // resetGame();
}
function resetGame() {
  if (readline.keyInYN("Do you want to play again?\n")) {
    // funtion in itself for playAgain
    // getValidLetterGuess();
  } else {
    leaveGame();
  }
}
function winOrLoose() {
  if (!stats.dash.includes(stats.word)) {
    console.log("You won!");
  }
  // } else {
  //   console.log("Boo you lost. Want to try again?");

  // }
}

function lostGame() {
  if (!word.includes(guesses)) {
    console.log("Boo you lost. Want to try again?");
  }
  resetGame();
}

function randomWord() {
  stats.word = dictionary[Math.floor(Math.random() * dictionary.length)];
  return stats.word;
}

function wordDashes() {
  // dashes on the board
  // builds board
  for (let i = 0; i < stats.word.length; i++) {
    stats.dash.push("_");
  }
  return stats.dash;
}
// console.log(wordDashes)

function guessedOut(letter) {
  if (stats.word.includes(stats.board)) {
  }
}

function letterHolder(letter) {
  //update the dash with the letter on the board
  for (let i = 0; i < stats.word.length; i++) {
    if (stats.word[i] === letter) {
      stats.dash[i] = letter;
    }
  }
}

function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase();
  }
  let letter = "";
  while (!letter) {
    let input = readline.question("Please enter your guess: ");
    if (guessIsValid(input)) {
      letter = input;
      // updateBoard(letter);
    } else {
      ``;
      console.log("Please enter a valid letter");
    }
  }
  return letter.toLowerCase();
}

// function updateBoard(){

//   if(letter[i] === word){
//         dash+=1
//   } else {
//     guesses--
//   }
// }

// function updateBoard() {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter.toLowerCase()) {
//      dash[i] = letter.toLowerCase();
//     }
//   }
//   // dash = spaces.join(" ");
//   return dash
// }

// function nextGuess() {
//   let guesses = 7
//   while(remainingGuesses > 0){
//     let input = readline.question("Please enter your guess: ");

//     checkLetter()
//   }
// }
// while(remainingGuesses > 0){
//if the guess is right
//want to check if the guesses is right. fill in dashes
// }
// if(guesses === 0){

// }

//outside of whileloop "no  remainingGuesses"
// remainingGuesses--

function leaveGame() {
  console.log(
    "\nAw man! I guess you weren't brave enough to handle the challenge"
  );
  console.log("Not sad to see you go!");
  // resetGame()
  process.exit();
}
startGame();
