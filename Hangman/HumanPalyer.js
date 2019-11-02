const readline = require("readline-sync");

class HumanPlayer {
    constructor(name) {
        this.name = name
    }
    getGreeting() {
        let getGreetingName = readline.question("What is your name? ")
        console.log("Hello " + this.name + "lets play a game of hangman!!!")
    }
}
let danielle = new HumanPlayer("danielle")
console.log(danielle)
console.log(danielle.getGreeting())