const {allTheWords} = require("./word.js")

class ComputerPlayer {
    constructor() {
        this.dictionary = allTheWords
        this.secretWord = ""        
    }
    
    secretWord() {
        this.secretWord = Math.floor(Math.random() * this.dictionary.length)
        return this.secretWord.length
    }

    reveal() {
        return this.secretWord
    }

    
}






module.exports = ComputerPlayer