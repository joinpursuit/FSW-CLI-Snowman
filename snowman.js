const readline = require('readline-sync');
var figlet = require('figlet') 
const chalk = require(`chalk`)
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]

const randomWord=()=>{
  return dictionary[Math.floor(Math.random() * dictionary.length)]
}

figlet('Guessed Letter!!', function(err, data) {
  if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
  }
  console.log(data)
});

let userName = readline.question(`Enter your name: \n` )

const startGame = () =>{
  if(userName){

      console.log(chalk.blue(`Hello,\n Welcome to the Game: WORD SOUP`))
      pause(0.9)
      console.log(chalk.blueBright(`This game consists of determining how well's \n your spelling in our language but, through guessing the letters`))
      pause(0.9)
      console.log(chalk.cyan(`In the game you will see your status \n ` + userName + ` you can do this!!!`))
      pause(0.9)

      let play = readline.keyInYN(`Do you wanna play  ? \n`)
      if(play){
        gameLoop()
      }else{
        quitGame()
      }
    
  }else{
    quitGame()
  }
}


const gameLoop =()=>{
  
  let word = randomWord()
  let status = {
    wordProgress : [],
    guessedMade : '',
    countLetter : word.length + 3,
    answer : '',
    countTotalGuessed : 0
  }

  for(let i = 0; i < word.length; i++){
    status.wordProgress[i] = "\x1b[1m\x1b[36m_\x1b[0m" 
  }

  for(let i = 0; status.countLetter > i; status.countLetter --){
    let endingGame = {
      lose : `You did not got the word. \n This was the word : ${word.toUpperCase()}.\n I wish you the best for the next time` ,
      win : `You win`, 
    }
    letterGuessed()
    getValidLetterGuess()
    status.countTotalGuessed += 1


    function letterGuessed () {
      
      console.log(`${status.wordProgress}\n`)
      console.log(`Guessed Letters ----> ${status.guessedMade || ''} `)
      if(status.countLetter === 1){
        console.log(`You have ` +  `${status.countLetter} `+ `incorrect guess left \n`)
      } else if(status.guessedMade === ''){
        console.log( ` You have a ${status.countLetter}`)
      }else{
        console.log(`You have ` + `${status.countLetter} ` + `incorrect guesses left`)
        console.log(`You are almost there => Don't give up ${userName}\n`)
      }

      
    }

    function getValidLetterGuess() {
      function guessIsValid(letter) {
        return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
      }
      let letter = ""
      while (!letter) {
        let input = readline.question("Please enter your guess: ")
        if (guessIsValid(input)) {
          letter = input
          if(status.guessedMade.includes(letter)){
            console.log(chalk.red(`Wrong....`)) 
            pause(0.5) 
            console.log(chalk.redBright(`Wrong...`)) 
            pause(0.5)
            console.log(chalk.bgRedBright(`Wrong...`)) 
            console.log((`You have pick up that letter already. Try again`.toUpperCase()))
            letterGuessed()
            getValidLetterGuess()
          }

          if(status.guessedMade.includes(letter)){
            status.guessedMade = status.guessedMade
          }else if(status.guessedMade.length === 0){
            status.guessedMade += letter
          }else{
            status.guessedMade += letter
          }

          for(let i =0; i< word.length;i++){
            if(letter === word[i]){
              status.wordProgress[i] = letter
              status.answer = status.wordProgress.join('')
            }
          }

          if(status.countLetter === 1 && status.answer !== word){
            console.log(`${status.wordProgress} \n ${status.guessedMade} `)
            console.log(`${endingGame.lose}`)
            quitGame()
          }else if(status.answer === word){
            console.log(`${word}`)
            console.log(`${endingGame.win}`)
            console.log(`You got the word in ` + status.countTotalGuessed + ` guesses`)
            startGame()
          }
          

        } else {
          console.log("Please enter a valid letter")
        }
      }
      return letter.toLowerCase()
    }

    
  }
}

const quitGame = () => {
  console.log(`Comeback soon to play`)
  process.exit()
}

const pause = (seconds) =>{
  //Function comes from group review w MYra et.
  let ms = seconds * 1000
  let starttime = Date.now()
  let now = Date.now()
  let timeElapsed = now - starttime
  while(now-starttime -ms){
      now = Date.now()
      timeElapsed = now - starttime
  }
}

startGame() 
