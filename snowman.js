const rls = require("readline-sync");
const chalk = require("chalk");
const dictionary = [
	"able",
	"about",
	"account",
	"acid",
	"across",
	"addition",
	"adjustment",
	"advertisement",
	"after",
	"again",
	"against",
	"agreement",
	"almost",
	"among",
	"amount",
	"amusement",
	"angle",
	"angry",
	"animal",
	"answer",
	"apparatus",
	"apple",
	"approval",
	"arch",
	"argument",
	"army",
	"attack",
	"attempt",
	"attention",
	"attraction",
	"authority",
	"automatic",
	"awake",
	"baby",
	"back",
	"balance",
	"ball",
	"band",
	"base",
	"basin",
	"basket",
	"bath",
	"beautiful",
	"because",
	"before",
	"behaviour",
	"belief",
	"bell",
	"bent",
	"berry",
	"between",
	"bird",
	"birth",
	"bite",
	"bitter",
	"black",
	"blade",
	"blood",
	"blow",
	"blue",
	"board",
	"boat",
	"body",
	"boiling",
	"bone",
	"book",
	"boot",
	"bottle",
	"brain",
	"brake",
	"branch",
	"brass",
	"bread",
	"breath",
	"brick",
	"bridge",
	"bright",
	"broken",
	"brother",
	"brown",
	"brush",
	"bucket",
	"building",
	"bulb",
	"burn",
	"burst",
	"business",
	"butter",
	"button",
	"cake",
	"camera",
	"canvas",
	"card",
	"care",
	"carriage",
	"cart",
	"cause",
	"certain",
	"chain",
	"chalk",
	"chance",
	"change",
	"cheap",
	"cheese",
	"chemical",
	"chest",
	"chief",
	"chin",
	"church",
	"circle",
	"clean",
	"clear",
	"clock",
	"cloth",
	"cloud",
	"coal",
	"coat",
	"cold",
	"collar",
	"colour",
	"comb",
	"come",
	"comfort",
	"committee",
	"common",
	"company",
	"comparison",
	"competition",
	"complete",
	"complex",
	"condition",
	"connection",
	"conscious",
	"control",
	"cook",
	"copper",
	"copy",
	"cord",
	"cork",
	"cotton",
	"cough",
	"country",
	"cover",
	"crack",
	"credit",
	"crime",
	"cruel",
	"crush",
	"current",
	"curtain",
	"curve",
	"cushion",
	"damage",
	"danger",
	"dark",
	"daughter",
	"dead",
	"dear",
	"death",
	"debt",
	"decision",
	"deep",
	"degree",
	"delicate",
	"dependent",
	"design",
	"desire",
	"destruction",
	"detail",
	"development",
	"different",
	"digestion",
	"direction",
	"dirty",
	"discovery",
	"discussion",
	"disease",
	"disgust",
	"distance",
	"distribution",
	"division",
	"door",
	"doubt",
	"down",
	"drain",
	"drawer",
	"dress",
	"drink",
	"driving",
	"drop",
	"dust",
	"early",
	"earth",
	"east",
	"edge",
	"education",
	"effect",
	"elastic",
	"electric",
	"engine",
	"enough",
	"equal",
	"error",
	"even",
	"event",
	"ever",
	"every",
	"example",
	"exchange",
	"existence",
	"expansion",
	"experience",
	"expert",
	"face",
	"fact",
	"fall",
	"false",
	"family",
	"farm",
	"father",
	"fear",
	"feather",
	"feeble",
	"feeling",
	"female",
	"fertile",
	"fiction",
	"field",
	"fight",
	"finger",
	"fire",
	"first",
	"fish",
	"fixed",
	"flag",
	"flame",
	"flat",
	"flight",
	"floor",
	"flower",
	"fold",
	"food",
	"foolish",
	"foot",
	"force",
	"fork",
	"form",
	"forward",
	"fowl",
	"frame",
	"free",
	"frequent",
	"friend",
	"from",
	"front",
	"fruit",
	"full",
	"future",
	"garden",
	"general",
	"girl",
	"give",
	"glass",
	"glove",
	"goat",
	"gold",
	"good",
	"government",
	"grain",
	"grass",
	"great",
	"green",
	"grey",
	"grip",
	"group",
	"growth",
	"guide",
	"hair",
	"hammer",
	"hand",
	"hanging",
	"happy",
	"harbour",
	"hard",
	"harmony",
	"hate",
	"have",
	"head",
	"healthy",
	"hear",
	"hearing",
	"heart",
	"heat",
	"help",
	"high",
	"history",
	"hole",
	"hollow",
	"hook",
	"hope",
	"horn",
	"horse",
	"hospital",
	"hour",
	"house",
	"humour",
	"idea",
	"important",
	"impulse",
	"increase",
	"industry",
	"insect",
	"instrument",
	"insurance",
	"interest",
	"invention",
	"iron",
	"island",
	"jelly",
	"jewel",
	"join",
	"journey",
	"judge",
	"jump",
	"keep",
	"kettle",
	"kick",
	"kind",
	"kiss",
	"knee",
	"knife",
	"knot",
	"knowledge",
	"land",
	"language",
	"last",
	"late",
	"laugh",
	"lead",
	"leaf",
	"learning",
	"leather",
	"left",
	"letter",
	"level",
	"library",
	"lift",
	"light",
	"like",
	"limit",
	"line",
	"linen",
	"liquid",
	"list",
	"little",
	"living",
	"lock",
	"long",
	"look",
	"loose",
	"loss",
	"loud",
	"love",
	"machine",
	"make",
	"male",
	"manager",
	"mark",
	"market",
	"married",
	"mass",
	"match",
	"material",
	"meal",
	"measure",
	"meat",
	"medical",
	"meeting",
	"memory",
	"metal",
	"middle",
	"military",
	"milk",
	"mind",
	"mine",
	"minute",
	"mist",
	"mixed",
	"money",
	"monkey",
	"month",
	"moon",
	"morning",
	"mother",
	"motion",
	"mountain",
	"mouth",
	"move",
	"much",
	"muscle",
	"music",
	"nail",
	"name",
	"narrow",
	"nation",
	"natural",
	"near",
	"necessary",
	"neck",
	"need",
	"needle",
	"nerve",
	"news",
	"night",
	"noise",
	"normal",
	"north",
	"nose",
	"note",
	"number",
	"observation",
	"offer",
	"office",
	"only",
	"open",
	"operation",
	"opinion",
	"opposite",
	"orange",
	"order",
	"organization",
	"ornament",
	"other",
	"oven",
	"over",
	"owner",
	"page",
	"pain",
	"paint",
	"paper",
	"parallel",
	"parcel",
	"part",
	"past",
	"paste",
	"payment",
	"peace",
	"pencil",
	"person",
	"physical",
	"picture",
	"pipe",
	"place",
	"plane",
	"plant",
	"plate",
	"play",
	"please",
	"pleasure",
	"plough",
	"pocket",
	"point",
	"poison",
	"polish",
	"political",
	"poor",
	"porter",
	"position",
	"possible",
	"potato",
	"powder",
	"power",
	"present",
	"price",
	"print",
	"prison",
	"private",
	"probable",
	"process",
	"produce",
	"profit",
	"property",
	"prose",
	"protest",
	"public",
	"pull",
	"pump",
	"punishment",
	"purpose",
	"push",
	"quality",
	"question",
	"quick",
	"quiet",
	"quite",
	"rail",
	"rain",
	"range",
	"rate",
	"reaction",
	"reading",
	"ready",
	"reason",
	"receipt",
	"record",
	"regret",
	"regular",
	"relation",
	"religion",
	"representative",
	"request",
	"respect",
	"responsible",
	"rest",
	"reward",
	"rhythm",
	"rice",
	"right",
	"ring",
	"river",
	"road",
	"roll",
	"roof",
	"room",
	"root",
	"rough",
	"round",
	"rule",
	"safe",
	"sail",
	"salt",
	"same",
	"sand",
	"scale",
	"school",
	"science",
	"scissors",
	"screw",
	"seat",
	"second",
	"secret",
	"secretary",
	"seed",
	"seem",
	"selection",
	"self",
	"send",
	"sense",
	"separate",
	"serious",
	"servant",
	"shade",
	"shake",
	"shame",
	"sharp",
	"sheep",
	"shelf",
	"ship",
	"shirt",
	"shock",
	"shoe",
	"short",
	"shut",
	"side",
	"sign",
	"silk",
	"silver",
	"simple",
	"sister",
	"size",
	"skin",
	"skirt",
	"sleep",
	"slip",
	"slope",
	"slow",
	"small",
	"smash",
	"smell",
	"smile",
	"smoke",
	"smooth",
	"snake",
	"sneeze",
	"snow",
	"soap",
	"society",
	"sock",
	"soft",
	"solid",
	"some",
	"song",
	"sort",
	"sound",
	"soup",
	"south",
	"space",
	"spade",
	"special",
	"sponge",
	"spoon",
	"spring",
	"square",
	"stage",
	"stamp",
	"star",
	"start",
	"statement",
	"station",
	"steam",
	"steel",
	"stem",
	"step",
	"stick",
	"sticky",
	"stiff",
	"still",
	"stitch",
	"stocking",
	"stomach",
	"stone",
	"stop",
	"store",
	"story",
	"straight",
	"strange",
	"street",
	"stretch",
	"strong",
	"structure",
	"substance",
	"such",
	"sudden",
	"sugar",
	"suggestion",
	"summer",
	"support",
	"surprise",
	"sweet",
	"swim",
	"system",
	"table",
	"tail",
	"take",
	"talk",
	"tall",
	"taste",
	"teaching",
	"tendency",
	"test",
	"than",
	"that",
	"then",
	"theory",
	"there",
	"thick",
	"thin",
	"thing",
	"this",
	"thought",
	"thread",
	"throat",
	"through",
	"through",
	"thumb",
	"thunder",
	"ticket",
	"tight",
	"till",
	"time",
	"tired",
	"together",
	"tomorrow",
	"tongue",
	"tooth",
	"touch",
	"town",
	"trade",
	"train",
	"transport",
	"tray",
	"tree",
	"trick",
	"trouble",
	"trousers",
	"true",
	"turn",
	"twist",
	"umbrella",
	"under",
	"unit",
	"value",
	"verse",
	"very",
	"vessel",
	"view",
	"violent",
	"voice",
	"waiting",
	"walk",
	"wall",
	"warm",
	"wash",
	"waste",
	"watch",
	"water",
	"wave",
	"weather",
	"week",
	"weight",
	"well",
	"west",
	"wheel",
	"when",
	"where",
	"while",
	"whip",
	"whistle",
	"white",
	"wide",
	"will",
	"wind",
	"window",
	"wine",
	"wing",
	"winter",
	"wire",
	"wise",
	"with",
	"woman",
	"wood",
	"wool",
	"word",
	"work",
	"worm",
	"wound",
	"writing",
	"wrong",
	"year",
	"yellow",
	"yesterday",
	"young",
];
const word = dictionary[Math.floor(Math.random() * dictionary.length - 1)];
//let tracker = {}; //{remainingGuesses: , wrongLetters: , correctLetters}

