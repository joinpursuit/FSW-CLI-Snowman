const readline = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]


let nameInput = readline.question("Enter your name:") 
let guessCount = 8
let finalGuess = 0

const startGame = () => {
  guessCount = 8 
  finalGuess = 0 
  console.log(`\nHello ${nameInput}!  Welcome to the Snowman Thang!`) 
  let answer = readline.keyInYN('Shall we?\n') 
   if(answer) {
     console.log('Excellent! \n') 
     introLevel()
   } 
   else {
    console.log("Alright then.")
    exitGame()
   }
}

const introLevel = () => {
  console.log(`So ${nameInput}, Lets get to it!\n`) 
  console.log('The objective of the game is to guess the letter of a word correctly until you have guessed all the letters of that word.') 
  console.log('You have 8 guesses to start with.')
  console.log('If you guess the right letter, more of the word will be revealed.')
  console.log('If you guess it wrong, you will lose a guess and have the option to try again.')
  console.log('You will not be penalized for same guesses or invalid inputs.')
  console.log('0 guesses means game over......\n')
  let answer1 = readline.keyInYN("Still up for it?")
 if (answer1) {
     console.log("\nJust what I wanted to hear!\n")
     getValidLetterGuess()
 }
 else {
     exitGame()
 }
}


function getValidLetterGuess() {
  function randomWord() {
    return dictionary[Math.floor(Math.random() * dictionary.length)]
  }
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  } 
  let ranWord = randomWord()
  let answerArr = []
  let alreadyGuessed = [
    {
      words : ''
    },
  ]
  for (let i = 0; i < ranWord.length; i++) {
    answerArr.push('_') 
    alreadyGuessed.push(' ')
  } 
  let remainingLetters = ranWord.length
  let previousGuess = {
    word : 'N/A'
  }
  while (remainingLetters >= 0)  {
    if (guessCount === 0) {
      console.log('0 guesses left! The word was: ' + ranWord) 
      console.log('\nGame Over!\n')
      gameOver()
    }
    if (remainingLetters === 0) {
      console.log('\nCorrect! It took you ' + finalGuess + ' guesses to figure it out.') 
      rewardLevel()
    }
    if (guessCount === 1) {
      console.log('\nYou have ' + guessCount + ' guess remaining')
    } 
    else {
      console.log('\nYou have ' + guessCount + ' guesses remaining')
    }
    console.log("\nPrevious Guess: " + previousGuess.word)
    let convert = alreadyGuessed[0].words.split('')
    let removeDups = convert.filter((elem, index) => {
      return convert.indexOf(elem) === index
    })
    console.log('Letters already guessed: ' + removeDups)
    console.log('\nCurrent progress:\n ' + answerArr.join(' '))
    let input = readline.question("\nPlease enter your guess: ")
    let guess = input.toLowerCase()
    let guessCorrect = false
    if (guessIsValid(guess)) {
      for (let j = 0; j < ranWord.length; j++) {
        if (ranWord[j] === guess && answerArr[j] === '_') {
          guessCorrect = true 
          answerArr[j] = guess
          alreadyGuessed[0].words += guess
          previousGuess["word"] = guess
          remainingLetters--
         }  
       }
       if (guessCorrect) {
          console.log('\nNice!')
          finalGuess++
        }
       if (!guessCorrect && alreadyGuessed[0].words.indexOf(guess) === -1) {
        console.log('\nWrong answer!') 
        previousGuess["word"] = guess
        guessCount--
        finalGuess++
        alreadyGuessed[0].words += guess
       
      } 
      else if (!guessCorrect) {
        console.log('\nInvalid input! Try again.')
        previousGuess["word"] = guess
     } 
     } 
  else {
    console.log('Invalid input! Try again.\n')
     } 
  }
}

const rewardLevel = () => {
  console.log("\nGreat Job! You are the Champion!\n") 
  gameOver()
}

const gameOver = () => {
  let answer1 = readline.keyInYN("Would you like to play again?")
   if (answer1) {
    console.log("\nEnter you name:") 
    nameInput = readline.question()
    startGame()
   } 
   else {
    console.log("\nThanks for playing The Snowman Thang! How did you like it?\n")
    console.log("Please rate the game from 1 to 10? 1 being worst and 10 being best.")
    let rating = readline.question()
     if (rating >= 5) {
      console.log("\nThanks!\n")
      exitGame() 
     } 
     else if (rating < 5) {
      console.log("\nHow could we improve the game?\n")
      let feedback = readline.question()
       if (feedback.length >= 5) {
           console.log("\nThanks for the feedback!\n")
           exitGame()
       }
       else {
           exitGame()
       }
    }
  }
}

const exitGame = () => {
  console.log('Goodbye.') 
  process.exit()
}

startGame()