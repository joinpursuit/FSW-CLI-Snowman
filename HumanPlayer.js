const readline = require('readline-sync');
// HumanPlayer 
// * Will need to getMove from player. 
// * Display the board. 
// * Possibly a select secret word that returns the length. 
// * Possibly a givePostions that returns an array of indicies. 
// * Possibly a reveal word. 

class HumanPlayer {
  constructor(name) {
    this.name = name;
  }

  getMove() {
    return readline.question("Please Enter a character: ");
  }

  displayBoard(board) {
    let word = "";
    for (let i = 0; i < board.length(); i++) {
      word += board.get(i) + " ";
    }
    console.log(word);
  }

  chooseSecretWord() {
    return readline.questionInt(this.name + " Enter the number of the length of your word: ")
  }

  checkGuess(char) {
    console.log(char + " was guessed")
    console.log("Please enter the position of the character");
    console.log("if the character appears more than once separate by a comma");
    console.log("If your word is willow and the guess is l, you response should look like 3,4");
    let guess = readline.question("")
    let result = guess.split(",").map(element => Number(element) - 1)
    return result[0] === -1 ? [] : result
    
    
  }

  reveal() {
    return readline.question("What was your word? ");
  }
}

module.exports = HumanPlayer;
let Board = require("./Board.js")
let board = new Board(6)
console.log(board.displayBoard())