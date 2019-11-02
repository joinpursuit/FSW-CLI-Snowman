const {words} = require("./words.js");
const {ComputerPlayer} = require("./ComputerPlayer.js")

class Board {
    constructor() {
        this.words = words;
        this.board = new Array (this.words.length);
        // this.result = results;
        this.ComputerPlayer = ComputerPlayer;
    }
    boardFill() {
        let ref = new ComputerPlayer();
        let chosenWord = ref.getSecretWord();
        let fill = [];

        for(let i = 0; i < chosenWord.length; i++) {
            fill.push("_")
        }
        console.log(fill, chosenWord);

     
        //this.words = getSecretWord(words);
    }
    secretAnswer() {
        this.secretAnswer = words.split("");
        for(let i = 0; i < words.length; i ++) {
            this.secretAnswer[i] = "_"
        }
    }
    charsAdded(char){
        for(let i = 0; i < this.words.length; i++) {
            if(this.words[i] === char) {
                this.board[i] = char;
            }
        }
    }
}


// module.exports = {Board()}

let boardA = new Board();
console.log(boardA.boardFill());