/*  **---->> I Don't know how to make this work just yet <<----**
/* For the "stats" like number of remaining guesses and previously guessed letters,
* use one object rather than several global variables.
* ==> tracker = {chances: , remainingGuesses: , wrongLetters: }
*/
 

//end the Game
const endGame = () => {
	//console.clear();
	ansEnd = rls.keyInYN(`Do you want to play again?\n`);
	ansEnd === true ? startGame() : console.log(`goodbye\n`);
	process.exit;
};

const gameLoop = (word) => {
	let totalChances = word.length + 3;
	let chances = totalChances;
	let wrongLetters = "";
	let correctLetters = "";
	let dashedWord = "";
	let tries = 0;

	while (chances > 0) {
		// console.clear();
		console.log("\n✅", correctLetters);
		console.log("\n❌", wrongLetters);
		console.log("\n⏰", chances);
		console.log("\n🧐", tries);
		console.log(dashedWord);

		// get guess and check if valid
		function guessIsValid(letter) {
			return (
				letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
			);
		}
		let letter = "";

		//   NOT a valid letter
		while (!letter) {
			// not a letter reprompt loop
			let input = rls.question("\nWhat letter do you guess? ");
			if (guessIsValid(input)) {
				letter = input;
			} else {
				console.log("Please enter a valid letter\n");
			}
		}
		tries++;
		// IS a valid letter
		//if letter is in the word else
		if (word.includes(letter)) {
			console.log("\ngood guess!\n");
			correctLetters += letter;

			// test if the correctLetters are === word ... This test is faulty .. need to rethink how to do this
			if (correctLetters === word) {
				console.log(chalk.blue(`\n 🏆 S U P E R S T A R !!! 🏆\n`));
				console.log(`You took ${totalChances - tries} guesses to win.`); // have to rework this
				endGame();
			}
			// **---->> Don't know how to make this work just yet <<----**
			//replace the dash with the correct letters
			// words have indexes --- how do i use this to replace the dashes
			//const replaceDash = (word, correctLetters) => {
			// for (let i = 0; i < correctLetters.length; i++) { // loop correct letters
			// 	let char = correctLetters[i];
			// 	for (let idx = 0; idx < word.length; idx++) { //loop word
			// 		if (char.includes(word[idx])) {
			// 			dashedWord += word[idx] + " ";
			// 		} else {
			// 			dashedWord += "_ ";
			// 		}
			// 	}
			// }
			// console.log(dashedWord, "word in replaceDash");
			// };
			//replaceDash(word, correctLetters);
		} else {
			console.log("nope. That's not it.");
			wrongLetters += letter;
			chances--;
			if (chances === 1) {
				console.log(`Oh boy. 😰 You have 1 guess left.\n`);
			}
			if (chances === 0) {
				console.log("Sorry Buddy. No more chances.\n");
				console.log(`The word was ${word}.`);
				endGame();
			}
		}
	}
};

