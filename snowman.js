// SnowMan Project
// Intro 
//constVariables
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const dictionary = require("./dictionary.js");
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
// gameTakeOff
const randomLetter = () => {
  let pickRandomLetter = readlineSync.question("Pick a letter");
  for(pickRandomLetter;  )
}
// gameWord
const randomWord = () => {

}
// numberOfGuess
const numOfGuess = () => {

}
// guessLog
const guessLog = () => {

}
