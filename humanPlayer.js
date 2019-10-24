//player has a name, and gives guess.
const readline = require('readline-sync');
class HumanPlayer{
  constructor(name){
    this.name = name;

  }
getGuess(){
  return getline.question("Enter a letter: ")
}

module.exports = HumanPlayer
