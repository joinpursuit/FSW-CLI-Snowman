const readline = require('readline-sync')

class Word {
    constructor(word){
        this.word = word;
        this.gameO = undefined;
       this.letterCOunt = 9;
    }
    getLetter(){
       
        return readline.question("Please enter your guess: ")
    }
    checkLetter(){
       let letter = this.getLetter(); // when placed in other class letter will be an arugument 
       let idk = ""
       let svaed = []
    //    for (let i = 0; i < this.word.length; i++) {
        
           for (let j = 0; j < this.word.length; j++) {
               if(letter === this.word[j]){
                    // this.blankLetters(letter); 
                    // console.log(this.blankLetters(letter,j))
                    idk += this.blankLetters(letter,j)   // takes the letter and the index
        //    }
           
        }
        svaed.push(letter)
        console.log(idk +" your Guess")
        // console.log(svaed +" s")

        this.letterCOunt--
        return "Please enter a valid number"
    
       }
  
    }
    blankLetters(letter,num){
        let blankLetters = []
        for (let i = 0; i <= this.word.length-1; i++) {
                    blankLetters.push("_ ")
        }
         // just testing out different code: takes the number index from checkLetter
            blankLetters[num] = letter
         
        return (blankLetters)
    }
    gameOver(){
        if(this.letterCOunt === 0){
            this.gameO = true
        } else {
           this.gameO = false
        }
    }
    play(){
        while(!this.gameOver()){
            this.checkLetter();
        }
    }
}

let word = new Word ("apple")
// console.log(word.checkLetter())
word.play()

