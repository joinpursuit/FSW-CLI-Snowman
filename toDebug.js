const chalk = require('chalk')
const readline = require('readline-sync')
const dictionary = [
  'able',
  'about',
  'account',
  'acid',
  'across',
  'addition',
  'adjustment',
  'advertisement',
  'after',
  'again',
  'against',
  'agreement',
  'almost',
  'among',
  'amount',
  'amusement',
  'angle',
  'angry',
  'animal',
  'answer',
  'apparatus',
  'apple',
  'approval',
  'arch',
  'argument',
  'army',
  'attack',
  'attempt',
  'attention',
  'attraction',
  'authority',
  'automatic',
  'awake',
  'baby',
  'back',
  'balance',
  'ball',
  'band',
  'base',
  'basin',
  'basket',
  'bath',
  'beautiful',
  'because',
  'before',
  'behaviour',
  'belief',
  'bell',
  'bent',
  'berry',
  'between',
  'bird',
  'birth',
  'bite',
  'bitter',
  'black',
  'blade',
  'blood',
  'blow',
  'blue',
  'board',
  'boat',
  'body',
  'boiling',
  'bone',
  'book',
  'boot',
  'bottle',
  'brain',
  'brake',
  'branch',
  'brass',
  'bread',
  'breath',
  'brick',
  'bridge',
  'bright',
  'broken',
  'brother',
  'brown',
  'brush',
  'bucket',
  'building',
  'bulb',
  'burn',
  'burst',
  'business',
  'butter',
  'button',
  'cake',
  'camera',
  'canvas',
  'card',
  'care',
  'carriage',
  'cart',
  'cause',
  'certain',
  'chain',
  'chalk',
  'chance',
  'change',
  'cheap',
  'cheese',
  'chemical',
  'chest',
  'chief',
  'chin',
  'church',
  'circle',
  'clean',
  'clear',
  'clock',
  'cloth',
  'cloud',
  'coal',
  'coat',
  'cold',
  'collar',
  'colour',
  'comb',
  'come',
  'comfort',
  'committee',
  'common',
  'company',
  'comparison',
  'competition',
  'complete',
  'complex',
  'condition',
  'connection',
  'conscious',
  'control',
  'cook',
  'copper',
  'copy',
  'cord',
  'cork',
  'cotton',
  'cough',
  'country',
  'cover',
  'crack',
  'credit',
  'crime',
  'cruel',
  'crush',
  'current',
  'curtain',
  'curve',
  'cushion',
  'damage',
  'danger',
  'dark',
  'daughter',
  'dead',
  'dear',
  'death',
  'debt',
  'decision',
  'deep',
  'degree',
  'delicate',
  'dependent',
  'design',
  'desire',
  'destruction',
  'detail',
  'development',
  'different',
  'digestion',
  'direction',
  'dirty',
  'discovery',
  'discussion',
  'disease',
  'disgust',
  'distance',
  'distribution',
  'division',
  'door',
  'doubt',
  'down',
  'drain',
  'drawer',
  'dress',
  'drink',
  'driving',
  'drop',
  'dust',
  'early',
  'earth',
  'east',
  'edge',
  'education',
  'effect',
  'elastic',
  'electric',
  'engine',
  'enough',
  'equal',
  'error',
  'even',
  'event',
  'ever',
  'every',
  'example',
  'exchange',
  'existence',
  'expansion',
  'experience',
  'expert',
  'face',
  'fact',
  'fall',
  'false',
  'family',
  'farm',
  'father',
  'fear',
  'feather',
  'feeble',
  'feeling',
  'female',
  'fertile',
  'fiction',
  'field',
  'fight',
  'finger',
  'fire',
  'first',
  'fish',
  'fixed',
  'flag',
  'flame',
  'flat',
  'flight',
  'floor',
  'flower',
  'fold',
  'food',
  'foolish',
  'foot',
  'force',
  'fork',
  'form',
  'forward',
  'fowl',
  'frame',
  'free',
  'frequent',
  'friend',
  'from',
  'front',
  'fruit',
  'full',
  'future',
  'garden',
  'general',
  'girl',
  'give',
  'glass',
  'glove',
  'goat',
  'gold',
  'good',
  'government',
  'grain',
  'grass',
  'great',
  'green',
  'grey',
  'grip',
  'group',
  'growth',
  'guide',
  'hair',
  'hammer',
  'hand',
  'hanging',
  'happy',
  'harbour',
  'hard',
  'harmony',
  'hate',
  'have',
  'head',
  'healthy',
  'hear',
  'hearing',
  'heart',
  'heat',
  'help',
  'high',
  'history',
  'hole',
  'hollow',
  'hook',
  'hope',
  'horn',
  'horse',
  'hospital',
  'hour',
  'house',
  'humour',
  'idea',
  'important',
  'impulse',
  'increase',
  'industry',
  'insect',
  'instrument',
  'insurance',
  'interest',
  'invention',
  'iron',
  'island',
  'jelly',
  'jewel',
  'join',
  'journey',
  'judge',
  'jump',
  'keep',
  'kettle',
  'kick',
  'kind',
  'kiss',
  'knee',
  'knife',
  'knot',
  'knowledge',
  'land',
  'language',
  'last',
  'late',
  'laugh',
  'lead',
  'leaf',
  'learning',
  'leather',
  'left',
  'letter',
  'level',
  'library',
  'lift',
  'light',
  'like',
  'limit',
  'line',
  'linen',
  'liquid',
  'list',
  'little',
  'living',
  'lock',
  'long',
  'look',
  'loose',
  'loss',
  'loud',
  'love',
  'machine',
  'make',
  'male',
  'manager',
  'mark',
  'market',
  'married',
  'mass',
  'match',
  'material',
  'meal',
  'measure',
  'meat',
  'medical',
  'meeting',
  'memory',
  'metal',
  'middle',
  'military',
  'milk',
  'mind',
  'mine',
  'minute',
  'mist',
  'mixed',
  'money',
  'monkey',
  'month',
  'moon',
  'morning',
  'mother',
  'motion',
  'mountain',
  'mouth',
  'move',
  'much',
  'muscle',
  'music',
  'nail',
  'name',
  'narrow',
  'nation',
  'natural',
  'near',
  'necessary',
  'neck',
  'need',
  'needle',
  'nerve',
  'news',
  'night',
  'noise',
  'normal',
  'north',
  'nose',
  'note',
  'number',
  'observation',
  'offer',
  'office',
  'only',
  'open',
  'operation',
  'opinion',
  'opposite',
  'orange',
  'order',
  'organization',
  'ornament',
  'other',
  'oven',
  'over',
  'owner',
  'page',
  'pain',
  'paint',
  'paper',
  'parallel',
  'parcel',
  'part',
  'past',
  'paste',
  'payment',
  'peace',
  'pencil',
  'person',
  'physical',
  'picture',
  'pipe',
  'place',
  'plane',
  'plant',
  'plate',
  'play',
  'please',
  'pleasure',
  'plough',
  'pocket',
  'point',
  'poison',
  'polish',
  'political',
  'poor',
  'porter',
  'position',
  'possible',
  'potato',
  'powder',
  'power',
  'present',
  'price',
  'print',
  'prison',
  'private',
  'probable',
  'process',
  'produce',
  'profit',
  'property',
  'prose',
  'protest',
  'public',
  'pull',
  'pump',
  'punishment',
  'purpose',
  'push',
  'quality',
  'question',
  'quick',
  'quiet',
  'quite',
  'rail',
  'rain',
  'range',
  'rate',
  'reaction',
  'reading',
  'ready',
  'reason',
  'receipt',
  'record',
  'regret',
  'regular',
  'relation',
  'religion',
  'representative',
  'request',
  'respect',
  'responsible',
  'rest',
  'reward',
  'rhythm',
  'rice',
  'right',
  'ring',
  'river',
  'road',
  'roll',
  'roof',
  'room',
  'root',
  'rough',
  'round',
  'rule',
  'safe',
  'sail',
  'salt',
  'same',
  'sand',
  'scale',
  'school',
  'science',
  'scissors',
  'screw',
  'seat',
  'second',
  'secret',
  'secretary',
  'seed',
  'seem',
  'selection',
  'self',
  'send',
  'sense',
  'separate',
  'serious',
  'servant',
  'shade',
  'shake',
  'shame',
  'sharp',
  'sheep',
  'shelf',
  'ship',
  'shirt',
  'shock',
  'shoe',
  'short',
  'shut',
  'side',
  'sign',
  'silk',
  'silver',
  'simple',
  'sister',
  'size',
  'skin',
  'skirt',
  'sleep',
  'slip',
  'slope',
  'slow',
  'small',
  'smash',
  'smell',
  'smile',
  'smoke',
  'smooth',
  'snake',
  'sneeze',
  'snow',
  'soap',
  'society',
  'sock',
  'soft',
  'solid',
  'some',
  'song',
  'sort',
  'sound',
  'soup',
  'south',
  'space',
  'spade',
  'special',
  'sponge',
  'spoon',
  'spring',
  'square',
  'stage',
  'stamp',
  'star',
  'start',
  'statement',
  'station',
  'steam',
  'steel',
  'stem',
  'step',
  'stick',
  'sticky',
  'stiff',
  'still',
  'stitch',
  'stocking',
  'stomach',
  'stone',
  'stop',
  'store',
  'story',
  'straight',
  'strange',
  'street',
  'stretch',
  'strong',
  'structure',
  'substance',
  'such',
  'sudden',
  'sugar',
  'suggestion',
  'summer',
  'support',
  'surprise',
  'sweet',
  'swim',
  'system',
  'table',
  'tail',
  'take',
  'talk',
  'tall',
  'taste',
  'teaching',
  'tendency',
  'test',
  'than',
  'that',
  'then',
  'theory',
  'there',
  'thick',
  'thin',
  'thing',
  'this',
  'thought',
  'thread',
  'throat',
  'through',
  'through',
  'thumb',
  'thunder',
  'ticket',
  'tight',
  'till',
  'time',
  'tired',
  'together',
  'tomorrow',
  'tongue',
  'tooth',
  'touch',
  'town',
  'trade',
  'train',
  'transport',
  'tray',
  'tree',
  'trick',
  'trouble',
  'trousers',
  'true',
  'turn',
  'twist',
  'umbrella',
  'under',
  'unit',
  'value',
  'verse',
  'very',
  'vessel',
  'view',
  'violent',
  'voice',
  'waiting',
  'walk',
  'wall',
  'warm',
  'wash',
  'waste',
  'watch',
  'water',
  'wave',
  'weather',
  'week',
  'weight',
  'well',
  'west',
  'wheel',
  'when',
  'where',
  'while',
  'whip',
  'whistle',
  'white',
  'wide',
  'will',
  'wind',
  'window',
  'wine',
  'wing',
  'winter',
  'wire',
  'wise',
  'with',
  'woman',
  'wood',
  'wool',
  'word',
  'work',
  'worm',
  'wound',
  'writing',
  'wrong',
  'year',
  'yellow',
  'yesterday',
  'young'
]

