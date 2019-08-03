//Grab function from word.js
let Word = require('./Word.js');
let inquire = require('inquirer');
var player = require('play-sound')(opts = {});

//List of words picked randomly
const wordArrayKid = ['THE CONJURING', 'IT', 'INSIDIOUS', 'US', 'A QUIET PLACE', 'HALLOWEEN', 'GET OUT', 'BLAIR WITCH', 'THE HILLS HAVE EYES', 'LET THE RIGHT ONE IN', 'PARANORMAL ACTIVITY'];
const wordArrayTeen = ['ZOMBIE', 'WAREWOLF', 'VAMPIRE', 'GHOST', 'GOBLIN', 'DEMON', 'TROLL', 'GHOUL', 'MIND FLAYER'];
const wordArrayAdult = ['BILLS', 'TAXES', 'COMMITMENT', 'TRAFFIC TICKETS', 'KIDS SCREAMING', 'WORK', 'FAILURE', 'NYC SUBWAY'];

//Making sure the guessed letters are only this character
const letters = /[a-zA-Z]/;

//Victom will only have 6 guesses to get it right
let numGuesses = 0;
let penatly = 0;
let liar = 0;
let introTalk = false;

var victom = {
  name: '',
  age: 0,
};

//My awesome text art. Borrow ideas from online.
let introImage = `
                                        *    '''\`\`\`\`\`'''
                                   *
                                *
                              *           ..i'             q.
                             *         .poj;                \\*.
                            .         oKPO                   THk
                           .k        {HHk\`                    THH,
                           dH,       ;YJH.                     YHHk
                          {HHk       :lHHk                     jHHH}
                           THHk      \`NJHH,                   .HHHl'
                            THHk,     lHHHHk                 jHHHHP
                             THHHi:,  \`GHHHHH,.            .'HHHHH
                              \`THHHHHHi\\WHHHHHkoo....ooooojHHHHHHF
                                \`*THHHH\`THHHHHHHHHHHHHHHHHHHHHHHHl
                                   \`*THHHYHHHHHHHHHHHHHHHHHHHHHHHI
                                      \`*THHYHHHHHHHHHHHHHHHHHHHHHH}   -By: Kameron Montague-
                                        \`*THHHHHHHHHHHHHHHHHHHHHH}
                                           \`THHHHHHHHHHHHHHHHHHHP
                                             \`THHHHHHHHHHHHHHHHHH|

            @@@@@@@    @@@@@@    @@@@@@    @@@@@@@@  @@@@@@@@  @@@ @@@  @@@@@@@@@@    @@@@@@   @@@  @@@
            @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@@  @@@@@@@@  @@@ @@@  @@@@@@@@@@@  @@@@@@@@  @@@@ @@@
            @@!  @@@  @@!  @@@  @@!  @@@  !@@        @@!       @@! !@@  @@! @@! @@!  @@!  @@@  @@!@!@@@
            !@   @!@  !@!  @!@  !@!  @!@  !@!        !@!       !@! @!!  !@! !@! !@!  !@!  @!@  !@!!@!@!
            @!@!@!@   @!@  !@!  @!@  !@!  !@! @!@!@  @!!!:!     !@!@!   @!! !!@ @!@  @!@!@!@!  @!@ !!@!
            !!!@!!!!  !@!  !!!  !@!  !!!  !!! !!@!!  !!!!!:      @!!!   !@!   ! !@!  !!!@!!!!  !@!  !!!
            !!:  !!!  !!:  !!!  !!:  !!!  :!!   !!:  !!:         !!:    !!:     !!:  !!:  !!!  !!:  !!!
            :!:  !:!  :!:  !:!  :!:  !:!  :!:   !::  :!:         :!:    :!:     :!:  :!:  !:!  :!:  !:!
             :: ::::  ::::: ::  ::::: ::   ::: ::::   :: ::::     ::    :::     ::   ::   :::   ::   ::
            :: : ::    : :  :    : :  :    :: :: :   : :: ::      :      :      :     :   : :  ::    :
                                       `;

