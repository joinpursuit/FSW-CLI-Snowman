const readline = require("readline-sync");

class HumanPlayer {
    constructor (){
        this.name = name;
    }
    guessLetter() {
        const letter = 'abcdefghijklmnopqrstuvwxyz';
        return letter[Math.floor(Math.random() * letter.length)]
    }
}

module.exports = HumanPlayerPro1;