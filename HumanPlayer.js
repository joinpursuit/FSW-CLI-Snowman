// Will need to getMove from player.
// Display the board.
// Possibly a select secret word that returns the length.
// Possibly a givePostioins that returns an array of indicies.
// Possibly a reveal word.
Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@Kelvin-Arellano 
10
1515joinpursuit/6.4-lecture-notes
 Code Issues 0 Pull requests 0 Actions Projects 0 Wiki Security Insights
6.4-lecture-notes/UNIT1/hangman/HumanPlayer.js
@coreyladovsky coreyladovsky computer player
94cc891 16 days ago
43 lines (32 sloc)  1.02 KB
  
const readline = require('readline-sync');

class HumanPlayer {
  constructor(name) {
    this.name = name;
  }

  getMove() {
    return readline.question("Please Enter a char: ").toLowerCase();
  }

  displayBoard(board) {
    let output = "";
    for (let i = 0; i < board.length(); i++) {
      output += board.get(i) + " ";
    }
    console.log(output);
  }

  chooseSecretWord() {
    return readline.questionInt(this.name + " Enter the length of your word: ")
  }

  checkGuess(char) {
    console.log(char + " was guessed")
    console.log("Please enter the position of the character");
    console.log("if the character appears more than once separate by a comma");
    console.log("If your word is hello and the guess is l, you response should look like 3,4");
    let guess = readline.question("")
    let result = guess.split(",").map(el => Number(el) - 1)
    return result[0] === -1 ? [] : result
    
    
  }

  reveal() {
    return readline.question("What was your word? ").toLowerCase();
  }
}

module.exports = HumanPlayer;