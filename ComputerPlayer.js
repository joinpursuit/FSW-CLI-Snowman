
// 3. ComputerPlayer 
// * Should have a dictionary.
// * Should have secretWord and return it's length. 
// * Should have a reveal. 
// * Should give the positions of guessed characters. 
// * Possibly have a getMove. 

const  dictionary = ["tattarrattat", "aboutaibohphobia", "detartrated ", "aoxomoxoa", "deleveled ", "rotator ", "degged", "anna", "deed",'noon'];

class Computer {
  constructor(computer){
      this.computer = computer;
      this.word = dictionary[(Math.floor(Math.random() * dictionary.length))];
  }

  secretWordLength(){
      let secretWord = this.word;
      return secretWord.length;
  }

  reveal(){
      let revealStr = [];
      for(let i = 0; i < this.word.length; i++){
          revealStr.push(this.word[i]);
      }
      return revealStr.join(" ");
  }

  guessCharacters(guessLetter){
      let guessCharacter = []
      for (let i = 0; i < this.word.length; i++){
          if(guessLetter === this.word[i]){
              guessCharacter.push(i);
          }
      }
      return guessCharacter
  }
  
}


module.exports = Computer; 
