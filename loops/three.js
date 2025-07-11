// for of - Array,Maps  not Object, 

["","",""]
[{},{},{}]


const arr = [1,2,3,4,5]

for (const element of arr) {
    console.log(element)
}


const greetings = "Hello World!"

for(const greet in greetings){
    console.log(greet)
}

for(const greet of greetings){
    console.log(greet)
}


//Maps - key value pair, dictionary in python // unique

const map = new Map()

map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")
map.set('IN', "India")
map.set('SR', "India")

console.log(map)

for ( const [key, value] of map){
    console.log(`key: ${key}, value: ${value}`)
}

// const myObj = {"IN": "India", "USA": "United states of America", 'Fr': "France","IN": "India"}

// console.log(myObj)

// not iterable 

// for ( const [key, value] of myObj){
//     console.log(`key: ${key}, value: ${value}`)
// }