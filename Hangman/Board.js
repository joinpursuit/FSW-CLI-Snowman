const {words} = require("./words.js");
const ComputerPlayer = require("./ComputerPlayer.js")
// const HumanPlayer = require("./HumanPlayer.js")

class Board {
    constructor() {
        this.words = words;
        this.board = new Array (words[i].length).fill("_");
        this.ComputerPlayer = ComputerPlayer;
    }
    boardFill() {
        let ref = new ComputerPlayer();
        let str = ref.getSecretWord(words);
        // let chosenWord = ref.getSecretWord();
        // let fill = [];
        let chosenWord = str.split("");
        for(let i = 0; i < chosenWord.length; i++) {
            return chosenWord = chosenWord.fill("_");
        }
        // return fil
        // console.log(fill, chosenWord);
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
console.log(boardA)
// boardA.boardFill()
// let danielle = new HumanPlayer();
// console.log(boardA.boardFill)
// console.log(danielle.getGreeting)
// console.log(danielle.getMove)
// console.log(boardA.boardFill());