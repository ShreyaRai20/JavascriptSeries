let arr01 = []
let arr02 = []
let arr03 = arr01

console.log(arr01 == arr02) // false => reference/ memory location/ address is different
console.log(arr01 === arr02) // false => reference/ memory location is different

console.log(arr01 == arr03) // true  => reference/ memory location is same
console.log(arr01 === arr03) // true => reference/ memory location is same

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let a = [1,8,9,10,22,57,27]

function array(b,...a){ // rest operator => bundle the remaining arguments into a array
    console.log(b); 
    console.log(a);
}

array(3,8,9,10,11) // b = 3, a = [8,9,10,11]


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let data = {
    name: "Shreya"
}

console.log(delete data.name) // true
console.log(delete data.momo) // true > doesn't exist still works / deletes silently

console.log(data) // empty object => {}

console.log(delete data) // false => delete works only on object property here and not on the variable declared with let const or var
console.log(data) // {}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let arr04 = [1,2,3,4,5,6]

console.log(delete arr04) // false => delete works only on object property here and not on the variable declared with let const or var
console.log(arr04) // [1,2,3,4,5,6]

console.log(delete arr04[1]) // true
console.log(arr04) // [1,<1 empty item>,3,4,5,6]

let [num1,num2,num3,num4,num5, num6] = arr04

console.log(`${num1} ${num2} ${num3} ${num4} ${num5} ${num6}`) // 1 undefined 3 4 5 6


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let random01 = false || {} || null // returns the first truthy value, or the last value if all are falsy.

console.log(random01) // {}

let random02 = false || 0 || null // returns the first truthy value, or the last value if all are falsy.

console.log(random02) // null

let random03 = false || null || {} // returns the first truthy value, or the last value if all are falsy.

console.log(random03) // {}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let number01 = 123

// number => string => list (split('')) => reverse (list reverse) => string (join('')) => number (Number())

let reverseNumber = (num) => {
    return Number(num.toString().split('').reverse().join('')) 
}


console.log(reverseNumber(number01)) // 321
console.log(reverseNumber(4567)) 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(x) // undefined
// console.log(y) // ReferenceError: y is not defined

var x = y = 11; // Assignment is right-to-left,  x = (y=11)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log('3' + 12 * 5) //PAMDAS => 12*5 = 60 => 360 STRING

console.log('3' + 12 + 5) // 3125

console.log('3' + '12' + 5) // 3125

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Curry, infinite

// for 2 numbers only dont use 2 arguments if you wnat inifinete curry
function addNum(num1,num2){ 
    let res = num1;
    if (num2 !== undefined) return res += num2

    if (num2 === undefined) {
            return function innerFn(num2){
                if (num2 === undefined) return res
                res += num2
                return innerFn
            }
    }
}

console.log(addNum(1,2))
console.log(addNum(1)(2)(3)())

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Recursion

console.log(factorial(5))

function factorial(num){
    console.log(num)
    if(num===1)return 1
    return num * factorial(num-1)
}


console.log(fibonachi(5))
console.log(fibonachi(10))

function fibonachi(num){
    if(num===1)return 1
    if(num===2)return 1
    return fibonachi(num-1) + fibonachi(num-2)
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// this keyword => used to refer to current context. suppose we have an object


let User01 = {
    name: "Shreya",
    email: "shr@gmail.com",
    printDetails: function(){
        console.log(`${this.name}`)
    }
}

let User02 = {
    name: "Momo",
    email: "shr@gmail.com",
    printDetails: function(){
        console.log(`${this.name}`)
    }
}

User01.printDetails()
User02.printDetails()



// also if you use this keyword within nodejs environment it returns empty object => {}
// in browser it returns window object

console.log(this)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let str = "hello"

console.log(str.charAt(2))

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// difference between undeclared / undefined

// console.log(momo)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// difference between let and var

//  1. let block/ functional scoped, var global scoped
//  2. let not hoisted , var hoisted
//  3. let cannot redeclare but reassign value, var can redeclare but reassign value

// let num10 = 12;
// let num10 = 0;
// console.log(num10)

var num10 = 12;
var num10 = 0;
console.log(num10)

// Temporal Dead Zone

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// looping => for, while and do while


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// array methods => pop, push, shift, unshift, map, foreach, filter, reduce, reverse, join, split, splice

let arr10 = [1,2,3,4,5]


console.log(arr10)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Local storage and session storage , used to store data on client side

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// types of error in js

// SyntaxError → Bad code structure => eval("let x = ;")
// ReferenceError → Variable not found => console.log(a) /
// TypeError → Wrong type usage => let num = 5; num.toUpperCase(); 
// RangeError → Value out of range =>  let arr = new Array(-1); 
// URIError → Invalid URI handling => decodeURI("%");
// EvalError → Issues with eval() => 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 0bject => array

let obj01 = {
    name: "shr",
    place: "bhilai",
    email: "234@gmail.com",
}

console.log(Object.keys(obj01))
console.log(Object.values(obj01))
console.log(Object.entries(obj01))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// React

// NPM => node package manager, used to install dependencies etc

// fragments

// jsx => javascript xml
// javascript code that looks like html 
// in the backend babel converts and inject this code into a normal js and html form


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// class components and functional components

// lifecycle methods 
// in functional compoennt => useEffect(()=>{}, [])
// in class componnet => ComponentDidMount,  ComponentDidUpdate, ComponentwillUnmount

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// useState 
// const [val, setVal] = useState('')

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memoization => useCallback, useMemo
// useReducer
// lazy loading


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  redux 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  HTML
// LAYOUT
// self spacing and self padding
// differnt ways to disply html
// list => ordered unoreded and special
// copyright symbol in html
// alt attribute in img tag
// tags used to display table => table, tr, td
// required attribute
// selector => universal (*), element(p,h1,h2,), class (.), id(#)
// pseudo classes in css
// hide element in css => visibility: hidden (will take space) and display: none (wont take space) 
// box model => margin padding height width border





