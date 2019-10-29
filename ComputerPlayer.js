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
        let wordIndex = Math.floor(Math.random() * this.dictionary.length);
        this.newWord = this.dictionary[wordIndex];
        return this.newWord.length;
    } // End of secretWord() function

    revealWord(board) {
        return `The word was "${board.answer.join("").toUpperCase()}".`;
    } // End of revealWord() function

    randomLetter() {
        return this.MOVES[Math.floor(Math.random() * 27) - 1];
    }

    getMove(referee) {
        // return this.MOVES[Math.floor(Math.random() * 26) - 1];
        let vowels = ["a", "e", "i", "o", "u"];
        for(let el of vowels) {
            if(!referee.newWord.includes(el)) {
                return this.getMoveNoVowels(vowels);
            }
        }
        return this.randomLetter();
    } // End of getMove() function


    getMoveNoVowels(vowels) {
        let guess = this.randomLetter();
        console.log(guess);

        while(vowels.includes(guess) || guess === undefined) {
            guess = this.randomLetter();
            console.log(guess);
        } // End of loop if randomLetter() returns a vowel

        return guess;
    } // End of getMoveNoVowels() function
}

module.exports = ComputerPlayer;