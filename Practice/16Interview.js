/*
Q1.
*/

let arr = [1,2,3,4][1,2,3]

console.log(arr) // 4 because it evalutes all the index and return the last index value

let arr01 = [1,2,3,4]

console.log(arr01[1,2,3])

let arr02 = [2,4,6,7]

console.log(arr02[1,2,3])


/*
Q2.

In JavaScript, all object keys are strings (unless it’s a Symbol).
If you use a number (like 1 or 2) or an expression like [1], it gets coerced to a string.
*/

let obj = {
    1: "a",
    2:"b",
    "2":"b",
    [1]:"b"
}

console.log(obj) // 1: "a", 2:"b"

let obj01 = {
    1: "a",
    2:"b",
    "2":"c",
    [1]:"c" // taken as string
}

console.log(obj01) // 1:'c' , 2:'c'


/*
Q3.

Currying, infinite currying
*/


/*
Q4.

Higher order functions
*/


/*
Q5.
setTimeout and setInterval
*/


/*
Q6.
setTimeout and setInterval
clearInterval and clearTimeout
*/


/*
Q7.
map function
*/

let arr03 = [1,2,3,4]

const newArr = arr03.map((el)=>el*8) // returns array of el with all el multiplied by 8

console.log(newArr)


const newArr01 = arr03.map((el)=>el>8) // returns array of true or false. 

console.log(newArr01) // [false,false,false,false]


const newArr02 = arr03.map((el)=>el<100) // returns array of true or false. 

console.log(newArr02) // [true,true,true,true]

/*
Q7.
map function => returns array of actions performed
returns array so need to create new array to push updated el

forEach => doesn't return anything
will need to create an array and then push the updated elements to the array
*/

const newArr03 =  [];

arr03.forEach((el)=>newArr03.push(el*20)) // returns array of el*20

console.log(newArr03) 


{
    function fn(){ // hoisted, works same as var
        console.log("hello")
    }

    const fn1 = function (){ // not hoisted , expression function
        console.log("hello")
    }
}


fn()
// fn1() // not defined

'use strict'

var a = 100;
let b = 200;
c=300


console.log(a,b,c)


function fn3(){
    return 100
}

var fn3;

console.log(fn3) // [ function: fn ] fn guven more priority than var

console.log(fn3()) 

/*
type of class

*/

class abc {

}

console.log(typeof abc) // function


/*
call 
bind
all 

*/


/*
ternary operator

*/

const hello = false

const s = hello ? "hello" : "no"

console.log(s)


/*
reduce function

*/

const arr05 = [1,2,3,4]

const sum = arr05.reduce((acc,curr)=>acc+curr,5)

console.log(sum)

console.log('A'-1); // NaN


let arr06 = [200,3,150,3]

arr06.sort((a,b)=>a-b)

console.log(arr06)

let str1 = 'abcdef'
let str2 = '123'
let str3 =''

for(let i =0; i<Math.max(str1.length,str2.length);i++){
    if(i<str1.length){
        str3 += str1[i]
    }
    if(i<str2.length){
        str3 += str2[i]
    }
}

console.log(str3)


/*
Reactjs - 

state and prop => state is mutable prop is not mutable. prop is passed from one component

react one way data binding or twoway? oneway data binding => because data can be passed from top to bottom

mounting, updating and unmounting

hooks => 

redux =>
    prop drilling can be resolved by using redux or context api

html=>
    semantic elements are elements that 
type of list ordered, unordered

required attribute => mandatory to put value

markque

*/
