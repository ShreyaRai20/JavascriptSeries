let myName = "Shreya    "

// console.log(myName.length)


// Object.prototype.truelength = function(){
//     console.log("present here")
//     // return this.object.trim().length
// }

String.prototype.truelength = function(){
    console.log(`${this}`)
    return this.trim().length
}

String.prototype.printMe = function(){
    console.log("present here")
    // return this.trim().length
}


console.log(myName.truelength())

const heros = ["thor","spiderman"]

let heroPowers = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

heroPowers.getSpiderPower()

// heroPowers.truelength()


// inheritance

const teacher = {
    makeVideo: true
}

const teacherAssistant = {
    isAvailable: false
}

const SupportTA = {
    makeAssignment: 'JS Assigment',
    fullTime: true,
    __proto__: teacherAssistant
}

teacherAssistant.__proto__ = teacher


// Modern Syntax
Object.setPrototypeOf(teacherAssistant, teacher)
