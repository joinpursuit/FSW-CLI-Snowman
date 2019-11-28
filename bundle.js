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
/***/ (function(module, exports, __webpack_require__) {

const {allTheWords} = __webpack_require__(/*! ./word.js */ "./word.js")

class Board {
    constructor(length) {     
        this.board = new Array(length).fill("_")     
    }
    length() {
        return this.board.length
    }
    get(idx) {
        return this.board[idx]
    }

    completeBoard() {
        return this.board.every(el => el !== "_")
    }
    addCharacter(indices, char) {
        for(let i of indices) {
            this.board[indices] = char
        }
            
    }

}


let test = new Board(5)
console.log(test.addCharacter("Pizza", "z"))

module.exports = Board















/***/ }),

/***/ "./ComputerPlayer.js":
/*!***************************!*\
  !*** ./ComputerPlayer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {allTheWords} = __webpack_require__(/*! ./word.js */ "./word.js")
class ComputerPlayer {
    constructor(name = "Opponent") {
        this.dictionary = allTheWords
        this.word = "" 
        this.secretWord = ""       
    }
    
    chooseSecretWord() {
        let idx = Math.floor(Math.random() * this.dictionary.length)
        this.secretWord = this.dictionary[idx]
        return this.secretWord
    }

    checkGuess(char) {
        let indices = []
        for(let i = 0; this.secretWord.length; i++) {
            if (letter === char) {
                indices.push(i)
            }
        }
        return indices
    }

    reveal() {
        return this.secretWord()
    }

}

module.exports = ComputerPlayer

/***/ }),

/***/ "./Game.js":
/*!*****************!*\
  !*** ./Game.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js");
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HumanPlayer_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js");
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _word_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./word.js */ "./word.js");
/* harmony import */ var _word_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_word_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Board.js */ "./Board.js");
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Board_js__WEBPACK_IMPORTED_MODULE_3__);
// const {hangManPics} = require("./hangmanPics.js")





class Game {
   constructor(players) {
       this.ref = players["ref"]
       this.guesser = players["guesser"]
       this.guessesRemaining = 6;
       this.guessedLetters = [];
   }
   play() {
       let boardLength = this.ref.chooseSecretWord()
       this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_3___default.a(boardLength);
       while(!this.isGameOver()) {
           console.log(hangManPics[this.guessesRemaining])
           console.log("Letters guessed so far");
           console.log("Guessed so far: " + this.guessedLetters.join(", "));
           this.guesser.displayBoard(this.board);
           this.ref.displayBoard(this.board);
           let guess = "0";
           while(!this.isValidGuess(guess)) {
               guess = this.guesser.getMove();
               if(!this.isValidGuess(guess)) {
                   console.log("INVALID GUESS!")
               }
           }
           this.guessedLetters.push(guess)
           let positions = this.ref.checkGuess(guess);
           if(positions.length === 0) {
               this.guessesRemaining--;
           }
           this.board.addChar(positions, guess);
       }
       if(this.guessesRemaining > 0) {
           console.log(this.guesser.name + " wins!")
       } else {
           let winningWord = this.ref.reveal();
           console.log("word was " + winningWord)
           console.log(this.ref.name + " wins!")
       }
   }
   isValidGuess(char) {
       let alph = "abcdefghijklmnopqrstuvwxyz";
       return char.length === 1 && alph.includes(char) &&
       !this.guessedLetters.includes(char);
   }
   isGameOver() {
      return  this.board.isComplete() || this.guessesRemaining === 0;
   }
}
let human = new _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_0___default.a("corey")
let robo = new _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_1___default.a();
let game = new Game({ref: human, guesser: robo})
game.play();
/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./HumanPlayer.js":
/*!************************!*\
  !*** ./HumanPlayer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

class HumanPlayer {
    constructor(name) {
        this.name = name
    }

    getMove() {
        return readline.question("Enter your letter!: ") 
    }

    displayBoard(board) {  
       let output = ""
       for(let i = 0; i < board.length(); i++) {
           output += board.get(i)
       }   
    }
    
}

// let Board = require("./Board.js")

// let human = new HumanPlayer("Marvin")
// console.log(human.displayBoard(new Array(5)))
module.exports = HumanPlayer;

/***/ }),

/***/ "./View.js":
/*!*****************!*\
  !*** ./View.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

class View {
    constructor(game, el) {
        this.game = game
        this.el = el
        this.displayBoard()
    }

    displayBoard() {
        let gameDiv = document.createElement("div")
        gameDiv.id = "boardDiv"
        this.el.innerHTML = ""
        this.game.board.reveal().forEach((row) => {
            let ul = document.createElement("ul")
            ul.classList.add("row")
            row.forEach((val) => {
                let li = document.createElement("li")
                li.innerText = val;
                ul.appendChild(li)
            })
            gameDiv.appendChild(ul)
        })
        this.el.appendChild(gameDiv)
    }
}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ "./Game.js");
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.js */ "./Board.js");
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Board_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js");
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_HumanPlayer_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js");
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _word_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./word.js */ "./word.js");
/* harmony import */ var _word_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_word_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./View.js */ "./View.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_View_js__WEBPACK_IMPORTED_MODULE_5__);







document.addEventListener("DOMContentLoaded", () => {
    let game = new _Game_js__WEBPACK_IMPORTED_MODULE_0__["default"](
        new _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_2___default.a("Marvin"),
        new _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_3___default.a("Opponent")
    )
    let el = document.querySelector("#hangmanAgain")
    new _View_js__WEBPACK_IMPORTED_MODULE_5___default.a(game, el)
})



/***/ }),

/***/ "./word.js":
/*!*****************!*\
  !*** ./word.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

let allTheWords = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]



module.exports = {allTheWords}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map