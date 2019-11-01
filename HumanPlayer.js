const readline = require('readline-sync')

class HumanPlayer {
    constructor(name){
        this.name = name;
        // this.guess = guess;
    }
    getMove(){
        return this.name + " would make a move now" + readline.question("what is your letter guess")
    }
    getBoard(){

    }
    secretWord(){

    }
    givePostions(){

    }
    revealWord(){

    }
}


module.exports = HumanPlayer;
