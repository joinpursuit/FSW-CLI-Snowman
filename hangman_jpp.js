/*
HANGMAN by Joseph P. Pasaoa
Pursuit 6.2 FSW Fellowship
Summer 2019

*/



// INIT MODULES //
// Readline  < I/O System > 
const readline = require('readline');
const rl = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
} );
const rlEnd = () => {
  rl.close();
  process.stdin.destroy();
}
const prompter = (msg) => {
  rl.setPrompt(msg);
  rl.prompt();
}

// Play-sound  < Audio >
const player = require('play-sound')(opts = {});
const sound = (file, description) => {
  player.play(file, function(err) {
    if (err) throw err;
  } );
}



// GLOBAL VAR DECLARATIONS //
// Functions < Visual >
const clear = () => {
  process.stdout.write('\033[2J'); // 1. Print empty lines until the screen is blank.
  process.stdout.write('\u001b[H\u001b[2J\u001b[3J'); // 2. Clear the scrollback.
}
const print = (logThis) => {
  console.log(logThis);
}
const pMove = (howManyX, howManyY) => {
  let output = ``;
  for (let i = 0; i < howManyY - 1; i++) {
    output += `\n`;
  }
  for (let i = 0; i < howManyX; i++) {
    output += ` `;
  }
  return output;
}
const moveCAbs = (howManyX, howManyY) => {
  readline.cursorTo(process.stdin, howManyX, howManyY);
}
const moveCRel = (howManyX, howManyY) => {
  readline.moveCursor(process.stdin, howManyX, howManyY);
}

// font styles
const tReset = `\x1b[0m`;
const tBold = `\x1b[1m`;
const tDim = `\x1b[2m`;
const tBlink = `\x1b[5m`;
const tHidden = `\x1b[8m`;

// font style RESETS
const tKillDim = `\x1b[22m`;
const tKillBlink = `\x1b[25m`;

// font colors
const tBlack = `\x1b[30m`;
const tRed = `\x1b[31m`;
const tGreen = `\x1b[32m`;
const tYellow = `\x1b[33m`;
const tBlue = `\x1b[34m`;
const tMage = `\x1b[95m`;
const tCyan = `\x1b[36m`;
const tLGray = `\x1b[37m`;
const tDGray = `\x1b[90m`;
const tLRed = `\x1b[91m`;
const tLGreen = `\x1b[92m`;
const tLYellow = `\x1b[93m`;
const tLBlue = `\x1b[94m`;
const tLCyan = `\x1b[96m`;
const tWhite = `\x1b[97m`;

// style constants
const xTitle = tMage;
const xInputHightlight = tLYellow;
const xCats = tDim + tGreen;
const xUserType = tCyan;

// TO DO, MISC //

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



// AUDIO SYSTEM (Play-sound module) //




// WORD BANKS //

