const ALPHABET = [
    "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y",
    "z", " "];

class ComputerPlayer {
    constructor() {
        this.name = "AI"
    }
    computerGuess() {
        return ALPHABET[Math.floor(Math.random() * 26)]
    }
}
module.exports = ComputerPlayer;