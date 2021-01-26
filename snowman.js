const readline = require("readline-sync");
const dictionary = require("./dictionary");
let gameState = {guess: 7, lettersGuessed: [], word: "", board:[]};
function playOrNot(){
  console.clear()
  console.log("\nWelcome to the Snowman Game! \nTo play, I will choose a word and allow you 7 guesses to guess the right word. \nThroughout the game, you'll be able to see: how many letters are in the word; how many guesses you have left; and what letters you have already guessed.\n")
  let play = readline.keyInYN(`Do you wanna build a Snowman?`)
  if(play){
    startGame()
  } else{
    endGame()
  }
}
const startGame = () => {
  console.clear()
  console.log("\nLet's put this snowman together\n");
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
  console.clear()
  console.log(gameState.board.join(" "))
  console.log(`\nYou've guessed: ${gameState.lettersGuessed}`);
  console.log(`\nYou have ${gameState.guess} remaining guesses`);
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
function updateBoard(guess){
  for (let i = 0; i < gameState.word.length; i++) {
   if(gameState.word[i] === guess) {
      gameState.board[i] = guess
    }
  }

}
const endGame = () => {
  console.log('Goodbye')
  process.exit()
};
const winner = () => {
  console.log(
    `\nWOW! You won, and it only took you ${gameState.lettersGuessed.length} guesses! You got it right, the word is indeed: ${(gameState.word).toUpperCase()}!`
  );
  playAgain()
};
const playAgain = () => {
  clearState()
  let answer = readline.keyInYN(`Would you like to build another snowman?`);
  if (answer) {
    startGame();
  } else{
    endGame();
  }
};
const loser = () => {
  if (gameState.guess === 0) {
    console.log(`\nGAME OVER. You lost, you have no more guesses left. The word was: ${(gameState.word).toUpperCase()}.`
    );
  }
  playAgain()
};
function clearState(){
  gameState.word= ''
  gameState.board = []
  gameState.lettersGuessed = []
}

playOrNot();

