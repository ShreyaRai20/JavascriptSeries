const arr01 = [1,2,3,4,5]


console.log(arr01.find((el)=>el===4))
console.log(arr01.find((el)=>el===10))
console.log(arr01.findIndex((el)=>el===4))
console.log(arr01.findIndex((el)=>el===7))




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ways to handle asynchronous function
// callback fn, promise, async await - async await


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

if('0') {
   console.log('I am shreya')  // O in string it is not a falsy value so this will get printed
} else {
    console.log('I am absent')
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// null and undefined
// both shows absence of value null is explicitly mentioned / assigned whereas undefined is given by js shows uninitialised variable.

console.log(null === undefined) // false
console.log(null == undefined) // true


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const arr02 = ['mohd','malik']
const arr03 = ['shr','shreya']

function fn1(arr){
    let n = 0;
    const firstEl = arr[0]
    const secondEl = arr[1]
    if(firstEl.length < secondEl.length){
        n = firstEl.length
    }else{
        n = secondEl.length
    }

    for(i=0;i<n;i++){
        if(firstEl[i]!==secondEl[i]){
            console.log(firstEl[i], secondEl[i])
            return false
        }
    }
    return true
}

console.log(fn1(arr02))
console.log(fn1(arr03))


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// object declaration

const obj1 = {} // string literal
const obj2 = new Object()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let arr04 = [1,10,100,20,200]

let singleDigit = arr04.filter((el)=>el<10)
let doubleDigit = arr04.filter((el)=>el>=9 && el < 100)
let threeDigit = arr04.filter((el)=>el>=100 && el < 1000)

console.log(singleDigit)
console.log(doubleDigit)
console.log(threeDigit)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// swap numbers without 3rd variable


let a = 10;
let b = 20;
console.log(a,b);

[a,b] = [b,a]
console.log(a,b)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let arr07 = [1,'a',2,'b',3,'c',4,'d']

const chars = arr07.filter((el)=> typeof el === 'string' && el.length === 1)
const nums = arr07.filter((el)=> typeof el === 'number')

console.log(chars, nums)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let arr08 = [{name: 'shr01',id:1},{name: 'shr02',id:2},{name: 'shr03',id:3}]

const objectsGreaterThanThree = arr08.filter((el)=>el.id>2)

console.log(objectsGreaterThanThree)

// const objectsGreaterThanThree = arr08.filter((el)=>el.id>2) // syntax error

// const objectsGreaterThanThree = arr08.filter((el)=>el.id>2) // syntax error

// arr08.filter(el) //reference error

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// get char of perticular index f4om a string

let str01 = 'shreya'
console.log(str01.charAt(2)) // r


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// types of error 
// reference, type, syntax


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// promise.all()
// promise.if()


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// scopes
// funciton, block, global, lexical scope
// var - global
// let and const -  funciton, block

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// event delegation
// event bubbling
// event capturing


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// object in an array

// .entries
// .keys
// .values
// Array.from
// json.parse => obj to string

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function expression

const f2 = function(){

}

// declaration

function f2(){
    
}

// arrow

const f3 = () => {
    
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(typeof NaN) // number


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// html
// link used to link file to html and a to move to a html file 
// empty element s=> img, br, hr
// self spacing and self padding
// html entities 
// div vs span

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// css
// intenal, external and inline
// priority - inline
// box model - content,  padding, border , margin
// prefix -  : hover, link, active
// shadow- box-shadow
// hide element, display: none // wont take up space and visibility: hidden // show in html but hidden take up space in broser

