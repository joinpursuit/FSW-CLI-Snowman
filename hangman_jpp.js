/*
HANGMAN by Joseph P. Pasaoa
Pursuit 6.2 FSW Fellowship
Summer 2019

*/

const print = (logThis) => {
  console.log(logThis);
}



/* TO DO, MISC */

// array of letter core objects
//   - constructor function Letter X
//
// console objects on clear
//   - X letter marquee - visible = unguessed;
//   - X working solution display
//   - X gallows status image
//   - X status display: guess tally, category, timer, best time for difficulty
//   - X message console
//
//
// extra stimuli
//   - beeps for stress
//   - visual frenetic letter static
//
//
// word bank
//   - X arrays by thematic categories
//   - conditional difficulty levels, by length: easy, medium, hard, ridiculous, ludicrous
//
//




// AUDIO SYSTEM (Play-sound module)



const player = require('play-sound')(opts = {});
// player.play('audio/bgm-2minStorm-jedit.mp3', function(err){
//   if (err) throw err
// });



// I/O SYSTEM (Readline)

const readline = require('readline');
const rl = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
} );
const clear = () => {
  process.stdout.write('\033[2J'); // 1. Print empty lines until the screen is blank.
  process.stdout.write('\u001b[H\u001b[2J\u001b[3J'); // 2. Clear the scrollback.
}
clear();



/* WORD BANKS */

let words = [
  {
    category: "Array methods",
    bank: [
      "from", "isArray", "of", "observe", "concat", "copyWithin", "entries", "every", "fill", "filter", "find", "findIndex", "flat",
      "flatMap", "forEach", "includes", "indexOf", "join", "keys", "lastIndexOf", "map", "pop", "push", "reduce", "reduceRight",
      "reverse", "shift", "slice", "some", "sort", "splice", "toLocaleString", "toSource", "toString", "unshift", "values"
    ]
  },
  {
    category: "Object methods",
    bank: [
      "assign", "create", "defineProperties", "defineProperty", "entries", "freeze", "fromEntries", "getOwnPropertyDescriptor",
      "getOwnPropertyDescriptors", "getOwnPropertyNames", "getOwnPropertySymbols", "getPrototypeOf", "is", "isExtensible", "isFrozen",
      "isSealed", "keys", "preventExtensions", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toSource",
      "toString", "valueOf", "seal", "setPrototypeOf", "values"
    ]
  },
  {
    category: "2018 movies",
    bank: [
      "Avengers:_Infinity_War", "Black_Panther", "Aquaman", "Bohemian_Rhapsody", "Venom", "The_Crimes_of_Grindelwald"
      // "Incredibles 2", "Deadpool 2",
    ]
  }
];



// LETTER CORE ARRAY
class Letter {
  constructor(name) {
    this.name = name;
    this.isInPlay = false;
    this.isGuessed = false;
    Letter.addInstance(this); // pushes Letter into letters array on creation
  }

  putInPlay() {
    this.isInPlay = true;
  }
  guessedWhileInPlay() {
    this.isGuessed = true;
  }
  resetForNextSolution() {
    this.isInPlay = false;
    this.isGuessed = false;
  }
  static addInstance(el) {
      letters.push(el);
  }
}

let letters = [];
let inPlayLetterVars = [];

let letterA = new Letter("a");
let letterB = new Letter("b");
let letterC = new Letter("c");
let letterD = new Letter("d");
let letterE = new Letter("e");
let letterF = new Letter("f");
let letterG = new Letter("g");
let letterH = new Letter("h");
let letterI = new Letter("i");
let letterJ = new Letter("j");
let letterK = new Letter("k");
let letterL = new Letter("l");
let letterM = new Letter("m");
let letterN = new Letter("n");
let letterO = new Letter("o");
let letterP = new Letter("p");
let letterQ = new Letter("q");
let letterR = new Letter("r");
let letterS = new Letter("s");
let letterT = new Letter("t");
let letterU = new Letter("u");
let letterV = new Letter("v");
let letterW = new Letter("w");
let letterX = new Letter("x");
let letterY = new Letter("y");
let letterZ = new Letter("z");

