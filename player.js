const readline = require('readline-sync')
const Game = require("./Game.js")
const Board = require("./Board")

class Player{
  constructor(name = 'Robo'){
    this.wordBank = words
    this.name = name
  }
  chooseSecretWord(){
    let idx = Math.floor(Math.random()*this.wordBank.length)
    this.hiddenWord = this.wordBank[idx]
    return this.hiddenWord.length
    
  }
  checkGuess(char){
    let indices = []
    for(let i = 0; i < this.hiddenWord.length; i++){
      if(this.hiddenWord[i] === char){
       indices.push(i)
      }
    }
    return indices
     }
     display(board){
       this.board = board;
     }
     turn(){
        let charBank ="qwertyuiopasdfghjklzxcvbnm"
        this.wordBank = this.wordBank.filter(el=>el.length ===this.board.length())
        let incorrect = new Set([...this.guessMade])
        for(let i = 0; i< this.board.length(); i++){
          let char = this.board.get(i)
          if(char !== "_"){
            incorrect.delete(char)
            this.wordBank = this.wordBank.filter(word=>word[i]===char);
          }
        }
        incorrect.forEach(char=>{
    
        })
        let charCount = {}
        this.wordBank.forEach(word=>{
          for(let char of word){
            charCount[char] ? charCount[char]++ : charCount[char]=1;
          }
        })
        let maximum = 0;
        let guess = null
        for(let char in charCount){
          if(charCount[char]> maximum && !this.guessMade.has(char)){
            maximum = charCount[char]
            guess = char
          }
        }
        while(!guess){
          let random = Math.floor(Math.random()*charBank.length)
          let letter = charBank[random]
          if(!this.guessMade.has(letter)){
            guess = letter
          }
        }
        this.guessMade.add(guess)
        return guess
      }
      display(board){
        this.board = board;
      }
      reveal(){
        return this.hidden
      }
}
module.exports = Player;