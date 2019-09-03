/*
HANG-xX by Joseph P. Pasaoa
Pursuit 6.2 FSW Fellowship
Summer 2019


PLANNING / TO DO
  - X status display: guess tally, category, timer, best time for difficulty

  - extra stimuli
      beeps for stress
      visual frenetic letter static

  - word banks
      more words
      conditional difficulty levels, by length: easy, medium, hard, ridiculous, ludicrous

  - refactor and cleanup
*/



// INIT MODULES //
// Readline  < I/O System > 
const readline = require('readline');
const rl = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
} );
const rlEnd = () => {
  if (bg0) {
    bg0.kill();
  }
  clearInterval(bgX);
}
const prompter = (msg) => {
  rl.setPrompt(msg);
  rl.prompt();
}

// Play-sound  < Audio >
const player = require('play-sound')(opts = {});
const sound = (file, description) => {
  player.play(file, function(err) {
      if (err) {
        if (bg1) {
          bg1.kill();
        }
        clearInterval(bgX);
        throw err;
      }
  } );
}



// TERMINAL MANIPULATION //
const clear = () => {
  process.stdout.write('\033[2J'); // 1. Print empty lines until the screen is blank.
  process.stdout.write('\u001b[H\u001b[2J\u001b[3J'); // 2. Clear the scrollback.
}
const print = (logThis) => {
  console.log(logThis);
}
const pMove = (howManyX, howManyY) => { // moves cursor by logging formulated string
  let output = ``;
  for (let i = 0; i < howManyY - 1; i++) {
    output += `\n`;
  }
  for (let i = 0; i < howManyX; i++) {
    output += ` `;
  }
  return output;
}
const moveCAbs = (howManyX, howManyY) => { // moves cursor via Terminal, from absolute 0,0 position
  readline.cursorTo(process.stdin, howManyX, howManyY);
}
const moveCRel = (howManyX, howManyY) => { // moves cursor via Terminal, from relative current position
  readline.moveCursor(process.stdin, howManyX, howManyY);
}

// base text RESETS
const tReset = `\x1b[0m`;
const tKillDim = `\x1b[22m`;
const tKillBlink = `\x1b[25m`;

// base text STYLES
const tBold = `\x1b[1m`;
const tDim = `\x1b[2m`;
const tBlink = `\x1b[5m`;
const tHidden = `\x1b[8m`;

// base text COLORS
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

// styling constants
const xTitle = tMage;
const xInputHightlight = tLYellow;
const xCategories = tDim + tGreen;
const xUserPrompt = tCyan;



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
    game.solutionLettersHiding[this.name] = true;
  }
  guessed() {
    this.isGuessed = true;
    game.solutionLettersHiding[this.name] = false;
  }
  reset() {
    this.isInSolution = false;
    this.isGuessed = false;
    game.solutionLettersHiding[this.name] = false;
  }
  static addInstance(el) {
      letters.push(el);
  }
}

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

const isLetter = (char) => {
  return char.toLowerCase() !== char.toUpperCase();
}



// MAIN GAME VARIABLES //
let user = {
  name: '',
  maxGuesses: 7,
  guessesLeft: 7,
  guessesMade: 0,
  guessesRepeated: 0,
  guessesSpent() {
    return this.maxGuesses - this.guessesLeft;
  },
  hangRatio() { // used in calculating hang display intervals
    return this.guessesSpent() / (this.maxGuesses - 3); // derived from removing final blinkingnoose frame and two initial frames from calc
  },
  resetGuessCounters() {
    this.guessesLeft = Number(this.maxGuesses);
    this.guessesMade = 0;
    this.guessesRepeated = 0;
  },
  record: { wins: 0, losses: 0 }
}
let game = {
  categoryIdx: null, // TEMP value
  // isTimer: false,
  // maxTime: null,
  solution: null,
  solutionLettersHiding: {},
  // hiddenLettersLeft: null,
  rollSolution() {
    let currentWordBank = wordBanks[this.categoryIdx].bank;
    this.solution = currentWordBank[ Math.floor(Math.random() * currentWordBank.length) ];
  },
  goToIdx: 0,
  checkVsInput: 'noCheck',
  showCredits: false
}

// Loss / Victory Conditions
const isUserLoser = () => {
  return user.guessesLeft === 0;
}
const isUserWinner = () => {
  return Object.values(game.solutionLettersHiding).every( (isLetterHiding) => !isLetterHiding );
}