// print(letters); // debug



// SOLUTION CHOOSER => SOLUTION OBJECT

let solutionObj = {
  presentStr: "The_Crimes_of_Grindelwald",
  roll(chosenCategory) {
    let bankFocus = chosenCategory["bank"];
    return bankFocus[ Math.floor(Math.random() * bankFocus.length) ]
  }
}



// ACTIVATES LETTERS FOR ROUND

const initLetterToggles = (solutionIn) => {
  for (let i of solutionIn) {
    if (i !== "_" && i !== "-" && i !== ":") {
      let letterVar = eval("letter" + i.toUpperCase());
      letterVar.putInPlay();
      inPlayLetterVars.push(letterVar); // makes array for use later  // needed? if letterVars activated by putInPlay?
    }
  }
}



let categoryChoice = words[2]; // to do category select prompt // TEMP



const initNewRound = () => {
  initLetterToggles(solutionObj.presentStr);
}
initNewRound();



inPlayLetterVars[2].isGuessed = true; // TEMP



// STATUS WINDOW // to do timer, best time for difficulty

let numberGuessedObj = {
  presentNum: 7,
  setMax: 7,
  resetGuesses() {
    presentNum = setMax;
  }
}

const showStatusWindow = () => {
  print("");
  let categStr = `\x1b[36m⫷   Category : \x1b[1m${categoryChoice.category}\x1b[0m   \x1b[36m⫸\x1b[0m`;
  let guessStr = `⫷    Guesses Left : \x1b[1m\x1b[92m${numberGuessedObj.presentNum} / ${numberGuessedObj.setMax}   \x1b[0m⫸`; // to do gradient asterisk bar sys
  print(` ${categStr}         ${guessStr} \n\n`);
}



// LETTERS MARQUEE

let uiLettersMarquee = `\x1b[2m\x1b[90m Letters to play :   \x1b[0m`;
for (let i of letters) {
  if (i.isGuessed === true) {
    uiLettersMarquee += `\x1b[2m\x1b[36m${i.name.toUpperCase()}\x1b[0m  `;
  } else {
    uiLettersMarquee += `\x1b[39m${i.name.toUpperCase()}\x1b[0m  `;
  }
}
uiLettersMarquee += `\x1b[2m\x1b[90m  : Letters to play\x1b[0m`;

const showLettersMarquee = () => {
  print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  print(uiLettersMarquee);
  print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  //print("⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃");
}



// SOLUTION MARQUEE

let uiSolutionBoard = "      ";
let uiSolutionBase = "      ";
for (let i of solutionObj.presentStr) {
  if (i !== "_" && i !== "-" && i !== ":") {
    let letterVar = eval("letter" + i.toUpperCase());
    if (letterVar.isGuessed === false) { // renders hidden letters
      uiSolutionBoard += "    ";
      uiSolutionBase += "¯¯¯ ";
    } else { // renders guessed letters
      i === i.toUpperCase()
        ? uiSolutionBoard += ` ${letterVar.name.toUpperCase()}  `
        : uiSolutionBoard += ` ${letterVar.name}  `;
      uiSolutionBase += "¯¯¯ ";
    }
  } else {
    if (i === "_") { // renders spaces
      uiSolutionBoard += "    ";
      uiSolutionBase += "    ";
    } else if (i === "-") { // renders hyphens
      uiSolutionBoard += " -  ";
      uiSolutionBase += "    ";
    } else if (i === ":") {
      uiSolutionBoard += " :  ";
      uiSolutionBase += "    ";
    }
  }
}

const showSolutionMarquee = () => {
  print("\n\n");
  print(uiSolutionBoard);
  print(uiSolutionBase);
  print("");
}



// MESSAGE WINDOW

const showMsgWindow = (msg) => {
  print(``);
  print(`    \x1b[31m\x1b[5m~ ${msg} ~\x1b[0m \n\n\n\n`);
  print(`\n`);
}



// GALLOWS DIAGRAM

