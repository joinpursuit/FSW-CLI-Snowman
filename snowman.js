const readline = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]
const chalk = require('chalk')
const seconds = 1000

const playSnowman = () => {
  let randomWord = dictionary[Math.floor(Math.random() * dictionary.length)]
  let randomWordArr = randomWord.split("").fill("🟦")
  let guessHistory = []
  let counter = {availableGuess : 8, correctGuess : 0, wrongGuess : 0, letterFilled : 0}
  console.clear()
  welcome()
  textColor(`You will guess a letter at a time to get the word.\n`)
  textColor(`Here is the word: ${printScreenWord(randomWordArr)}\n`)
  while(counter.letterFilled !== randomWord.length && counter.availableGuess > 0){
    console.log(chalk.rgb(213, 155, 51)`You have ` + chalk.rgb(78, 157, 172)`${counter.availableGuess}` + chalk.rgb(213, 155, 51)` available ${counter.availableGuess > 1 ? "guesses" : "guess"}.\n`)
    let guessLetter = getLetter(guessHistory)
    if(guessLetter === "cheat ON"){
      textColor(`${randomWord}`, "blue"); wait(seconds*2)
    } else {
      guessHistory.push(guessLetter)
      if(randomWord.includes(guessLetter)){
        counter.correctGuess++
        textColor("You made a right guess!"); wait(seconds);
        randomWordArr = randomWordArr.map((e, i) => {
          if(guessLetter === randomWord.charAt(i)){
            counter.letterFilled++
            return randomWord.charAt(i).toUpperCase()
          } else {
            return e
          }
        })
      } else{
        counter.wrongGuess++
        counter.availableGuess--
        textColor("Oh, sorry! Try another letter."); wait(seconds);
      }
    }
    console.clear()
    welcome()
    textColor(printScreenWord(randomWordArr), "blue")
    console.log("") //format screen
    console.log(chalk.rgb(213, 155, 51)`Your guesses: ` + chalk.bold.rgb(128, 57, 198)`${printScreenWord(guessHistory)}\n`)
  }
  resultScreen(counter, randomWord)
}
const welcome = () => textColor("\nWelcome to snowman game! ⛄️⛄️⛄️\n", "magenta")
const printScreenWord = wordArr => wordArr.join(" ")
const getLetter = history => {
  const guessIsValid = letter => letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  while(true){
    let input = readline.question(chalk.rgb(168, 164, 53)`Please enter a letter to guess:\n👉 `)
    if(input === "cheat ON"){ //cheat code
      return input
    } else if(guessIsValid(input) && !history.includes(input)){
      return input.toLowerCase()
    } else if(history.includes(input)){
      textColor("You have already made that guess.", "red"); wait(seconds/2);
    } else {
      textColor("Limit to ONE letter only.", "red"); wait(seconds/2);
    }
  }
}
const resultScreen = (count, word) => {
  count.letterFilled === word.length ? textColor("Congratulations! You won! 🎊 🎉 🎉", "win") : console.log(chalk.rgb(184, 77, 77)`Sorry, you lose. 🙁\n` + chalk.rgb(213, 155, 51)`The word was ` + chalk.rgb(78, 157, 172)`${word}` + chalk.rgb(213, 155, 51)`.\n`); wait(seconds);
  textColor("Here is your result:"); wait(seconds);
  console.log(chalk.rgb(213, 155, 51)`You made ` + chalk.rgb(78, 157, 172)`${count.correctGuess}` + chalk.rgb(213, 155, 51)` right ${count.correctGuess > 1 ? "guesses" : "guess"}.`); wait(seconds);
  console.log(chalk.rgb(213, 155, 51)`You made ` + chalk.rgb(78, 157, 172)`${count.wrongGuess}` + chalk.rgb(213, 155, 51)` wrong ${count.wrongGuess > 1 ? "guesses" : "guess"}.`); wait(seconds);
}
const wait = (ms) => {
  let start = new Date().getTime()
  let end = start

  while(end < start + ms){
      end = new Date().getTime()
  }
}
const textColor = (text, color) => {
  switch(color){
    case "magenta" : return console.log(chalk.bold.rgb(166, 56, 166)`${text}`)
    case "blue"    : return console.log(chalk.bold.rgb(0, 92, 242)`${text}`) // 78, 157, 172 cyan
    case "yellow"  : return console.log(chalk.rgb(168, 164, 53)`${text}`)
    case "red"     : return console.log(chalk.rgb(149, 48, 48)`${text}`)
    case "win"     : return console.log(chalk.bold.rgb(24, 70, 220)`${text}`)
    case "lose"    : return console.log(chalk.rgb(184, 77, 77)`${text}`)
    default        : return console.log(chalk.rgb(213, 155, 51)`${text}`) //orangeish
  }
}

playSnowman()