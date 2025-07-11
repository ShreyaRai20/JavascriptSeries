function sayMyName(){
    console.log("S")
    console.log("H")
    console.log("R")
    console.log("E")
    console.log("Y")
    console.log("A")
}


// sayMyName
// sayMyName()
// sayMyName()

// sayMyName - reference

// sayMyName() - execution

// function name(parameters){}
function addTwoNumbers(num1,num2){
    // let res = num1 + num2 -> why let? block scoped
    // return res
    // after return no code will be executed
    console.log(num1 + num2)
    return num1 + num2
}

addTwoNumbers() // NaN
addTwoNumbers(3,4) // 7
addTwoNumbers(3,"4") // 34

const result = addTwoNumbers(3,4)

console.log(result) //undefined - if no return

function loginUserMessage(username = "Dam"){
    if(!username){  // usrrname which is equal to undefined change it to true
        console.log("please enter a username")
        return //undefined
    }
    // if(username === undefined){
    //     console.log("please enter a username")
    //     return //undefined
    // }
    return `${username} just logged in`

}

console.log(loginUserMessage("Shreya"))
console.log(loginUserMessage()) // username = undefined if no value is passed but if given default parameter not undefined

console.log(!undefined)


function calculateCartPrice(...num1){ //rest and spread operator - right now rest operator - is open and bundle it
    return num1 // returns bundle or array because of ...num1
}

console.log(calculateCartPrice(23,30,40,23,34,56,634))


function calculateCartPrice1(val1, val2, ...num1){ //rest and spread operator - right now rest operator - is open and bundle it
    // val1 = 23, val2 = 30 and ...num1 = rest of the remaining values
    return num1 // returns bundle or array because of ...num1
}

console.log(calculateCartPrice1(23,30,40,23,34,56,634))


const user = {
    username: "Shreya",
    age: 23,
    // ages: 23 // undefined
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`)
}

handleObject(user)

// ERROR
// function handleObject1({...anyobject}){
//     console.log(`username is ${username} and age is ${age}`)
// }

// handleObject1(...user)


const myNewArray = [20,23,234,400]

function returnSecondValue(arr){
    return arr[1]
}

console.log(returnSecondValue(myNewArray))
