// Primitive - 7 types - call by value , copy changes

// String , Number, Boolean, null, undefined, BigInt, Symbol

// null -> datatype is object

// Dynamic/Static? 
// type define ->  static
// dynamic javascript

const id = Symbol("123")
const anotherid = Symbol("123")
const bigNumber = 9823496249629546309659839853635n

console.log(id=== anotherid)

// Non-primitive, Reference type -

// Array, Objects, Functions


const heros = ["spider", "bat", "super"]

const myObj = {
    name: "hello",
    age: 23,
}

const myFn1 = () => {

}

const myFn2 = function() {
    
}

console.log(typeof bigNumber)
console.log(typeof heros)
console.log(typeof myObj) // function but function object
console.log(typeof myFn1) // function but function object


// Stack (primitive) - copy ,and Heap (non- primitive) - reference of original value, change original value

let myName = "Shreya"

let anotherName = myName
anotherName = "momo"

console.log(myName)
console.log(anotherName)


let myObj1 = [1,2,3,4,5]

let myObj2 = myObj1
myObj2[2] = 10  // changes for both obj1 and obj2

console.log(myObj1)
console.log(myObj2)

let user1 = {
    name: "shreya",
    age: 25
}

let user2 = user1

user2.name = "momo"

console.log(user1.name)
console.log(user2.name)


// both name changes within user1 and user2.
