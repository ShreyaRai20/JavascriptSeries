const x = (4,5,6)

console.log("x: ", x)


// function abc(){

// }

var abc;

function abc(){

}


console.log(abc) // fucntion because function has higher priority, var declares the variable then function gets assigned if func kept second, when kept first the function is already assigned, both hoisted



let n = 10

console.log(n.toString());
console.log(n.toString(8));

// let n = 100;
console.log(n.toString(2));  // "1100100"  (binary)
console.log(n.toString(8));  // "144"      (octal)
console.log(n.toString(16)); // "64"       (hexadecimal)
console.log(n.toString(36)); // "2s"       (base-36, uses 0-9 + a-z)


function abc(){
    console.log("xyz");
}


console.log(abc()) // hai, undefined


console.log(abc.name) // abc 


console.log(abc) //[Function: abc]


var uvw = 100;
let xyz = 200


// console.log(window.xyz); // window not difned for nodejs
// console.log(window.uvw);



function b(n1,n2){
    'use strict'
    n1 = 300;
    n2 = 400;
    return arguments[0] + arguments[2]

}


console.log(b(100,200))


{{
    function c (){
        console.log(c)
    }
}}

c() // hoisted 


// const abc01 = () => {
//     a=8
//     console.log(a)
// }

// abc01()

// let a;

// new abc1() // Cannot access 'abc1' before initialization 

class abc1{

}

console.log(typeof abc1) // function


const m = 10 + isNaN(2) ? 100 : 200 // isNaN(2) => false => 10+false => 10 => true and will give m = 100 as it is ternary operator

console.log(m) // 100

console.log(1+false)


console.log(10==10) // true

console.log(10==10==10) // false [ 10 == 10 => true == 10 => false ]

console.log(10==10==10==0) // true  [ 10 == 10 => true == 10 => false == 0 => true ]


console.log(parseInt('')) // NaN
console.log(Number('')) // 0

/*
parseInt = “parse characters until you can’t, return number (or NaN if none).”
Number = “convert whole value into a number (using coercion rules).”
*/

/*


PACKAGE.JSON AND PACKAGE-LOCK.JSON
CDN
TRANSITIVE DEPENDENCIES
TRANSIPLER



HTML
MARQUE TAG
LAYUT ELEMENTS
HTML AND XHTML

CSS 
FLEX AND GRID
DISPLAY NONE AND VISIBILITY HIDDEN


*/