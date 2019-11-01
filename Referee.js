const {dictionary} = require('./dictionary.js');  

class Referee {
    constructor(referee){
        this.referee = referee;
        this.word = dictionary[(Math.floor(Math.random() * dictionary.length))];
    }

    // Computer should be able to get secretWord and return length
    secretWordLength(){
        let secretWord = this.word;
        return secretWord.length;
    }

    // Computer needs to reveal word if not found or found
    reveal(){
        let revealStr = [];
        for(let i = 0; i < this.word.length; i++){
            revealStr.push(this.word[i]);
        }
        return revealStr.join(" ");
    }

    // Computer should be able to have an array of letter indices that can check where letters are in the word
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

module.exports = Referee

// TEST Referee
// let ref = new Referee("cor");
// console.log(ref.secretWordLength());
// console.log(ref.reveal())



