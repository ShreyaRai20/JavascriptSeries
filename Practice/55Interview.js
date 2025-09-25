let x = 10

if(function fn1(){}){
    console.log(typeof(fn1))
    x=x-typeof(fn1)
}

console.log(x) // NaN

if(function fn1(){}){
    console.log(typeof(fn1))
    x=x+typeof(fn1)
}


console.log(x) // 10undefined

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// shallow copy and deep copy


// shallow copy
let obj1 = {
    name: 'shreya',
    age: 23
}

let obj2 = obj1

console.log(obj1)
console.log(obj2)

obj2.name ='momo'
console.log(obj1)
console.log(obj2)

//deep copy
let obj3 = {...obj1}
let obj4 = Object.assign({},obj1)

obj3.age = 46
obj4.age = 46

console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj4)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let arr01 = [100,200,300]
let arr02 = [100,200,300]

let arr03 = arr02

console.log(arr01==arr02) // false
console.log(arr01==arr03) // false
console.log(arr03==arr02) // true

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// difference between null and undefined => represent nothing

// null is standalone value
// it is used when user want explicitly mention that the value doesnot cintain anything

// undefined is given by javascript

console.log(typeof null) // object
console.log(typeof undefined) // undefined

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const obj5 = {
    pqr:100,
    abc:200,
    xyz:{
        pqr:300,
        abc:400,
    }
}

const {pqr,abc,xyz:{pqr:p}} = obj5 

console.log(pqr,abc,p) // 100 200 300


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// template literals - backticks

let str01 = 'hi'

console.log(`${str01}! welcome`) 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// filter method

const arr04 = [1,2,3,4,5]

console.log(arr04.map((el)=>el>3)) // [false,false,false,true,true]
console.log(arr04.filter((el)=>el>3))  // [4,5]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function shortestString(str){
    strArr = str.split(' ')
    lengths = strArr.map((el)=>el.length)
    IdxOfMinLength = lengths.indexOf(Math.min(...lengths))
    return strArr[IdxOfMinLength]
}

console.log(shortestString('hello my a name is shreya'))

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 
const arr05 = [100,200,300]
const arr06 = [100,200,300,400]
const arr = [100,200,300]

console.log(JSON.stringify(arr05) === JSON.stringify(arr06));
console.log(JSON.stringify(arr) === JSON.stringify(arr05));
console.log( arr.length === arr05.length && arr.every((el,i)=> el === arr05[i]));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// duplicate values

const arr07 = [1,2,3,4,5,2,3]

const hashArray = []
const set = new Set()

arr07.forEach((el)=>{
    if(set.has(el)){
        hashArray.push(el)
    } else{
        set.add(el)
    }
})

console.log(hashArray) // duplicate values
console.log(set) 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const arr08 = [1,2,3,4,5]
const arr09 = [3,4,5,6,7,8]

const intersection = arr08.filter((el)=> arr09.includes(el))

console.log(intersection);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// optional chaining 

const obj8 = {
    name:'momo',
    age: 23
}
// console.log(obj8.email.age) // throw error 
console.log(obj8.email?.age) // undefined

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// polyfill


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// react - hooks
// redux contextapi
// useEffect => [null], [] 
// normal dependencies, dev dependencies
// package.json and package-lock.json
// transpiler - babel
// keys => no error, warning to keep track of the elements for the react

// named export - multiple, {} and default export - single
