const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js");

class ComputerPlayer {
    constructor(dictionary) {
        this.dictionary = dictionary;
        this.newWord = [];
    }

    secretWord() {
        let wordIndex = Math.floor(Math.random() * this.dictionary.length - 1);
        this.newWord = this.dictionary[wordIndex]
        return this.newWord;
    }

    revealWord() {
        Board.board = this.newWord;
    }

}

module.exports = ComputerPlayer;