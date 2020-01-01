// Should have a dictionary.
// Should have secretWord and return it's length.
// Should have a reveal.
// Should give the positions of guessed characters.
// Possibly have a getMove.
const {allTheWords} = require("./words.js")

class ComputerPlayer{
    constructor(name="AM"){
        this.name = name
        this.secretWord = allTheWords[Math.floor(Math.random() * allTheWords.length)]
    }
    secret(){
        this.word
    }
}
module.exports = ComputerPlayer