let losingImage = `
           _      ()              ()      _
          / \\     ||______________||     / \\
         /___\\    |                |    /___\\
           |      |    ~@DOOM@~    |      |
          (_)     |_______  _______|     (_)
       ___/_\\___  {____||||||||____}  ___/_\\___
        |__~__|       ( X __ X )       |__~__|
     ___|_____|__      /   |  \\      __|_____|___
        |     |        \\   |  |         |     |
         \`=====           / \\          =====\`
        \`=====           /   \\          =====\`
       \`=====           /     \\          =====\`
      \`=====/||||||||||||||||||||||||||||\\=====\`
     \`======||||||||||||||||||||||||||||||======\`
    \`=======|||||||||||||||||||||||||||lc|=======\`
   \`==============================================\`
  \`================================================\`
 \`==================================================\`
\`====================================================\`
  `;

let winningImage = `
│▒│ /▒/
│▒│/▒/
│▒ /▒/─┬─┐
│▒│▒|▒│▒│
┌┴─┴─┐-┘─┘
│▒┌──┘▒▒▒│
└┐▒▒▒▒▒▒┌┘
└┐▒▒▒▒┌┘
`;
let bedVictomStatus = [`
           _      ()              ()      _
          / \\     ||______________||     / \\
         /___\\    |                |    /___\\
           |      |      ~@1@~     |      |
          (_)     |_______  _______|     (_)
       ___/_\\___  {____||||||||____}  ___/_\\___
        |__~__|       ( @ __ @ )       |__~__|
     ___|_____|__      /   |  \\      __|_____|___
        |     |        \\   |  |         |     |
         \`=====           /%%%%%%%%%%%%=====\`
        \`=====           / %%%%%%%%%%%%%=====\`
       \`=====           /  %%%%%%%%%%%%%%=====\`
      \`=====/||||||||||||||||||||||||||||\\=====\`
     \`======||||||||||||||||||||||||||||||======\`
    \`=======|||||||||||||||||||||||||||lc|=======\`
   \`==============================================\`
  \`================================================\`
 \`==================================================\`
\`====================================================\`
  `,
  `
           _      ()              ()      _
          / \\     ||______________||     / \\
         /___\\    |                |    /___\\
           |      |      ~@2@~     |      |
          (_)     |_______  _______|     (_)
       ___/_\\___  {____||||||||____}  ___/_\\___
        |__~__|       ( O __ O )       |__~__|
     ___|_____|__      /   |  \\      __|_____|___
        |     |        \\   |  |         |     |
         \`=====%%%%%%%%%%%%%%%%%%%%%%%%=====\`
        \`=====%%%%%%%%%%%%%%%%%%%%%%%%%%=====\`
       \`=====%%%%%%%%%%%%%%%%%%%%%%%%%%%%=====\`
      \`=====/||||||||||||||||||||||||||||\\=====\`
     \`======||||||||||||||||||||||||||||||======\`
    \`=======|||||||||||||||||||||||||||lc|=======\`
   \`==============================================\`
  \`================================================\`
 \`==================================================\`
\`====================================================\`
  `,
  `
           _      ()              ()      _
          / \\     ||______________||     / \\
         /___\\    |                |    /___\\
           |      |      ~@3@~     |      |
          (_)     |_______  _______|     (_)
       ___/_\\___  {____||||||||____}  ___/_\\___
        |__~__|       ( O __ o )       |__~__|
     ___|_____|__      /   | %%%%%%%%__|_____|___
        |     |        \\   | %%%%%%%%%% |     |
         \`=====%%%%%%%%%%%%%%%%%%%%%%%%=====\`
        \`=====%%%%%%%%%%%%%%%%%%%%%%%%%%=====\`
       \`=====%%%%%%%%%%%%%%%%%%%%%%%%%%%%=====\`
      \`=====/||||||||||||||||||||||||||||\\=====\`
     \`======||||||||||||||||||||||||||||||======\`
    \`=======|||||||||||||||||||||||||||lc|=======\`
   \`==============================================\`
  \`================================================\`
 \`==================================================\`
\`====================================================\`
  `,
  `
           _      ()              ()      _
          / \\     ||______________||     / \\
         /___\\    |                |    /___\\
           |      |      ~@4@~     |      |
          (_)     |_______  _______|     (_)
       ___/_\\___  {____||||||||____}  ___/_\\___
        |__~__|       ( . __ . )       |__~__|
     ___|_____|__      /  %%%%%%%%%%%__|_____|___
        |     |        \\%%%%%%%%%%%%%% |     |
         \`=====%%%%%%%%%%%%%%%%%%%%%%%%=====\`
        \`=====%%%%%%%%%%%%%%%%%%%%%%%%%%=====\`
       \`=====%%%%%%%%%%%%%%%%%%%%%%%%%%%%=====\`
      \`=====/||||||||||||||||||||||||||||\\=====\`
     \`======||||||||||||||||||||||||||||||======\`
    \`=======|||||||||||||||||||||||||||lc|=======\`
   \`==============================================\`
  \`================================================\`
 \`==================================================\`
\`====================================================\`
  `,
`
           _      ()              ()      _
          / \\     ||______________||     / \\
         /___\\    |                |    /___\\
           |      |      ~@5@~     |      |
          (_)     |_______  _______|     (_)
       ___/_\\___  {____||||||||____}  ___/_\\___
        |__~__|       ( . __ . )       |__~__|
     ___|_____|__%%%%%%%%%%%%%%%%%%%%__|_____|___
        |     | %%%%%%%%%%%%%%%%%%%%%% |     |
         \`=====%%%%%%%%%%%%%%%%%%%%%%%%=====\`
        \`=====%%%%%%%%%%%%%%%%%%%%%%%%%%=====\`
       \`=====%%%%%%%%%%%%%%%%%%%%%%%%%%%%=====\`
      \`=====/||||||||||||||||||||||||||||\\=====\`
     \`======||||||||||||||||||||||||||||||======\`
    \`=======|||||||||||||||||||||||||||lc|=======\`
   \`==============================================\`
  \`================================================\`
 \`==================================================\`
\`====================================================\`
  `,
  `
           _      ()              ()      _
          / \\     ||______________||     / \\
         /___\\    |                |    /___\\
           |      |      ~@6@~     |      |
          (_)     |_______  _______|     (_)
       ___/_\\___  {_______}{_______}  ___/_\\___
        |__~__|   %%%%%%%%%%%%%%%%%%   |__~__|
     ___|_____|__%%%%%%%%%%%%%%%%%%%%__|_____|___
        |     | %%%%%%%%%%%%%%%%%%%%%% |     |
         \`=====%%%%%%%%%%%%%%%%%%%%%%%%=====\`
        \`=====%%%%%%%%%%%%%%%%%%%%%%%%%%=====\`
       \`=====%%%%%%%%%%%%%%%%%%%%%%%%%%%%=====\`
      \`=====/||||||||||||||||||||||||||||\\=====\`
     \`======||||||||||||||||||||||||||||||======\`
    \`=======|||||||||||||||||||||||||||lc|=======\`
   \`==============================================\`
  \`================================================\`
 \`==================================================\`
\`====================================================\`
`,
];

