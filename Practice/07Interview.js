function fn1 (){
    return 2
}

function fn2 (){
    return 4
}


let a = (fn1(),fn2()) //4

console.log(a)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const arr = ['one','two','three']
const str = "hello"

const res01 = arr.includes('on') // false
const res02 = arr.includes('onetwo') // false
const newVar = str.includes('ll') // true


console.log(`${res01} ${res02} ${newVar}`)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(true == '') // false  empty string is false and true != false => false
console.log(true === '') // false  datatype not same
console.log('1' == 1) // true  convert string to number=> 1 and 1==1 => true


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let num01 = 10
let num02 = new Number(10)
let num03 = Number(10)
let num04 = 10

console.log(typeof num01) // number
console.log(typeof num02)  // object => created using constructor used new keyword
console.log("d: ",typeof num03) // number => new keyword not used 

console.log(num01===num02) // false => different datatype
console.log(num01===num03) // true => same datatype


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// deep copy and shallow copy

let obj1 = {name: "shreya"}
let obj2 = {...obj1} // deep copy
let obj3 = obj1 // shallow copy
obj2.name = "Adil" 
console.log("obj1: ",obj1) //{name: "shreya"}
console.log("obj2: ",obj2) //{name: "Adil" }
obj3.name = "momo"
console.log("obj1: ",obj1) //{name: "momo"}
console.log("obj3: ",obj3) //{name: "momo"}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(+true) // 1 => unary operator 
console.log(!"xyz") // false


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// curry function and infinite curry function
// closure and lexical scope

function curryFn (a) {
    res = a
    return function innerFn(b){
        if (b === undefined) return res
        res = res * b
        return innerFn
    }
}

console.log(curryFn(2)(3)(4)())

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function mergeString(str1, str2){
    let newStr = ''
    for(let i = 0; i < Math.max(str1.length,str2.length);i++){
        if(i<str1.length){
            newStr += str1[i]
        }
        if(i<str2.length){
            newStr += str2[i]
        }
    }
    return newStr
}

console.log(mergeString("hello","world")) // hweolrllod

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(sum(2,4))
console.log(sum(2)(4))

function sum(a,b){
    if (b !== undefined) return a+b
    return function innerFn(b){
        return a+b
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const arr02 = [[1,2],[3,4],[5,6]]

console.log(arr02.flat())
console.log(myFlat(arr02))

function myFlat(arr){
    let newArr = []
    if(Array.isArray(arr)){
        for(let i =0; i<arr.length;i++){
            if(Array.isArray(arr[i])){
                for(let j =0; j<arr[i].length;j++){
                    newArr.push(arr[i][j])
                }
            }
            else if (typeof arr[i] === "string"){
                newArr.push(arr[i])
            }
        }
    }
    return newArr
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// setup react app
// npm create-react-app name
// npm create vite@latest

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// react is library or framework?
// library to create reusable components

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// which is most useful angular and react

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// advantage of react over angular

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// node modules folder
// npm => node package managers

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stateless and stateful

// before 2016 functional components were stateless

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// role of fragments
// <> over <div>

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   what is JSX

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*

HOOKS IN FUNCTIONAL COMPONENTS
- useState
- useRef
- useEffect
- useCallback
- useContext
- useReduce
- useMemo

*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*

lifecycle methods -

mounting 

unmounting

*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*

difference fetch and axios

*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// redux 

// components of redux - store, reducer and middleware

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// client side rendering and server side rendering
// webworker


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// formating 
// tags - bold, strong, italics, highlight
// bold and strong tag
// meter tag and progress tag
// required attribute, example - input
// data list tag
// em(emphasis) and i (italic)
// empty elements => not closing tags

// display none => not shown and does not occupy space, visibility hidden => reserve place

// specificity
// gradial
// flex box and grid
// css overflow
// image reflection
// attribute selector
// pseudo elements
//






