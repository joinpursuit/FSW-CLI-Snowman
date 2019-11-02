const readline = require('readline-sync')
class HumanPlayer {
    constructor(name) {
        this.name = name
    }
    getMove(){
        return this.name + 'would make a move here'
        // return readline.questions('what is your letter guess')
    }
    static saySomething(){
        return 'start to play'
    }
}
// what is needed 

// display remaining moves
// when game is over 
// switch player






module.exports = player;