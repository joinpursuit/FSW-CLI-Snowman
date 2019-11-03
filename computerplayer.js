const readline = require('readline-sync')
const game = require('./game.js')
const {allTheWords}=require('./words.js')
class computerPlayer{
  constructor(name = 'Robo'){
    this.dictionary=allTheWords
    this.name = name
  }
  chooseSecretWord(){
    let idx = Math.floor(Math.random()*this.dictionary.length)
    this.sercretWord = this.dictionary[idx]
    return this.sercretWord.length
    
  }
  checkGuess(char){
 let indices = []
 for(let i = 0; i < this.sercretWord.length; i++){
   if(this.sercretWord[i] === char){
    indices.push(i)
   }
 }
 return indices
  }
  reveal(){
    return this.sercretWord
  }
    
  
}
// let letters = [];

// class Letter {
//   constructor(name) {
//     this.name = name;
//     this.isInSolution = false;
//     this.isGuessed = false;
//     Letter.newLetterArray(this); 
//   }

//   currentWord() {
//     this.isInSolution = true;
//     game.hiddenLetters[this.name] = true;
//   }
//   guessed() {
//     this.isGuessed = true;
//     game.hiddenLetters[this.name] = false;
//   }
//   reset() {
//     this.isInSolution = false;
//     this.isGuessed = false;
//     game.hiddenLetters[this.name] = false;
//   }
//   static newLetterArray(el) {
//       letters.push(el);
//   }
// }

// let letterA = new Letter("a");
// let letterB = new Letter("b");
// let letterC = new Letter("c");
// let letterD = new Letter("d");
// let letterE = new Letter("e");
// let letterF = new Letter("f");
// let letterG = new Letter("g");
// let letterH = new Letter("h");
// let letterI = new Letter("i");
// let letterJ = new Letter("j");
// let letterK = new Letter("k");
// let letterL = new Letter("l");
// let letterM = new Letter("m");
// let letterN = new Letter("n");
// let letterO = new Letter("o");
// let letterP = new Letter("p");
// let letterQ = new Letter("q");
// let letterR = new Letter("r");
// let letterS = new Letter("s");
// let letterT = new Letter("t");
// let letterU = new Letter("u");
// let letterV = new Letter("v");
// let letterW = new Letter("w");
// let letterX = new Letter("x");
// let letterY = new Letter("y");
// let letterZ = new Letter("z");

// const isLetter = (char) => {
//   return char.toLowerCase() !== char.toUpperCase();
// }
// const startWord = (solution) => {
//     game.hiddenLetters = {};
//     for (let char of solution) {
//       if (isLetter(char) && !game.hiddenLetters[char.toLowerCase()]) {
//         let letterVar = eval("letter" + char.toUpperCase());
//         letterVar.currentWord();
//       }
//     }
//   }




module.exports = computerPlayer;
let robo = new computerPlayer()
console.log(robo.chooseSecretWord())
console.log(robo)
console.log(robo.reveal())
console.log(robo.checkGuess('a'))
console.log(robo.checkGuess('e'))
console.log(robo.checkGuess('i'))
console.log(robo.checkGuess('e'))
console.log(robo.checkGuess('o'))
console.log(robo.checkGuess('u'))

