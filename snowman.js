const readline = require("readline-sync");
//try to add option to quit at every turn
const dictionary = require("./dictionary.js");

let randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
let splitRandomWord = randomWord.split("");
let tiles = splitRandomWord.map((el) => {
  return " _ ";
});

// //console.table(resources);

let lettersLeft = randomWord.length;
let incorrectGuess = 0;
let name = readline.question(
  "Hello human, thank you for playing, what is your name? "
);
let choose = `please choose a letter`;
let message = { outmessage: "" };
let gameInventory = { correctGuesses: "", wrongGuesses: "", guessesLeft: 6 };


console.clear();
const playAgain = () => {

  let askAgain = readline.keyInYN(`Would you like to play again ${name}?`);
  if (askAgain) {
randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
splitRandomWord = randomWord.split("");
tiles = splitRandomWord.map((el) => {
  return " _ ";
});
   incorrectGuess = 0;
   lettersLeft = randomWord.length
   gameInventory = { correctGuesses: "", wrongGuesses: "", guessesLeft: 6 };
  message = { outmessage: "" };



  } else {
    process.exit();
  }
};
const gameLoop = () => {


  if (incorrectGuess === 6) {
  
    loseGame();
  } else if (lettersLeft === 0) {

    gameWin();
  } else if (lettersLeft >= 0) {
    console.log(message["outmessage"]);
    console.table(gameInventory);
    // console.clear()
    //console.log('Number of guesses left: '  + (6 - incorrectGuess))

    takeAGuess();
  }
};

const takeAGuess = () => {
  
  console.log(tiles.join(" "));

  let playerGuess = readline
    .keyIn(choose, {
      limit: "$<a-z>",
    })
    .toLowerCase();
  console.clear();
  if (gameInventory["wrongGuesses"].includes(playerGuess)) {
    message[
      "outmessage"
    ] = `Try again ${name}, you have already incorrectly chosen "${playerGuess}" `;
    gameLoop();
  } else if (gameInventory["correctGuesses"].includes(playerGuess)) {
    message[
      "outmessage"
    ] = `Try again ${name}, you have already correctly chosen "${playerGuess}" `;
    gameLoop();
  } else if (!splitRandomWord.includes(playerGuess)) {
    incorrectGuess += 1;
    message[
      "outmessage"
    ] = `Sorry ${name}, there is no letter "${playerGuess}" in this word.`;
    //console.log()
    gameInventory["guessesLeft"] = 6 - incorrectGuess;
    gameInventory["wrongGuesses"] += `${playerGuess},`;
    gameLoop();
  } else if (splitRandomWord.includes(playerGuess)) {
    // make a function to updateTiles
    gameInventory["correctGuesses"] += `${playerGuess},`;
    //for (let letter of playerGuess) {
    //if (randomWord.includes(playerGuess)){

    for (let i = 0; i < splitRandomWord.length; i++) {
      let indexOfTiles = i;
      if (randomWord[i] === playerGuess) {
        tiles[indexOfTiles] = playerGuess;
        message[
          "outmessage"
        ] = `good choice, the word does have the letter "${playerGuess}"`;

        lettersLeft -= 1;
      }
    }
  }
  console.clear();
  gameLoop();
};
//};

const gameWin = () => {
  let winScore =
    gameInventory["correctGuesses"].length / 2 +
    gameInventory["wrongGuesses"].length / 2;
  console.log(tiles.join(" "));
  console.log(
    `Congragulations ${name}, You won the game with ${winScore} guesses!!!`
  );

  playAgain();
};

const loseGame = () => {

  console.log(
    `You have ${
      6 - incorrectGuess
    } guesses left ${name}, so you lose the game. The word
   you were unable to guess is "${randomWord}". Better luck next time human ${name}`
  );

 playAgain();

};

gameLoop();

