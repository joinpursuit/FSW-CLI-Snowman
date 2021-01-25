const readline = require("readline-sync");
const dictionary = require("./dictionary");
let gameState = { guess: 7, lettersGuessed: [], word: "", board: [] };
function playOrNot(){
  console.log("Welcome message and game instructions:")
  let play = readline.keyInYN(`Would you like to play?`)
  if(play){
    startGame()
  } else{
    endGame()
  }
}
const startGame = () => {
  console.clear()
  console.log("Let's put this snowman together");
  console.log(`You have ${gameState.guess} guesses`);
  gameState.word = randomWord();
  gameState.board = createBoard(gameState.word.length);
  console.log(gameState.board)
  gameLoop();
};
const gameLoop = () => {
  while (gameState.guess > 0) {
    console.log(gameState.word);//dont forget to remove later 
    let guess = getValidLetterGuess();
    if(gameState.word.includes(guess)){
      // console.log(updateGameState(guess))
      // dashMaker(guess)
    } else {
      console.log(updateGameState(guess))
      // console.log(dashMaker(guess))
    }
  }
};
function randomWord() {
  let index = Math.floor(Math.random() * dictionary.length); // or 742
  return dictionary[index];
}
function createBoard(num) {
  dash = [];
  for (let i = 0; i <= num; i++) {
    if (i) {
      dash.push("_");
    }
  }
  return dash.join("  ");
}
function updateGameState(guess) {
  if(!gameState.lettersGuessed.includes(guess)){
  gameState.lettersGuessed.push(guess);
  } 
  if(gameState.word.includes(guess)) {
    console.log(`You've guessed: ${gameState.lettersGuessed}`);
    console.log(`You have ${gameState.guess} remaining guesses`);
  } else {
     gameState.guess--;
     console.log(`You've guessed: ${gameState.lettersGuessed}`);
     console.log(`You have ${gameState.guess} remaining guesses`);
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
      //update dash here with fuction
      // checks if letter is in the word and then call function that updates dash? or updates dash as well
    } else {
      console.log("Please enter a valid letter");
    }
  }
  return letter.toLowerCase();
}
//add dash and if/else it includes then add letter then add dashes again
function dashMaker(guess) {
  for (let i = 0; i < gameState.word.length; i++) {
   if(gameState.word[i] === guess) {
      gameState.board[i] = guess
    }
  }
}
const endGame = () => {};
const winner = () => {
  console.log(
    `WOW! You won, and it only took you ${gameState.guess} guesses! You got it right, the word is indeed ${word}!`
  );
};
const playAgain = () => {
  console.log();
  let answer = readline.keyInYN(`Would you like to try again`);
  if (answer) {
    gameLoop();
  } else endGame();
};
const loser = () => {
  if (gameState.guess === 0) {
    console.log(
      `GAME OVER. You lost, you have no more guesses left. The word was ${gameState.word}.`
    );
  }
};

playOrNot();

