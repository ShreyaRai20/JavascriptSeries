// number => 2 to power 53
// bigInt
// string
// boolean
// null
// undefined
// symbol

// Object
// array

// alert(3+3)

let date = new Date()

console.log(typeof date)

const age = 23
const name = "Shreya"
let bool = true
let n = null
let un = undefined
let arr = [1,2,3,4,5,6]

const sym = Symbol("23");
const sym1 = Symbol("23");

console.log(sym == sym1);
console.log(sym === sym1);




console.table([typeof age , typeof name, typeof bool, typeof n, typeof un, typeof arr, typeof sym])