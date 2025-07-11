// control flow/ logic flow

// if statement

if(true){
    console.log("True")
}
if(false){
    console.log("False")
}

const isUserLoggedIn = true
if(isUserLoggedIn){
    console.log("LOGGED IN")
}

// < - LESS THAN
// > - GREATER THAN
// <= - LESS THAN EQUAL TO
// >= - GREATER THAN EQUAL TO
// == - LOSELY EQUAL TO
// != - NOT EQUAL TO
// === - STRICT CHECK CHECKS DATATYPES AS WELL

if(3 != 2){
    console.log("YES")
}

if(2 == "2"){
    console.log("EXECUTED")
}

if(2 === "2"){
    console.log("EXECUTED")
}

if(2 !== 2){
    console.log("YES EXECUTED")
}

const temp = 20

if(temp < 50){
    console.log("temp is smaller")
}

if(temp == "20"){
    console.log("temp is smaller")
}

if(temp === 20){
    console.log("temp is smaller")
}

if(temp === 22){
    console.log("temp is equal to 22")
}else{
    console.log("temp not equal to 22")
}

const balance = 1000
if(balance>500) console.log("test"); // implicit scope

if(balance>500) console.log("test"), // not good code
console.log("test 2");


if(balance > 500){
    console.log("less than")
} else if (balance< 750) {
    console.log("less than 750")
}else if (balance< 900) {
    console.log("less than 900")
}else{
    console.log("less than 1200")
}




// const arr = [1,2,3,4,5]

// arr.push(10)

// console.log(arr)

// const slice1 = arr.slice(1,2)
// console.log(slice1)
// console.log(arr)
// const splice1 = arr.splice(1,2)
// console.log(splice1)
// console.log(arr)