let wordBanks = [
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



// CORE LETTER ARRAY
let letters = [];

class Letter {
  constructor(name) {
    this.name = name;
    this.isInSolution = false;
    this.isGuessed = false;
    Letter.addInstance(this); // pushes Letter into letters array on creation
  }

  markActive() {
    this.isInSolution = true;
  }
  guessed() {
    this.isGuessed = true;
  }
  reset() {
    this.isInSolution = false;
    this.isGuessed = false;
  }
  static addInstance(el) {
      letters.push(el);
  }
}


let hidingLetterVars = [];

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



let user = {
  name: '',
  maxGuesses: 15,
  guessesLeft: 15,
  guessesSpent() {
    return this.maxGuesses - this.guessesLeft;
  },
  hangRatio() { // used in calculating hang display intervals
    return this.guessesSpent() / (this.maxGuesses - 3); // derived from removing final blinkingnoose frame and two initial frames from calc
  },
  resetGuessesLeft() {
    this.guessesLeft = Number(this.maxGuesses);
  },
  record: { wins: 0, losses: 0 }
}
let game = {
  categoryIdx: undefined,
  isTimer: false,
  maxTime: undefined,
  solution: undefined,
  uniqueSolutionCharsObj: {},
  hiddenLettersLeft: [],
  rollSolution() {
    let currentWordBank = wordBanks[this.categoryIdx].bank;
    this.solution = currentWordBank[ Math.floor(Math.random() * currentWordBank.length) ];
  },
  goToIdx: 0,
  checkVsInput: 'noCheck',
  showCredits: false
}



// ACTIVATES LETTERS FOR ROUND //

const setUpLetters = (solution) => {
  for (let char of solution) {
    char = char.toLowerCase();
    if (char !== "_" && char !== "-" && char !== ":" && !game.uniqueSolutionCharsObj[char]) {
      game.uniqueSolutionCharsObj[char] = true;
      let letterVar = eval("letter" + char.toUpperCase());
      letterVar.markActive();
    }
  }
}



// STATUS WINDOW // to do timer, best time for difficulty
const guiStatusMarquee = () => {
  let guessWarning = `${tLGreen}`;
  let lastGuessAlert = ``;
  if (user.guessesLeft <= 3) {
    guessWarning = `${tLRed}`;
  }
  if (user.guessesLeft === 1) {
    lastGuessAlert = `${tBlink}${tLRed}`;
  }


  print(``);
  let categStr = `${tBlue}⫷   Category : ${tDim}${tBold}${tCyan}${wordBanks[game.categoryIdx].category.toUpperCase()}${tReset}   ${tBlue}⫸${tReset}`;
  let guessStr = `${lastGuessAlert}⫷    Guesses Left : ${tBold}${guessWarning}${user.guessesLeft} / ${
    user.maxGuesses}   ${tWhite}⫸${tReset}`; // to do gradient asterisk bar sys
  print(`       ${categStr}   ${guessStr} \n`);
}



// LETTERS MARQUEE //
const guiLettersMarquee = () => {

  let uiLettersMarquee = `${tDim}${tDGray} Letters to play ${tReset}:   `;
  for (let i of letters) {
    i.isGuessed
      ? uiLettersMarquee += `${tDim}${tDGray}${i.name.toUpperCase()}${tReset}  `   // guessed letters
      : uiLettersMarquee += `${tLYellow}${i.name.toUpperCase()}${tReset}  `;      // unguessed letters
  }
  uiLettersMarquee += `  :${tDim}${tDGray} Letters to play${tReset}`;

  print(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  print(uiLettersMarquee);
  print(` ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
}



// SOLUTION MARQUEE //
const guiSolutionBoard = () => {

  let uiSolutionBoard = "      ";
  let uiSolutionBase = "      ";
  game.hiddenLettersLeft = 0;
  for (let i of game.solution) {
    if (i !== "_" && i !== "-" && i !== ":") {
      let letterVar = eval("letter" + i.toUpperCase());
      if (letterVar.isGuessed === false) { // renders hidden letters
        game.hiddenLettersLeft += 1;                                  // victory condition check
        uiSolutionBoard += "    ";
        uiSolutionBase += "▔▔▔ ";
      } else { // renders guessed letters
        uiSolutionBoard += ` ${letterVar.name.toUpperCase()}  `
        // i === i.toUpperCase()
        //   ? uiSolutionBoard += ` ${letterVar.name.toUpperCase()}  `
        //   : uiSolutionBoard += ` ${letterVar.name}  `;
        uiSolutionBase += "▔▔▔ ";
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

  print("\n\n");
  print(uiSolutionBoard);
  print(uiSolutionBase);
  print("");
}





// MESSAGE WINDOW //
let badGuessSoundGate = 0;

const guiMessageBoard = (situation) => {
  let msg = `Give me a letter.`; 
  
  switch (situation) {
    case `goodGuess`:
      sound('./audio/sfxGoodG-mechClick.mp3', 'key turn');

      let goodReply1 = `${tGreen}Good choice...${tReset}   Pick again.`;
      let goodReply2 = `${tGreen}Good pick...${tReset}   What's your next guess?`;
      let goodReply3 = `${tGreen}That's a letter...${tReset}   Next?`;
      msg = eval(`goodReply` + Math.ceil(Math.random() * 3));
      break;

    case `badGuess`:
      badGuessSoundGate % 2
        ? sound('./audio/sfxBadG-shreik.mp3', 'shreik')
        : sound('./audio/sfxBadG-thud.mp3', 'thud');
      badGuessSoundGate += 1;
      
      let badReply1 = `${tRed}BUZZ...${tReset}   You're fizzing out.`;
      let badReply2 = `${tRed}NOT a good pick...${tReset}   Try again.`;
      let badReply3 = `${tRed}A strike for you...${tReset}   Feeling the pressure?`;
      msg = eval(`badReply` + Math.ceil(Math.random() * 3));
      break;

    case `repeatGuess`:
      let repeatReply1 = `${tYellow}You've already said that letter...${tReset}   Try again.`;
      let repeatReply2 = `${tYellow}Already ticked that letter...${tReset}   You do know the tracker is right there, don't you??`;
      let repeatReply3 = `${tYellow}Gave me that one already...${tReset}   How about something new?`;
      msg = eval(`repeatReply` + Math.ceil(Math.random() * 3));
      break;

    default:
      msg = `${tYellow}YOUR LIFE is on the line...${tReset} guess correctly. Or hang.`; 
  }
  if (user.guessesLeft === 1) {
    sound('./audio/sfxFinalG-ropeCreak.mp3', 'rope creaking on wood');

    let direReply1 = `${tLRed}Down to your LAST GUESS...${tReset}   Make it a good one.`;
    let direReply2 = `${tLRed}FINAL GUESS...${tReset}   Ready to hang?`;
    msg = eval(`direReply` + Math.ceil(Math.random() * 2));
  }

  print(`\n${tReset}${tDGray}   ‼`);
  print(                  `   ‼    ${tReset}${msg}    ~~`);
  print(         `${tDGray}   ‼ \n\n  ${tReset}`);
}



// GALLOWS DIAGRAM //

const guiGallows = () => {
  let userShirt =   ` `;

  let gHang_Env =   `${tReset}${tHidden}`;
  let gHook =       `⨊`;
  let gNoose_Env =  `${tReset}${tHidden}`;
  let gBeam_Env =   `${tReset}${tHidden}`;
  let head_Env =    `${tReset}${tHidden}`;
  let neck =        ` `;
  let spine =       ` `;
  let armL =        ` `;
  let armR =        ` `;
  let legL =        ` `;
  let legR =        ` `;

  // Temp Overrides for maxGuesses: 7
  gHang_Env =       `${tReset}${tDim}${tRed}`;
  gBeam_Env =       `${tReset}${tDim}${tRed}`;
  
  const stage10 = () => {
    userShirt = `${tReset}${user.name[0].toUpperCase()}`;
    neck = `${tReset}▒`;
    spine = `${tReset}▒`;
  }
  const stage11 = () => {
    stage10();
    head_Env = `${tReset}`;
  }
  const stage12 = () => {
    stage11();
    armL = `${tReset}▒`;
    armR = `${tReset}▒`;
  }
  const stage13 = () => {
    stage12();
    legL = `${tReset}▒`;
  }
  const stage14 = () => {
    stage13();
    legR = `${tReset}▒`;
  }
  const stage15 = () => {
    stage14();
    gHook = `${tBlink}⨊`;
    gNoose_Env = `${tReset}${tBlink}`;
    neck = `${tReset}█`; // █
  }
  
  if (user.guessesLeft === 1) {
    stage15();
  } else if (user.guessesLeft === 2) {
    stage14();
  } else if (user.maxGuesses <= 4) {
    user.guessesSpent() === 2 
      ? stage13()
      : stage12();
  } else if (user.maxGuesses <= 7) {
    if (user.hangRatio() > 0.75) {
      stage13();
    } else if (user.hangRatio() > 0.5) {
      stage12();
    } else if (user.hangRatio() > 0.25) {
      stage11();
    } else if (user.hangRatio() > 0) {
      stage10();
    }
  }


  let marginLeft = `                                                                 `; // margin from left of screen

  print(`${marginLeft} ${gHang_Env}           ⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊   `);
  print(`${marginLeft}            ${gHook}                ${gBeam_Env}⨊⨊⨊ ⨊⨊   `);
  print(`${marginLeft} ${gNoose_Env}           ⨖                  ${gBeam_Env}⨊⨊⨊⨊  `);
  print(`${marginLeft} ${gNoose_Env}           ⨖                    ${gBeam_Env}⨊⨊   `);
  print(`${marginLeft}${head_Env}          ▒▒▒▒▒                  ${gBeam_Env}⨊⨊   `);
  print(`${marginLeft}${head_Env}         ▒▒ ▒ ▒▒                 ${gBeam_Env}⨊⨊   `);
  print(`${marginLeft}${head_Env}         ▒▒▒▒▒▒▒                 ${gBeam_Env}⨊⨊   `);
  print(`${marginLeft}${head_Env}           ▒▒▒                   ${gBeam_Env}⨊⨊   `);
  print(`${marginLeft}   ${armL}${armL}${armL}      ${neck}      ${armR}${armR}${armR}           ${gBeam_Env}⨊⨊   `);
  print(`${marginLeft}        ${armL}${armL}${armL} ${spine} ${armR}${armR}${armR}                ${gBeam_Env}⨊⨊   `);
  print(`${marginLeft}            ${userShirt}                    ${gBeam_Env}⨊⨊   `);
  print(`${marginLeft}            ${spine}                    ${gBeam_Env}⨊⨊   `);
  print(`${marginLeft}            ${spine}                    ${gBeam_Env}⨊⨊   `);
  print(`${marginLeft}           ${legL} ${legR}                   ${gBeam_Env}⨊⨊   `);
  print(`${marginLeft}          ${legL}   ${legR}                  ${gBeam_Env}⨊⨊   `);
  print(`${marginLeft}         ${legL}     ${legR}               ${gBeam_Env}⨊⨊⨊⨊   `);
  print(`${marginLeft}        ${legL}       ${legR}            ${gBeam_Env}⨊⨊⨊ ⨊⨊   `);
  print(`${marginLeft}       ${legL}         ${legR}         ${gBeam_Env}⨊⨊⨊   ⨊⨊   `);
  
}

const guiBottom = () => {
  // let showPlatform = `${tHidden}`;
  // if (user.guessesSpent() >= 1) { // || user.guessesLeft <= 2) {
  let showPlatform = ``;
  // }

  print(`${showPlatform}                                                                   ${tLRed}➽➽➽➽➽➽➽➽➽➽➽➽➽➽➽➽➽➽${tDim} ${tRed}⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊ `);
  print(`${tDim}${tRed}~~~ ~ ~~ ~~~~ ~ ~~~~ ~~~~ ~~~~ ~ ~ ~~~~ ~ ~ ~~~~ ~ ~ ~~~~ ~ ~ ~ ~ ~~~~ ~ ~~~~ ~~ ~~~~ ~ ~~~~ ~ ~~~~ ~ ~${tReset}\n`);
  print(`${tDim}${tLGray}~ ~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~~ ~~~~ ~~~~ ~ ~ ~~~~ ~ ~ ~~~~ ~~~~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~ ~ ~ ~~~~`);
  print(` ~~~~ ~ ~~~~ ~ ~~~ ~ ~~~~ ~~~~ ~ ~ ~ ~~~~ ~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~ ~~~~`);
  print(`~ ~~~~ ~ ~~~~ ~~~~ ~~~                                                      ${tReset}`);
}



const guiTop = () => {
  // let showTop = `${tHidden}`;
  // if (user.guessesSpent() >= 1 || user.guessesLeft <= 2) {
  let showTop = `${tDim}${tLGray}`;
  // }

  print(`${showTop}`); // margin from top of screen
  print(`                                                                                                            ~~~ ~ ~ ~~~~ ~~~~`);
  print(`                                                                                 ~~~ ~~~~ ~ ~ ~    ${tReset}${xTitle}HANG-xX${showTop}      ~~ ~~~~ ~~~~ ~ ~ ~~~~`);
  print(`~~~~ ~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~~~~ ~ ~~~~ ~~~~ ~~~~ ~ ~ ~~~~ ~ ~~~~ ~~~~ ~ ~~~~ ~ ~ ~ ~~~~ ~ ~~~~ ~ ~    ${tDim}${tCyan}creator ${tReset}${xTitle}Joseph P. Pasaoa${showTop}  ~ ~~~~ ~`);
  print(`${tDim}${tRed}~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n${tReset}`);
}


// GUI INITS //
const gui = (situation) => {
  clear();
  guiTop();
  guiSolutionBoard();
  guiLettersMarquee();
  guiStatusMarquee();
  guiMessageBoard(situation);
  guiGallows();
  guiBottom();
}
const guiLoss = () => {
  clear();
  guiTop();
  guiSolutionBoard();
  guiLettersMarquee();
  guiStatusMarquee();
  guiMessageBoard(situation);
  guiGallows();
  guiBottom();
}



// SCRIPT //

// // instant key sys
// readline.emitKeypressEvents(process.stdin)
// process.stdin.on('keypress', () => {
  //     rl.write('\n');
  // })
  
  
  
const redoPrompt = () => {
  readline.moveCursor(process.stdin, 0, -1);
  rl.prompt(true);
}
  


const introGUI = () => {
  sound('./audio/bgm-2minStorm-jedit.mp3');

  let plusOrMinus = `${xInputHightlight}+${tWhite}/${xInputHightlight}-${tWhite}`;

  clear();
  print(`${pMove(3, 2)}`);
  print(`  ${xTitle}HANG-XX :: by Joseph P. Pasaoa`);
  print(`  ${tDim}${tDGray}Copyright (C) 2019. All rights reserved.${tReset}\n\n`);
  // print(`  Optimized for the MAC OSX Terminal.`);
  print(`  Please ${tCyan}adjust your video${tReset} so "LAST LINE" is 3-7 lines from the bottom of your window.`);
  print(`     ( ${xInputHightlight}Command${tWhite} and ${plusOrMinus} on Macs, ${xInputHightlight}Ctrl${tWhite} and ${plusOrMinus} on Windows )`);
  print(`  ${tCyan}Adjust your audio${tReset} to medium for the full experience. \n\n`);
  print(`  ${tBlink}When ready, Enter [${xInputHightlight}c${tWhite}] to toggle the credits or Enter ${xInputHightlight}any other key${tWhite} to play.${tReset} `);

  if (game.showCredits) {
    print(`${pMove(4, 7)}${tMage}Credits${tDim}${tDGray} >> >> >> \n`);
    print(`\n    SOFTWARE: ${tReset}MS Visual Studio Code, Audacity${tDim}${tCyan}`);
    print(  `      https://code.visualstudio.com`);
    print(  `      https://www.audacityteam.org${tDim}${tDGray}`);
    print(`\n    MODULES: ${tReset}Readline, Play-sound${tDim}${tCyan}`);
    print(  `      https://nodejs.org/api/readline.html`);
    print(  `      https://www.npmjs.com/package/play-sound${tReset}${tDim}${tDGray}`);
    print(`\n    AUDIO SAMPLES: ${tReset}ZapSplat, Daniel Simon${tDim}${tCyan}`);
    print(  `      http://www.zapsplat.com`);
    print(  `      http://www.soundbible.com, D.Simon via SoundBible${tReset}${tDim}${tDGray}`);
    print(`\n    SPECIAL THANKS TO: \n        ${tReset}Alejandro Franco, Jung Rae Jang${tReset}`);
  }
  moveCAbs(0, 49);
  prompter(`  LAST LINE `);
}



const gameEngine = () => {
  rl.on('line', (userInput) => {
      userInput = userInput.trim();
      // let letterVar;

      const checkInputErr = () => {
        switch (game.checkVsInput) { // purely for input error checks
          case 'noCheck':
            return false;
          case 'empty':
            return !userInput;
          case 'maxGuessesErr':
            if (userInput === '') {
              return false;
            }
            return isNaN(userInput) || userInput % 1 || userInput < 1 || userInput > 7;
          case 'categoryErr':
            return !userInput || isNaN(userInput) || userInput % 1 || userInput < 1 || userInput > 3;
          case 'lettersOnly':
            return !userInput || userInput.toLowerCase() === userInput.toUpperCase();
        }
      }
      
      const evalStanding = () => {
        // LOSS CHECK
        if (user.guessesLeft === 0) {
          return 'loss';

        // WIN CHECK
        } else if (game.hiddenLettersLeft === 0) {
          return 'win';
      
        // CONTINUE ROUND
        }
      }



      if (checkInputErr()) {
        redoPrompt();
      } else {
        game.goToIdx = game.goToIdx + 100;
        switch (game.goToIdx) {
          
          case 100:
            if (userInput.toLowerCase() === 'c') {
              !game.showCredits
                ? game.showCredits = true
                : game.showCredits = false;
              game.goToIdx -= 100;
              introGUI();
              break;
            }
            game.goToIdx = 1100;

          case 1100:
            sound('./audio/stage-intoQuestions.mp3', 'high pitch');
              
            clear();
            moveCAbs(0,4);
            game.checkVsInput = 'empty';
            prompter(`${tReset}  ~ Hello, ${tMage}Player${tWhite}. What do I call you? ~  ${xUserType}`);
            break;

          case 1200:
            sound('./audio/stage-nameGiven.mp3', 'train whistle');

            user.name = userInput;
            // INIT AUTO-SUBMIT 
            readline.emitKeypressEvents(process.stdin);
            process.stdin.on('keypress', () => {
                rl.write('\n');
            } );
            moveCRel(0,2);
            print(   `  ${tReset}~ Welcome, ${tLGreen}${user.name.toUpperCase()}${tWhite}, to ${xTitle}Hang-xX${tReset}.`);
            prompter(`    ${tReset}How many guesses each round (${xInputHightlight}1-7${tReset
              }) do you want? ${xInputHightlight}7${tReset} is the default. ~  ${xUserType}`);
            game.checkVsInput = 'maxGuessesErr';
            break;

          case 1300:
            sound('./audio/stage-guessesChosen.mp3', 'echoed thud');

            !userInput
              ? user.maxGuesses = 7
              : user.maxGuesses = userInput;
            moveCRel(0,2);
            print(`${tReset}  ~ Choose a word/phrase category: ~`);
            prompter(`    ${tReset}  [${xInputHightlight}1${tReset}] ${xCats}Array methods${tReset}  [${xInputHightlight}2${tReset
              }] ${xCats}Object methods${tReset}  [${xInputHightlight}3${tReset}] ${xCats}2018 Movies${tReset}  ${xUserType}`);
            game.checkVsInput = 'categoryErr';
            break;

          case 1400:
            sound('./audio/stage-catPicked.mp3', 'scary vuvuzela');

            game.categoryIdx = userInput - 1;
            moveCRel(0,2);
            print(`  ${tReset}~ Alright ${tLGreen}${user.name.toUpperCase()}${tWhite}, let's begin. ~${tReset}\n\n\n    ...`);
            moveCAbs(0,47);
            prompter(`    ${tDGray}Press ${tReset}${xInputHightlight}Return/Enter${tDGray} to start  ${tReset}`);
            game.checkVsInput = 'noCheck';
            break;

          case 1500: // INITIALIZES NEW ROUNDS
            sound('./audio/stage-intoRound.mp3', 'blunt gong');

            game.rollSolution();
            setUpLetters(game.solution);
            user.resetGuessesLeft();
            gui();
            game.checkVsInput = 'lettersOnly';
            prompter('');
            break;

          case 1600: // // MAIN GAME ROUND LOOP
            let letterVar = eval('letter' + userInput.toUpperCase());
            let situation = '';
            if (letterVar.isGuessed) {
              situation = 'repeatGuess';
            } else if (!letterVar.isInSolution) {
              situation = 'badGuess';
              user.guessesLeft -= 1;
            } else {
              situation = 'goodGuess';
              letterVar.guessed();
            }
            switch (evalStanding()) {
              case 'loss':
                game.goToIdx = 6000;
                user.record.losses += 1;
                gui(); // REPLACE WITH END GUI
                break;
              case 'win':
                game.goToIdx = 7000;
                user.record.wins += 1;
                break;
              default:
                game.goToIdx -= 100;
                gui(situation);
                rl.prompt();
            }
            break;
          
          case 6100: // ROUND LOST
            gui();
           
            clear();
            print('You LOST\n');
            print(user.record);
            print('\n\n\nEnter] Play again?\nc] Change something?)\n x] Quit Game');
            prompter('> ');
            break;

          

          default:
            print(`GAME ERROR :/`);
            rlEnd();
        }
      }
  } );
}

introGUI();
gameEngine();

 

 

/*

    :: restart anchor

Hello, user. What do I call you? => NAME

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






// CODE JUNKYARD //

/*
for (var i = 0; i < 26; i++) {
    addLetter(String.fromCharCode(97 + i));
}
print(letters); // debug


print("                                                                             ⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊                ");
print("                                                                             ⨊⨊                  &&& &&                       ");
print("                                                                             ⨖                      &&&&                   ");
print("                                                                             ⨖                        &&                    ");
print("                                                                           ▒▒▒▒▒                      &&                      ");
print("                                                                          ▒▒ ▒ ▒▒                     &&                       ");
print("                                                                          ▒▒▒▒▒▒▒                     &&                       ");
print("                                                                            ▒▒▒                       &&                              ");
print("                                                                    ▒▒▒      █      ▒▒▒               &&                                ");
print("                                                                         ▒▒  ▒  ▒▒                    &&                              ");
print("                                                                             J                        &&                              ");
print("                                                                             ▒                        &&                              ");
print("                                                                             ▒                        &&                              ");
print("                                                                            ▒ ▒                       &&                     ");
print("                                                                           ▒   ▒                      &&                      ");
print("                                                                          ▒     ▒                   &&&&                        ");
print("                                                                         ▒       ▒                &&  &&                        ");
print("                                                                        ▒         ▒             &&    &&                         "); 
print("                                                                   √√√√√√√√√√√√√√√√√√√ ⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊ ");
                                                                                             ///////////

backup 08-26
  print(`${gHang_Env}                                                                            c${limbTie}cccccccccccccccccccccccccccccccccc c c${tReset}`);
  print(`${gNoose_Env}                                                                               `);
  print(`                                                                             ⨖ `);
  print(`                                                                             ⨖ `);
  print(`                                                                             ⨖ ${tReset}`);
  print(`${head_Env}                                                                           ▒▒▒▒▒ `);
  print(`                                                                          ▒▒ ▒ ▒▒ `);
  print(`                                                                          ▒▒▒▒▒▒▒ `);
  print(`                                                                            ▒▒▒         ${tReset}`);
  print(`                                                                    ${armL}${armL}${armL}      ${neck}      ${armR}${armR}${armR} `);
  print(`                                                                         ${armL}${armL}${armL} ${spine} ${armR}${armR}${armR} `);
  print(`                                                                             ${userShirt} `);
  print(`                                                                             ${spine}     `);
  print(`                                                                             ${spine}     `);
  print(`                                                                            ${legL} ${legR} `);
  print(`                                                                           ${legL}   ${legR} `);
  print(`                                                                          ${legL}     ${legR}  `);
  print(`                                                                         ${legL}       ${legR} `);
  print(`                                                                        ${legL}         ${legR} ${tReset}`);
  
}

*/