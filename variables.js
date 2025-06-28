const customerId = "1234"
let customerName = "Shreya"
var customerState = "Texas"

console.log(typeof(customerId))

for (var i = 1; i<10; i++){
    console.log(i)
}

i = 23

console.table([customerId, customerName, customerState, i])

for (let j = 1; j<10; j++){
    console.log(j)
}


console.table([customerId, customerName, customerState, i,j])
