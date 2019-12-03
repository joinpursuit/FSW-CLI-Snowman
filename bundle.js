/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Board.js":
/*!******************!*\
  !*** ./Board.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

class Board {
    constructor(secretWord, length) {
        this.secretWord = secretWord;
        this.board = new Array(length).fill("_")
    }
    length() {
        return this.board.length;
    }
    get(idx) {
        return this.board[idx];
    }
    isComplete() {
        return this.board.every(el => el !== "-")
    }
    addChar(indicies, char) {
        for (let i of indicies) {
            this.board[i] = char;
        }
    }
}
// let board1 = new Board('suspenders')
// console.log(board1.displayBoard())
module.exports = Board;

/***/ }),

/***/ "./ComputerPlayer.js":
/*!***************************!*\
  !*** ./ComputerPlayer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

class ComputerPlayer {
    constructor(secretWord) {
        this.dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"];
        this.secretWord = secretWord;
        // this.secretWordLength = this.secretWord.length;
    }
    getSecretWord() {
        let secretWord = this.dictionary[Math.floor(Math.random()*this.dictionary.length)];
        return secretWord;
    }
    reveal(guessesRemaining, guessedWord) {
        if (guessesRemaining === 6 || guessedWord === secretWord) {
            return this.secretWord;
        }
    }
    getCharPositions(char) {
        let newArr = [];
        for (i = 0; i < this.secretWord.length; i++) {
            if (char === this.secretWord[i]) {
                newArr.push(char);
            }
        }
        return newArr
    }
}
// let robot = new ComputerPlayer()
// console.log(robot.getSecretWord())
module.exports = ComputerPlayer;

/***/ }),

/***/ "./Game.js":
/*!*****************!*\
  !*** ./Game.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {const HumanPlayer = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js")
const ComputerPlayer = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js")
const Board = __webpack_require__(/*! ./Board.js */ "./Board.js")
// const readline = require('readline-sync')

class Game {
    constructor(guesser, referee, board) {
        this.guesser = guesser;
        this.referee = referee;
        this.board = board;
        this.guessesRemaining = 6;
        this.guessedLetters = [];
    }
    enterValidGuess(guess) {
        this.guessedLetters.push(guess);
        for (i =0; i < this.ComputerPlayer.secretWord.length; i ++) {
            if (guess === this.ComputerPlayer.secretWord[i]) {
                return this.ComputerPlayer.secretWord[i];
            } else {
            this.guessesRemaining--
            }
        }
    }
    isGameOver() {
        this.board.isComplete() || this.guessesRemaining === 0;
        // console.log("You lose!")
    }
    isValidGuess(letter) {
        let alph = "abcdefghijklmnopqrstuvwxyz"
        return letter.length === 1 && alph.includes(letter) && !this.guessedLetters.includes(letter);
    }

        // let letter = ""
        // while (!letter) {
        //   let input = readline.question("Please enter your guess: ")
        //   if (guessIsValid(input)) {
        //     letter = input
        //   } else {
        //     console.log("Please enter a valid letter")
        //   }
        // }
        // return letter.toLowerCase()
    beginGame() {
        let boardLength = this.referee.getSecretWord();
        this.board = new Board(boardLength);
    }
    guessesRemaining() {
            if (this.guessesRemaining >= 2) {
                return "You have " + this.guessesRemaining + " guesses remaining."
            } else if (this.guessesRemaining === 1) {
                return "This is your last chance!"
        }
    }

    play() {
        let userInput = readline.question("Would you like to play? yes or no");
        if (userInput === "yes") {
            console.log("Great! Given a secret word, you will have 6 chances to guess correctly. Otherwise, game over.");
        } else if (userInput === "no") {
            let nameInput = readline.question("Enter your name: ")
            console.log("Hello " + nameInput + " !  Welcome to my game of Hangman.")
            this.play();
        }
        let boardLength = this.referee.getSecretWord();
        this.board = new Board(boardLength);
        while (!this.isGameOver) {
            let guessedChar = readline.question("Enter a guess:");
            this.guesser.guessedLetters += guessedChar + ", ";
            console.log("Guessed so far: " + this.guessedLetters.join(", "));
            this.guesser.displayBoard(this.board);
            this.ref.displayBoard(this.board);
            let guess = "0";
            while (!this.isValidGuess(guess)) {
            guess = this.guesser.getMove();
            if (!this.isValidGuess(guess)) {
                console.log("Invalid Guess!")
            }
        }
        this.enterValidGuess(guess);
        }
        this.resolveGame();
    }
    resolveGame() {
        if (this.guessesRemaining > 0) {
            return this.guesser.name + " wins!"
        } else {
            let winningWord = this.referee.reveal();
            return "Word was " + winningWord + ". You LOSE!"
        }
    }
}


