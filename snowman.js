// SnowMan Project
// Intro 
//constVariables
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const dictionary = require("./dictionary.js");
//
//Intro logs
console.log("Welcome!");
console.log("Today we have a game that you may be familiar with.");
console.log("It's called Hangman.");
console.log("Yup! I know you've heard of it.");
console.log("Now let's play!");
console.log("You have 5 guesses.");
console.log("HINT! The stars are bright. They lead with might. Look Up!");
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
let underScore = [];
// gameTakeOff
const randomLetter = () => {
  let pickRandomLetter = readlineSync.question("Pick a letter");
  if(pickRandomLetter > 0) {
    return true
  } else{
    return false
  }
};
// gameWord
const randomWord = () => {
  let word = "Libra";
  };
// numberOfGuess
const numOfGuess = () => {
  for(i = 0; i < 5; i++) {
    if()
  }
};
// guessLog
const guessLog = () => {
  let counter = 0
  let maxGuess = 5
};
// Under Score Generator
let generateUnderScore = () => {
  for(let i = 0; i < randomWord.length; i++) {
    underScore.push("_");
  }
  return underScore;
}

console.log(generateUnderScore());
// gameOver
const gameOver = () => {}