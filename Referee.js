
const Board = require("./Board.js");
const {dictionary} = require ('./dictionary.js');  

class Referee {
    constructor(referee){
        this.referee = referee;
        this.word = dictionary[(Math.floor(Math.random() * dictionary.length))];
    }

    // Computer should be able to get secretWord and return length
    getSecretWord(){
        return this.secretWord;     // returns secretWord from dictionary as String
    }

    // Computer needs to reveal word if not found or found
    // reveal(){
    //     let revStr = ""
    //     for(let i of this.word){
    //         revStr += 
    //     }
    // }

} 


//test referee

module.exports = Referee