/* Global variables declaration */
let guessedLetters = []
let repeatObject = {}
let opportunity = 6
let countoLose = 0
let wordMagic = []
let goodWord = []
let displayW = ''
let guess = ''
let nam = ''
let a = ''
let b = ''

/* I want to be able to restart the game */
function restart () {
  guessedLetters = []
  repeatObject = {}
  opportunity = 6
  countoLose = 0
  wordMagic = []
  goodWord = []
  displayW = ''
  guess = ''
  a = ''
  b = ''
}

/* I want to  be able to input a valid guess*/
function getValidLetterGuess () {
  function guessIsValid (letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }

  /* I want to keep asking the user for a valid input */
  let letter = ''
  while (!letter) {
    let input = readline.question(
      chalk.blackBright('\nPlease enter your guess : ')
    )
    input = input.toLowerCase()

    if (guessIsValid(input)) {
      letter = input

      if (repeatObject[input] === undefined) {
        repeatObject[input] = 1
        guessedLetters.push(letter)
      } else {
        for (let key in repeatObject) {
          if (key === input) {
            repeatObject[input] += 1
            console.log(
              chalk.blueBright(
                `\nYou try  ${chalk.white.bold.italic(input)}  before...`
              )
            )
            letter = ''
          }
        }
      }
    } else {
      console.log(chalk.blueBright('\nPlease enter a valid letter...'))
    }
  }
  guess = letter
}

