class Game {
    constructor() {
        this.playing = true
    }
    play() {

        while (this.playing) {

            //get guess
            theGuess = this.players[this.currentPlayer].guess(this.letters)

            this.letters.add(theGuess);

            //if not penalize players and possibly end game
            if (this.word.search(theGuess) == -1) {

                this.failedGuesses++;

                if (this.failedGuesses >= this.maxGuesses) {

                    this.playing = false;
                    console.log("GAME OVER!")

                }

            } else { // it's a good guess   
                let wordLetters = new Set(this.word.split(""));

                let didWin = wordLetters.subSet(this.letters);

                if (didWin) {
                    this.playing = false;
                    console.log("YOU WIN!");

                }
            }
            this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
        }
    }
}
export default Game;