let a = 100
// var b = 20
// var c = 300

// {} - scope 

// if (true){
//     console.log(a) // error throw if the value declared within the block after this line but doesn't throw error if the value is not declared within the block - temporal dead zone
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log(a)
// }

// console.log(a)
// // console.log(b)
// console.log(c)

// scope different for browser and node


// ++++++++++++++++++++++++++++++++++++++++++++
// Nested Scope


function one(){
    const myName = "Shreya"
    function two(){
        const age = 23
        console.log(myName)
    }
    //  console.log(age)
    two()
}

one()


// ++++++++++++++ interesting +++++++++++++++++

console.log(addone(5))

function addone(num){
    return  num + 1
}

addone(5)

// addTwo(5) // error  -> Hoisting 
const addTwo = function(num){ // expressions
    return num + 2 
}

addTwo(5)