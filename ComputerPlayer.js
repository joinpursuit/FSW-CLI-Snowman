const Dictionary = require("./dictionary.js");
const Moves = require("./moves.js");

class ComputerPlayer {
    constructor(dictionary = Dictionary) {
        this.dictionary = dictionary;
        this.newWord = [];
        this.MOVES = Moves;
        this.difficulty;
    } // End of constructor

    secretWordDiff1() {
        while(this.newWord.length > 4) {
            this.newWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        }
    } // End of secretWordDiff1() function

    secretWordDiff2() {
        while(this.newWord.length > 7 || this.newWord.length < 5) {
            this.newWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        }
    } // End of secretWordDiff2() function

    secretWordDiff3() {
        while(this.newWord.length > 10 || this.newWord.length < 8) {
            this.newWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        }
    } // End of secretWordDiff3() function

    secretWordDiff4() {
        while(this.newWord.length < 11) {
            this.newWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        }
    } // End of secretWordDiff4() function

    secretWord() {
        this.newWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        switch(this.difficulty) {
            case 1:
                this.secretWordDiff1();
                break;

            case 2:
                this.secretWordDiff2();
                break;

            case 3:
                this.secretWordDiff3();
                break;
            
            case 4:
                this.secretWordDiff4();
                break;
        }
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

}

module.exports = ComputerPlayer;