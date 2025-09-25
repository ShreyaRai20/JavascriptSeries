const arr01 = [1,2,3,4]

console.log(typeof arr01) // object


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function fn1 (...abc) { // rest operator
    console.log(abc) 
}

fn1(8,9,10) // [8,9,10]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(typeof NaN) // number

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(x01) // cant access before initialization
// console.log(x02)

const x01 = '2'
const x02 = '2'

console.log(x01)
console.log(x02)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const str01 = 'I am Shreya Rai'

const reversedStr01 = str01.split('').reverse().join('')
const reversedStr02 = str01.split(' ').reverse().join(' ')

console.log(reversedStr01)
console.log(reversedStr02)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// truthy values => [], {}. 'hello', 1, fn
// falsy values => 0, -0, false, 0n, '', 


if([]){
    console.log('shreya') //this will get printed because [] is truthy value
}else{
    console.log('no one present')
}

if([]==true){
    console.log('shreya') 
}else{
    console.log('no one present') //this will get printed because [].tostring for comparision
}

function fn3(){

}


if(fn3){
    console.log('shreya')  //this will get printed because fn is truthy value
}else{
    console.log('no one present')
}

if(fn3==true){
    console.log('shreya') 
}else{
    console.log('no one present') //this will get printed because [].tostring for comparision
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// keys > to maintain structure when mapping
// rounter => react-router-dom
// hooks => useState, useReducer, useCallback, useRef, useMemo, useContext 
// virtual dom 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// reducer method

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// div and span element
// html and xml
// em and i
// alt attribute
// css border and css outline
// box-sizing
