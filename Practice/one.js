
let arr = [2,3,4,23,23,45,6,7,76,7]

// const set1 = new Set(arr)
// console.log(set1)
let newArr01 = [];

// newArr01 = arr.filter((item)=>(newArr.includes(item)))

console.log(newArr01)



// 

function abc(a,b,c){}
abc.length  // 3

function pqr(a=0,b,c){}
pqr.length // 0

console.log([]==[]) // false

// console.log([]===[]) // false // This condition will always return 'false' since JavaScript compares objects by reference, not value.

// | Data Type      | Comparison Method | `==` works?                        | `===` works? |
// | -------------- | ----------------- | ---------------------------------- | ------------ |
// | Primitives     | By Value          | ✅ Yes                              | ✅ Yes        |
// | Objects/Arrays | By Reference      | ❌ Usually false unless same object | ❌ Same       |


const s = "this is shreya rai"
let s01 = s.split(" ")
console.log(s01)
let s02 = s01.map((item)=>(
    item[0].toUpperCase() + item.slice(1)
)).join(" ")

console.log(s02)


console.log(typeof NaN)
console.log(NaN == NaN)
console.log(NaN === NaN)

let a= 10
console.log(a++) // 10 - post increment
console.log(++a) // 12 - pre increment
console.log(a) // 12


a= 10
console.log(++a) // 10 - pre increment  - increment and then pass number
console.log(a++) // 12 - post increment
console.log(a) // 12

console.log(NaN == NaN)
console.log(undefined == undefined)
console.log(undefined === undefined)

console.log(null == undefined)


let shr ="shre"
console.log(shr.indexOf("x"))