/* I want to generate a random Word from the dictionary */
const getrandom = dictionary => {
  indexRandomWord = (Math.random() * (dictionary.length - 0) + 0).toFixed(0)
  return dictionary[indexRandomWord]
}

/* I want to create an array containing the word from dictionary and a ghost array containing '_' */
const hiddenWord = randomWord => {
  for (let ele of randomWord) {
    wordMagic.push('_')
    goodWord.push(ele)
  }
}

/* I want to create a function that makes a new String using the correct guessed letter */
const display = wordMagic => {
  for (let i = 0; i < wordMagic.length; i += 1) {
    if (i === wordMagic.length - 1) {
      displayW += wordMagic[i]
    } else {
      displayW += wordMagic[i] + ' '
    }
  }
  return displayW
}

/* I want to verify the guessed word with the random word selected */
const verification = (goodWord, guess) => {
  isguessCorrect(goodWord, guess)
  for (let x = 0; x < goodWord.length; x += 1) {
    if (goodWord[x] === guess) {
      wordMagic[x] = guess
    }
  }
}

/* I want to count the number of failed attemps by the player */
const isguessCorrect = (goodWord, guess) => {
  if (!goodWord.includes(guess)) {
    countoLose += 1
  }
}

/* I want to create new Strings for later comparison */
const equal = (goodWord, WordMagic) => {
  a = goodWord.join('')
  b = WordMagic.join('')
  return a === b
}

