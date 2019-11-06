class ComputerPlayer {
    constructor(name, letter) {
        this.name = name;
        this.letter = letter;
    }

    getMove() {
        let characters = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
        return Math.floor(Math.random() * characters.length )
    }
    
}

module.exports = ComputerPlayer.js
