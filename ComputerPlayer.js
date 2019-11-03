const Dictionary = require("./dictionary.js");
const Moves = require("./moves.js");

class ComputerPlayer {
    constructor(dictionary = Dictionary) {
        this.dictionary = dictionary;
        this.newWord = "";
        this.MOVES = Moves;
        this.difficulty;
    } // End of constructor

    secretWordDiffBetter(lengthArr) {
        this.newWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        if(lengthArr[1]) {
            while(this.newWord.length < lengthArr[0] || this.newWord.length > lengthArr[1]) {
                this.newWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
            }
        } else {
            while(this.newWord.length < lengthArr[0]) {
                this.newWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
            }
        }
    } // End of secretWordDiff4() function

    secretWord() {
        let difficulty = { 
            1: [11],
            2: [8, 10],
            3: [5, 7],
            4: [0, 4]
        }

        this.secretWordDiffBetter(difficulty[this.difficulty])

        return this.newWord.length;
    } // End of secretWord() function

    revealWord(board) {
        return `The word was "${board.answer.join("").toUpperCase()}".`;
    } // End of revealWord() function

    randomLetter() {
        return this.MOVES[Math.floor(Math.random() * 27) - 1];
    } // End of randomLetter() function

    getMove(referee, guessesArr, board) {
        let newWordArr = referee.newWord.split("");
        let guess = this.randomLetter();
        
        let guessNotRepeat = false;
        while(!guessNotRepeat) {
            if(!newWordArr.includes("a") && !newWordArr.includes("e") && !newWordArr.includes("i") && !newWordArr.includes("o") && !newWordArr.includes("u")) {
                guess = this.getMoveNoVowels(["a", "e", "i", "o", "u"]);

                if(guessesArr.includes(guess) || !board.isValidMove(guess)) {
                    guess = this.getMoveNoVowels(["a", "e", "i", "o", "u"]);
                } else {
                    guessNotRepeat = true;
                    break;
                }
            }

            if(guessesArr.includes(guess) || !board.isValidMove(guess)) {
                guess = this.randomLetter();
            } else {
                guessNotRepeat = true;
                break;
            }
            
        } // End of guessNotRepeated
        return guess;
    } // End of getMove() function


    getMoveNoVowels(vowels, guess) {
        while(vowels.includes(guess) || guess === undefined) {
            guess = this.randomLetter();
        } // End of loop if randomLetter() returns a vowel

        return guess;
    } // End of getMoveNoVowels() function

    setDifficulty(difficulty) {
        this.difficulty = difficulty;
    }
}

module.exports = ComputerPlayer;