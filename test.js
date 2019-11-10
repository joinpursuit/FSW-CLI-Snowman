const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js");
const ComputerPlayer = require("./ComputerPlayer.js");
const readline = require('readline-sync');
const Dictionary = require("./dictionary.js");
const chalk = require("chalk")
const fetch = require("node-fetch");

const getMovies = (search, arr) => {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=01b1d1956246aa6d8bfdaaa66cdab0e9&language=en-US&query=${search}&page=1&include_adult=false`)
  .then(response => response.json())
  .then(data => {
    console.log(data["results"]);
  })
}

const getPopularMovie = (movie) => {
  return fetch('https://api.themoviedb.org/3/movie/popular?api_key=01b1d1956246aa6d8bfdaaa66cdab0e9')
  .then(response => response.json())
  .then(data => {
    console.log(chalk.yellow(data["results"][movie]["title"]));
  })
  .catch(error => console.error(error))
}



// getPopularMovie(0);

// getOmdbData();

// const getPosts = () => {
//   return fetch(`http://jsonplaceholder.typicode.com/posts`)
//     .then(res => res.json())
//     .then(posts => console.log(posts))
// }

// getPosts();