// GUI TOP FRAME //
const guiTop = () => {
  let styleTop = `${tReset}${tDim}${tLGray}`;
  let borderTop = `${tReset}${tDim}${tYellow}`;
  if (isUserLoser()) {
    borderTop = `${tReset}${tLRed}`;
  } else if (isUserWinner()) {
    borderTop = `${tReset}${tLGreen}`;
  }

  print(``);
  print(`${styleTop}                                                                                                            ~~~ ~ ~ ~~~~ ~~~~`);
  print(`                                                                                 ~~~ ~~~~ ~ ~ ~    ${tReset}${xTitle}HANG-xX${styleTop}      ~~ ~~~~ ~~~~ ~ ~ ~~~~`);
  print(`~~~~ ~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~~~~ ~ ~~~~ ~~~~ ~~~~ ~ ~ ~~~~ ~ ~~~~ ~~~~ ~ ~~~~ ~ ~ ~ ~~~~ ~ ~~~~ ~ ~    ${tDim}${tCyan}creator ${tReset}${xTitle}Joseph P. Pasaoa${styleTop}  ~ ~~~~ ~`);
  print(`${borderTop}~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n${tReset}`);
}



// GUI BOTTOM FRAME
const guiBottom = () => {
  let borderBottom = `${tReset}${tDim}${tYellow}`;
  if (isUserLoser()) {
    borderBottom = `${tReset}${tLRed}`;
  } else if (isUserWinner()) {
    borderBottom = `${tReset}${tLGreen}`;
  }

  print(`${borderBottom}~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~${tReset}\n`);
  print(`${tDim}${tLGray}~ ~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~~ ~~~~ ~~~~ ~ ~ ~~~~ ~ ~ ~~~~ ~~~~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~ ~ ~ ~~~~`);
  print(` ~~~~ ~ ~~~~ ~ ~~~ ~ ~~~~ ~~~~ ~ ~ ~ ~~~~ ~ ~ ~~~~ ~ ~~~~ ~ ~~~~ ~ ~~~~`);
  // print(`~ ~~~~ ~ ~~~~ ~~~~ ~~~                                                      ${tReset}`);
}



// STATUS BAR //
// to do timer, best time for difficulty
const guiStatusBar = () => {
  let styleGuessNums =      `${tReset}${tBold}${tLGreen}`;
  let styleGuessLabel =     `${tReset}`;
  let sytleGuessSymbols =   `${tReset}`;

  if (user.guessesLeft <= 3) {
    styleGuessNums =        `${tReset}${tBold}${tLRed}`;
    sytleGuessSymbols =     `${tReset}${tDim}${tRed}`
  }
  if (user.guessesLeft === 1) {
    sytleGuessSymbols =     `${tReset}${tBlink}${tLRed}`;
  }
  if (isUserLoser()) {
    styleGuessNums =        `${tReset}${tBold}${tLRed}`;
    styleGuessLabel =       `${tReset}${tDim}${tDGray}`;
    sytleGuessSymbols =     `${tReset}${tDim}${tRed}`;
  }
  
  print(``);
  let categStr = `${tBlue}⫷  Category : ${tDim}${tBold}${tCyan}${wordBanks[game.categoryIdx].category.toUpperCase()}${tReset}  ${tBlue}⫸${tReset}`;
  let guessStr = `${sytleGuessSymbols}⫷  ${styleGuessLabel}Guesses Left : ${styleGuessNums}${user.guessesLeft} / ${user.maxGuesses}  ${sytleGuessSymbols}⫸${tReset}`; // to do gradient asterisk bar sys
  print(`   ${guessStr}         ${categStr} \n`);
}



// ACTIVATES LETTERS FOR ROUND //

const setUpLetters = (solution) => {
  game.solutionLettersHiding = {};
  for (let char of solution) {
    if (isLetter(char) && !game.solutionLettersHiding[char.toLowerCase()]) {
      let letterVar = eval("letter" + char.toUpperCase());
      letterVar.markActive();
    }
  }
}