function intro() {
  numGuesses = 0;
  penatly = 0;
  liar = 0;

  console.log(introImage);
  var introMusic = player.play('IntroMusic.mp3', function (err) {
    if (err && !err.killed) throw err;
  });

  if (introTalk) {
  inquire.prompt([
  {
    name: 'whoAreYou',
    message: 'What\'s your name little one...',
    validate: function findName(name) {
      if (!name.match(letters)) {
        liar++;
        return 'Don\'t lie, that\'s not nice. I just want to help...';
      } else {
        victom.name = name;
        return true;
      }
    },
  },
]).then(function (findAge) {
        inquire.prompt([
    {
          name: 'findAge',
          message: `${victom.name}, what a delicious name. Now tell me your age quickly!`,
          validate: function validateAge(age) {
            if (age > 0) {
              victom.age = age;
              introMusic.kill();
              introTalk = false;
              playGame();
            } else {
              penatly++;
              // console.log(penatly);
            if (introTalk) {
              return 'I demanded your age... DON\'T make me repeat myself... \n' +
              '*You feel your soul getting weaker* ' + '\n';
              }
            }
          },
        },
    ]);
      });
    }
};

function playGame() {
  let gameWord;

  if (victom.age > 18) {
    gameWord = wordArrayAdult[Math.floor(Math.random() * wordArrayAdult.length)];
  } else if (victom.age > 12) {
    gameWord = wordArrayTeen[Math.floor(Math.random() * wordArrayTeen.length)];
  } else {
    gameWord = wordArrayKid[Math.floor(Math.random() * wordArrayKid.length)];
  };

  // let gameWord = wordArrayKid[Math.floor(Math.random() * wordArrayKid.length)];
  let victomsGuessWord = new Word(gameWord);

  numGuesses = (6 - liar) - penatly;
  console.log(bedVictomStatus[numGuesses - 1]);

  if (numGuesses < 1) {
    inquire.prompt([
      {
        type: 'confirm',
        name: 'playAgain',
        message: `You thought this was a game but your ${liar} lies and ${penatly} mistakes have doomed you!\nTry again... ?`,
        default: true,
      },
    ]).then(function (answer) {
      if (answer.playAgain) {
        intro();
      } else {
        process.exit();
      }
    });
  } else if (numGuesses !== 6 && numGuesses > 0) {
    console.log(`You start with ${numGuesses} chances because you wouldn't listen!`);
    guessRules(victomsGuessWord, gameWord);
  } else {
    guessRules(victomsGuessWord, gameWord);
  }

};