let nameInput = readline.question("Enter your name: ")
console.log("Hello " + nameInput + " !  Welcome to my game of Hangman.")

let computerPlayerA = new ComputerPlayer();
let board1 = new Board(computerPlayerA.getSecretWord());

let game1 = new Game(new HumanPlayer(nameInput), computerPlayerA, board1);
game1.play();

module.export = Game;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./HumanPlayer.js":
/*!************************!*\
  !*** ./HumanPlayer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const readline = require("readline-sync");

class HumanPlayer {
    constructor(name) {
        this.name = name;
        this.guessedLetters = "";
    }
    getMove() {
        return readline.question("Enter your guess:").toLowerCase();
    }
    displayBoard() {
        let str = "";
        for (let i = 0; i < this.secretWord.length; i++) {
            str += " _ ";
        }
        return str;
    }
    
}

// let player1 = new HumanPlayer("Ashya")
// let player2 = new HumanPlayer("Corey")

// console.log(player1)
module.exports = HumanPlayer;

/***/ }),

/***/ "./View.js":
/*!*****************!*\
  !*** ./View.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hangmanPics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hangmanPics.js */ "./hangmanPics.js");
/* harmony import */ var _hangmanPics_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hangmanPics_js__WEBPACK_IMPORTED_MODULE_0__);


class View {
    constructor(el, game) {
        this.game = game;
        this.el = el;
        this.game.beginGame();
        this.setUpTheGame();
        this.bindEvents();
        this.play();
    }
    play() {
        this.displayBoard();
        this.displayGuessedLetters();
        this.displayHangMan();
        if(this.game.isGameOver()) {
            let h1 = document.createElement("h1");
            h1.innerText = this.game.resolveGame();
            this.el.appendChild(h1);
            let form = document.querySelector("form");
            form.parentNode.removeChild(form);
        }
    }
    bindEvents() {
        let form = document.querySelector("form");
        form.addEventListener("submit", e => {
            e.preventDefault();
            let input = document.querySelector("input");
            let guess = input.value;
            input.value = "";
            if (this.game.isValidGuess(guess)) {
                this.game.enterValidGuess(guess);
            }
            this.play();
        })
    }
    displayBoard(board = this.game.board) {
        let ul = document.querySelector("#board");
        ul.innerHTML = "";
        for (let i = 0; i < board.length(); i++) {
            let li = document.createElement("li");
            li.innerText = board.get(i);
            ul.appendChild(li);
        }
    }
    displayGuessedLetters() {
        let guesses = document.querySelector("#guessedSoFar");
        guesses.innerHTML = "";
        guesses.innerText = this.game.guessedLetters.join(", ")
    }
    displayHangMan() {

        document.querySelector("#hangManPic").innerText = _hangmanPics_js__WEBPACK_IMPORTED_MODULE_0__["hangManPics"][this.game.guessesRemaining];
    }
    setUpTheGame() {
        let hangManPic = document.createElement("div");
        hangManPic.id = "hangManPic";
        this.el.appendChild(hangManPic);
        let guessedSoFar = document.createElement("ul");
        guessedSoFar.id = "guessedSoFar";
        this.el.appendChild(guessedSoFar);
        let board = document.createElement("ul");
        board.id = "board";
        this.el.appendChild(board);
        let form = document.createElement("form");
        let input = document.createElement("input");
        form.appendChild(input);
        this.el.appendChild(form);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (View);


/***/ }),

/***/ "./hangmanPics.js":
/*!************************!*\
  !*** ./hangmanPics.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

const hangManPics = [
    `
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
  =========`,
    `
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
  =========`,
    `
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
  =========`,
    `
    +---+
    |   |
    O   |
   /|   |
        |
        |
  =========`,
  
    `
    +---+
    |   |
    O   |
    |   |
        |
        |
  =========`,
    `
    +---+
    |   |
    O   |
        |
        |
        |
  ========= `,
    `
    +---+
    |   |
        |
        |
        |
        |
  ========= `,
];
  
module.exports = { hangManPics }

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.js */ "./Board.js");
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Board_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js");
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js");
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_HumanPlayer_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game.js */ "./Game.js");
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Game_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./View.js */ "./View.js");






document.addEventListener("DOMContentLoaded", () => {
    let el = document.querySelector("#hangman");
    let computerPlayerA = new _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_1___default.a();
    let board1 = new _Board_js__WEBPACK_IMPORTED_MODULE_0___default.a(computerPlayerA.getSecretWord());
    let game1 = new _Game_js__WEBPACK_IMPORTED_MODULE_3___default.a(new _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_2___default.a(nameInput), computerPlayerA, board1);
    new _View_js__WEBPACK_IMPORTED_MODULE_4__["default"](el, game1);
})

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map