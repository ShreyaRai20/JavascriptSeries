const userEmail = []

if(userEmail){
    console.log("have user email")
}else{
    console.log("no user email")
}


// falsy values - false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values - "0", "false", " ", [], {}, function(){}

// false == 0 => true
// false == "" => true
// 0 == "" => true


if(userEmail.length === 0){
    console.log("arr is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("empty")
}


// Nullish Coalescing Operator (??): null, undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10 // used for database connection if received value fromt here give that otherwise keep it null
val1 = undefined ?? 15

console.log(val1)

// Ternary Operator

// condition ? true : false

const p = true
p ? console.log("true"): console.log("false")