class VisualBoard {
    constructor() {
    } // End of constructor

    initialBoard() {
        console.log("   _________");
        console.log("   |       |");
        console.log("           |");
        console.log("           |");
        console.log("           |");
        console.log("        -------");
    } // End of initialBoard() function

    wrongGuess1Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log(" {   }     |");
        console.log("           |");
        console.log("           |");
        console.log("        -------");
    } // End of wrongGuess1Board() function

    wrongGuess2Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log(" {   }     |");
        console.log("   |       |");
        console.log("           |");
        console.log("        -------");
    } // End of wrongGuess2Board() function

    wrongGuess3Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log(" {   }     |");
        console.log("   |       |");
        console.log("  /        |");
        console.log("        -------");
    } // End of wrongGuess3Board() function

    wrongGuess4Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log(" {   }     |");
        console.log("   |       |");
        console.log("  / \\      |");
        console.log("        -------");
    } // End of wrongGuess4Board() function

    wrongGuess5Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log(" {   }     |");
        console.log("  /|       |");
        console.log("  / \\      |");
        console.log("        -------");
    } // End of wrongGuess5Board() function

    wrongGuess6Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log(" {   }     |");
        console.log("  /|\\      |");
        console.log("  / \\      |");
        console.log("        -------");
    } // End of wrongGuess6Board() function

    wrongGuess7Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log(" {;  }     |");
        console.log("  /|\\      |");
        console.log("  / \\      |");
        console.log("        -------");
    } // End of wrongGuess7Board() function

    wrongGuess8Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log(" {; ;}     |");
        console.log("  /|\\      |");
        console.log("  / \\      |");
        console.log("        -------");
    } // End of wrongGuess8Board() function

    wrongGuess9Board() {
        console.log("   _________");
        console.log("   |       |");
        console.log(" {;.;}     |");
        console.log("  /|\\      |");
        console.log("  / \\      |");
        console.log("        -------");
    } // End of wrongGuess9Board() function
} // End of VisualBoard class

module.exports = VisualBoard;