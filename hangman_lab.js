// const readline = require('readline-sync');

// let allTheWords = ["able", "about", "account", "pink", "bottle", "brain", "brick", "bridge", "cook", "copper", "copy", "dress", "driving", "elastic", "electric", "language"]

// let word = allTheWords[Math.floor(Math.random() * allTheWords.length)];
//
// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//   answerArray[i] = "_";
// }
//
// let remainingLetters = word.length;
//
//   while (remainingLetters > 0) {
//     console.log(answerArray.join(" "))
//     let guess = readline.question("Please enter your guess: ")
//       if (guess.length > 1) {
//         readline.question("Please enter a single letter.")
//       } else {
//         for (let j = 0; j < word.length; j++) {
//           if (word[j] === guess) {
//             answerArray[j] = guess;
//             remainingLetters--;
//           }
//         }
//       }
//     console.log(answerArray.join(" "));
//     // console.log(`Good job! The answer was ${word}.`);
//   }


const readlineSync = require('readline-sync') // to call a code that is outside of ours, importing
// the module or code we didn't write. A package module or NPM
let words = ['mommy', 'bubble', 'button', 'car']
const getRandomWord = (words) => {
 let randomIndex = Math.floor(Math.random() * words.length)
 return words[randomIndex]
} // creates a random word
const createHiddenWord = (word) => {
 let hiddenWord = word.split('').map(char => {return '_'}) // creates an array of characters
 return hiddenWord
}

const createHiddenWord2 = (word) => {
 let hiddenWord = [];
 for(let i = 0; i < word.length; i ++) {
   hiddenWord.push('_')
 } return hiddenWord
} // pushes underscores
const isLetterInWord = (letter, word) => {
 return word.includes(letter) // includes lives in string class so all strings share it and have it.
 //checks if a string has a certain character with a T/Fanswer
}

// replace underscore where match is found
const replaceMatches = (letter, randomWord, hiddenWord) => {
  for (let i = 0; i < randomWord.length; i++) {
//    let crrchar = randomWord[i]
    if (randomWord[i] === letter) {
      hiddenWord[i] = letter;
    }
  }
  return hiddenWord;
}


//check user answer against random word with a T/F answer
const startGame = () => {
  let randomWord = getRandomWord(words);
  let hiddenWord = createHiddenWord(randomWord);

//  console.log(randomWord)
  console.log(hiddenWord.join(''))

   let tries = 6;
   while(tries > 1 && !(hiddenWord.join('') === randomWord)) {
     console.log(`=> Tries: ${tries}`)
     console.log('=>', hiddenWord.join(''))
     const answer = readlineSync.question('Type a letter: ') // 1.check user answer against randomWord
      if(isLetterInWord(answer, randomWord)) {
        hiddenWord = replaceMatches(answer, randomWord, hiddenWord);
      } else {
        tries --;
        console.log("Nope! That letter is NOT in the word")
      }
   }
}

startGame()
