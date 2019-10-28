const Guesser = require("./Guesser.js");
const Board = require("./Board.js");

class Referee {
    constructor(){
        this.referee;
    }

    // Computer should be able to get secretWord and return
    getSecretWord(){
        return this.secretWord;     // returns secretWord from dictionary as String
    }

} 

//test referee


module.exports = Referee
