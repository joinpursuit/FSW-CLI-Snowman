const readline = require("readline-sync");
const dictionary = ["able","about","account","acid","across","addition","adjustment","advertisement","after","again","against","agreement","almost","among","amount","amusement","angle","angry","animal","answer","apparatus","apple","approval","arch","argument","army","attack","attempt","attention","attraction","authority","automatic","awake","baby","back","balance","ball","band","base","basin","basket","bath","beautiful","because","before","behaviour","belief","bell","bent","berry","between","bird","birth","bite","bitter","black","blade","blood","blow","blue","board","boat","body","boiling","bone","book","boot","bottle","brain","brake","branch","brass","bread","breath","brick","bridge","bright","broken","brother","brown","brush","bucket","building","bulb","burn","burst","business","butter","button","cake","camera","canvas","card","care","carriage","cart","cause","certain","chain","chalk","chance","change","cheap","cheese","chemical","chest","chief","chin","church","circle","clean","clear","clock","cloth","cloud","coal","coat","cold","collar","colour","comb","come","comfort","committee","common","company","comparison","competition","complete","complex","condition","connection","conscious","control","cook","copper","copy","cord","cork","cotton","cough","country","cover","crack","credit","crime","cruel","crush","current","curtain","curve","cushion","damage","danger","dark","daughter","dead","dear","death","debt","decision","deep","degree",
  "delicate","dependent","design","desire","destruction","detail","development","different","digestion","direction","dirty","discovery","discussion","disease","disgust","distance","distribution","division","door","doubt","down","drain","drawer","dress","drink","driving","drop","dust","early","earth","east","edge","education","effect","elastic","electric","engine","enough","equal","error","even","event","ever","every","example","exchange","existence","expansion","experience","expert","face","fact","fall","false","family","farm","father","fear","feather","feeble","feeling","female","fertile","fiction","field","fight","finger","fire","first","fish","fixed","flag","flame","flat","flight","floor","flower", "fold", "food","foolish","foot","force","fork","form","forward","fowl","frame","free","frequent","friend","from","front","fruit","full","future","garden","general","girl","give","glass","glove","goat","gold","good","government","grain","grass","great","green","grey","grip","group","growth","guide","hair","hammer","hand","hanging","happy","harbour","hard","harmony","hate","have","head","healthy","hear","hearing","heart","heat","help","high","history","hole","hollow","hook","hope","horn","horse","hospital","hour","house","humour","idea","important","impulse","increase","industry","insect","instrument","insurance","interest","invention","iron","island","jelly","jewel","join","journey","judge","jump","keep","kettle","kick","kind","kiss","knee","knife","knot","knowledge","land","language","last","late","laugh","lead","leaf","learning","leather","left","letter","level","library","lift","light","like","limit","line","linen","liquid","list","little","living","lock","long","look","loose","loss","loud","love","machine","make","male","manager","mark","market","married","mass","match","material","meal","measure","meat","medical","meeting","memory","metal","middle","military","milk","mind","mine","minute","mist","mixed","money","monkey","month","moon","morning","mother","motion","mountain","mouth","move","much","muscle","music","nail","name","narrow","nation","natural","near","necessary","neck","need","needle","nerve","news","night","noise","normal","north","nose","note","number","observation","offer","office","only","open","operation","opinion","opposite","orange","order","organization","ornament","other","oven","over","owner","page","pain","paint","paper","parallel","parcel","part","past","paste","payment","peace","pencil","person","physical","picture","pipe","place","plane","plant","plate","play","please","pleasure","plough","pocket","point","poison","polish","political","poor","porter","position","possible","potato","powder","power","present","price","print","prison","private","probable","process","produce","profit","property","prose","protest","public","pull","pump","punishment","purpose","push","quality","question","quick","quiet","quite","rail","rain","range","rate","reaction","reading","ready","reason","receipt","record","regret","regular","relation","religion","representative","request","respect","responsible","rest","reward","rhythm","rice","right","ring","river","road","roll","roof","room","root","rough","round","rule","safe","sail","salt","same","sand","scale","school","science","scissors","screw","seat","second","secret","secretary","seed","seem","selection","self","send","sense","separate","serious","servant","shade","shake","shame","sharp","sheep","shelf","ship","shirt","shock","shoe","short","shut","side","sign","silk","silver","simple","sister","size","skin","skirt","sleep","slip","slope","slow","small","smash","smell","smile","smoke","smooth","snake","sneeze","snow","soap","society","sock","soft","solid","some","song","sort","sound","soup","south","space","spade","special","sponge","spoon","spring","square","stage","stamp","star","start","statement","station","steam","steel","stem","step","stick","sticky","stiff","still","stitch","stocking","stomach","stone","stop","store","story","straight","strange","street","stretch","strong","structure","substance","such","sudden","sugar","suggestion","summer","support","surprise","sweet","swim","system","table","tail","take","talk","tall","taste","teaching","tendency","test","than","that","then","theory","there","thick","thin","thing","this","thought","thread","throat","through","through","thumb","thunder","ticket","tight","till","time","tired","together","tomorrow","tongue","tooth","touch","town","trade","train","transport","tray","tree","trick","trouble","trousers","true","turn","twist","umbrella","under","unit","value","verse","very","vessel","view","violent","voice","waiting","walk","wall","warm","wash","waste","watch","water","wave","weather","week","weight","well","west","wheel","when","where","while","whip","whistle","white","wide","will","wind","window","wine","wing","winter","wire","wise","with","woman","wood","wool","word","work","worm","wound","writing","wrong","year","yellow","yesterday","young",];

