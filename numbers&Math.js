const score = 234

const balance = new Number(200)
console.log(score)
console.log(balance)


console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(3))
console.log(balance.toExponential())
console.log(balance.toPrecision(10))
console.log(balance.valueOf())


const num = 23.45678
console.log(num.toPrecision(4)) // give decimal left side then give exponential for decimal


const n = 10000000
console.log(n.toLocaleString())
console.log(n.toLocaleString('en-IN'))

// ____________________________________________________________________


console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.round(4.5))
console.log(Math.round(4.1))
console.log(Math.ceil(4.2))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.5))
console.log(Math.floor(4.2))
console.log(Math.floor(4.8))
console.log(Math.min(3,6,5,7))
console.log(Math.max(3,6,5,7))
console.log(Math.random())
console.log(Math.floor((Math.random()*10)+1))

const min = 10
const max = 20

Math.random() * (max-min+1) + min


console.log((max-min+1))
console.log(Math.floor(Math.random() * (max-min+1) + min))

const othern = 234.89
const othern1 = 234.43

console.log(othern.toPrecision(4))
console.log(othern1.toPrecision(4))