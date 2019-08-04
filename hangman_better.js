var readlineSync = require('readline-sync');
var randomWords = require('random-words');

let randoms = randomWords({exactly:5, wordsPerString:2, formatter: (word, index)=> {
  return index === 0 ? word.slice(0,1).toUpperCase().concat(word.slice(1)) : word;
}})
// random function below and random words array above
const randomizer = (randoms) => randoms[Math.floor(Math.random() * randoms.length)]

const hangman = () => {

  // This function turns a word into an obj where each letter is a key with value false
  // Ex: word = `Amparo` --> {a:false, m:false, p:false, r:false, o:false}
  const wrdObj = (wrd) => {
    let wrdObj = {}
    // The .toLowerCase is important becasue it wont create a seperate key for lowercase(i.e. m:false) vs uppercase(i.e. M:false)
    // The object wont repeat keys for example:
    // This ------ {a:false, m:false, p:false, r:false, o:false}
    // VS this --- {a:false, m:false, p:false, a:false, r:false, o:false}
    // Thats becasue if the key has already been established it'll just change its value to false
    for (let i = 0; i < wrd.length; i++) {
      if (wrd[i] !== ` `) wrdObj[wrd[i].toLowerCase()] = false
    }
    return wrdObj
    // input `Amparo` returns {a:false, m:false, p:false, r:false, o:false}
  }



  // Similar to the one above this turns a word into an array
  // However the Array will appear exactly the same as the word
  // Ex: `Amparo` ---> [`A`, `m`, `p`, `a`, `r`, `o`]
  // Notice the capitalization as well
  const wrdArr = (wrd) => {
    let wrdArr = []
    // Start with an empty array and push every character one at a time
    for (let i = 0; i < wrd.length; i++) wrdArr.push(wrd[i])
    return wrdArr
  }


  // Asking the user if they want to enter in their own word or use a random one
  let choiceOfWrd = readlineSync.keyInYN(`Would you like to enter your own word?`) ?
    readlineSync.question(`What is the word you would like to enter? `):
    randomizer(randoms);
  
  // Calling the function(wrdObj) above to turn our word into an object
  let hangWrd = wrdObj(choiceOfWrd)
  // This small step below just adds one more key to the obj
  // And that is the full word itself
  // Ex: {a:false, m:false, p:false, r:false, o:false, Amparo:false}
  hangWrd[choiceOfWrd.toLowerCase()] = false

  // Calling the function(wrdArr) above to turn our word into an array
  let hangWrdArr = wrdArr(choiceOfWrd)

  // Creating(declaring) what is going to be our hidden word
  // Ex: _ _ _ _ _ _ --> A _ _ a _ _ --> A m _ a r _ --> etc...
  let displayArray = []
  // 
  // Modifying our displayArray so that it actually looks like the example above
  for (let i = 0; i < hangWrdArr.length; i++) {
    // The condition below looks for spaces if its a space it'll display an empty space instead of _
    hangWrdArr[i] === ` ` ? 
      displayArray.push(` `) : 
      displayArray.push(`_`)
  }
  // This for loop should result in displayArray = [`_`, `_`, `_`, `_`, `_`, .....]

  // Creating(delcaring) what is going to be all our attempts whether incorrect or not
  // We'll use this later to check it a word or letter has been guessed already
  // By using an object we can check if an entry is a valid key or not using obj[key] === undefined
  let tries = {}

  // We'll store all the incorrect guesses in the array below for now its empty
  let incorrect = []

  // Start with 7 lives
  let livesLeft = 7

  // Logs the first completely hidden word
  console.log(displayArray.join(``), `\n`);

  // The while loop runs until the livesLeft(number of lives left) reachs 0
  while (livesLeft > 0) {

    // Takes users feedback on whether they'd like to attempt to guess the whole word
    // user input is a yes(true) or no quesiton(false)
    const guessFullWord = readlineSync.keyInYN('Would you like to guess the word?')



    // ternerary(AKA shortend IF STATEMENT) 
    // Basically the user input yes or no and based on that we ask them a different question
    const userInput = guessFullWord ?
      // If they pick yes(true) then the line below runs and asks what their guess for the whole word is
      readlineSync.question(`What is your guess?: `) :
      // If they pick no then we ask the to guess the next letter.
      // Notice the keyIn instead of question -- The keyIn allows for simply pressing the key and moving
      // on to the next step without having the user press ENTER(RETURN).
      // This also means that the user CANT input more than one selection.
      readlineSync.keyIn(`Guess the next letter: `);



    // Check that we haven't look at this before. we'll call this doubleChecker
    // Looks in the object above to see if the entry is a valid
    // More on this below...
    if (tries[userInput.toLowerCase()] !== undefined) {
      console.log(`You've already guessed: ${userInput.toLowerCase()}\nTry again.\n`);
      // The continue; below breaks from the iteration and starts the loop again
      // prompting the questions and user input again.
      continue;
    }

    // This makes sure that we cant try this input again
    // by doing this when the loop runs again it'll check through doubleChecker
    // to see if we've entered this input before
    tries[userInput.toLowerCase()] = true



    // Checks that user input is valid
    // Looks at the object we created above to see if its a valid key
    if (hangWrd[userInput.toLowerCase()] !== undefined) {
      // If the entry was a valid(true) key (meaning the entry matches a letter in the word)
      // Then we change the value of the key from false -to-> true
      // Ex: before guess {a:false, m:false, p:false, r:false, o:false}
      // --- userGuesses = a
      // --- after guess  {a:true, m:false, p:false, r:false, o:false}
      hangWrd[userInput.toLowerCase()] = true      
    } else {
      // If the entry was notAValid(false) key (meaning the entry's not a match in our word)
      // Decrease the number of livesLeft by one and add that incorrect guess into our array of incorrect guess
      livesLeft--;
      incorrect.push(userInput)
    }



    // recreates the display array depending on the true or false value of the key in hangWrdObj
    // This uses the hangWrdArr we created earlier to modify the displayArray
    for (let i = 0; i < hangWrdArr.length; i++) {
      // This loop only does something if the condition is true 
      // If its false then it'll do nothing and move on to the next iteration.
      if (hangWrd[hangWrdArr[i].toLowerCase()]) {
        // The condtion looks at the obj ex: {a:true, m:false, p:false, r:false, o:false}
        // if a key(letter) has a value = true then it'll turn `_` --> `a`(letter)
        // hangWrd[...](object[key]) is the value of the specific key(letter)
        // hangWrdArr[i] is the letter in our actual word. ex: hangWrdArr = [`A`,`m`,`p`,`a`,`r`,`o`]
        // the use of .toLowerCase() is to make sure that this works whether capital or not
        displayArray[i] = hangWrdArr[i]
      }
    }

        //
        if (displayArray.every(e => e !== `_`) || hangWrd[choiceOfWrd.toLowerCase()]) {
          console.log(`Congrats you won!!!!`);
          console.log(choiceOfWrd);
          break;
        }

    // This logs the new displayArray to the user followed by livesLeft
    console.log(displayArray.join(``));
    console.log(`Incorrect guess: `, incorrect);
    console.log(`You have ${livesLeft} attempts left.\n`);

  }
  if (livesLeft === 0) {console.log(`Ha LOSER!!!Try again!\nThe word was: ${choiceOfWrd}`); hangman()}
}

hangman()