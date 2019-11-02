const {allTheWords} = require("./word.js")
const Board = require("./Board.js")

class ComputerPlayer {
    constructor() {
        this.dictionary = allTheWords
        this.word = ""        
    }
    
    secretWord() {
        for (let i = 0; i < this.dictionary.length; i++){
        let words = Math.floor(Math.random() * this.dictionary.length)
        return this.dictionary[words]
        }
    }

    reveal() {
        return this.secretWord()
    }

}

let robo = new ComputerPlayer()
console.log(robo.secretWord())

module.exports = ComputerPlayer




module.exports = ComputerPlayer