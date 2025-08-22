console.log('A' -1) // NaN

console.log('shreya' + '100') // shreya100

console.log('2'+ 2 +'2'); // 222

console.log('2'+ 2 -'2'); // 20


const a = {}

const b = {
    name:"Shreya Rai"
}

const c = {
    name: 'anu'
}

a[b] = {name : 'ankit'} // b is converted to a string => '[object] [object]'
a[c] = {name : 'parul'} // c is converted to a string => '[object] [object]'


console.log(a[b]) //{name : 'parul'}


const y = 0
const z = false

console.log(y==z) // true
console.log(y===z) // false

console.log(Number("abc"))

console.log(true+'2')
console.log(true+'hello')

console.log('hello'/2)

console.log(NaN==NaN) // false
console.log(NaN===NaN) // false

// map and forEach

const arr = [1,5,2,3,4]
const arr01 = []

const newArr = arr.map((el)=>el*2)

const newArr02 = arr.map((el)=>el>2) // array of true and false


const newArr01 = arr.forEach(el => { arr01.push(el*2)})


console.log(newArr, newArr01, arr01, newArr02)


// slice => doesnt mutate and splice => mutates original, sort mutates the arr


const slicea = arr.slice(0,1)
console.log(slicea )
console.log(arr)
const splicea = arr.splice(0,1,2)
console.log(arr)
console.log(splicea)
arr.slice(0,1)
arr.sort((a,b)=>a-b)

console.log(arr)

arr.unshift(3)
console.log(arr)

arr.shift()
console.log(arr)

/*
Higher order function takes function as an argument

example=> map, reduce, foreach, filter
*/


/*
lexical scope, closure, curry, infinite curry
*/


function add(a,b){
    if(b){
        return a+b
    }else{
        return function(b){
            return a+b // a goes to lexical scope
        }
    }
}

console.log(add(1,4))
console.log(add(1)(4))


/*
array destructuring
object destructing
*/

const arr05 = [1,3,5,7]
const [q,x,w,d] = arr05

console.log(...arr05)

/*
polifil
temporal dead zone

week map week set
*/


/*
html layout
dif fig tag and image tag
image map
anchor tag and link
inline and block level
void elements => not have closing tag
em tag i tag
bold and strong tag

css types of selector => element , class and id 

positioning : sticky, relative, absolute, 
hide element : visibility : hidden and display : none;

center 
*/


let name01 = {
    firstName:"Shreya",
    lastName:"Rai",
    // printFullName : function(){
    //     console.log(`${this.firstName} ${this.lastName}`);
        
    // }
}

const  printFullName = function(hometown, state){
        console.log(`${this.firstName} ${this.lastName} ${hometown} ${state}`);
        
    }

// name01.printFullName()

let name02 = {
    firstName:"Anu",
    lastName:"Rai",
}

// function borrowing
// name01.printFullName.call(name02)

printFullName.call(name02)
printFullName.call(name01, "bhilai",'state')


// dif apply and call => how we pass arguments pass as argument

printFullName.apply(name02)
printFullName.apply(name01, ["bhilai" , "CG"])


let fn10 = printFullName.bind(name02)
let fn11 =printFullName.bind(name01, "bhilai" , "CG")

console.log(fn10)
fn10()
fn11()

// Polyfill for bind

Function.prototype.myBind = function(...arg){ // rest operator
    let obj = this
    return function(){
        obj.call(...arg) // spread operator
    }
}

let fn12 = printFullName.myBind(name02)
let fn13 =printFullName.myBind(name01, "bhilai" , "CG")

fn12()
fn13()

Function.prototype.myBind = function(val,...arg){ // rest operator
    let obj = this
    return function(...arg2){
        obj.apply(val,[...arg,...arg2]) // spread operator
    }
}

let fn14 = printFullName.myBind(name02)
let fn15 =printFullName.myBind(name01, "bhilai" , "CG")

fn14()
fn15()