//HangMan Game

//intial variables//

//user input and output
//const readline = require('readline-sync');
//var rl = readline.createInterface(process.stdin,process.stdout);


//words
const words = ['fat', 'hat', 'rat', 'smile', 'book', 'took', 'principle', 'student'];

const getRandomWord = (words) => {
    let randNum = Math.floor(Math.random() * words.length);
    return words[randNum];
}

const createHiddenWord = (word) => {
    let progressWord = document.querySelector("#progress_word");
    let dashes =  "_ ".repeat(word.length) //word.split('').map(char => {return '_'}); 
    progressWord.innerText = dashes; 

    // let hiddenWord = word.split('').map(char => { return '_'})
    // return hiddenWord;
}
document.addEventListener("DOMContentLoaded",() => {
    createHiddenWord(randomWord);
    let userInput = document.querySelector("#userInput");
    let form = document.querySelector("form"); //document.querySelector("#input[type=sumbit]");
    form.addEventListener("sumbit",HandleSubmit);
    console.log(userInput.value);
})

let HandleSubmit = (event) =>{
    event.preventDefault();
    console.log("button was clicked");
}

let randomWord = getRandomWord(words)
console.log(randomWord);


switch(live)//function and variable u want to switch
{
    case 6: //first case
    ///insert code u want to execute here
    break; // end this case

    case 5:
        ////same thing here
    break;//make sure u break

    default: //this is here just incase something unexpected happens
    //inset failsafe code here;
    break;
}

// const isLetterInWord = (letter, word) =>{
//     return word.includes(letter);
// }

// const replaceMatches = (letter,randomWord,hiddenWord) => {
//     for(let i = 0; i < randomWord.length; i++){
//         let crrChar = randomWord[i];
//         if (crrChar === letter){
//             hiddenWord[i] = letter;
//         }
//     }
//     return hiddenWord;
// }





// const startGame = () =>{ 
//     let randomWord = getRandomWord(words);
//     let hiddenWord = createHiddenWord(randomWord);
//     let welcome = "\t\tWelcome to HangMan";
//     console.log(welcome);
//     console.log(hiddenWord.join(' '));
    
//     let tries = 6;
//     while(tries > 0 && hiddenWord.join('') !== randomWord){
        
//         const answer = readline.question('Type a Letter: ' )
//         console.log(`You typed ${answer}`)
//         console.log(hiddenWord.join(' '));
        
//         //1. Check User Answer against randomWord.
//         if (isLetterInWord(answer,randomWord)){
//             console.clear();
//             console.log(welcome)
//             hiddenWord = replaceMatches(answer,randomWord,hiddenWord);
//             console.log(hiddenWord.join(' '));
//             console.log('That letter is in the word');
//             console.log(`You have ${tries} left`);
    
//         }else{
//             tries --;
//             console.clear();
//             console.log(welcome);
//             console.log(hiddenWord.join(' '));
//             console.log("It's not in the word");
//             console.log(`You have ${tries} left`);
//         }
//     }
//     if (hiddenWord.join('') === randomWord){
//         console.clear();
//         console.log(welcome)
//         //hiddenWord = replaceMatches(answer,randomWord,hiddenWord);
//         console.log(hiddenWord.join(' '));
//         console.log('You Won!!');

//     }
    
    
//     //2. Replace underscore where match is found.
    
// }

// startGame();




