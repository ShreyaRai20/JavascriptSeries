var arr01 = [10,11,12,13,14]

function fn1(b,...arr01){ // ...a not there, then print var a
    console.log(arr01)
    console.log(typeof arr01) // object
}

console.log(typeof null)
console.log(typeof undefined)
console.log(typeof fn1) // function

fn1(8,9,10,11,12) // a = [ 9,10,11,12 ], b = 8


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// map => loops an array perform task mentioned in callback function and returns a new array 
// .map((element,index,array)=>{})

const arr02 = [1,2,3,4,5]

const newArr01 = arr02.map((el,i,arr)=>{
    console.log(el,i,arr)
    return el*2
})

const newArr02 = arr02.map((el,i,arr)=>{
    console.log(el,i,arr)
    return el>2
})

const newArr03 = arr02.map((el,i,arr)=>{
    console.log(el,i,arr)
    return el=8
})

console.log(newArr01) // [2,4,6,8,10]
console.log(newArr02) // [false,false,true,true,true]
console.log(newArr03) // [8,8,8,8,8]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// object to array

const obj = {
    a:1,
    b:2,
    c:3,
    d:4
}

const keys = Object.keys(obj)
const values = Object.values(obj)
const entries = Object.entries(obj)

console.log('keys: ', keys)
console.log('values: ', values)
console.log('entries: ', entries)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const arr03 = [100,'q','shreya',10,8,'C']

// const strings = arr03.map((el)=>{
//     if(typeof el === 'string'){
//         return el;
//     }
// })

// const numbers = arr03.map((el)=>{
//     if(typeof el === 'number'){
//         return el;
//     }
// })

const strings = []
const numbers = []
const char = []

function fn2(arr){
    arr.forEach((el)=>{
        if(typeof el === 'string' && el.length > 1){
        strings.push(el)
        }

        else if(typeof el === 'number'){
        numbers.push(el)
        }

        else if(typeof el === 'string' && el.length === 1){
        char.push(el)
        }
    })
}

fn2(arr03)
console.log('strings: ',strings)
console.log('numbers: ',numbers)
console.log('char: ',char)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// slice and splice

const arr04 = [1,2,3,4,5,6]

console.log(arr04.slice(1,2)) // 2, no change in original array
console.log(arr04) 

console.log(arr04.splice(1,2)) // 2,3 , change in orginal array => [1,4,5,6]
console.log(arr04) 

console.log(arr04.splice(1,2,2,3)) // 4,5 , change in orginal array => [1,2,3,6]
console.log(arr04) 

console.log(arr04.splice(1,2,2)) // 4,5 , change in orginal array => [1,2,3,6]
console.log(arr04)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//find and filter

const arr05 = [1,2,3,3,4,5,6]

console.log(arr05.find((el)=>el===3))


console.log(arr05.filter((el)=>el>3))

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// merge 2 objects


const obj1 = {
    a:1,
    b:2
}

const obj2 = {
    c:3,
    d:4
}

const obj3 = {...obj1, ...obj2}
const obj4 = Object.assign({},obj1,obj2)

console.log('obj3: ', obj3)
console.log('obj4: ', obj4)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const obj5 = {};
const obj6 = {
    name:'shreya'
};
const obj7 = {
    name:'momo'
}

obj5[obj6] = {
    name:'bob'
}

obj5[obj7] = {
    name:'pop'
}

console.log(obj5[obj6]) // {name: 'pop'} // '[object] [object]'

console.log(obj5)  // '[object] [object]': {name: 'pop'}  , obj6.toString()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function sum(a,b){
    let sum = 0
    sum = a
    if(b!==undefined) return sum += b

    return function innerSum(b){
        return sum += b
    }

}

console.log(sum(8,9))
console.log(sum(8)(10))


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(typeof NaN) // number

console.log([]==[]) // false, different reference / memory location value
console.log([]===[]) // false, different reference / memory location value

console.log(NaN==NaN) // false
console.log(NaN===NaN) // false

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// required attribute
// image map
// merg two col in tables
// i and emp

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// id selector and universal selector
// hide element => display: none, opacity: 0, visible: hidden, transparent



