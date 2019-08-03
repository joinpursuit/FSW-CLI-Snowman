const readlineSync = require('readline-sync');

// function getValidLetterGuess() {
//   function guessIsValid(letter) {
//     return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
//   }
//   let letter = ""
//   while (!letter) {
//     let input = readline.question("Please enter your guess: ")
//     if (guessIsValid(input)) {
//       letter = input
//     } else {
//       console.log("Please enter a valid letter")
//     }
//   }
//   return letter.toLowerCase()
// }
let word  = [
  'attraction', 
  'authority', 
  'automatic', 
  'awake', 
  'help', 
  'test',
  'object'
 ];
 let hiddenWord=[];

//  let char = readlineSync.question('It is time to guess a letter:\t') 

const randoGen = (arr) =>{
  let wordGenerator = arr[Math.floor(Math.random() * word.length)];
  let ranWordSplit = wordGenerator.split('');
  console.log(ranWordSplit, "the split word")
  return ranWordSplit
}

const hiddenWordFunction = (callback1) =>{
  let test;
  let attempt =0;
  while (attempt <= 5 ) {
  let char = readlineSync.question('It is time to guess a letter:\t') 
  // let hiddenWord=[];
  let callValue = callback1;
  console.log(callValue, "the call")
  for(let i = 0; i < callValue.length; i++) {

      hiddenWord[i] = "_";
    }
    console.log(hiddenWord);
  }
    for(let l = 0; l <callValue.length; l++ ){
      //  console.log(callValue[l], "value")
      if ( callValue[l] === char){
        test = hiddenWord[l] = char
        console.log(hiddenWord, "the hiddenWord")

        //console.log(hiddenWord[l], "the current game string")
     } else if (!callValue.includes(char)) {attempt++
     }
    }   
      console.log(attempt)
      //test += hiddenWord;
      

    // }

  
  return test
}




console.log(hiddenWordFunction(randoGen(word)))
