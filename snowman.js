const readline = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]

let nums = ["1","2","3","4","5","6","7","8","9","0"]
let char = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=",'+',"[","{","]","}","|","\\",":",";","'",'"',"<",">",",",".","/","?"]

function space() { console.log(`\n`) }

function randWord() {
  return dictionary[Math.floor(Math.random() * dictionary.length)]
}



const startGame = () => {
  console.log(`Hello there stranger!`);
  let start = readline.keyInYNStrict(`Want to play a game of Snowman?`);
  if (start) {
    space();
    console.log(`Do you need to know the rules of the game? \x1b[33m`);
    let responses = [`Yes, Please explain.`, `I'm familiar with the game but need a refresher.`, `I Know what to do. Let's play! \x1b[0m`];
    let askRules = readline.keyInSelect(responses, 'What option do you choose?');

    function rules() {
      space();
      console.log(`The goal of the game is for you to guess, letter by letter, a word of my choosing. \nEach blank letter of the word will look like this:\x1b[1m\x1b[36m _ \x1b[0m`);
      console.log(`\nDepending on how many letters are in the word, you'll have that amount of chances.. \n(plus a few extra since I'm so nice =D ) to guess the letters.`);
      console.log(`\nIf you fill in all of the blanks before you're out of chances, you win! \x1b[32mGOOD LUCK!\x1b[0m\n`);
    }

    if (responses[askRules] === responses[0]) {
      rules();
      gameLoop();
    } else if (responses[askRules] === responses[1]) {
      space();
      console.log(`No problemo! I'd be happy to refresh your memory.`);
      rules();
      gameLoop();
    } else if (responses[askRules] === responses[2]) {
      space();
      console.log(`\x1b[32mGood luck!\x1b[0m\n`);
      gameLoop();
    } else {
      quitGame();
    }


  } else {
    quitGame();
  }


}


const replay = () => {
  space()
  console.log(`Yay! Guess on !!`)
  gameLoop()
}



const gameLoop = () => {
  let word = randWord()
  let string = []
  let stringFinal = ''
  let guessed = ''
  let numOfGuesses = word.length + 4
  let sumOfGuesses = 0

  for (let i = 0; i < word.length; i++) {
    string[i] = "\x1b[1m\x1b[36m_\x1b[0m"
  }


  for (let i = 0; numOfGuesses > i; numOfGuesses--) {

    let endGameDialogue = {
      lose: `Awwww, sorry pal but you lost ='( \nThe word that you were trying to solve for was \x1b[36m${word.toUpperCase()}\x1b[0m.\nBetter luck next time! `,
      win: `\x1b[36mYOU WIN !!\x1b[0m You figured it out!\nAnd it only took you \x1b[1m${sumOfGuesses + 1}\x1b[0m guesses to get there!\n\x1b[36mAwesome game =D\x1b[0m `
    }

    space()
    display()
    getValidLetterGuess()
    sumOfGuesses += 1
    

    function display(){
      console.log(`${string}\n`)
      console.log(`Guessed Letters \x1b[1m\x1b[36m--->\x1b[0m ${guessed || ''} `)
      if (guessed === ''){
      console.log(`You have a total of ${numOfGuesses} guesses!`)
      }else if (numOfGuesses === 1) {
      console.log(`You have ${numOfGuesses} guess left !`)
      } else {
      console.log(`You have ${numOfGuesses} guesses to go.`)
      }
    }


 



    function getValidLetterGuess() {
      function guessIsValid(letter) {
        return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
      }
      let letter = ""
      while (!letter) {
      space()
      let input = readline.question("Please enter your guess: ")
        if (guessIsValid(input)) {
          letter = input.toLowerCase()

          if (guessed.includes(letter)) {
            space()
            console.log(`\x1b[31mYou've already guessed that letter.\x1b[0m`)
            space()
            display()
            getValidLetterGuess()
          }

          if (guessed.includes(letter)){
            guessed = guessed
          } else if (guessed.length === 0) {
            guessed += letter
          } else {
            guessed += `,${letter}`
          }

          for (let i = 0; i < word.length; i++) {
            if (letter === word[i]) {
              string[i] = letter
              stringFinal = string.join('')
            }
          }

          if (numOfGuesses === 1 && stringFinal !== word) {
            space()
            console.log(`${string}`)
            space()
            console.log(`Guessed Letters \x1b[1m\x1b[36m--->\x1b[0m ${guessed}`)
            space()
            console.log(`That was supposed to be your last guess. \nBut I'll give you a freebie if you want. \nOnly this time you'll have to try and guess the whole word.`)
            space()
            let hailMAry = readline.keyInYNStrict("Want to give it a shot?")  
              if (hailMAry){
                hailSequence()
              } else {
                space()
                console.log(`${string}`)
                space()
                loseSequence()
              }

          } else if (stringFinal === word) {
            space()
            console.log(`\x1b[1m${word}\x1b[0m`)
            winSequence()
          }

        } else {
          space()
          console.log("\x1b[31mPlease enter a valid letter.\x1b[0m")
          space()
          display()
        }
      }

    }


    function winSequence(){
      space()
      console.log(endGameDialogue.win)
      space()
      readline.keyInYNStrict("Want to play again?") ? replay() : quitGame()
      
    }
      
    function loseSequence(){
      console.log(endGameDialogue.lose)
      space()
      readline.keyInYNStrict("Want to play again?") ? replay() : quitGame()
      
    }

    function validAnswer (hailAnswer){
        return hailAnswer.toUpperCase() != hailAnswer.toLowerCase() && hailAnswer.length > 1 
    }





    function checker(hailAnswer){
    let sum = 0
      for (num of nums){
          if ( hailAnswer.includes(num)){
             sum += -1
          }
      }
      for (ch of char){
          if (hailAnswer.includes(ch)){
              sum += -1
          }
      }
    return sum >= 0
     
     } 



    function hailSequence(){
    space()
    let hailAnswer = readline.question(`What is your final guess? `)
      if (validAnswer(hailAnswer) && checker(hailAnswer)){
      let finale = hailAnswer.toLowerCase()
          if (finale === word){
            space()
            console.log(`\x1b[1m${word}\x1b[0m`)
            winSequence()
          } else {
            space()
            loseSequence()
          }
      } else{
          space()
          console.log(`\x1b[31mPlease enter a valid word.\x1b[0m`)
          hailSequence()
        }   
   }
      
      
     

  }
}



const quitGame = () => {
  space()
  console.log(`Come back soon =) \nGoodbye!`)
  process.exit()
} 



startGame()


