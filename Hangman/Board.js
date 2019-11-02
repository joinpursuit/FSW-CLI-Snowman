const {words} = require("./words.js");
const {ComputerPlayer} = require("./ComputerPlayer.js")
// const HumanPlayer = require("./HumanPlayer.js")

class Board {
    constructor() {
        this.words = "";
        this.board = [];
        // new Array (this.words.length);
        // this.ComputerPlayer = ComputerPlayer;
    }
    boardFill() {
        const ref = new ComputerPlayer();
        let str = ref.getSecretWord();
        console.log(str)//DELETE!!
        let chosenWord = str.split("");
        for(let i = 0; i < chosenWord.length; i++) {
            return chosenWord = chosenWord.fill("_");
        }
    }
    boardComplete() {
        if(this.board.join() === this.word) {
            return true
        } else {
            return false
        }
    }
    charsAdded(char) {
        for(let i = 0; i < this.word.length; i++) {
            if(this.word[i] === char) {
                this.board[i] = char
            }
        }
    }
}


// module.exports = {Board()}

let boardA = new Board();
console.log(boardA)
// console.log(charsAdded())
console.log(boardA.boardFill())
// let danielle = new HumanPlayer();
// console.log(boardA.boardFill)
// console.log(danielle.getGreeting)
// console.log(danielle.getMove)
// console.log(boardA.boardFill());




// charsAdded(char){
//     this.charsAdded = char
//     for(let i = 0; i < this.words.length; i++) {
//         if(this.words[i] === char) {
//             this.board[i] = char;
//         }
//     }
// }