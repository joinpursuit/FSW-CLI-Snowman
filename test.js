const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js");
const ComputerPlayer = require("./ComputerPlayer.js");
const readline = require('readline-sync');
const Dictionary = require("./dictionary.js");
const chalk = require("chalk")

const whileInvalid = (returnVal, condition, cb) => {
  while(condition) {
    console.log(returnVal);
    cb(returnVal);
  }
  return returnVal
}

ex = Math.floor(Math.random() * 10) + 1;
console.log(whileInvalid(ex, ex !== 5, (num) => num = Math.floor(Math.random() * 10)))