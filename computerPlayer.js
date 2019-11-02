/* ComputerPlayer
Should have a dictionary.
Should have secretWord and return it's length.
Should have a reveal.
Should give the positions of guessed characters.
Possibly have a getMove.*/


const {
    randomWordList
} = require("./randomWordList.js")

class ComputerPlayer {
    constructor(computer) {
        this.computer = computer;
        this.secretWord = randomWordList[Math.floor(Math.random() * (randomWordList.length))];
    }
    secretWordMethod() {
        return this.secretWord.length
    }
    reveal() {
        return this.secretWord
    }
}

let test = computerPlayer("hello")
console.log(test.secretWord)
console.log(test.reveal())


module.exports = randomWordList;