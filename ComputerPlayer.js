const allTheWords = require("./words.js")
class ComputerPlayer{
    constructor(){
        this.dictionary = allTheWords;
    }
    secretWord(){
        let randIndx = Math.floor(Math.random() * this.dictionary.length)
        return this.dictionary[randIndx]
    }
    reveal(){

    }
    guessedCharacters(){

    }
    getMove(){

    }
}
let comp = new ComputerPlayer()
console.log(comp.secretWord())