class Referee {
    constructor(){
        // all the words Computer should be able to randomly pick as secretWord
        this.secretWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
    }

    // Computer should be able to get secretWord and return
    getSecretWord(){
        return this.secretWord;     // returns secretWord from dictionary as String
    }

    // Computer should be able to reveal word
    reveal(){

    }
} 



module.exports = Referee
