class ComputerPlayer {
    constructor(){
        // this.word = "applecider"
        this.index = undefined
        this.secondIndex = undefined
        this.reamingingMove = 9;
        this.letterGues = []
        this.letterRight =0;
    }
    checkLetter(letter,word){
        let cLetter = letter // when placed in other class letter will be an arugument 
        if(!isNaN(Number(cLetter))) { // Checking if word is a number
            this.index = undefined
            console.log((`This ${cLetter} is not a Valid Letter`))
        } else {
        this.letterGues.push(cLetter)
        console.log("Letters guessed = " + this.letterGues)
            for (let i = 0; i < word.length; i++) {
                if(cLetter === word[i]){
                    // console.log("Index = " + this.index)// show index of letter
                    this.secondIndex =this.index
                    this.letterRight++
                   return  this.index =i // if i take out the return here i will get both indexs of dup letters
                }  
            }
            this.reamingingMove--
            // console.log("Index is = "+this.index) // checking the index of a letter
            // console.log("sIndex is = "+this.secondIndex) // checking the dup index 
            console.log("Chance Remaining = "+this.reamingingMove)
             this.index = undefined
        }
    }
    cpuWord(){
        let randomWords = ["apple","able", "about", "account", "acid", "across", "addition", "adjustment","applecider","app"];
        // console.log(Math.floor(Math.random()*10)) // was testing to see if it works
         // console.log(randomWords[Math.floor(Math.random()*10)]) // was testing to see if it works

        return randomWords[(Math.floor(Math.random()*10))]
    }
    winOrLose(word){
        if(this.letterRight === word.length){
            console.log("Congrats you Win")
            return true
        } else if(this.reamingingMove === 0 ){
            console.log("Sorry but you failed!!!")
            return false
        }
    }
    dupLetter(arr,letter){
        console.log(`you used that already here is letters used ${this.letterGues}`)
        
    }
}
module.exports = ComputerPlayer;

//I need to take out the else and just push the new letter to guesses. Also i need an else if that (Number(letter) !== NaN) because
//NaN !== NaN = true -- might not work
//also when game runs the blank letters should show first! Switch code around in game. Call blankLetters first then call letter
//Create an else if that checks if wrong letter is a letter. then checks if letter is a number.
//make the check return 2 indeies on board make it take two indexs but set the second to undifed
//just have to make the game keep going, & dup letters
