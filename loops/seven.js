const myNum = [1,2,3]

const res1 = myNum.reduce(function (acc,curr){
    console.log(`acc: ${acc}, curr: ${curr}`)
    return acc+curr},0) 

const res2 = myNum.reduce((acc,curr)=>{
    console.log(`acc: ${acc}, curr: ${curr}`)
    return acc+curr},0) 

const res3 = myNum.reduce((acc,curr)=> acc+curr,0) 

console.log(res1)
console.log(res2)
console.log(res3)


const shoppingCart = [
    {
        itemName: "js course",
        price: 299,
    },
    {
        itemName: "python course",
        price: 300,
    },
    {
        itemName: "DSA course",
        price: 700,
    },
    {
        itemName: "data science course",
        price: 1000,
    },
]

const totalPrice = shoppingCart.reduce((acc, item)=> acc + item.price, 0)
console.log(totalPrice)