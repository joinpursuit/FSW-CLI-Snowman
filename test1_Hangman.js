// const readline = require("readline");
// const rl = readline.createInterface({input: process.stdin, output: process.stdout});

// This was only possible thanks to the generous help from Amin,
// who stayed nearly 2 hours after class to help me understand
// my logic and hiccups with readlineSync.

let readlineSync = require('readline-sync');

let arr = ["daddy", "bubble", "button", "grunkle", "dipper", "mabel",
"stanford", "mystery", "shack"]

let randomWord = arr[Math.floor(Math.random() * arr.length)]

// console.log(randomWord)

let splitRandomWord = randomWord.split("")

// console.log(splitRandomWord)

let dashHolder = []

for (let i = 0; i < splitRandomWord.length; i++) {
  dashHolder.push("_ ");
}

// console.log(dashHolder)
// console.log(dashHolder.join(""))

let wrongAnswers = 0
let wrongAnswerArr = []
let win = false;

 let userInput;

function getCharacter() {
  let temp = dashHolder.join('');
  userInput = readlineSync.question(`\n Guess character: \n ${ dashHolder.join("") } \n`)
  for (let i = 0; i < splitRandomWord.length; i++) {
    if (userInput.toLowerCase() === splitRandomWord[i]) {
      dashHolder[i] = `${userInput} `;
    }
  }
  console.log(dashHolder.join(""))
  // console.log(dashHolder)
  if (temp == dashHolder.join('')) {
    wrongAnswers++
    wrongAnswerArr.push(userInput)
    console.log(`WRONG GUESSES: ${ wrongAnswerArr.join(" ")}`)
  }
}

// getCharacter()
// getCharacter()

let userName = readlineSync.question(`What is your name, traveler? \n`);
console.log(`\n Welcome, ${ userName }. \n
  Let's play a game. \n
  The rules are simple: \n
  You have to uncover a secret word. \n
  Make guesses, one letter at a time. \n
  Reveal the secret word, and you win! \n
  But make 6 wrong guesses, and the game is done. \n `)


while (!win && wrongAnswers < 6) {
  // console.log(win)
  getCharacter()
  let dashesCounter = 0
  for (let i = 0; i < dashHolder.length; i++){
    if (dashHolder[i] === '_ '){
      dashesCounter++
    }
  }
  if (wrongAnswers === 6) {
    console.log(`\n Sorry, ${ userName }, you lose! \n `)
  }
  if (dashesCounter > 0) {
    win = false
  } else {
    win = true;
    console.log(`\n Congratulations, ${ userName }! You win!!! \n`)
  }
  // console.log(`THIS ONE`,win)
  console.log(`\n You have made ${ wrongAnswers } wrong answers. You have ${ 6 - wrongAnswers } tries remaining. \n `)
}

// userInput = readlineSync.question(`Guess character: \n`)
// for (let i = 0; i < splitRandomWord.length; i++) {
//   if (userInput === splitRandomWord[i]) {
//     dashHolder[i] = `${userInput} `;
//   } else {
//     console.log()
//   }
// }

//console.log(dashHolder.join(""))


//
// let randomInd = Math.floor(Math.random() * splitCharArr.length)
// let randomStr = splitCharArr[randomInd]
// let gameStr = randomStr
//
// let placeholder = []
// let makeDash = randomStr.map((letter) => {
//   placeholder.push("-")
// })
//
// let wrongAnswerCounter = 0
//
// let wrongAnswerArr = []
// //
// function letterCheck (input, index, gameStr) {
//   gameStr[index] === input;
// }
//
// let readlineSync = require('readline-sync');
//
// function getName() {
//   let userName = readlineSync.question(`What is your name, traveler?`);
//   console.log(`Welcome, ${ userName }.`)
//   return userName
// }



// let userName = readlineSync.question(`What is your name, traveler?`);
// console.log(`Welcome, ${ userName }.`)

// if (readlineSync.keyInYN(`Will you join me for a game?`)) {
//   console.log(`Well, ${ userName }, let's begin...`)
// } else {
//   console.log(`Then get out. The door is right there.`)
// }



// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
//
// // Handle the secret text (e.g. password).
// var favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');
//
// var readlineSync = require('readline-sync');
// if (readlineSync.keyInYN('Do you want this module?')) {
//   // 'Y' key was pressed.
//   console.log('Installing now...');
//   // Do something...
// } else {
//   // Another key was pressed.
//   console.log('Searching another...');
//   // Do something...
// }
//
// var readlineSync = require('readline-sync'),
//   animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
//   index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');






