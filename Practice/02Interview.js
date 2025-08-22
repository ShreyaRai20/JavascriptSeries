console.log(1+"1"+1) // 111

console.log(1+1-"1") 


let x= {}, y={name: "Satish"}, z ={name: "Pratik"}

x[y] = {name: "Salman"};
x[z] ={name: "ShahRukh"}

console.log(x) 

console.log(x[y]) //{name: "Satish"}

console.log(NaN === NaN)


console.log(1>2<3)

// funciton curry
// higher order function
// desctructing


let [u,v, ...restof] = [10,20,30,40,50]

console.log(restof)

// ternary object

//

// for(var i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i);
        
//     }, 2000);
// }

// 3,3,3

let a=4
let b = 6

console.log(a,b)

// [b,a] = [a,b]


// reverse String

let str = "Hello World!"

console.log(str.split('').reverse().join(''))
console.log(str.split(' ').reverse().join(' '))

let ar1 = [1,2,3]
let ar2 = [1,2,3]

let ar3 = [...ar1,...ar2]
let ar4 = ar1.concat(ar2)
let ar5 = ar1.push(...ar2)

console.log(ar3);
console.log(ar4);
console.log(ar1);

// undeclared and undefined

let un01;


console.log(un01)
console.log(un02)

// event capturing and event bubling
// promise pending ?
