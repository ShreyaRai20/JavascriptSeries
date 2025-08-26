console.log([]==[])  // false gives reference
console.log([]=='') // true => [].toString() => '' => true

/*

Arrays in JS are objects.
Objects are compared by reference, not by value.
Here you’re creating two different array instances:

Because they point to different spots in memory.

const a = [];
const b = a;
console.log(a == b); // true (same reference)


*/

console.log([] == 0);   // true 
// [].toString() => '' => Number('') => 0

console.log([0] == 0);  // true
// [0].toString() => '0' => Number('0') => 0

console.log([1,2] == '1,2'); // true
// [1,2].toString() => '1,2'


function abc(x){
    console.log(~~x)
}

abc(2.8)


const arr = [200,300,3,2,5]

arr.sort()

console.log(arr) // [200,300,3,2,5]

/*
✅ So the key:
arr.sort() = string sort
arr.sort((a, b) => a - b) = numeric sort

*/


// console.log(1)
// setTimeout(()=>{
//     console.log(2);
    
// },1000)

// setTimeout(()=>{
//     console.log(3);
    
// },0)

// console.log(4)


function anyFn(a,b=0,c){

}

console.log("length: ", anyFn.length) //1


function any(a,b,...arg){

}

console.log("length: ", any.length)

/*
infinite currying

*/

function mulnum(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}

console.log(mulnum(1)(2)(3))

// infinite currying

function mulnum01(a){
    return function next(b){
        if(b === undefined) return a
        a = a*b
        return next
        }
    }

console.log(mulnum01(1)(2)(3)(4)(5)(6)())


let str = " this is shreya rai"

let newArr = str.split(' ')

newArr.forEach((el)=> console.log(el))

/*
array with sub array ? => yes

*/


const arr01 = [1,2,3,4,5,[1,2,3,[1,2,3,4]]]


console.log(arr01.flat(Infinity)) // depth 1 default


const newArr01 = []

for (let i=0;i<arr01.length;i++){

}

console.log(isNaN('abc')) // true
console.log(isNaN('')) // false

//hasownproperty
//call, apply and bind
// pure functions and impure functions



const fullName = {
    firstName: "Shreya",
    lastName: "Rai",
    // printName: function() {
    //     console.log(`${this.firstName} ${this.lastName}`)
    // }
}

const fullName01 = {
    firstName: "Momo",
    lastName: "Rani",
}

console.log(fullName.hasOwnProperty("lastName"))

const printName = function(hometown,state) {
        console.log(`${this.firstName} ${this.lastName} ${hometown} ${state}`)
    }


// function borrow
printName.call(fullName01,"dallas","texas")

printName.apply(fullName01,["dallas","texas"])


const printName01 = printName.bind(fullName01,"dallas","texas") // return copy of the function
printName01()



const arr10 = [4,5,6]

console.log(arr10.length)
delete arr10[1]

console.log(arr10)
console.log(arr10.length)


/*
package.json => verison

jsx? not understandable by browsers react converts to javascript and html
HOCs => higher order components
fragments
states and props
functional components and class function

mount, update, unmount => useEffect

hooks => useState, useRef, useeffect

events=> onchange onsubmit

useReducer

test react components =>  jest

useMemo and useCallback

axios

html 2 or more column tables
ineach map
meter and progress tag
datalist tag
empty elements


css 
display none and visibility hidden
gradients in css
specificity


*/