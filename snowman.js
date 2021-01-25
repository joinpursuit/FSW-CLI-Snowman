const rls = require("readline-sync");
const chalk = require("chalk");
const dictionary = require("./dictionary");
let word = dictionary[Math.floor(Math.random() * dictionary.length - 1)];
let tracker = { chances: 12 };

const endGame = () => {
	// rls.keyInYN(`Do you want to play again?\n`)
	//     ? startGame() : // need to reset word
	console.log(`Goodbye.\n`);
	process.exit();
};

const win = () => {
	console.log(chalk.blue(`\n 🏆 S U P E R S T A R !!! 🏆\n`));
	console.log(`You took ${tracker["tries"]} guesses to win.\n`);
	endGame();
};

const winOrLose = () => {
	if (tracker["chancesRemaining"] === 0) {
		console.log("\nSorry Buddy. No more chances.\n");
		console.log(`The word was ${word}.\n`);
		endGame();
	} else if (tracker["chancesRemaining"] === 1) {
		console.log(`\nOh boy. 😰 You have 1 guess left.\n`);
	} else if (!tracker["dashedWord"].includes("_ ")) {
		win();
	}
};

const wrongLetter = (letter) => {
	console.log(chalk.red("\nNope. That's not it.\n"));
	tracker["chancesRemaining"]--;
	tracker["wrongLetters"] += letter;
	tracker["tries"]++;
	winOrLose();
};

const removeDash = (letter) => {
	for (let i = 0; i < tracker["wordToArr"].length; i++) {
		if (tracker["wordToArr"][i].includes(letter)) {
			tracker["dashedWord"][i] = letter;
		}
	}
	winOrLose();
};

const duplicateLetter = (letter) => {
	// why is this adding the letter twice to (wrong/correct)Letters?
	if (
		tracker["correctLetters"].includes(letter) ||
		tracker["wrongLetters"].includes(letter)
	) {
		console.log(chalk.red("\nYou already picked that letter.\n"));
		getValidLetterGuess();
	}
};

const checkLetter = (letter) => {
	duplicateLetter(letter);
	if (tracker["wordToArr"].includes(letter)) {
		console.log(chalk.blue("\nG o o d  G u e s s !\n"));
		tracker["correctLetters"] += letter;
		tracker["tries"]++;
		removeDash(letter);
	} else {
		wrongLetter(letter);
	}
};

// checks if the letter guessed is not an empty string and is lowercase
/*let letter = */ function getValidLetterGuess() {
	function guessIsValid(letter) {
		return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase();
	}

	// add duplicate letter function here? ... so letter is reset and not added twice to (wrong/correct)Letter?

	let letter = "";
	while (!letter) {
		let input = rls.question("\nPlease enter your guess: ");
		if (guessIsValid(input)) {
			letter = input;
			//duplicateLetter(letter);
		} else {
			console.log("Please enter a valid letter");
		}
	}
	letter = letter.toLowerCase();
	return letter;
}

const printBoard = () => {
	console.log("\n✅", tracker["correctLetters"]);
	console.log("\n❌", tracker["wrongLetters"]);
	console.log("\n⏰", tracker["chancesRemaining"]);
	console.log("\n🧐", tracker["tries"], "\n");
	console.log(chalk.blue(tracker["dashedWord"].join(" ")));
};

//set up code for the board below
const dashes = () => {
	let dashedWord = [];
	tracker["wordToArr"].forEach((element) => dashedWord.push("_ "));
	tracker["dashedWord"] = dashedWord;
};

const toArray = (word) => {
	let wordArr = [];
	for (let i = 0; i < word.length; i++) {
		const char = word[i];
		wordArr.push(char);
	}
	tracker["wordToArr"] = wordArr;
	dashes(word);
};

const setTracker = () => {
	tracker["chancesRemaining"] = tracker["chances"];
	tracker["correctLetters"] = "";
	tracker["wrongLetters"] = "";
	tracker["tries"] = 0;
	// tracker["word"] = newWord;
};

// let word = function  getWord() {
// 	dictionary[Math.floor(Math.random() * dictionary.length - 1)];
// };

// const word = getWord();

const startGame = () => {
	// getWord(); // ReferenceError: getWord is not defined
	console.clear();

	console.log(`\nYou have to guess the letters in my 🧐 mystery word.\n`);
	console.log(chalk.blue(`You have ${tracker["chances"]} chances.\n`));
	console.log(chalk.yellow(word)); // mystery word
	setTracker();
	toArray(word);
	while (tracker["chancesRemaining"] > 0) {
		printBoard();
		const letter = getValidLetterGuess();
		console.clear();
		checkLetter(letter);
	}
};

const intro = () => {
	rls.keyInYN(`Do you want to play a game with me?\n`)
		? startGame()
		: endGame();
};

intro();
