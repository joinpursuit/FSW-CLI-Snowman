// let dog = {
//     name: 'Pluto',
//     talk: function () {
//         console.log('Woof!');
//     }
// }
// talk() // error => Uncaught ReferenceError: talk is not defined
// dog.talk // logs function => ƒ () { console.log('Woof!'); }
// dog.talk() // invokes function => 'Woof!'

let dog = {
    firstName: 'Pluto',
    lastName: 'Pup',
    talk: function () {
        console.log('Woof!');
    },
    getFullName: function() {
        console.log( `${this.firstName} ${this.lastName}` );
        return `${this.firstName} ${this.lastName}`;
    }
}
// dog.talk() // invokes function => 'Woof!'
dog.getFullName() // => 'Pluto Pup'

// adding more info to an object that already exists
dog.breed // => undefined (breed was not defined)
dog.breed = "Cartoon" // (now we have defined breed)
dog // => {firstName: "Pluto", lastName: "Pup", talk: ƒ, getFullName: ƒ, breed: "Cartoon"} (dog now has a breed property!)
dog.breed // => "Cartoon"

// adding a function to an object that already exists
dog.getBreed = function() { 
    console.log(`I am a ${this.breed}!`);
    return `I am a ${this.breed}!`;
}
dog // => {firstName: "Pluto", lastName: "Pup", talk: ƒ, getFullName: ƒ, breed: "Cartoon", getBreed: ƒ} (dog now has a getBreed function!)
dog.getBreed() // => "I am a Cartoon!"