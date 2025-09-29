
// callback fn
// used for asynchrous operations

function f1(data, fn){
    console.log(data)
    if(fn) fn()
}

f1(1,()=>{
    f1(2, ()=>{
        f1(3, ()=> {
            f1(4)
        })
    })
})

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const arr01 = [1,2,3,4,5,7,6,7,8,4,5]

const duplicateElements = []
const setOfUniqueEl = new Set()

arr01.forEach((el=>{
    if(setOfUniqueEl.has(el)){
        duplicateElements.push(el)
    }else{
        setOfUniqueEl.add(el)
    }
}))

console.log(duplicateElements)
console.log(setOfUniqueEl)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const str01 = 'my name is shreya'

console.log(str01.includes('sh'))

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const str02 = 'sh'
const str03 = 'momo'
const str04 = str02 && str03

console.log(str04); // momo

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

[x] = [100,200,300,400] // array destructuring
console.log(x); // 100

let num01 = 100
const num02 = ++num01 + num01++

console.log(num02) // 101 + 101 => 202 // num01 already incremented at first so then goes to second num01 with ++ post ++ which will mak eit 102 

let num04 = 100
const num05 = num04++ + ++num04
console.log(num02) // num04++ => 100 + 102 => 202




