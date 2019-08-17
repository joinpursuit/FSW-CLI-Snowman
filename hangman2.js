const readlineSync = require('readline-sync')
let words = ["daddy", "bubble", " button", "car"]

const getRandomWord = (words) => {
//let randomIndex = Math.floor(Math.random() * words.length - 0) + 0)
let randomIndex = Math.floor(Math.random() * words.length)
return words[randomIndex]
}

const createHiddenWord = (word) => {
let hiddenWord = word.split('').map(char => { return "_"})
return hiddenWord;
}

// const createHiddenWord2 =(word) => {
// let hiddenWord = []
// for(let i = 0; i < word.length; i++){
// hiddenWord.push('_')
// }
// return hiddenWord;
// } -- another way to write underscores for the random word

const isLetterInWord = (letter, word) => {
  return word.includes(letter)
}

//2. replace underscore where matched
const replaceMatches = (letter, randomWord, hiddenWord) => {
  for(let i = 0; i < randomWord.length; i++){
    let currChar = randomWord[i]
    if(currChar === letter){
      hiddenWord[i] = letter;
    }
  }
  return hiddenWord;
}
// let result = replaceMatches('a','car',['_','_','_'])
// let result2 = replaceMatches('z','car', result)
// let result3 = replaceMatches('c','car', result2)
// let result4 = replaceMatches('r','car', result3)
// console.log(result4)

const startGame = () => {
let randomWord = getRandomWord(words)
let hiddenWord = createHiddenWord(randomWord)
let tries = 6;
//console.log(randomWord) - don't want to show the word

//1. check user answer against randomWord
while(tries > 1 && !(hiddenWord.join('') === randomWord)){
  console.log("=============")
  console.log(` => Tries: ${tries}`)
  console.log(hiddenWord.join(''))
  const answer = readlineSync.question("Type a letter: ")

  if (isLetterInWord(answer, randomWord)){
  hiddenWord = replaceMatches(answer, randomWord, hiddenWord);
  //  console.log("Yay ! that letter is in the word")
  }else{
    tries--;
    console.log("Nope ! that letter is NOT in the word")
  }
}
}
startGame()
