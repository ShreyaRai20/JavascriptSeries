const pi = Math.PI

console.log(pi)

console.log(Math.round(pi))
console.log(Math.ceil(pi))
console.log(Math.floor(pi))

Math.PI = 5
console.log(pi)

const des = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(des)
// Object.defineProperty(Math, "PI",{writable: true}) // can not do this
console.log(des)


const chai = {
    name: "ginger",
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("stooppp!!!")
    }
}

console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, "name",{writable: false, enumerable: false})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// for (const [key, value] of chai) { // not iterable
//     console.log(`${key}: ${value}`)
// }

for (let [key, value] of Object.entries(chai)) { // not iterable
    if(typeof value !== "function"){
        console.log(`${key}: ${value}`) // not show name because enumerable false above go to line 28
    }
    
}