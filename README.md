## 🗻 ⛄ ❄️ Snowman Word Guessing Game! ❄️ ⛄ 🏔️

For this project, I built a javascript word guessing game called snowman, that you can play in the terminal!

Sarah's Snowman Game Trello board [link](https://trello.com/b/4xlMxkKC/sarahs-command-line-snowman-project-plan.)

#### Instructions to run this code:
1. Git clone this repo
2. Open up the code in VSCode or your choice of IDE
3. Run npm install to install dependencies that this project uses
4. Run node snowman.js
5. Play!

![Gamegif](https://github.com/sbweins/FSW-CLI-Snowman/blob/master/snowmanwin.gif?raw=true)


``` javascript
const leaveGame = () => {
  console.log(chalk.whiteBright.bold("........................................................."));
  if (readlineSync.keyInYNStrict("Do you really want to exit the Snowman word guessing game?")
  ){
  console.log(chalk.yellowBright.bold("👋  Thank you for stopping by the Snowman Word Guessing Game! 👋 "));
  process.exit();
  } else {
    (obs.guessedLetters.length = 0),
    (obs.guessCount = 0),
    (obs.guessesLeft = 6);
     startGame();
  }
};
```