//start the Game
const startGame = () => {
	console.log(`\nYou have to guess the letters in my 🧐 mystery word.\n`);
	const chances = word.length + 3;
	console.log(`You have ${chances} chances.\n`);
	console.log(chalk.yellow(word));

	//print the dases for the mystery word
	let dash = "";
	for (let i = 0; i < word.length; i++) {
		dash += "_ ";
	}
	console.log(dash);
	gameLoop(word);
};

//intro
const intro = () => {
	ansIntro = rls.keyInYN(`Do you want to play a game with me?\n`);
	ansIntro === true ? startGame() : endGame();
};

intro();

/** **----** N O T E S **----**
 *  -- PASSING A VARIABLE BETWEEN FUNCTIONS WITHOUT MAKING THEM GLOBAL
 * function passFromValue(){
    var x = 15;
    return x;  
}
function passToValue() {
    var y = passFromValue();
    console.log(y);//15
}
passToValue();
 */

/***----** N O T E S **----**
* newWordString = word.replace(/el/, "*") // cannot take a string
 * newWordVar = word.replace(/letter/, "*") // cannot take in a variable
 *
 * newWordArray = word.replace(/[l]/, "*")   >>> b*ue
 * newWord = word.replace(/e/, "*")  >>> blu*
 *
 */

