let {words} = require("./Words.js")

class ComputerPlayer{
    constructor(name = "Roger That") {
        this.name = name
        this.dictionary = words
    }
    getMove() {
        return readline.questions("What is your letter guess")
    }
    displayBoard() {

    }
    selectWord(word) {

    }
}