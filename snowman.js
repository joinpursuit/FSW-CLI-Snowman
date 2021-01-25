const readline = require("readline-sync");
const dictionary = require("./dictionary");
let gameState = {guess: 7, lettersGuessed: [], word: "", board:[]};
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
  gameState.word = randomWord();
  gameState.board = createBoard(gameState.word.length);
  gameLoop();
};
const gameLoop = () => {
  while (gameState.guess > 0 && gameState.board.includes("_")) {
    logGameState()
    console.log(gameState.word);//dont forget to remove later 
    let guess = getValidLetterGuess();
    updateGameState(guess)
    updateBoard(guess)
  }
  if(gameState.guess === 0){
    loser()
  }else{
    winner()
  }
};
function randomWord() {
  let index = Math.floor(Math.random() * dictionary.length); // or 742
  return dictionary[index];
}
function createBoard(num) {
  board = [];
  for (let i = 0; i <= num; i++) {
    if (i) {
      board.push("_");
    }
  }
  return board;
}
function logGameState(){
  console.log(gameState.board.join(" "))
  console.log(`You've guessed: ${gameState.lettersGuessed}`);
  console.log(`You have ${gameState.guess} remaining guesses`);
}
function updateGameState(guess) {
  gameState.lettersGuessed.push(guess)
  if(!gameState.word.includes(guess)) {
     gameState.guess--;
  }
}
function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()&& !gameState.lettersGuessed.includes(letter);
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
function updateBoard(guess){
  for (let i = 0; i < gameState.word.length; i++) {
   if(gameState.word[i] === guess) {
      gameState.board[i] = guess
    }
  }

}
const endGame = () => {};
const winner = () => {
  console.log(
    `WOW! You won, and it only took you ${gameState.lettersGuessed.length} guesses! You got it right, the word is indeed ${gameState.word}!`
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