const showGallows = () => {
  let gMargin = "                 "; // margin from left of screen

  print("                                                                            c▮ccccccccccccccccccccccc cccc ccc c c c");
  print("                                                                             ⨖ ");
  print("                                                                             ⨖ ");
  print("                                                                             ⨖ ");
  print("                                                                           ▒▒▒▒▒ ");
  print("                                                                          ▒▒ ▒ ▒▒ ");
  print("                                                                          ▒▒▒▒▒▒▒ ");
  print("                                                                           ▒▒▒▒▒ ");
  print("                                                                             █ ");
  print("                                                                           ▒ ▒ ▒ ");
  print("                                                                         ▒   J   ▒ ");
  print("                                                                        ▒    ▒    ▒ ");
  print("                                                                       ▒     ▒     ▒ ");
  print("                                                                            ▒ ▒ ");
  print("                                                                           ▒   ▒ ");
  print("                                                                          ▒     ▒  ");
  print("                                                                         ▒       ▒ ");
  print("                                                                        ▒         ▒ ");
  print("                                                               //////////////////////////// ");
}

const showBottom = () => {
  print("\x1b[90m~~~ ~ ~~ ~~~~ ~ ~~~~ ~~~~ ~~~~ ~ ~ ~~~~ ~ ~~~~ ~ ~ ~~~~ ~ ~ ~ ~ ~~~~ ~ ~~~~ ~~ ~~~~ ~ ~~~~ ~");
  print(" ~~~~ ~~~~ ~ ~~~~ ~~~~ ~ ~ ~ ~~~~ ~ ~ ~~~~ ~ ~~~~ ~~~~ ~ ~~~~");
  print("~ ~~~~ ~ ~~~~ ~~~~ ~");
  print("");
}



const showTop = () => {
  print("\x1b[90m"); // margin from top of screen
  print("                                                                                                            ~~~ ~ ~ ~~~~ ~~~~");
  print("                                                                                 ~~~ ~~~~ ~ ~ ~    HANG-xX      ~~ ~~~~ ~~~~ ~ ~ ~~~~");
  print("~~~~ ~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~~~~ ~ ~~~~ ~~~~ ~~~~ ~ ~ ~~~~ ~ ~~~~ ~~~~ ~ ~~~~ ~ ~ ~ ~~~~ ~ ~~~~ ~ ~    creator Joseph P. Pasaoa  ~ ~~~~ ~");
  print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\x1b[0m");
}


// GUI INITS

showTop();
showSolutionMarquee();
showLettersMarquee();
showStatusWindow();
showMsgWindow("Hello, player. What is your name?");
showGallows();
showBottom();

// print("\n" + solutionObj.presentStr); // debug
// print(inPlayLetterVars); // debug
rl.close();



// SCRIPT
/*

    :: restart anchor

Hello, Player. What do I call you? => NAME

    :: tweak anchor

Welcome, NAME, to Hangman.
How many lives from 1 to 15 do you want to work with? The default is 7. => MAX

    :: category anchor

Pick a category to play: => CATEGORY

    :: replay anchor

You will have 5 seconds each time to pick letters. Is this okay? => INTERVAL
  a. No way. I won't even need (3) seconds!
  b. BRING IT.
  c. (10) seconds instead, please.
  d. Put that timer away.

Alright, let's begin.
-> 3 sec count-in

Good choice. Pick again.
Good pick. What's your next guess?
That's a letter. Next?

BUZZ! You're fizzing out.
Not a good pick. Try again.
A strike for you. Feeling the pressure?

CONGRATULATIONS! You've earned your pardon with $$$ guesses left!
PITY. Your luck didn't show up this time.

Up for another round?
a. YES, let's do it.
b. Different category?
c. Let me tweak a few things.
d. " A NEW Player enters the fray.... "
e. I'm okay for now. But I'll. Be. Back.



*/



/*


// init ***
for (var i = 0; i < 26; i++) {
    addLetter(String.fromCharCode(97 + i));
}
print(letters); // debug

*/
