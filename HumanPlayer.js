class HumanPlayer {
    constructor(name){
        this.name = name; 
    }
    playerTurn() {
        return this.name + "turn to pick a letter"
    }
}
let player1 = new HumanPlayer("urturn, ");
console.log(player1.playerTurn());