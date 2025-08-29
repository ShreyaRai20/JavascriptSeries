let arr = ['shreya','eya']

function  sub(){

}

// every find
// shift and unshift

let arr01 = [1,2,3,4,5,6,2]

console.log(arr01.find((num)=>num%2===0)) // 2
console.log(arr01.every((num)=>num%2===0)) // false
console.log(arr01.every((num)=>num%1===0)) //true

// 0 1 1 2 3 5

function fibonacci(n){
    if(n===0) return 0
    if(n===1) return 1

    return fibonacci(n-1) + fibonacci(n-2)
}

let num04 = fibonacci(6)
console.log(num04)
