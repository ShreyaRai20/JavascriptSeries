function fn(){
    console.log("hai")
}

console.log(fn.name) // fn

abc = "hello"
console.log(abc) // not hoisted


// infinite currying
// addition of 4 numbers

function add(a){
    return function next(b){
        if(b=== undefined) return a
        a = a+b
        return next
    }
}

console.log(add(1)(2)(3)(4)())


const arr01 = [200,100,330,70] 

arr01.sort()
console.log(arr01) // [100,200,330,70] if no arg given in sort it sorts in lexicographic way

arr01.sort((a,b)=>a-b)
console.log(arr01)

arr01.sort((a,b)=>b-a)
console.log(arr01)


function anyFn(xyz){
    console.log(~~xyz)
}

anyFn(1.12)


console.log([]==[]) // false => because non privitive references compared
console.log([]=='') // true => [].toString() => '' == ''

function fn(a,b,c=0){
}

console.log(fn.length) //2 returns the number before default val

// async and sync functions => settimout and setinterval promises, async await


const obj = {
    name01:"shreya"
}

const {name01} = obj
console.log(name01)

// reverse string without builtin function

const str01 = "hello"
let newStr = ""
const len = str01.length

for(let i = len-1; i>=0 ; i--){
    newStr += str01.charAt(i)
}

console.log(newStr)

// dif pure and impure function

function pure(a,b){
    return a+b
}

console.log(pure(2,3))
console.log(pure(2,3))

let counter = 0

function impure(){
    return ++counter
}

console.log(impure())
console.log(impure())
console.log(impure())


function impure02(){
    return Math.random()
}


console.log(impure02())
console.log(impure02())
console.log(impure02())


console.log(isNaN("abc")) // true

const str03 = "abc"/2 // NaN
const str04 = "abc"-2 // NaN


console.log(str03 == str04) //false

const arr05 = [1,2,3,4]

delete arr05[2]

console.log(arr05.length) // 4 => [2] => undefined 

// angular js , framework and libraries 

// temporal dead zone => 

function abc(){
        console.log(a)
        let a = 10;
}

let str05 = "ILoveJavascript"
let newstr = ""

let newStr05 = str05.split('')


newStr05.forEach((el,i)=>{
    if(el === el.toUpperCase() && i !== 0 ){
        newstr += ` ${el}`
    }else{
        newstr += `${el}`
    }
})

console.log(newstr)

/*
redux and contextAPI
lazy loading in react
HOCs
fragments
middleware use
components of redux architecture
map dispatch

html
- list
- formating tags
- html entities
- empty elements

CSS
- keyframes
- specificities
- visibility hidden and display hidden

*/