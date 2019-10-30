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

    charsGuessed(){
        let guessedChars = []
        
    }


}


//test referee
let ref = new Referee("cor");
console.log(ref.secretWordLength());
console.log(ref.reveal())



module.exports = Referee
