// OOP - Object oreinted Programming

// Object - Collection of properties and methods

// Why? - code mess up, spagetti

// parts of OOP
// Object Literal


const user = {
    username: "Shreya",
    loginCount: 5,
    signedIn: true,
    getUserDetails: function(){
        // console.log(`username: ${this.username}`)
        console.log(this) // back ticks give undefined why not sure
    }
}

// Arrow functions do not have their own this. 
// They "capture" the this from their surrounding scope at the time they are defined. 
// So, in the context of an object method, you want to use a regular function so that 
// this refers to the object itself.

// Then this.username would not refer to the user object. 
// Instead, it would refer to the this of the lexical scope where the 
// arrow function was defined, which is likely the global scope (or the enclosing function/module), 
// not the object.

console.log(user.username)
console.log(user.getUserDetails())

// Constructor Function

function User(username, loginCount, signedIn){
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn

    this.greetings = function(){
        console.log(`welcome ${this.username}!`)
    }

    return this // implictly returns this
}

const userOne = new User("shreya", 23, true) // new => 1. empty object created called instance, object, 2. constructor function called, pack all the arguments and gives to you, 3. this keyword injected the values, 4. returns to you everything
const userTwo = new User("Eleven", 11, true) // overRide userOne if not used new keyword

console.log(userOne)
console.log(userTwo)
console.log(userTwo.constructor)
userOne.greetings()

// Prototypes
// javascript prototyple behaviour - goes to parent to parent classes to search for a thing its searching for until it receives null
// new, classes, this, prototypal behaviour, all got through prototype
// prototypal inheritance


// Classes
// Instances (new, this) 













//  4 pillars - 
// abstraction -  example - fetch
// encapsutation - allow some features and not some 
// Inheritance -
// Polymorphism - one method many forms


