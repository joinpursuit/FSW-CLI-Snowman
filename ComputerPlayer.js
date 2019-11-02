const {allTheWords} = require('./words.js');

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

class ComputerPlayer {
    constructor() {
        // this.word = allTheWords
        this.word = allTheWords[(Math.floor(Math.random() * allTheWords.length))];
    }
    returnLength() {
        return this.word.length;
    }
    reveal() {
        return this.word;
    }
    givePositions() {
        let guessIdx = []
        for(let i = 0; i < this.word.length; i++) {
            if(guessChar === this.word[i]) {
                guessIdx.push(i)
            }
        }
        return guessIdx
    } 
    // getMove() {
    //    return alphabet[Math.random() * ]
    // }
    // secretWord() {
    //     let secretWord = this.dictionary[Math.round(Math.random() * (this.dictionary.length) - 1)];
    //     return secretWord.length;
    // }

}

// let comp = new ComputerPlayer()
// console.log(comp)
// console.log(comp.returnLength());
// console.log(comp.getMove());