// var favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');





// rl.question(`There is a hidden word you must discover one letter at a time.
//   What is your first guess? \n ${ placeholder.join("") } \n`,
//   (userInput) => {
//
//   })
//
// rl.on("close", () => {
//   if (wrongAnswerCounter === 6) {
//     console.log("You lose, you loser!");
//   } else {
//     console.log("Correct! You Win!");
//   }
// });


  //     if (userInput.trim() == gameStr[i]) {
  //       placeholder.splice([i], 1, userInput)
  //       rl.setPrompt("Correct! Keep guessing!")
  //     }
  //   }
  //
  //     rl.close();
  //   } else {
  //     rl.setPrompt("That's WAY wrong. Please try again! \n");
  //     rl.prompt();
  //     rl.on("line", (userInput) => {
  //       if (userInput.trim() == answer) {
  //         rl.close();
  //       } else {
  //         rl.setPrompt(`Your answer of ${ userInput } is incorrect. Please try again! \n`);
  //         rl.prompt();
  //       }
  //     })
  //   }
  // });
  //
  // rl.question(`There is a hidden word you must discover one letter at a time.
  //   What is your first guess? \n ${ placeholder.join("") } \n`,
  //   (userInput) => {
  //     for (let i = 0; i < gameStr.length; i++) {
  //       if (placeholder[i] !== "-" || wrongAnswerCounter === 6) {
  //         console.log("closing??")
  //         rl.close();
  //         break
  //       } else if (userInput.trim() == gameStr[i]) {
  //         placeholder.splice([i], 1, userInput)
  //         rl.on('SIGCONT', () => {
  //           rl.prompt();
  //         })
  //         rl.setPrompt(`Correct! Keep going! \n ${ placeholder.join("") } \n`);
  //         rl.prompt();
  //         rl.on("line", (userInput) => {
  //           if (placeholder !== "_ " || wrongAnswerCounter === 6) {
  //             rl.close();
  //           } else if (userInput.trim() == gameStr[i]) {
  //             placeholder.splice([i], 1, userInput)
  //             rl.setPrompt(`Correct! \n ${ placeholder.join("") } \n`)
  //           } else {
  //             wrongAnswerCounter++
  //             console.log(`That's WAY wrong. Try again!!!!!! \n ${ placeholder.join("") }`);
  //           }
  //         })
  //       } else {
  //         wrongAnswerCounter++
  //         console.log("wrongAnswerCounter", wrongAnswerCounter)
  //         rl.setPrompt(`That's WAY wrong. Try again. \n ${ placeholder.join("") } \n`)
  //         rl.prompt();
  //         break
  //       }
  // }
  // });
//   {
//     if (placeholder.includes("-") || wrongAnswerCounter === 6) {
//       console.log("hitting this1111??")
//       rl.close();
//     } else {
//       console.log("hitting this222222?")
//     }
//     console.log("gameStr for Each", gameStr.forEach(letterCheck))
//       if (gameStr.forEach(letterCheck) === userInput) {
//         placeholder.splice(index, 1, userInput);
//         rl.setPrompt(`Correct! ${ placeholder }`);
//         rl.prompt();
//         rl.on("line", (userInput) => {
//           if (gameStr.forEach(letterCheck) === userInput) {
//             placeholder.splice(index, 1, userInput);
//             rl.setPrompt(`Correct! ${ placeholder }`);
//             rl.prompt();
//           } else {
//             console.log("hitting this?")
//             wrongAnswerCounter++
//             wrongAnswerArr.push(userInput)
//             rl.setPrompt(`Wrong answer1! \n So far you've entered ${ wrongAnswerArr } \n Please try again. \n ${ placeholder }`);
//             rl.prompt()
//           }
//         })
//       } else {
//         wrongAnswerCounter++
//         wrongAnswerArr.push(userInput)
//         rl.setPrompt(`Wrong answer2! \n So far you've entered ${ wrongAnswerArr } \n Please try again. \n ${ placeholder }`);
//         rl.prompt()
//         rl.on("line", (userInput) => {
//           if (gameStr.forEach(letterCheck) === userInput) {
//             placeholder.splice(index, 1, userInput);
//             rl.setPrompt(`Correct! ${ placeholder }`);
//             rl.prompt();
//           } else {
//             wrongAnswerCounter++
//             wrongAnswerArr.push(userInput)
//             rl.setPrompt(`Wrong answer3! \n So far you've entered ${ wrongAnswerArr } \n Please try again. \n ${ placeholder }`);
//             rl.prompt()
//         }
//       })
//     }
// });
