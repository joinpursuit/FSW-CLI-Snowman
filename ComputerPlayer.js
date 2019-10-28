const Dictionary = require("./dictionary.js");
const HumanPlayer = require("./HumanPlayer.js");

class ComputerPlayer {
    constructor(dictionary = Dictionary) {
        this.dictionary = dictionary;
        this.newWord = [];
        this.MOVES = {
            1: "a",
            2: "b",
            3: "c",
            4: "d",
            5: "e",
            6: "f",
            7: "g", 
            8: "h",
            9: "i",
            10: "j",
            11: "k",
            12: "l",
            13: "m",
            14: "n",
            15: "o",
            16: "p",
            17: "q",
            18: "r",
            19: "s",
            20: "t",
            21: "u",
            22: "v",
            23: "w",
            24: "x",
            25: "y",
            26: "z"
        } // End of this.Moves Object
    } // End of constructor

    secretWord() {
        let wordIndex = Math.floor(Math.random() * this.dictionary.length - 1);
        this.newWord = this.dictionary[wordIndex];
        return this.newWord;
    } // End of secretWord() function

    revealWord(board) {
        return `The word was "${board.answer.join("").toUpperCase()}".`;
    } // End of revealWord() function

    getMove() {
        return this.MOVES[Math.floor(Math.random() * 26) - 1];
    } // End of getMove() function
}

module.exports = ComputerPlayer;