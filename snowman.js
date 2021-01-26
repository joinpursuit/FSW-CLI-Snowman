const readline = require('readline-sync');
const readlineSync = require('readline-sync')
const chalk = require('chalk');
const { hidden } = require('chalk');

const words = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]

obs = {
  guessedLetters: [],
  guessesLeft: 6,
  guessCount: 0,
};

const askToPlay = () => {
  console.log(
    chalk.redBright.underline(
      "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    )
  );
  console.log(
    chalk.redBright("⛄ Welcome to the Snowman word guessing game!⛄\n")
  );
  const userName = readlineSync.question(
    chalk.redBright("Please enter your name:\n")
  );
  console.clear();
  console.log(chalk.redBright.underline("~~~~~~~~~~~~~~~~~~~~~~~~~"));
  console.log(chalk.redBright(`\n⛄️ Hello ${userName} ⛄️`));
  console.log(chalk.redBright.underline("~~~~~~~~~~~~~~~~~~~~~~~~~"));
};

const randomizeWord = (words) => {
  return words[Math.floor(Math.random() * words.length)];
};

const hideRandomWord = (randomWord) => {
  let hiddenWord = [];
  for (let i = 0; i < randomWord.length; i++) {
    hiddenWord.push("_");
  }
  return hiddenWord.join("");
};

const checkLetter = (letter, randomWord) => {
  return randomWord.includes(letter);
};

const unhideRandomWord = (input, randomWord, hiddenWord) => {
  hiddenWord = hiddenWord.split("");
  for (let j = 0; j < randomWord.length; j++) {
    if (randomWord[j].includes(input)) {
      hiddenWord[j] = input;
    }
  }
  return hiddenWord.join("");
};

const leaveGame = () => {
  console.log(
    chalk.whiteBright.bold(
      "........................................................."
    )
  );
  if (
    readlineSync.keyInYNStrict(
      "Do you really want to exit the Snowman word guessing game?"
    )
  ) {
    console.log(
      chalk.yellowBright.bold(
        "👋  Thank you for stopping by the Snowman Word Guessing Game! 👋 "
      )
    );
    process.exit();
  } else {
    startGame();
  }
};

const loseGame = (randomWord) => {
  console.log(
    chalk.redBright.underline(
      "========================================================="
    )
  );
  console.log(
    chalk.redBright(
      `🥶 Game Over! You didn't guess the mystery word: ` +
        (chalk.yellowBright(randomWord + " 🥶") +
          `\n👋 Try again next time! 👋 `)
    )
  );
  leaveGame();
};

const winGame = (randomWord) => {
  console.log(
    chalk.redBright.underline(
      "========================================================="
    )
  );
  console.log(
    chalk.redBright.underline(
      " 🎉 🎈 Congrats! You did it! You figured out the mystery word! 🎈🎉  " +
        chalk.yellowBright.underline(
          "\n Your mystery word was: 👉 " +
            randomWord +
            " 👈  \n" +
            `It took you ${obs.guessCount} guesses to win the Snowman game!`
        )
    )
  );
  return;
};

const alreadyGuessed = (letter) => {
  if (obs.guessedLetters.includes(letter)) {
    console.log("You already guessed that letter! Enter another guess.");
  } else {
  }
};

const incorrectGuess = (randomWord, letter) => {
  if (!randomWord.includes(letter)) {
    if (!obs.guessedLetters.includes(letter)) {
      obs.guessedLetters.push(letter);
    }
  }
};

const correctGuess = (randomWord, letter) => {
  if (randomWord.includes(letter)) {
    if (!obs.guessedLetters.includes(letter)) {
      obs.guessedLetters.push(letter);
    }
  }
};

const startGame = () => {
  let randomWord = randomizeWord(words);
  let hiddenWord = hideRandomWord(randomWord);
  let letter = "";

  askToPlay();

  if (
    readlineSync.keyInYNStrict(
      chalk.white.bold("\nAre you ready to play Snowman?")
    )
  ) {
    console.clear();
    console.log(
      chalk.redBright.underline(
        "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
      )
    );
    console.log(chalk.redBright.bold("\n 👍 Awesome! Let's Play!👍 \n"));
  } else {
    console.log(
      chalk.whiteBright.bold(
        ".........................Exiting........................."
      )
    );
    leaveGame();
  }

  const getValidLetterGuess = () => {
    const guessIsValid = (letter) => {
      return (
        letter.length === 1 && letter.toLowerCase() != letter.toUpperCase()
      );
    };

    while (obs.guessesLeft > 0) {
      alreadyGuessed(letter);
      incorrectGuess(randomWord, letter);

      console.log("==================================================");
      console.log("You have " + obs.guessesLeft + " guesses remaining.");
      console.log(`Your guessed letters: ${obs.guessedLetters}`);

      console.log("==================================================");
      console.log(
        chalk.redBright.bold(
          "Please enter a letter to correspond with the given\nunderscores (_) below!\n"
        )
      );

      console.log(hiddenWord);
      console.log("==================================================");

      input = readline.question("Please enter your guess: ");
      console.clear();

      if (guessIsValid(input)) {
        letter = input;
        obs.guessCount++;
        console.log("==================================================");
        console.log("Your letter choice was => " + letter);

        hiddenWord = unhideRandomWord(letter, randomWord, hiddenWord);

        if (checkLetter(letter, randomWord)) {
          correctGuess(randomWord, letter);

          console.log("==================================================");
          console.log(
            chalk.yellowBright(
              "🙌 Yes! the letter " + `"` + letter + `"` + " is in the word! 🙌"
            )
          );
          if (hiddenWord === randomWord) {
            obs.guessesLeft = 0;
            winGame(randomWord);
          }
        } else {
          obs.guessesLeft--;
          if (obs.guessesLeft === 0) {
            loseGame(randomWord);
          }

          console.log("==================================================");
          console.log(
            chalk.yellowBright(
              "🤭 Try again! That letter is not in the word!🤭 "
            )
          );
        }
      } else {
        console.log("Please enter a valid letter");
      }
    }
  };

  getValidLetterGuess();
};

startGame();
leaveGame();