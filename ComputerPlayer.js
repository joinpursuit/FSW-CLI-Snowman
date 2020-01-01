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
        let secretWord = this.secretWord;
        return secretWord.length;
    }
    unsecret(){
        let wordStr = [];
        let i = 0;
        while(i < this.secretWord.length){
            wordStr.push(this.secretWord[i])
            i++
        }
        return wordStr.join(" ")
    }
}
module.exports = ComputerPlayer