class HumanPlayer{
    constructor(name){
        this.name = name;

    }
    getMove(){
        let move = readline.question(`Hello ${this.name}, I am glad you decided to play, please pick a word... any word...`);
        move.toLowerCase();
        return move;
        
    }
}

module.exports = HumanPlayer;