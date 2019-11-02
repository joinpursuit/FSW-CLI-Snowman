class ComputerPlayer {
    constructor (){
        this.name = name;
    }
    guessLetter() {
        const letter = 'abcdefghijklmnopqrstuvwxyz';
        return letter[Math.floor(Math.random() * letter.length)]
    }
}

module.exports = ComputerPlayerPro1;