let allTheWords = require("./words.js")

let answer = allTheWords[Math.floor(Math.random() * allTheWords.length)]
let correctGuess = []
for(let i = 0; i < answer.length;i++){
  correctGuess[i] = "_";
}
let guesses = []
let tries = 0;
let lives = 6;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function hangman(){
readline.question(`Guess a letter: `, (playersGuess) => {

tries++

if(playersGuess){
  playersGuess = playersGuess.toLowerCase()
  if(guesses.includes(playersGuess)){


    console.log("You already guessed that letter.")
  }else if(answer.includes(playersGuess)){
  if(answer === playersGuess){
    correctGuess = playersGuess.split("")
  }
for(let i = 0; i < correctGuess.length;i++){
  if(playersGuess === answer[i]){
  correctGuess[i] = playersGuess
}
}
guesses.push(playersGuess)

}else{
  guesses.push(playersGuess)
  lives--
 }
}

console.log(correctGuess.join(""))
console.log("Guessed letters : " + guesses.join(","))
console.log(`You have ${lives} guesses remaining.`)


if(lives === 0){
  console.log(`You Lose! The answer was ${answer}`)
  readline.close()
}
else if(correctGuess.join("") === answer){
  console.log(`You Win! It took you ${tries} guesses`)
  readline.close()
}else{
hangman()
}
})
}

hangman()
