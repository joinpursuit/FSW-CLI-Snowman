// 3. ComputerPlayer 
//   * Should have a dictionary.
//   * Should have secretWord and return it's length. 
//   * Should have a reveal. 
//   * Should give the positions of guessed characters. 
//   * Possibly have a getMove. 
const { dictionary : words } = require("./words.js")

class ComputerPlayer {
    constructor(name) {
      this.name = name;
      this.dictionary = words;
      this.secretWord = this.dictionary[Math.floor(Math.random()) * (this.dictionary.length)];
      }

      word() {
        let words = Math.floor(Math.random()) * (this.board.length)
        for (let i = 0; i < word; i++) {
            this.board.push(this.board.shift())
            return words.length
        } 

      revealWord() {
        let reveal = []
        let i =0;
        while (i < this.word.length) {
          reveal.push(this.word[i])
        }
        i++
      }




    }
  




    
  }
    let Referee = new ComputerPlayer("Marbin");
   
    console.log(Referee.word());
  



  module.exports = ComputerPlayer