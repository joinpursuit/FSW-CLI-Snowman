const HumanPlayer = require("./HumanPlayer.js");

class HumanPlayer {
    constructor(name) {
        this.name = name;
    }
    getMove() {
        return readline.questions("What is your first guess?")
    }
    // static saySomething()
}