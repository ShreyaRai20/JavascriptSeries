/*

Join method converts array elements into a string, seperated by comma by default can use other character.

split method

*/


const arr01 = [1,2,3,4]
// const arr02 = [1,2,3,4]


const arr03 = arr01.join('') 


console.log(arr03)

/*

reverse string

*/

const  srtr = "Shreya Rai Is A Girl"

console.log(srtr.split("").reverse().join(''))
console.log(srtr.split(" ").reverse().join(' '))

let st = ""
for(let i =srtr.length-1;i>=0;i--){
    console.log(srtr[i])
    st +=srtr[i]
}


const str01 = "pop"
const str02 = str01.split('').reverse().join('')

if(str01 === str02) console.log(`str01: ${str01} is a palindrome. ${str02}`)

function isPalindrome(str){
    const newstr = str.split('').reverse().join('')
    if(str === newstr) return console.log(`str01: ${str} is a palindrome. ${newstr}`)
}



let arr02 = [1,2,3,4]
let arr04 = [1,2,3,4]


JSON.stringify(arr02)


console.log(null == undefined);
console.log(null === undefined);


console.log(0 == false);
console.log([] == false);

/*
infinite curry
*/

let arr = []

arr.length = 100


/*

type of NaN => number

type of undefined and null

promise chaining


*/


let str1 = "shreya"
let str2 = "rai"
let newStr = ""

for(let i=0;i< str1.length + str2.length;i++ ){
    if(i<str1.length){
        newStr += str1[i]
    }
    if(i<str2.length){
        newStr += str2[i]
    }
}

console.log(newStr)

let arr10 =  [,,,]
let arr11 =  [,,,]


arr10.forEach((el)=> console.log(el))

arr10.forEach((el)=> console.log(el))

let a = {
    age: 23
}

let b = a;
b.age = 100

console.log(a.age)

let newB = {...a}

newB.age = 200

console.log(a.age)
