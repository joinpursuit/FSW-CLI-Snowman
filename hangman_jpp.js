/*
HANGMAN by Joseph P. Pasaoa
Pursuit 6.2 FSW Fellowship
Summer 2019

*/

const print = (logThis) => {
  console.log(logThis);
}




/* TO DO, MISC
*/

// array of letter core objects
//   - constructor function Letter
//
// console objects on clear
//   - letter marquee - visible = unguessed; can i gray?
//   - working solution display
//   - gallows status image
//   - status display: guess tally, category, timer, best time for difficulty
//   - message console
//
//
// extra stimuli
//   - beeps for stress
//   - visual frenetic letter static
//
//
// word bank
//   - arrays by thematic categories
//   - conditional difficulty levels, by length: easy, medium, hard, ridiculous, ludicrous
//
//

/* VARIABLE DECLARATIONS */

// to do: make a number of wordArrs for diff categories
let sampleWords = ["able", "about_account_acid", "across_addition", "adjustment", "advertisement", "after_again", "against", "agreement",
 "almost_among_amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument_army",
 "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake"];



// LETTER CORE ARRAY
class Letter {
  constructor(name) {
    this.name = name;
    this.isInPlay = false;
    this.isGuessed = false;
  }

  initToPlay = () => {
    this.isInPlay = true;
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

for (var i = 0; i < 26; i++) {
    letters.push(eval("letter" + (String.fromCharCode(65 + i)))); // 97 for lowercase
}

// print(letters); // debug



// WORD CHOOSER
const selectSolution = (whichCategory) => {
  return whichCategory[ Math.floor(Math.random() * whichCategory.length) ];
}

// POPULATES ARRAY of ACTIVE LETTERS
const dressForSolution = (solutionIn) => {
  for (let i of solutionIn) {
    if (i !== "_") {
      let letterVar = eval("letter" + i.toUpperCase());
      letterVar.initToPlay();
      inPlayLetterVars.push(letterVar); // makes array for use later
    }
  }
}

// init ***
let solution = selectSolution(sampleWords);
dressForSolution(solution);



// USER INTERFACE
inPlayLetterVars[2].isGuessed = true;

let uiMarquee = "  ";
for (let i of letters) {
  if (i.isGuessed === true) {
    uiMarquee += `\x1b[30m${i.name.toUpperCase()}\x1b[0m  `;
  } else {
    uiMarquee += `\x1b[39m${i.name.toUpperCase()}\x1b[0m  `;
  }
}


// let uiWorkBoard = "      ";
// for (let i of solution) {
//   let letterVar = eval("letter" + i.toUpperCase());
//   if (letterVar === "_") {
//     uiWorkBoard += "  ";
//   } else if (letterVar.isGuessed === false) {
//     uiWorkBoard += "_ ";
//   } else {
//     uiWorkBoard += `${letterVar.name} `;
//   }
// }
// 
// print(uiWorkBoard, "\n");

print(" . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
print(uiMarquee);


print(solution);
print(inPlayLetterVars);



// SOLUTION DRESSER








/*
  ===========
  &         !
  &         0
  &       /{D}\
  &         |
  &        / \
==&====]-------
=======

  ===========
  &         |
  &         |
  &         o
  &        |D|
  &         |
==&====]   | |
=======



          \ 0 /
           {D}
            |
           / \
===================
          ============

*/


















/*
console.log('\x1b[36m%s\x1b[1m', "HELLO1");
console.log('\x1b[36m%s\x1b[2m', "HELLO2");
console.log('\x1b[36m%s\x1b[4m', "HELLO4");
console.log('\x1b[36m%s\x1b[7m', "HELLO7");
console.log('\x1b[36m%s\x1b[8m', "HELLO8");
console.log('\x1b[31m%s\x1b[0m', "HELLO31");
console.log('\x1b[37m%s\x1b[0m', "HELLO37");
console.log('\x1b[90m%s\x1b[0m', "HELLO90");
console.log('\x1b[30m%s\x1b[0m', "HELLO30");
*/



// let letterA = new Letter(a);
// let letterB = new Letter(b);
// let letterC = new Letter(c);
// let letterD = new Letter(d);
// let letterE = new Letter(e);
// let letterF = new Letter(f);
// let letterG = new Letter(g);
// let letterH = new Letter(h);
// let letterI = new Letter(i);
// let letterJ = new Letter(j);
// let letterK = new Letter(k);
// let letterL = new Letter(l);
// let letterM = new Letter(m);
// let letterN = new Letter(n);
// let letterO = new Letter(o);
// let letterP = new Letter(p);
// let letterQ = new Letter(q);
// let letterR = new Letter(r);
// let letterS = new Letter(s);
// let letterT = new Letter(t);
// let letterU = new Letter(u);
// let letterV = new Letter(v);
// let letterW = new Letter(w);
// let letterX = new Letter(x);
// let letterY = new Letter(y);
// let letterZ = new Letter(z);

/*
const addLetter = (name) => {
  let letterObj = new Letter (name);
  letters.push(letterObj);
}

// init ***
for (var i = 0; i < 26; i++) {
    addLetter(String.fromCharCode(97 + i));
}
print(letters); // debug

*/
