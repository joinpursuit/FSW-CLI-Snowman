const {allTheWords} = require('./words.js');

class ComputerPlayer {
    constructor(computer) {
        this.computer = computer;
        this.word = allTheWords[(Math.floor(Math.random() * allTheWords.length))];
    }
    returnLength() {
        let secretWord = this.word;
        return secretWord.length;
    }
    reveal() {
        let revealStr = []; 
        for(let i = 0; i < this.word.length; i++) {
            revealStr.push(this.word[i]);
        }
        return revealStr.join(" ");
    }
    charGuess(letterGuess) {
        let guessChar = []
        for(let i = 0; i < this.word.length; i++) {
            if(guessLetter === this.word[i]) {
                guessChar.push(i);
            }
        }
        return guessChar;
    } 
}


module.exports = ComputerPlayer