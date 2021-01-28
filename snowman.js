// 1. Choose a word
const readline = require("readline-sync");

const dictionary = require("./dictionary")
let word = dictionary[Math.floor(Math.random() * dictionary.length)];
let abcArr = [];
// let maxGuess = 8;
// let answerArr = [];
// let wordArr = [];

let obj = {
 abcArr:[],
 maxGuess: 8,
 answerArr:[],
 wordArr:[],
}



// contains: does this string contain a character (.includes)

function startGame() {
  console.log("Welcome to Snowman");
  console.log(
    "This game is to help, work on spelling, identifying words in the English Language"
  );
  dash(word);
  //console.log(word);
  
  //until they run out of obj[maxGuess] or solve the word (snowman)

  while (obj.maxGuess > 0) {
    console.log(obj.answerArr.join(""));
    let letter = getValidLetterGuess();
    console.log(letterReminder(letter));
    correctLetters(letter);
    console.log("Total amount of guesses left " + maxGuesser(letter));
  if (!obj.answerArr.includes("_ ")) {
    console.clear(word)
    console.log("CONGRATULATION YOU WON \nTotal Amount of Guesses Used: "+ obj.abcArr.length);
    resetGame();
  }else if (obj.maxGuess === 0){
    console.clear(word)
    console.log("YOU LOSE.\nThe correct answer is: "+(word)+ "\nTotal Amount of Guesses Used: "+ obj.abcArr.length)
    resetGame()
  }
   
  }
}
  //incorrectGuess()


// 2. Created the dashes equalivent to the amount of letter in the word
function dash(word) {
  // let blank = ""
  for (let i = 0; i < word.length; i++) {
    //  blank = blank + "_ "
    obj.answerArr.push("_ ");
    obj.wordArr.push(word[i]);
    //  wordArr.push(" ")
  }
  // console.log(wordArr.join(""));
  return obj.answerArr;
}

// 3. Player chooses letter/ Makes first guess (Loops)
function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase();
  }
  let letter = "";
  while (!letter) {
    let input = readline.question("Please enter your guess: ").toLowerCase();
    if (guessIsValid(input)) {
      letter = input;
    } else {
      console.log("Please enter a valid letter.");
    }
  }
  console.log(abcArr)
  console.clear()
  return letter.toLowerCase();
  
}
// 4. Letters used are posted as reminder

function letterReminder(letter) {
  if (!obj.abcArr.includes(letter)) {
    obj.abcArr.push(letter);
  }
  return ("Current Letters Guessed: " + obj.abcArr.join(" "));
}

//word[j] === letter &&
//if else statement
// 5. If correct let letter  posted in _ spots

function correctLetters(letter) {
  for (let j = 0; j < word.length; j++) {
    if (obj.wordArr[j] === letter) {
      //replace dash with letter
      obj.answerArr[j] = letter;
      // console.log(answerArr[j+1]=" ")
    }
  }
  return obj.answerArr;
}

// let remainingLetters = word.length
// 6. Guesses don't decrement if the guess is correct (--)decrement for loop
// 7. If not correct guesses reduce
// 8. Once letter is used letter cannot be used again

function maxGuesser(letter) {
  if (!word.includes(letter)) {
  obj.maxGuess = obj.maxGuess- 1;
  }
  return obj.maxGuess;
}


// 9. If guesses run out player loses game loop isn't working 
function resetGame(){
    if (readline.keyInYN("Would you like to play again?")) {
      word = dictionary[Math.floor(Math.random() * dictionary.length)],
      obj = {
        abcArr:[],
        maxGuess: 8,
        answerArr:[],
        wordArr:[],
       }
      console.clear()
      startGame();
    } else {
      leaveGame()
    }
  }
  
  function leaveGame(){
    process.exit("See you next time.");
  }
// 10. If word is solves "Win Game"
startGame();
