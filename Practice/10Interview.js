function ageCheck(data){
    if(data === {age:18}){
        console.log("you are adult")
    }else if(data == {age:18}){
        console.log("you are still adult")
    }else {console.log("hmm.. no age")}
}

ageCheck({age:18}) // object difference reference always false


function abc(){
    console.log(abc.timeout)
    console.log("hello")

}

abc()

abc.timeout = 200;

abc.timeout = 100;
abc()


let a = {name:'shreya'}
let z = a
z.name = "rai"
console.log(a.name) // rai => because both refers to the same object in memory


console.log(+true) // 1
console.log(!"hello") // false
console.log(isNaN("Hello")) // true

// INFINITE CURRYING

function sum(a){
    return function next(b){
        if(b === undefined) return a
        a = a + b
        return next
    }
}

console.log(sum(10)(20)(30)(40)(50)())


console.log(2-"2") // 0
console.log('2'-2) // 0

console.log(2+"2") // 22
console.log('2'+2) // 22


console.log(2+ + "2")

console.log(typeof NaN) // number
console.log(NaN === NaN)
console.log(Number('23ed'))

console.log(23/'as')


console.log(Number(true)) // 1
console.log(Number("hello")) // NaN

var x = 5
console.log(x++) // 5
console.log(x) // 6

console.log('4'+ 3 * 2) // 46 => pamdas

// console.log(num)  // error initialization error
// let num = 5;

// console.log(u); // error
console.log(v); // undefined
var v = u = 5;

const arr = [1,2,3,4,5]

console.log(arr.reduce((acc,curr)=>acc+curr)) // 15
console.log(arr.filter((el)=>el<4)) // [1,2,3]
console.log(arr.map((el)=>el<4)) // [true,true,true,false,false]
console.log(arr.map((el)=>el*4)) // [4,8,12,16,20]

arr.shift()
console.log(arr)
arr.pop()
console.log(arr)

const str = "hello"

console.log(str.charAt(3))


/*
REACT

CLASS AND FUNCTIONAL COMPONENTS

LIFECYCLE METHODS

HOOKS => useState
maps state to props
list => unordered, ordered, description list
target 

css => inline , external, outline
layout structure of html
display none, visibility hidden
overlap elements 
animate in css

*/