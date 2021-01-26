const readline = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]


//generate random number and assign it to an index in dictionary array
function randomWordIndex(){
  const guess = Math.floor(Math.random() * dictionary.length)
   return dictionary[guess]
}
const secretWord = randomWordIndex()

const leaveGame = () => {
  console.log("You win! It took you " + gameState.remainingGuesses + "!")
}



//step 3 create an object with key values that will be manipulated
const gameState = {
  guessLetters: getUniqueCharacters(), //all correct letters are here
  remainingGuesses: 10,
  secretWord: secretWord,
  display: makeHiddenWord(),
  playerGuesses: [],

}


//helper function
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }



  //gameloop
  function gameLoop(){
  while (gameState.remainingGuesses > 0 || !(wordIsFound) ) {
    //write the display here so it is updated after everyloop
    console.log(gameState.display.join(" ") +'\n')

    //print the users remaining guess count
    console.log('You have ' + gameState.remainingGuesses + ' guesses left! \n')
  
    //ask for user input
    const input = readline.question("Please enter your guess: " + "\n").toLocaleLowerCase()
    if (guessIsValid(input)) {
      //add user guessed letter to playerGuesses array
      gameState.playerGuesses.push(input) 

      //prints the user's guessed letters 
      console.log("Guessed Letters: " + gameState.playerGuesses.join() + "\n")

      //if user input matches any character in guessLetter array
      if (gameState.guessLetters.includes(input)) {
        const letters = gameState.secretWord.split('')
        for (let i = 0; i < letters.length; i++) {
          if (letters[i]===input) {
            gameState.display[i] = input
          }
        }

      } else { //if user guesses incorrectly
        //takes a guess away if wrong
        gameState.remainingGuesses --
        //if user runs out of guesses console prints message showing secret word
        if (gameState.remainingGuesses === 0){
          console.log('You lost the game! The Secret word was ' + gameState.secretWord)
        }
      }
    } else {
      console.log(`${input} Is not a valid input. Please enter a valid letter`)
    }
     
  }

}
gameLoop()

//create a function that loops through the array secretWord and pushes it into uniqueCharacters to cover all letters that show up in word
function getUniqueCharacters() {
  const uniqueCharacters = []
  const letters = secretWord.split('')
  for (let i = 0; i < letters.length; i++) {
    if(!uniqueCharacters.includes(i)) {
      uniqueCharacters.push(letters[i])
    }
  }
  return uniqueCharacters
}

//function that ends game when word is correct
function wordHasnBeenFullySolved() {
if (gameState.secretWord === gameState.display.join('')) {
  return leaveGame()
}
}
const wordIsFound = wordHasnBeenFullySolved()


//make array of _ that is length of the hidden word
//convert string to an array of strings
//iterates through the array giving a new array with _ the same number of times the word has characters
function makeHiddenWord() {
  const display =[]
  for(let i = 0; i < secretWord.length; i++) {
    display.push('_')
  }
  return display
}

// main game loop
// while (numberOfGuesses > 0 || wordHasntBeenFullySolved) {
//   4. ask user for input readline.question()
//   5. check if input appears in gameState.guessLetters
//       5a. If no, decrement numberOfGuesses
//       5b. If yes, loop through the secret word with a for loop. If 'i' value matches the user guess, then replace the 'i' value in display.



//at the end of the game loop i want to check if the secretword is equal to the hiddenword...if so end game