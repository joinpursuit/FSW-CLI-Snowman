const readline = require("readline-sync");

class HumanPlayer {
    constructor(name) {
        this.name = name
    }
    getGreeting() {
        let getGreetingName = readline.question("What is your name? ")
        return getGreetingName
    }
    clear terminal();
}
let danielle = new HumanPlayer("danielle")
console.log(danielle)
console.log(danielle.getGreeting())