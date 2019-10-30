class Board {
    constructor(word){
        this.word = word
        // this.reamingingMove = 9;
        this.winner = undefined;
        // this.letterGues = []
        this.blank = new Array(this.word.length).fill("_")
        // this.index = undefined
    }
  
     blankLetters(letter,num){
         this.blank[num] = letter
        //  console.log("THis is Blank WOrds = "+ this.blank)
        //  console.log("This letters guessed = "+ this.letterGues)d
         return (this.blank)
         
     }
}

// let word = new Board ("apple")
module.exports = Board;


//YOu need to create a computer player that submits the word. also you need a wrong method that will log the amount of trys you have left
//also in Game you should make the computer print the blank lines and that should come first. the cpu should also tell you if your wrong
//use method that ittirates thru word and chages all indexs


  // checkLetter(letter){
    //     let cLetter = letter // when placed in other class letter will be an arugument 
    //         for (let i = 0; i < this.word.length; i++) {
    //             if(cLetter === this.word[i]){
    //                 this.index =i
    //                 // console.log("this is c = " +cLetter)
    //                 // console.log("this is i = " +i)
    //               this.blankLetters(cLetter)
    //              } 
    //     //  this.reamingingMove--
    //     //  console.log ("Please enter a valid number")
     
    //         }// end of loop
    //     // this.letterGues.push(letter)
    //     // this.blankLetters(letter)

    //             return ""
    //  }