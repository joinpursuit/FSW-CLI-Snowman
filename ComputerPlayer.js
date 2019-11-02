const allTheWords = require("./words.js")
class ComputerPlayer{
    constructor(){
        this.dictionary = allTheWords;
    }
    secretWord(){
        let randIndx = Math.floor(Math.random() * this.dictionary.length)
        return this.dictionary[randIndx]
    }
    reveal(){
        let revealLtr = [];
        let  i = 0;
        while(i < this.word.length){
            revealLtr.push(this.word[i]);
            i++;
        }
        return revealLtr.join("");
    }
    guessedCharacters(gsWrd){
        let guessedLtr = [];
        let i = 0;
        while(i < this.word.length){
            if(gsWrd === this.word[i]){
                guessedLtr.push(i);
            }
            i++;
        }
        return guessedLtr
    }
}
module.exports = ComputerPlayer