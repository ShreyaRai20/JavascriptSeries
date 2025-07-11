// // singleton - when created by constructor

// const mySy = Symbol("key1")

// // Objedt Literals
// const jsUser = {
//     name: "Shreya",
//     "full name": "shreya rai",
//     age:20,
//     location:"India",
//     isLoggedIn: false,
//     // mySy:mySy,
//     [mySy]: "key1",
// }

// console.log(jsUser["name"])
// // console.log(jsUser[age]) // age not defined 
// console.log(jsUser.name)
// console.log(jsUser["full name"])
// console.log(jsUser["mySy"])
// console.log(jsUser[mySy])

// // Object.freeze(jsUser) //freeze the object
// jsUser["full name"] = "shrey"

// console.log(jsUser)

// jsUser.greeting = function(){
//     console.log("Hello User")
// }

// jsUser.greeting1 = function(){
//     console.log(`Hello User ${this["full name"]}`)
// }

// // console.log(jsUser.greeting)
// console.log(jsUser.greeting())
// console.log(jsUser.greeting1())


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const tinderUser = new Object()

tinderUser.id = "124"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false
tinderUser.fullname = {
    firstname: "Shreya",
    lastname: "Rai"
} 

console.log(tinderUser)
console.log(tinderUser.fulllname?.firstname)


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

obj3 = {obj1, obj2}
console.log(obj3)

// Object.assign(target,source)
const obj4 = Object.assign({},obj1,obj2)

console.log(obj4)

const obj5 = {...obj1, ...obj2}
console.log(obj5)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLogged"))

const course = {
    coursename : "js",
    price: "999",
    courseInstructor: "shreya"
}
 
// course.courseInstructor


const {courseInstructor} = course

const {courseInstructor: instructor} = course

console.log(courseInstructor)
console.log(instructor)


// {
//     "name": "Shreya",
//     "courseName": "js",
//     "price":"free"
// }


// [
//     {},
//     {},
//     {}
// ]

// https://jsonformatter.org