let stats = {
  choiceWord: dictionary[Math.floor(Math.random() * dictionary.length)],
  answer: [],
  guesses: [],
  lives: 8,
};

const play = () => {
  console.log("Welcome to Snowman");
  let openingQuestion = readline.keyInYNStrict("Would You like to play?");
  if (openingQuestion) {
    console.log("\n");
    console.log(
      "You Will Play a Game of Snowman (FKA Hangman) Where The Objective is to Guess \nAll of the Letters That Would Fill the Blank __ Placeholders.\nYou Will be Given 8 Attempts to Guess Correctly.\nGood Luck!!! "
    );
    getValidLetterGuess();
  } else quitGame();
};
// const replay = () => {
//   let replayQuestion = readline.keyInYNStrict("Would you like to play again?");
//   if (replayQuestion) {
//     play();
//   } else quitGame();
// };
const quitGame = () => {
  console.log("See You Later");
};

for (let i = 0; i < stats.choiceWord.length; i++) {
  stats.answer[i] = "_";
}

function livesCounter() {
  stats.lives--;
  return stats.lives;
}
function guessIsValid(letter) {
  return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase();
}
function getValidLetterGuess() {
  let letter = "";
  console.log("\n");
  console.log(stats.answer);
  while (stats.lives > 0) {
    // while (!letter) {
    console.log(`You have ${stats.lives} lives remaining`);
    letter = readline.question("Please enter your guess: ");
    console.log("------------------------------------------------");
    while (!guessIsValid(letter) || stats.guesses.includes(letter)) {
      letter = readline.question("Please enter a valid letter: ");
    }
    // loop through guesses array to see what user has entered
    for (let j = 0; j < stats.guesses.length; j++) {
      if (letter === stats.guesses[j]) {
        console.log("you have entered this letter already");
        //must ask user to enter new choice
        break;
      }
    }
    // check to see if choice is in answer
    let guessedMatch = false;
    for (let i = 0; i < stats.choiceWord.length; i++) {
      if (letter === stats.choiceWord[i]) {
        stats.answer[i] = letter;
        guessedMatch = true;
      }
    }
    if (!guessedMatch) {
      livesCounter();
      // console.log(`You have ${stats.lives} lives left`);
    }
    if (stats.lives < 1) {
      console.log("SORRY YOU HAVE LOST");
      console.log(`The word was ${stats.choiceWord}`);
      quitGame();
      break;
    }
    let answerMatch = true;

    //compare answer to choice word
    let choiceArray = stats.choiceWord.split("");
    for (let k = 0; k < stats.answer.length; k++) {
      if (stats.answer[k] === choiceArray[k]) {
      } else {
        answerMatch = false;
        break;
      }
    }
    //break out of loop lives when word is found and log congrats
    if (answerMatch === true) {
      console.log(
        `WINNER WINNER WINNER\n The word was ${stats.choiceWord}It took ${stats.guesses.length + 1} tries.`
      );
      quitGame();
      break;
    }

    stats.guesses.push(letter); // insert all chosen letters into guesses array
    console.log(stats.answer);
    console.log(`You have used the letters ${stats.guesses}`);
    console.log(
      "-------------------------------------------------------------------"
    );
    //console.log(stats.choiceWord.split("")); 
    //check word against wins and losses
  }
  return letter.toLowerCase();
}

play();





