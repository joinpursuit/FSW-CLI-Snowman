class VisualBoard {
    constructor() {

    }

    initialBoard() {
        console.log("_________");
        console.log("|       |");
        console.log("        |");
        console.log("        |");
        console.log("        |");
        console.log("     -------");
    }

    wrongGuess1Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log("  ( )      |");
        console.log("           |");
        console.log("           |");
        console.log("        -------");
    }

    wrongGuess2Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log("  ( )      |");
        console.log("   |       |");
        console.log("           |");
        console.log("        -------");
    }

    wrongGuess3Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log("  { }      |");
        console.log("   |       |");
        console.log("  /        |");
        console.log("        -------");
    }

    wrongGuess4Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log("  { }      |");
        console.log("   |       |");
        console.log("  / \\      |");
        console.log("        -------");

    }

    wrongGuess5Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log("  { }      |");
        console.log("  /|       |");
        console.log("  / \\      |");
        console.log("        -------");
    }

    wrongGuess6Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log("  { }      |");
        console.log("  /|\\      |");
        console.log("  / \\      |");
        console.log("        -------");
    }

    wrongGuess7Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log(" {;  }     |");
        console.log("  /|\\      |");
        console.log("  / \\      |");
        console.log("        -------");
    }

    wrongGuess8Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log(" {; ;}     |");
        console.log("  /|\\      |");
        console.log("  / \\      |");
        console.log("        -------");
    }

    wrongGuess9Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log(" {;.;}     |");
        console.log("  /|\\      |");
        console.log("  / \\      |");
        console.log("        -------");
    }
}

module.exports = VisualBoard;