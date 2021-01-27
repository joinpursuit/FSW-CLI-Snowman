const dictionary = require("./dictionary");
const readline = require("readline-sync");
// i is always a number not the element in the array. We use that number to key in to the array
 
let stats = { dash: [], guesses: 7, guessed: [], word: "", board: "" };

function startGame() {
  console.clear()
  console.log("Welcome to Snowman!!\n");
  console.log("A game where you have to guess the word I'm thinking");
  console.log(`You have ${stats.guesses} guesses to figure out the word.\n`);
  let input = readline.keyInYN("Are you brave enough?\n");
  if (input) {
    randomWord();
  } else {
    leaveGame();
  }
  
  wordDashes(stats.word);
  while (stats.guesses > 0) {
    console.clear()
    if (!stats.dash.includes("_")) {
      console.log("You won!\n");
      console.log(`Woot woot!! You got the right word! The word is ${stats.word}!\n`)
      console.log(`You made a total of ${stats.guessed.length} guesses.\n`)
      resetGame();
      break;
    }
    console.log(stats.guessed.join(" "))
    // console.log(stats.word);
    // console.log(stats.guessed)
    console.log(`You have ${stats.guesses} guesses remaining`
    );
    console.log(stats.dash.join(" "));
    stats.board = getValidLetterGuess();
    stats.guessed.push(stats.board)
    if (!stats.word.includes(stats.board)) {
      stats.guesses--;
    } else {
      letterHolder(stats.board);
    }
  }
  
  // console.clear()
  lostGame();

}
function resetGame() {
  let input = readline.keyInYN("Do you want to play again?\n");
  console.clear()
  if (input) {
    stats = { dash: [], guesses: 7, guessed: [], word: "", board: "" };
    console.clear()
    startGame();
  } else {
    leaveGame();
  }
}

function lostGame() {
  console.log("\nBoo you lost!\n");
  console.log(`The word you were trying to guess was: ${stats.word}!\n`)
  resetGame();
}

function randomWord() {
  stats.word = dictionary[Math.floor(Math.random() * dictionary.length)];
  return stats.word;
}

function wordDashes() {// dashes on the board//builds board
  for (let i = 0; i < stats.word.length; i++) {
    stats.dash.push("_");
  }
  return stats.dash;
}
function letterHolder(letter) { //update the dash with the letter on the board
  for (let i = 0; i < stats.word.length; i++) {
    if (stats.word[i] === letter) {
      stats.dash[i] = letter;
    }
  }
}

function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase() && !stats.guessed.includes(letter)
  }
  let letter = "";
  while (!letter) {
    let input = readline.question("Please enter your guess: ").toLowerCase();

    if (guessIsValid(input)) {
      letter = input;
    } else {
      ``;
      console.log("Please enter a valid letter");
    }
  }
  return letter.toLowerCase();
}

function leaveGame() {
  console.clear()
  console.log(
    "\nAw man! I guess you weren't brave enough to handle the challenge"
  );
  console.log("Not sad to see you go!");
  process.exit();
}
startGame();
