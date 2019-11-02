const readline = require('readline-sync');

class HumanPlayer {
  constructor(name = readline.question("Welcome. What is your name?")){
    this.name = name
  }
  getMove() {
    return readline.question("Enter a letter:").toLowerCase()
  }
}

module.exports = HumanPlayer