/* I want to control flow the game */
const letsPlay = () => {
  console.clear()
  randomWord = getrandom(dictionary)
  hiddenWord(randomWord)
  opportunity = goodWord.length // I match the lenght of the randomword with the number of guesses, to make it fair

  console.log(`\n\t\t\t\t * * WELCOME TO SNOWMAN * *`)
  console.log(`\nHi  ${chalk.italic.redBright(nam)}  your word is  : `)
  console.log(
    chalk.bold(`\n\t\t\t\t   ${chalk.cyanBright(display(wordMagic))}`)
  )

  while (countoLose < opportunity) {
    console.log(`\nGuessed letters         :\t   ${guessedLetters}`)
    console.log(
      `\nYou have ${chalk.italic.cyanBright(
        opportunity - countoLose
      )} guesses left`
    )

    getValidLetterGuess()
    verification(goodWord, guess)

    if (equal(goodWord, wordMagic)) {
      displayW = ''
      console.log(
        chalk.bold(`\n\t\t\t\t   ${chalk.cyanBright(display(wordMagic))}`)
      )
      console.log(chalk.greenBright(`\n\tCongratulations.. You WON !!`))
      console.log(
        chalk.yellowBright(
          `\n\tYou did it in  ${chalk.cyanBright.italic(
            guessedLetters.length
          )}  turns`
        )
      )
      readline.question(chalk.gray(`\n\nPress enter to continue..`), {
        hideEchoBack: true
      })
      break
    } else {
      displayW = ''
      console.log(
        chalk.bold(`\n\t\t\t\t   ${chalk.cyanBright(display(wordMagic))}`)
      )
    }
  }

  if (countoLose === opportunity) {
    displayW = ''
    console.log(
      chalk.redBright(`\n\nGAME OVER , It looks like you run out of turns..`)
    )
    console.log(
      `\n\n\tYour word was   :\t   ${chalk.greenBright(display(goodWord))}`
    )
    readline.question(chalk.gray(`\n\nPress enter to continue..`), {
      hideEchoBack: true
    })
  }
}

/* I want to create a structured game flow that allows multiple tries */
const snowmanGame = () => {
  console.clear()
  nam = readline.question(`\n\nWelcome, what is your name .??  `)
  console.log(`\n- Nice to meet you ${chalk.redBright.italic.bold(nam)}\n`)

  while (readline.keyInYNStrict(`\n\nDo you want to start the GAME ? :`)) {
    console.clear()
    letsPlay()
    restart()
  }
  console.log(`\n- Have a great Day ${chalk.redBright.italic.bold(nam)}`)
  readline.question(chalk.gray(`\n\nPress enter to continue..`), {
    hideEchoBack: true
  })
}

/* Execution of the Game */
console.clear()
console.log(
  chalk.white(
    `\nPlease Maximize your terminal....\nIt\'s crucial for the game to start`
  )
)
readline.question(chalk.gray(`\n\nPress enter to continue..`), {
  hideEchoBack: true
})

snowmanGame()
