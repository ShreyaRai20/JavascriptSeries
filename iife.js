// //  IIFE - IMEDIATELY INVOKED FUNCTION EXPRESSIONS - to resolve global scope polution, variable might be declared globally that might cause issues.

// // (function one(){
// //     console.log(`DB CONNECTED`)
// // })()

// // ()- first function definition, () - function call

// (function two(){
//     //named iife
//     console.log(`DB CONNECTED 2`)
// })(); // iife doesnt know when to end/stop need as ";" to end and allow next iffe to work


// // (function one(){
// //     console.log(`DB CONNECTED`)
// // })()

// // UNNAMED IIFE

// (()=>{ // earlier not working because of the ";" issue
//     console.log(`DB CONNECTED`)
// })()

// ((name)=>{ // earlier not working because of the ";" issue
//     console.log(`DB CONNECTED ${name}`)
// })("shreya")


// use iife to protect from global scope pollution
(function one(){ //named iife
    console.log(`Shreya is connected 1`)
})();


(function two(){
    console.log(`Shreya is connected 2`)
})();

(()=> { //unnamed iife
    console.log(`Shreya is connected 3`)
})();

((db)=> {
    console.log(`Shreya is connected 4 ${db}`)
})("postregresql")





let val1 = 10
let val2 = 10

function addNum(num1, num2){
    let result = num1+num2
    return result
}

let res1 = addNum(val1,val2)
let res2 = addNum(2,10)
