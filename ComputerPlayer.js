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

    getMove(referee, guessesArr) {
        let newWordArr = referee.newWord.split("");
        let guess = this.randomLetter();

        let guessNotRepeat = false;
        while(!guessNotRepeat) {
            if(!newWordArr.includes("a") && !newWordArr.includes("e") && !newWordArr.includes("i") && !newWordArr.includes("o") && !newWordArr.includes("u")) {
                guess = this.getMoveNoVowels(["a", "e", "i", "o", "u"]);

                if(guessesArr.includes(guess)) {
                    guess = this.getMoveNoVowels(["a", "e", "i", "o", "u"]);
                } else {
                    guessNotRepeat = true;
                    break;
                }
            }

            if(guessesArr.includes(guess)) {
                guess = this.randomLetter();
            } else {
                guessNotRepeat = true;
                break;
            }
            
        } // End of guessNotRepeated
        return guess;
    } // End of getMove() function


    getMoveNoVowels(vowels, guess) {
        // guess = this.randomLetter();

        while(vowels.includes(guess) || guess === undefined) {
            guess = this.randomLetter();
        } // End of loop if randomLetter() returns a vowel

        return guess;
    } // End of getMoveNoVowels() function
}

module.exports = ComputerPlayer;