/* if (word.includes(letter)) {
		console.log("yes");
		// newWord = word.replace(/e/, "*")
 } else {
 } 
//startGame ==>
/* Game Rules
 * 1. pick a word
 * 2. set the number of guesses
 * 3. display the number of dashes
 * 4. track and display the wrong words
 */
//intro ==> calls startGame

/** **----** IN THOERY WORKS LIKE THIS **----**
 * tracker = {chances: , remainingGuesses: , wrongLetters: }
 * is this all inside a function? ==> startGame()
 * chances = word.length + 3 { // FLEXIBLE: 3 extra chances to get it right --OR-- STATIC: 10
 * while (chances > 0) //main game loop
 * if (chances === 0) {
 *   leaveGame()}
 * } else {
 * if (guess.tolowercase() === letter) {
 *   1. replace the dash with the letter // dash is a string ==? does .replace work on a string???
 * 		!!! need to match the index number to replace the correct dash
 * 		-- do I push into an array ==> replace at index ==> join? put back into a string?
 * 		return dash.replace("_", letter )
 *   2. console.log the new string ==> _ _ h _ _
 * } else {
 *   1. chances-- ==> tracker[chances]--
 *   2. if (chances === 0) ==> ➡️ exit game() ======> if (tracker[chances] === 0) ==> exit game()
 *   3. console.log(List of wrong letters) ==> listOfWrongLetters += letter + ","
 * }
 *
 * }}
 */
/* 
const playGame = () => {
	const chances = word.length + 3;
	tracker = {}; //{remainingGuesses: , wrongLetters: }
	tracker[remainingGuesses] = chances;
	while (tracker[remainingGuesses] > 0) {
		//checkLetterGuessed()
		if (guess === letter) {
			//replaceDash()
			return word.forEach((el) => {
				if (el !== letter) {
					//replace the wrong letters with the dash
					el += "_ ";
				}
			});
		} else {
			//wrongGuess()
			tracker[remainingGuesses]--;
			tracker[wrongLetters] += `${letter}, `; //letter + "'"
			if (tracker[remainingGuesses] === 1) {
				console.log(
					`Oh boy. 😰 You have 1 guess left.\n`
				);
			} else {
				console.log(
					`Nope. ❌ Try again. You have ${tracker[remainingGuesses]} guessesleft.\n`
				);
			}
			console.log(tracker);
		}
	}
	if (tracker[remainingGuesses] === 0) {
		endGame();
	}
}; */
 
// check if the letter is in the word and replace the dash
// const replaceDash = (word, letter) => {
// 	let dashedWord = "";
// 	let correctLetters = [];
// 	let wrongLetters = "";
// 	// need to collect all the correct letters and pass them into
// 	// letter.includes([can this be a string of letters ?]) >> yes it works as a string
	
// 		if (word.includes(letter)) {
// 			correctLetters.push(letter);
// 			dashedWord += letter.replace(/"_ "/g, correctLetters);

// 			console.log(correctLetters, "correct letters");
// 		} else {
// 			dashedWord += "_ ";	
// 			wrongLetters += letter;
// 		}
		
	
	
// 	console.log(dashedWord, "line ");
// 	console.log(wrongLetters, "wrong ");
// 	getValidLetterGuess(); // not saving the correct letters if i put this here but does ask for next guess
// 	return dashedWord;
// };