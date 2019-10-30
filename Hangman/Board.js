const {words} = require("./words.js")

class Board {
    constructor(length, remainingLetters) {
        this.length = length;
        this.remainingLetters = remainingLetters

    }
    board(length) {//which way is best? are they're kind of doing the same thing but which is more efficent?
        this.board = new Array(length).fill("-")
    }
    secretAnswer() {//could use map how? || how do I invoke/test this? do i need to pass anything through?
    this.secretAnswer = secretAnswer = [];
    for (let i = 0; i < words.length; i++) {
        secretAnswer[i] = "_"
    }
    return remainaigLetters = words.length;
    }

}

let board = new Board();
console.log(board.board())