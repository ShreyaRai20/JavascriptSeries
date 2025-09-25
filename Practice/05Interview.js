console.log(a) // undefined
// console.log(b) // error
var a = b = 5; // b => implicit 


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let num1 = 2; // hoisted but in temporal dead zone
// let num1= 5; // error already declared
console.log(num1)

var num2 = 2;
var num2 = 5; 
console.log(num2) // 5

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const arr01 = [[1,2],[3,4],[5,6,[7,8,9]]]

const flatArr = arr01.flat(Infinity)

console.log(flatArr)

function myFlat(arr){
    let newArr = []

    for(let i=0; i< arr.length; i++){
        if(!Array.isArray(arr[i])){
            newArr.push(arr[i])
        }else{
            newArr.push(...myFlat(arr[i]))
            // newArr = newArr.concat(myFlat(arr[i]))
            // newArr = [...newArr, ...myFlat(arr[i])]
        }
    }
    return newArr
}

console.log(myFlat(arr01))


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log('4' + 6 * 5) // 430

console.log('4' * 6 + 5) //  29


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(typeof NaN) //  number

console.log('5' - '3' + 6) // 8 - and + has same precedence

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const arr02 = ['z','a','d','b','e']

const sortedArr = arr02.sort()

console.log(sortedArr);

function mySort(arr){
    let temp;

    for(let i=0; i< arr.length; i++){
        if(arr[i]>arr[i+1]){
            temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        } 
    }
}

console.log(mySort(arr02))
console.log(arr02)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// shallow copy and deep copy


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const timeout = setTimeout(()=>{
//     console.log("hello")
// },2000)

// clearInterval(timeout)

// const interval = setInterval(()=>{
//     console.log("hello")
// },2000)

// clearInterval(interval)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(NaN==NaN) // false
console.log(NaN===NaN) // false

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const str01 = 'hello my namenbljsbdljs is shreya'

function longestWord(str){
    let words = str01.split(' ')
    console.log(words)
    let wordsLength = []
    for(let i=0; i< words.length; i++){
        wordsLength.push(words[i].length)
        console.log(wordsLength)
    }
    const length = wordsLength.reduce((acc,curr)=>Math.max(acc,curr))
    return words[wordsLength.indexOf(length)]
}

console.log(longestWord(str01))


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// factorial

console.log(factorial(5))

function factorial(n){
    if(n===1) return 1
    return n*factorial(n-1)
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// map => returns new array
// foreach => returns nothing

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// jsx => javascript xml 
