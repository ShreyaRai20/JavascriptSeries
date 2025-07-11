const user = {
    username: "Shreya",
    age: 23,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`) // this for current context
        console.log(this) // return whole object / user
    }
}

// user.welcomeMessage()

// user.username = "Sam"
// user.welcomeMessage()

console.log(this) // node enviroment, this refer to empty object

// In browser gives window object. this refers to window object

console.log("no")
function one1(){
    let user = "Shreya"
    console.log(this)
    console.log(this.user) // only used in objects not in functions gives undefined
}

one1()

console.log("no")
const chai = () => {
    let user = "Shreya"
    console.log(this)
    console.log(this.user)
    console.log("Hello")
}

console.log(chai())
 
const addThree = (num1) => num1 + 3 // implecit return
const add4= (num1) => (num1 + 3) // used to return objects
const add5= (num1) => ({username: "shr", num1: num1}) 


console.log(add4(3))
console.log(add5(3))


let arr = [1,2,3,4,45,6]

// arr.forEach(()=>)