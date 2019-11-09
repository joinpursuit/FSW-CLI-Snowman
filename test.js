const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js");
const ComputerPlayer = require("./ComputerPlayer.js");
const readline = require('readline-sync');
const Dictionary = require("./dictionary.js");
const chalk = require("chalk")
const fetch = require("node-fetch");

fetch('http://www.omdbapi.com/?apikey=cc5271c1&')
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => console.error(error))