function guessRules(theirGuess, actualWord) {
  let letterWordArr = [];
  let guessArr = [];

  let gameMusic = player.play('HorrorMusic.mp3', function (err) {
    if (err && !err.killed) throw err;
  });

  console.log('');
  console.log(theirGuess.newString());
  console.log('');

  inquire.prompt([
  {
    name: 'guessLetter',
    message: 'Pick a letter or lose a limb.',
    validate: function validateLetter(name) {
      if (!name.match(letters)) {
        return 'No one\'s going to save you, pick a letter!.';
      } else {
        return true;
      }
    },
  },
]).then(function (answer) {
    theirGuess.checkGuessWord(answer.guessLetter.toUpperCase());
    theirGuess.lettersArr.forEach(function (element) {

      letterWordArr.push(element.letter);
      guessArr.push(element.guessed);
    });

    if (letterWordArr.indexOf(answer.guessLetter.toUpperCase()) > -1) {
      console.log('');
      console.log(bedVictomStatus[numGuesses - 1]);
      console.log('Correct for now...');
      console.log('');

    } else {
      numGuesses--;

      if (numGuesses === 5) {
        var creekingDoor = player.play('CreekingDoor.wav', function (err) {
          if (err && !err.killed) throw err;
        });
      } else if ( numGuesses === 2) {
        var evilLaugh = player.play('EvilLaugh.wav', function (err) {
          if (err && !err.killed) throw err;
        });
      }

      if (numGuesses > 0) {
        console.log(bedVictomStatus[numGuesses - 1]);
        var fluffBlanket = player.play('fluffingblanket.wav', function (err) {
          if (err && !err.killed) throw err;
        });
        console.log('');
        console.log('Incorrect!');
        console.log(`Only ${numGuesses} more body parts to expose...`);
        console.log('');

      }
    }

//Win or lose condition
    if (guessArr.indexOf(false) > -1 && numGuesses > 0) {
      gameMusic.kill();
      guessRules(theirGuess, actualWord);
    } else {
      if (numGuesses === 0) {
        gameMusic.kill();

        var finalLaugh = player.play('LostLaugh.wav', function (err) {
          if (err && !err.killed) throw err;
        });
        console.log(losingImage);
        console.log('');
        console.log(`HAHAHAHA, the word was ${actualWord}... `);

        if (liar > 0) {
          console.log(`And you've told me ${liar} lies you miserable fool!`);
        };
        console.log('Now you will be MINE!');
        console.log('');
        gameMusic.kill();
        process.exit();
      } else {
        gameMusic.kill();
        console.log(winningImage);
        console.log('');
        console.log('Noooo, damn you!');
        if (victom.age > 18) {
          console.log(`Wait, did you say ${victom.age} years old? Aren't you a bit too old to be scared of me... ?`);
          console.log('');

        } else {
          console.log(`How did you guess ${actualWord}. I'll get you next time!!!`);
          console.log('');
        }
        gameMusic.kill();
        process.exit();
      };

    }
  });

};
introTalk = true;
intro();
