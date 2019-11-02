const Dictionary = require("./dictionary.js");
const Moves = require("./moves.js");

class ComputerPlayer {
    constructor(dictionary = Dictionary) {
        this.dictionary = dictionary;
        this.newWord = [];
        this.MOVES = Moves;
        this.difficulty;
    } 

    WordDiff1() {
        while(this.newWord.length > 4) {
            this.newWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        }
    } 

    WordDiff2() {
        while(this.newWord.length > 7 || this.newWord.length < 5) {
            this.newWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        }
    } 

    WordDiff3() {
        while(this.newWord.length > 10 || this.newWord.length < 8) {
            this.newWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        }
    } 

   WordDiff4() {
        while(this.newWord.length < 11) {
            this.newWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        }
    } 

    Word() {
        this.newWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        switch(this.difficulty) {
            case 1:
                this.WordDiff1();
                break;

            case 2:
                this.WordDiff2();
                break;

            case 3:
                this.WordDiff3();
                break;
            
            case 4:
                this.WordDiff4();
                break;
        }
        return this.newWord.length;
    } 

    revealWord(board) {
        return `The answer was "${board.answer.join("").toUpperCase()}".`;
    } 

    randomLetter() {
        return this.MOVES[Math.floor(Math.random() * 27) - 1];
    } 

    getMove(referee, guessesArr, board) {
        let newWordArr = referee.newWord.split("");
        let guess = this.randomLetter();
        
        let NotRepeat = false;
        while(!NotRepeat) {
            if(!newWordArr.includes("a") && !newWordArr.includes("e") && !newWordArr.includes("i") && !newWordArr.includes("o") && !newWordArr.includes("u")) {
                guess = this.getMoveNoVowels(["a", "e", "i", "o", "u"]);

                if(guessesArr.includes(guess) || !board.isValidMove(guess)) {
                    guess = this.getMoveNoVowels(["a", "e", "i", "o", "u"]);
                } else {
                    guessNotRepeat = true;
                    break;
                }
            }

            if(guessesArr.includes(guess) || !board.ValidMove(guess)) {
                guess = this.randomLetter();
            } else {
                NotRepeat = true;
                break;
            }
            
        } 
        return guess;
    } 


    getMoveNoVowels(vowels, guess) {
        while(vowels.includes(guess) || guess === undefined) {
            guess = this.randomLetter();
        } 

        return guess;
    } 

}

module.exports = ComputerPlayer;