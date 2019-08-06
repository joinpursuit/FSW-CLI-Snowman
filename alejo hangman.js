const readlineSync = require('readline-sync');

let words = ['daddy', 'bubble', 'button','car'];

const getRandomWord = (words) => {
  let randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}


const createHiddenWord = (word) => {
  let hiddenWord = word.split('').map(char => {return '_'})
  return hiddenWord
}

// const createHiddenWord2 = (word) => {
//   let hiddenWord = [];
//   for (i = 0; i < word.length; i++) {
//     hiddenWord.push('_');
//   } return hiddenWord
// }
const isLetterInWord = (letter, word) => {
  return word.includes(letter)
}
const replaceMatchedLetter = (letter, randomWord, hiddenWord) => {
  for (let i = 0; i < randomWord.length; i++) {
    let currentchar = randomWord[i];
    if (currentchar === letter) {
      hiddenWord[i] = letter;
    }
  }
  return hiddenWord;
}


 const startGame = () => {
   let randomWord = getRandomWord(words);
   console.log(randomWord);
   let hiddenWord = createHiddenWord(randomWord);
   console.log(hiddenWord.join(''));
   let tries = 6;


   while(tries > 0 && hiddenWord.join('')  !== randomWord){
     const answer = readlineSync.question('Type a letter: ');
     if (isLetterInWord(answer, randomWord)){
       console.log('yes');
       hiddenWord = replaceMatchedLetter(answer, randomWord, hiddenWord);
       console.log(hiddenWord);
     } else{
       console.log('no');
       console.log(`you have ${tries-1} remaining`);
       tries--;
     }
   }
 }
 startGame();
