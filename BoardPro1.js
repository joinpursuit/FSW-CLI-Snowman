
class Board {
    constructor() {
        this.word = //grab from file;
            this.letters = new Set();

        this.maxGuesses = 6;
        this.failedGuesses = 0;
    }
    //display hidden word with underscores
    secretWord() {
        let display = "";

        for (let l of this.word) {
            display += (this.letters.has(l) ? l + " " : "_ ");
        }
        return display
    }
    //show guessed letters not in word
    letterNotInWord() {
        return "Guessed Letters: " + Array.from(this.letters);
    }
    //show number of failed guesses
    failedGuesses() {
        return "failed guesses: " + this.failedGuesses;
    }
}



module.exports = Board;