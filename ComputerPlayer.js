
 const { allTheWords } = require("./words.js")
// ComputerPlayer 
//   * Should have a dictionary.
//   * Should have secretWord and return it's length. 
//   * Should have a reveal. 
//   * Should give the positions of guessed characters. 
//   * Possibly have a getMove. 
// 1. The user must be able to play against the computer
// 1. The word that the computer chooses must be random. There is a large array of words below.
// 1. The user must have a limited number of guesses
// 1. After each guess, the computer should print out the current state of the word you are guessing.  (ex. A _ _ L E, for apple)
// 1. After each guess the computer should print out how many guesses you have remaining.
// 1. The computer should tell the user if she wins, show her how many guesses it took and end the current game
// 1. The user should see the correct answer if she loses

class ComputerPlayer {
    constructor(name = "Mr. Roboto") {
        this.dictionary = allTheWords;
        this.name = name; 
        this.guessesMade = guessesMade;
        let guessesMade = new Set();
    }

    displayBoard(board) {
        this.board = board; 
    }

    getMove() {
        let alph = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
        this.dictionary = this.dictionary.filter(words => words.length === this.board.length())
        let missed = new Set([...this.guessesMade])
        for(let i = 0; i < this.board.length(); i++) {
            let char = this.board.get(i)
            if(char !== "_") {
                missed.delete(char);
                this.dictionary = this.dictionary.filter(words => words[i] === char);
            }
        }

        missed.forEach(char => {
            this.dictionary = this.dictionary.filter(words => !words.includes(char))
        })

        let lettersCount = {}
        this.dictionary.forEach(words => {
            for(let char of words) {
                lettersCount[char] ? lettersCount[char]++ : lettersCount[char] = 1;
            }
        })

        let max = 0; 
        let guess = null; 

        for(let char in lettersCount) {
            if(lettersCount[char] > max && !this.guessesMade.has(char)) {
                max = lettersCount[char];
                guess = char; 
            }
        }

        while(!guess) {
            let rand = Math.floor(Math.random() * alph.length);
            let char = alph[rand];
            if(!this.guessesMade.has(char)) {
                guess = char;
            }
        }
        this.guessesMade.add(guess)
        return guess; 

    }

    chooseSecretWord() {
        let index = Math.floor(Math.random() * this.dictionary.length)
        this.secretWord = this.dictionary[index];
        return this.secretWord.length; 
    }

    checkGuess(char) {
        let indicies = [];
        for(let i = 0 ; i < this.secretWord.length; i++) {
            if(this.secretWord[i] === char) {
                indicies.push(i);
            }
        }
        return indicies
    }

    reveal() {
        return this.secretWord;
    }
}

module.exports = ComputerPlayer;

