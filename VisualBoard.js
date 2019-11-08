const chalk = require('chalk');

let visualBoard = [
    () => {
        console.log(chalk.magenta("   _________"));
        console.log(chalk.magenta("   |       |"));
        console.log(chalk.magenta(" {;.;}     |"));
        console.log(chalk.magenta("  /|\\      |"));
        console.log(chalk.magenta("  / \\      |"));
        console.log(chalk.magenta("        -------"));
    }, // End of wrongGuess9Board() function

    () => {
        console.log(chalk.magenta("   _________"));
        console.log(chalk.magenta("   |       |"));
        console.log(chalk.magenta(" {; ;}     |"));
        console.log(chalk.magenta("  /|\\      |"));
        console.log(chalk.magenta("  / \\      |"));
        console.log(chalk.magenta("        -------"));
    }, // End of wrongGuess8Board() function

    () => {
        console.log(chalk.magenta("   _________"));
        console.log(chalk.magenta("   |       |"));
        console.log(chalk.magenta(" {;  }     |"));
        console.log(chalk.magenta("  /|\\      |"));
        console.log(chalk.magenta("  / \\      |"));
        console.log(chalk.magenta("        -------"));
    }, // End of wrongGuess7Board() function

    () => {
        console.log(chalk.magenta("   _________"));
        console.log(chalk.magenta("   |       |"));
        console.log(chalk.magenta(" {   }     |"));
        console.log(chalk.magenta("  /|\\      |"));
        console.log(chalk.magenta("  / \\      |"));
        console.log(chalk.magenta("        -------"));
    }, // End of wrongGuess6Board() function

    () => {
        console.log(chalk.magenta("   _________"));
        console.log(chalk.magenta("   |       |"));
        console.log(chalk.magenta(" {   }     |"));
        console.log(chalk.magenta("  /|       |"));
        console.log(chalk.magenta("  / \\      |"));
        console.log(chalk.magenta("        -------"));
    }, // End of wrongGuess5Board() function

    () => {
            console.log(chalk.magenta("   _________"));
            console.log(chalk.magenta("   |       |"));
            console.log(chalk.magenta(" {   }     |"));
            console.log(chalk.magenta("   |       |"));
            console.log(chalk.magenta("  / \\      |"));
            console.log(chalk.magenta("        -------"));
    }, // End of wrongGuess4Board() function

    () => {
        console.log(chalk.magenta("   _________"));
        console.log(chalk.magenta("   |       |"));
        console.log(chalk.magenta(" {   }     |"));
        console.log(chalk.magenta("   |       |"));
        console.log(chalk.magenta("  /        |"));
        console.log(chalk.magenta("        -------"));
    }, // End of wrongGuess3Board() function

    () => {
        console.log(chalk.magenta("   _________"));
        console.log(chalk.magenta("   |       |"));
        console.log(chalk.magenta(" {   }     |"));
        console.log(chalk.magenta("   |       |"));
        console.log(chalk.magenta("           |"));
        console.log(chalk.magenta("        -------"));
    }, // End of wrongGuess2Board() function

    () => {
        console.log(chalk.magenta("   _________"));
        console.log(chalk.magenta("   |       |"));
        console.log(chalk.magenta(" {   }     |"));
        console.log(chalk.magenta("           |"));
        console.log(chalk.magenta("           |"));
        console.log(chalk.magenta("        -------"));
    }, // End of wrongGuess1Board() function

    () => {
        console.log(chalk.magenta("   _________"));
        console.log(chalk.magenta("   |       |"));
        console.log(chalk.magenta("           |"));
        console.log(chalk.magenta("           |"));
        console.log(chalk.magenta("           |"));
        console.log(chalk.magenta("        -------"));
    } // End of initialBoard() function
]

module.exports = visualBoard;