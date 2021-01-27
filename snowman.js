// SnowMan Project
// Intro 
//constVariables
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const word = ["Libra", "Capricorn", "Pisces"]
//
//Intro logs
console.log("Welcome!");
console.log("Today we have a game that you may be familiar with.");
console.log("It's called Hangman.");
console.log("Yup! I know you've heard of it.");
console.log("Now let's play!");
console.log("You have 5 guesses.");
console.log("HINT! The stars are bright. They lead with might. Look Up!");
// let variables
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
let randomNum = Math.floor(Math.random() * Math.floor(word.length));
let choosenWord = word[randomNum];
let underScore = [];
let pickRandomLetter;
let numOfGuess = 5;
// gameTakeOff
const gameStart = () => {

}
//Random word
const randomWord = () => {
  choosenWord.readlineSync("Pick a random letter")
  if(choosenWord.includes(pickRandomLetter)) {
    return true
  } else {
    console.log("One less try...")
    return false
  }
};
// numberOfGuess
const numberOfGuesses = () => { 
    if(!randomWord()) {
      return 
      console.log("You're ")
    }else{
      console.log("Guesses remaining " + guessCount)
    }
};
// guessLog
const guessCount = () => {
  let counter = 0
  let maxGuess = 5
};
// Under Score Generator
let generateUnderScore = () => {
  for(let i = 0; i < choosenWord.length; i++) {
    underScore.push("_");
  }
  return underScore;
}
console.log(generateUnderScore());
// gameOver
const gameOver = () => {
  
}