// LETTERS MARQUEE //
const guiLettersMarquee = () => {

  let marquee = `${tDim}${tDGray} Letters to play ${tReset}:   `;
  for (let letter of letters) {
    let showLetter = letter.name.toUpperCase();
    if (letter.isGuessed) {                                               // guessed letters always
      marquee += `   `;
    } else if (isUserLoser()) {                                           // when game lost...
      letter.isInSolution
        ? marquee += `${tLRed}${showLetter}${tReset}  `                     // ... unguessed solution letters
        : marquee += `${tDim}${tLYellow}${showLetter}${tReset}  `;          // ... unguessed others
    } else {
      marquee += `${tLYellow}${showLetter}${tReset}  `;                   // all unguessed letters during game
    }
  }
  marquee += `  :${tDim}${tDGray} Letters to play${tReset}`;

  print(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  print(marquee);
  print(` ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
}



// SOLUTION MARQUEE //
const guiSolutionBoard = () => {
  let wordMarquee = `      `;
  let linesMarquee = `      `;

  for (let i of game.solution) {
    if (isLetter(i)) {
      let letterVar = eval("letter" + i.toUpperCase());

      if (isUserLoser()) {
        if (letterVar.isGuessed) { 
          wordMarquee += `${tDim} ${letterVar.name.toUpperCase()}  ${tReset}`;
          linesMarquee += `    `;
        } else {
          wordMarquee += `${tLRed} ${letterVar.name.toUpperCase()}  ${tReset}`;
          linesMarquee += `${tDim}${tRed}▔▔▔ ${tReset}`;
        }

      } else if (isUserWinner()) {
        wordMarquee += `${tLGreen} ${letterVar.name.toUpperCase()}  ${tReset}`;
        linesMarquee += `${tDim}${tGreen}▔▔▔ ${tReset}`;

      } else {
        if (letterVar.isGuessed) { 
          wordMarquee += ` ${letterVar.name.toUpperCase()}  `;
          linesMarquee += `▔▔▔ `;
        } else {
          wordMarquee += `    `;
          linesMarquee += `▔▔▔ `;
        }
      }

    } else {
      if (i === `_`) {                                          // renders spaces
        wordMarquee += `    `;
        linesMarquee += `    `;
      } else if (i === `-`) {                                   // renders hyphens
        wordMarquee += ` -  `;
        linesMarquee += `    `;
      } else if (i === `:`) {                                   // renders colons // TODO hide until previous letter revealed
        wordMarquee += ` :  `;
        linesMarquee += `    `;
      }
    }
  }

  print("\n\n");
  print(wordMarquee);
  print(linesMarquee);
  print("");
}



// MESSAGE WINDOW //
let badGuessSoundGate = 1;

const guiMessageBoard = (situation) => {
  let msg = null; 
  
  switch (situation) {
    case `goodGuess`:
      sound('./audio/sfx-guessgood-mechclick.mp3', 'key turn');

      let goodReply1 = `${tGreen}Good choice...${tReset} # Pick again.`;
      let goodReply2 = `${tGreen}Good pick...${tReset} # What's your next guess?`;
      let goodReply3 = `${tGreen}That's a letter...${tReset} # Next?`;
      msg = eval(`goodReply` + Math.ceil(Math.random() * 3));
      break;

    case `badGuess`:
      badGuessSoundGate % 2
        ? sound('./audio/sfx-guessbad1-horn.mp3', 'airhorn')
        : sound('./audio/sfx-guessbad2-shreik.mp3', 'shreik');
      badGuessSoundGate += 1;
      
      let badReply1 = `${tRed}BUZZ...${tReset} # You're fizzing out.`;
      let badReply2 = `${tRed}NOT a good pick...${tReset} # Try again.`;
      let badReply3 = `${tRed}A strike...${tReset} # Feeling the pressure?`;
      msg = eval(`badReply` + Math.ceil(Math.random() * 3));
      break;

    case `repeatGuess`:
      sound('./audio/sfx-repeatedguess-buzzer.mp3', 'buzzer');

      let repeatReply1 = `${tYellow}You've already said that letter...${tReset} # Try again.`;
      let repeatReply2 = `${tYellow}Already chose that letter...${tReset} # You do know how to use the tracker above, don't you?`;
      let repeatReply3 = `${tYellow}Gave me that one already...${tReset} # How about something new?`;
      msg = eval(`repeatReply` + Math.ceil(Math.random() * 3));
      break;

    default:
      msg = `${tMage}YOUR LIFE is on the line.${tReset} # Guessing the word or phrase above just might... set you free.`; 
  }
  if (user.guessesLeft === 1) {
    sound('./audio/sfx-guesslast-ropecreak.mp3', 'rope creaking on wood');

    let direReply1 = `${tLRed}Down to your LAST GUESS...${tReset} # Make it a good one.`;
    let direReply2 = `${tLRed}FINAL GUESS...${tReset} # Ready to hang?`;
    msg = eval(`direReply` + Math.ceil(Math.random() * 2));
  }
  msg = msg.split('#');
  
  print(``);
  print(`      ${tReset}${msg[0]}             `);
  print(`      ${tReset}${pMove(Math.floor(msg[0].length / 3.75), 0)}● ● ●   `);
  print(`      ${tReset}${pMove(Math.floor(msg[0].length / 2.5), 0)}${msg[1]}  `);
  print(`\n`);
}



// GALLOWS DIAGRAM //
const guiGallows = () => {
  let userShirt =   ` `;

  let gHang_Env =      `${tReset}${tHidden}`;
  let gNoose =         ` `;
  let gBeam_Env =      `${tReset}${tHidden}`;
  let head_Env =       `${tReset}${tHidden}`;
  let neck =           ` `;
  let spine =          ` `;
  let armL =           ` `;
  let armR =           ` `;
  let legL =           ` `;
  let legR =           ` `;
  let gGrass_Env =     `${tReset}${tDim}${tGreen}`;
  let gTrapDoor_Env =  `${tReset}${tHidden}`;
  let gPlatform_Str =  `${tReset}${tHidden}`;

  // Temp Overrides for maxGuesses: 7
  gHang_Env =       `${tReset}${tDim}${tRed}`;
  gBeam_Env =       `${tReset}${tDim}${tRed}`;
  gTrapDoor_Env =   `${tReset}${tDim}${tCyan}`;
  gPlatform_Str =   `${tReset}${tRed}⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊`;
  
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
    gNoose = `${tReset}${tBlink}${tYellow}⨖`;
    neck = `${tReset}${tYellow}█`;
    gTrapDoor_Env = `${tReset}${tDim}${tCyan}`;
  }
  
  if (isUserLoser()) {
    gTrapDoor_Env = `${tHidden}`;
    gBeam_Env = `${tDim}${tLGray}`;
    gPlatform_Str =   `${tReset}${gBeam_Env}░░░░░░░░░░░░░▒`;
  } else if (isUserWinner()) {
    stage14();
    gHang_Env = `${tHidden}`;
    gBeam_Env = `${tHidden}`;
  } else if (user.guessesLeft === 1) {
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
  
  if (isUserWinner()) {
    marginLeft += `      `;
  } else if (!isUserLoser()) {
    print(`${marginLeft} ${gHang_Env}          ⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊⨊   `);
    print(`${marginLeft}            ${gNoose}${gBeam_Env}⨊               ${gBeam_Env}⨊⨊⨊ ⨊⨊   `);
    print(`${marginLeft}            ${gNoose}                  ${gBeam_Env}⨊⨊⨊⨊  `);
    print(`${marginLeft}            ${gNoose}                    ${gBeam_Env}⨊⨊   `);
  }

  if (!isUserLoser()) {
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
  } else {
    print(`\n\n\n\n\n\n`);
    print(`${marginLeft}                      ${gBeam_Env}   ░░░░░▒    `);
    print(`${marginLeft}                      ${gBeam_Env} ░░░░░░░░░▒   `);
    print(`${marginLeft}                      ${gBeam_Env}░░███████░░▒   `);
    print(`${marginLeft}                      ${gBeam_Env}░░███░███░░▒   `);
    print(`${marginLeft}               ${gGrass_Env}~~~~ ~ ${gBeam_Env}░░░░░░░░░░░▒${gGrass_Env}~~ ~ ~~~~ ~~~~   `);
    print(`${marginLeft} ${gGrass_Env}~~~~ ~ ~ ~~~~ ~ ~~~~ ${gBeam_Env}░░░░░░░░░░░▒${gGrass_Env} ~   `);
  }

  if (!isUserWinner()) {
    print(`${marginLeft} ${gTrapDoor_Env} ➽➽➽➽➽➽➽➽➽➽➽➽➽➽➽➽➽➽ ${gPlatform_Str}   `);
  }
}



const guiEndingMsg = (situation) => {
  let nameLabel = `${tReset}${tMage}${user.name}`;
  let recordStat = `${tReset}${tDim}${tLGray}Wins-Losses: ${tReset}${tYellow}${user.record.wins} - ${user.record.losses}`;
  let totGuessesStat = `${tReset}${tDim}${tLGray}Total guesses made:${tReset}${tYellow} ${user.guessesMade}`;
  let repGuessesStat = `${tReset}${tDim}${tLGray}Repeat guesses:${tReset}${tYellow} ${user.guessesRepeated}`;

  if (situation === 'win') {
    print(``);
    print(`   ${tReset}${tLGreen}Y O U ' R E   F R E E !${tReset}`);
    print(`   ${tReset}${tLGreen}* * * * * * * * * * * *${tReset}`);
    print(`                                                       Press ${xInputHightlight}Return/Enter${tReset} to play again, or enter an option below:`);
    print(``);
    print(`                                                           [${xInputHightlight}2${tReset}] Change a setting     ${tReset}[${xInputHightlight}3${tReset}] Quit to credits screen`); 
  } else {
    print(``);
    print(`   ${tReset}${tLRed}Y O U ' V E   B E E N   H A N G E D${tReset}`);
    print(`   ${tReset}${tLRed}* * * * * * * * * * * * * * * * * *${tReset}`);
    print(`                                                          Press ${xInputHightlight}Return/Enter${tReset} to play again, or enter an option below:`);
    print(``);
    print(`                                                              [${xInputHightlight}2${tReset}] Change a setting     ${tReset}[${xInputHightlight}3${tReset}] Quit to credits screen`); 
  }
    print(`   ${nameLabel}`);
    print(`     ${recordStat}`);
    print(`     ${totGuessesStat}`);
    print(`     ${repGuessesStat}`);
    print('');
  }



// GUI CONTROL //
const gui = (situation) => {
  clear();
  guiTop();
  guiSolutionBoard();
  guiLettersMarquee();
  guiStatusBar();
  if (situation === 'loss' || situation === 'win') {
    guiEndingMsg(situation);
  } else {
    guiMessageBoard(situation);
  }
  guiGallows();
  guiBottom();
}
  
  

// CORE GAME ENGINE w INPUT FOCUS //
const redoPrompt = () => {
  readline.moveCursor(process.stdin, 0, -1);
  rl.prompt(true);
}
const credits = () => {
  print(`${tReset}${tDim}${tDGray}`)
  print(`\n    SOFTWARE: ${tReset}MS Visual Studio Code, Audacity${tDim}${tCyan}`);
  print(  `      https://code.visualstudio.com`);
  print(  `      https://www.audacityteam.org${tDim}${tDGray}`);
  print(`\n    MODULES: ${tReset}Readline, Play-sound${tDim}${tCyan}`);
  print(  `      https://nodejs.org/api/readline.html`);
  print(  `      https://www.npmjs.com/package/play-sound${tReset}${tDim}${tDGray}`);
  print(`\n    AUDIO SAMPLES: ${tReset}ZapSplat, Daniel Simon${tDim}${tCyan}`);
  print(  `      http://www.zapsplat.com`);
  print(  `      http://www.soundbible.com, D.Simon via SoundBible${tReset}${tDim}${tDGray}`);
  print(`\n    SPECIAL THANKS TO: \n        ${tReset}Alejandro Franco, Jung Rae Jang, Dessa Shepherd${tReset}`);
  print(`\n`);
}



const introGUI = () => {
  let plusOrMinus = `${xInputHightlight}+${tWhite}/${xInputHightlight}-${tWhite}`;

  clear();
  print(`${pMove(3, 2)}`);
  print(`  ${xTitle}HANG-XX :: by Joseph P. Pasaoa`);
  print(`  ${tDim}${tDGray}Copyright (C) 2019. All rights reserved.${tReset}\n\n`);
  // print(`  Optimized for the MAC OSX Terminal.`);
  print(`  Please ${tCyan}adjust your video${tReset} so the words "LAST LINE" below are 3-7 lines from the bottom of your window.`);
  print(`     ( ${xInputHightlight}Command${tWhite} and ${plusOrMinus} on Macs, ${xInputHightlight}Ctrl${tWhite} and ${plusOrMinus} on Windows )`);
  print(`  ${tCyan}Adjust your audio${tReset} to medium for the full experience. \n\n`);
  print(`  When ready, Enter [${xInputHightlight}c${tWhite}] to toggle the credits or Enter ${xInputHightlight}any other key${tWhite} to play.${tReset} `);

  if (game.showCredits) {
    print(`${pMove(4, 7)}${tMage}Credits${tDim}${tDGray} >> >> >> \n`);
    credits();
  }
  moveCAbs(0, 49);
  prompter(`${tReset}  LAST LINE     ${xUserPrompt} `);
}

const gameEngine = () => {
  rl.on('line', (userInput) => {
      userInput = userInput.trim();
      // let letterVar;

      const checkInputErr = () => {
        switch (game.checkVsInput) { // purely for input error checks
          case 'noCheck':
            return false;
          case 'nameCheck':
            return !userInput || userInput.length > 15;
          case 'maxGuessesErr':
            if (userInput === '') {
              return false;
            }
            return isNaN(userInput) || userInput % 1 || userInput < 1 || userInput > 7;
          case 'categoryErr':
            return !userInput || isNaN(userInput) || userInput % 1 || userInput < 1 || userInput > 3;
          case 'lettersOnly':
            return !userInput || !isLetter(userInput);
          case 'roundEnd':
            if (userInput === '') {
              return false;
            }
            return isNaN(userInput) || userInput < 2 || userInput > 3;
        }
      }



      if (checkInputErr()) {
        redoPrompt();
      } else {

        if (game.checkVsInput === 'roundEnd') {
          if (userInput === '2') {
            game.goToIdx = 1200;

            clear();
            moveCAbs(0,4);
          } else if (userInput === '3') {
            game.goToIdx = 3000;
          } else {
            game.goToIdx = 1500;
          }
        } else {
          game.goToIdx = game.goToIdx + 100;          
        }

        switch (game.goToIdx) {
          
          case 100:
            if (userInput.toLowerCase() === 'c') {
              sound(`./audio/sfx-guessgood-mechclick.mp3`);

              !game.showCredits
                ? game.showCredits = true
                : game.showCredits = false;
              game.goToIdx -= 100;
              introGUI();
              break;
            }
            game.goToIdx = 1100;

          case 1100:
            sound('./audio/stage-1-intoqs-pitch.mp3', 'high pitch');
              
            clear();
            moveCAbs(0,4);
            game.checkVsInput = 'nameCheck';
            prompter(`${tReset}  ~ Hello, ${tMage}Player${tWhite}. What do I call you? ${tDim}${tDGray}(15 chars max)${tReset} ~  ${xUserPrompt}`);
            break;

          case 1200:
            sound('./audio/stage-2-nametaken-whistle.mp3', 'train whistle');

            if (game.checkVsInput !== 'roundEnd') {
              user.name = userInput;
              // INIT AUTO-SUBMIT 
              readline.emitKeypressEvents(process.stdin);
              process.stdin.on('keypress', () => {
                  rl.write('\n');
              } );
            }

            moveCRel(0,2);
            game.checkVsInput !== 'roundEnd'
              ? print(   `  ${tReset}~ Welcome, ${tLGreen}${user.name.toUpperCase()}${tWhite}, to ${xTitle}Hang-xX${tReset}.`)
              : print(   `  ${tReset}~ Welcome again, ${tLGreen}${user.name.toUpperCase()}${tWhite}, to ${xTitle}Hang-xX${tReset}.`);
            prompter(`    ${tReset}How many guesses each round (${xInputHightlight}1-7${tReset
              }) do you want? ${xInputHightlight}7${tReset} is the default. ~  ${xUserPrompt}`);
            game.checkVsInput = 'maxGuessesErr';
            break;

          case 1300:
            sound('./audio/stage-3-guessestaken-echothud.mp3', 'echoed thud');

            !userInput
              ? user.maxGuesses = 7
              : user.maxGuesses = userInput;
            moveCRel(0,2);
            print(`${tReset}  ~ Choose a word/phrase category: ~`);
            prompter(`    ${tReset}  [${xInputHightlight}1${tReset}] ${xCategories}Array methods${tReset}  [${xInputHightlight}2${tReset
              }] ${xCategories}Object methods${tReset}  [${xInputHightlight}3${tReset}] ${xCategories}2018 Movies${tReset}  ${xUserPrompt}`);
            game.checkVsInput = 'categoryErr';
            break;

          case 1400:
            sound('./audio/stage-4-categorytaken-vuvuzela.mp3', 'scary vuvuzela');

            game.categoryIdx = userInput - 1;
            moveCRel(0,2);
            print(`  ${tReset}~ Alright ${tLGreen}${user.name.toUpperCase()}${tWhite}, let's begin. ~${tReset}\n\n\n    ...`);
            moveCAbs(0,47);
            prompter(`    ${tDGray}Press ${tReset}${xInputHightlight}Return/Enter${tDGray} to start      ${tReset}`);
            game.checkVsInput = 'noCheck';
            break;

          case 1500: // INITIALIZES NEW ROUNDS
            sound('./audio/stage-5-startround-boldbell.mp3', 'bold bell');

            for (let letter of letters) {
              letter.reset();
            }
            game.rollSolution();
            setUpLetters(game.solution);
            user.resetGuessCounters();
            gui();
            game.checkVsInput = 'lettersOnly';
            prompter(`${tReset}${tDim}${tLGray}~ ~~~~ ~ ~~~~ ~~~~ ~~~ ${tHidden}`);
            break;

          case 1600: // // MAIN GAME ROUND LOOP
            let letterVar = eval('letter' + userInput.toUpperCase());
            let situationEval = '';
            user.guessesMade += 1;

            if (letterVar.isGuessed) {
              situationEval = 'repeatGuess';
              user.guessesRepeated += 1;
            } else if (!letterVar.isInSolution) {
              situationEval = 'badGuess';
              letterVar.guessed();
              user.guessesLeft -= 1;
            } else {
              situationEval = 'goodGuess';
              letterVar.guessed();
            }
            
            if (isUserLoser()) {
              user.record.losses += 1;
              sound('./audio/stage-6-gamelost-thunderstrike.mp3');
              gui('loss');
              game.checkVsInput = 'roundEnd';
              rl.prompt();
            } else if (isUserWinner() ) {
              user.record.wins += 1;
              sound('./audio/stage-7-gamewin-flockflaps.mp3');
              gui('win');
              game.checkVsInput = 'roundEnd';
              rl.prompt();
            } else {
              game.goToIdx -= 100;
              gui(situationEval);
              rl.prompt();
            }
            break;
          
          case 3000: // END WITH CREDITS
            let marginLeft = `                                                                 `;
            clear();
            guiTop();
            print(`${tReset}${tMage}    CREDITS    ${marginLeft}${tDim}${tDGray}Copyright (C) 2019. All rights reserved.\n`);
            credits();
            print(`${tReset}${tMage}\n    ~~~~~~\n\n${tReset}    Thank you ${tLGreen}${user.name.toUpperCase()}${tReset} for playing! \n\n\n\n\n`);
            
            let tombstone_Env = `${tDim}${tLGray}`;
            let gGrass_Env = `${tReset}${tDim}${tGreen}`;
            
            print(`${marginLeft}                      ${tombstone_Env}   ░░░░░▒    `);
            print(`${marginLeft}                      ${tombstone_Env} ░░░░░░░░░▒   `);
            print(`${marginLeft}                      ${tombstone_Env}░░███████░░▒   `);
            print(`${marginLeft}                      ${tombstone_Env}░░███░███░░▒   `);
            print(`${marginLeft}               ${gGrass_Env}~~~~ ~ ${tombstone_Env}░░░░░░░░░░░▒${gGrass_Env}~~ ~ ~~~~ ~~~~   `);
            print(`${marginLeft} ${gGrass_Env}~~~~ ~ ~ ~~~~ ~ ~~~~ ${tombstone_Env}░░░░░░░░░░░▒${gGrass_Env} ~   `);
            print(`${marginLeft}                     ${tReset}${tombstone_Env}░░░░░░░░░░░░░▒   `);

            guiBottom();

            rl.close();
            break;

          default:
            print(`GAME ERROR :/`);
            rl.close();
        }
      }
  } ).on('close', () => {
      print(`${tReset}${tDim}${tLGray}~ ~~~~ ~ ~~~~ ~~~~ ~~~ ${tReset}\n`);
      if (bg1) {
        bg1.kill();
      }
      clearInterval(bgX);
  } );
}



// RUN //

const bg1 = player.play("./audio/bgm-2minStorm-Joeyedit.mp3", function(err) {
  if (err) {
    throw err;
  }
} );
const bgX = setInterval( () => {
  player.play("./audio/bgm-2minStorm-Joeyedit.mp3", function(err) {
    if (err) {
      throw err;
    }
  } );
}, 280000 );
// background ambient sound loop -- end

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

// gallows backup 20190901 //

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

*/