class Board{

    constructor(length){
   
       this.board = new Array(length).fill("_")
       
   
       }
       addChar(arr, char){
           for (let i = 0; i = arr.length; i++){
               if(arr[i] === char) {
               this.board[i] = char 
               }
           }
   }
   
       
       boardComplete(char){
           if(this.board.join("") === char){
               return true
           } else {
               return false
           }
   
        }
      showBoard(){
          console.log(this.board.join(" "))
       }
   }
   
   
   module.exports = Board
   
   
   
   // add placemark symbol
   // moves remaining