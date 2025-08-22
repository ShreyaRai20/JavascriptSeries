const days = ["Monday", "Tuesday", "Wednesday", "Sunday"]

const index01 = days.findIndex((day)=> day==="sunday") //-1
const index02 = days.findIndex((day)=> day==="Monday") //0
const index03 = days.findIndex((day)=> day==="monday") //-1
const index04 = days.findIndex((day)=> day==="Sunday") //3

console.table([index01,index02,index03,index04])


const arr = [1,2,4,5]

// search element, from index
console.log(arr.includes(2,-3)) // true
console.log(arr.includes(4)) // true
console.log(arr.includes(0)) // false


console.log(arr.splice(1,2))
console.log(arr)

const arr1 = [1,2,4,5]
console.log(arr1.splice(1,2,3)) // start index, no of elements to delete, elements to insert in place of deleted elements
console.log(arr1)

const arr2 = [1,2,4,5]
console.log(arr2.splice(arr2.length-3,3)) 
console.log(arr2)


// function declaration - hoisted
fn1()
function fn1() {
 console.log("from fn1")
}
fn1()

//  function expression - not hoisted
// fn2() => undefined then assignment happens later 


// fn2()
const fn2 = function () {
    console.log("from fn2")
}
fn2()

// arrow function - not hoisted => temporal dead zone

// fn3()
const fn3 = () => {
    console.log("from fn3")
}
fn3()


const arr05 = [1,2,3,4]

const res = arr05.reduce((acc,curr)=>acc+curr)

const res01 = arr05.reduce((acc,curr)=>Math.max(acc,curr))

console.log(res)
console.log(res01)

const user01 = {
    fullname: {
        username: {
            firstname: "s",
            lastname: "h"
        }
    }
}

console.log(user01.fullname.username.firstname)
console.log(user01.fulname?.username.firstname)


var a;

console.log(a)
// console.log(b)
console.log(c)
var c = 12;



// +++++++++++++++++++++++++++++++++++++++++ Closure ++++++++++++++++++++++++++++++++++++++++++++++++++++


//  LEXICAL SCOPING

// function outer(){
//     let outerVar = "Hello "
//     function inner(){
//         let innerVar = "World!"
//         console.log(`Inner function: ${outerVar} ${innerVar}`)
//     }
//     function innerTwo(){
//         let innerVar = "World!"
//         console.log(`Inner function two: ${outerVar} ${innerVar}`)
//         inner()
//     }
//     inner()
//     innerTwo()
//     // console.log(`Outer function: ${outerVar} ${innerVar}`)
// }

// outer()

// CLOSURE - memory shared, not just execution context - returns scope, lexical scope

function outer(){
    let outerVar = "Hello "
    function inner(){
        let innerVar = "World!"
        console.log(`Inner function: ${outerVar} ${innerVar}`)
    }
    return inner
}

const fn = outer()
fn()

function parent () {
    let p1;
    function child (){
        let p2 = 100;
    }
}

const names = ["shreya", "shr"]

console.log(names[0].includes(names[1]))

console.log(names[0].includes(names[1]))


function fn01(a=0,b,c){

}

function fn02(a,b,c=9){

}

console.log(fn01.length)
console.log(fn02.length)


console.log(sub(10,2))

console.log(sub(10)(2))


function sub(a,b){
    if (b!==undefined){
        console.log(`a : ${a} and b : ${b}`)
        return a-b
    } else {
        return function(c){
            console.log(`c : ${c} and a : ${a}`)
            return a-c
        }
    }
}