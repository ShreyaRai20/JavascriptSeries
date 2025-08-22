/*

Q1. DIFFERENCE BETWEEN SETTIMEOUT AND SETINTERVAL

- javascript is synchronous and gets executed line by line.
- using SETTIMEOUT AND SETINTERVAL methods/function we can execute code asynchonously.
- these codes get send to a task queue and gets regsited in callback registry.

 */


// setTimeout(()=>{
//     console.log("hello there from timout")
// },2000)


// setInterval(()=>{
//     console.log("hello there from Interval")
// },2000)


/*

Q2.Can you stop SETTIMEOUT AND SETINTERVAL ?

- by using clearTimeout and clearInterval
- it takes the refernece of the SETTIMEOUT AND SETINTERVAL function to clear it.
- it used clear directly then the SETTIMEOUT AND SETINTERVAL wont get executed after the mentioned time. because it has been cleared. instead use a function call. such as click or an event to stop the SETTIMEOUT AND SETINTERVAL. 
example in html file.

*/

/*

Q3. WAYS TO EXECUTE ASYNCHRONOUS FUNCTIONS

- ASYNC AWAIT
- PROMISES

Q4. WHICH HAS HIGHER PRECIDENCE - PROMISES OR SETTIMEOUT?

PROMISES HAS HIGHER PRECIDENCE BECAUSE IT GOES TO HIGH PRIORITY QUEUE 
Promises are microtasks, while setTimeout is a macrotask.
Promises go to the microtask queue (higher priority), whereas setTimeout goes to the macrotask queue.


Q5. WHICH IS BETTER  - ASYNC AWAIT OR PROMISES? - CALLBACK HELL -  WATCH APNA COLLEGE VIDEO FOR THIS

Both are based on Promises, but async/await is usually better for readability and debugging.

🟢 Use async/await when:

You want clean, synchronous-looking code for asynchronous logic.
You're chaining multiple async operations.
You want better error handling with try/catch.
🟡 Use raw Promises (.then()/.catch()) when:

You need fine-grained control over promise chains.
You’re dealing with dynamic promise resolution, e.g., Promise.all, Promise.race, etc.
You're in a context where await is not allowed (e.g., outside an async function).
📌 TL;DR:
✅ async/await is better for most modern JavaScript code — easier to read and debug.
⚙️ Promises (.then()) are still useful for more complex control flows.


Q6. USE STRICT - "USED TO TELL THE COMPILER THAT WE ARE USING NEWER VERSION OF JAVASCRIPT"

 */

/*
Q7. WHAT WILL BE THE OUTPUT OF "console.log(a)"?
 */

a = 100;
console.log(a)


/*
Q8. EXPLAIN HOISTING - moves declaration to the top
- function declaration


 */

f1()

function f1(){  // function declaration
    console.log("f1")
}


// f2()
const f2 = function(){ // functon expression
    console.log("f2")
}

// f3()
const f3 = ()=> { // arrow function - temporal dead zone
    console.log("f3")
}

f1()
f2()
f3()

console.log(a)
a= 100
let b = 20


/*
Q9. Temporal dead zone

 */

/*
Q10. different types of Scopes
1. global
2. local
3. lexical
 */

var x = 1000;

{
    var x = 5000;
}

let y = x;

{
    let y = 10000;
}

console.log(y)

let z = 100

// let z = 100 - error - cannot redeclare
z = 200

console.log(z)


/*
Q11. Declaration Function VS Arrow Function

| Feature                     | **Function Declaration**                        | **Arrow Function**                             |
| --------------------------- | ----------------------------------------------- | ---------------------------------------------- |
| **Syntax**                  | `function greet() {}`                           | `const greet = () => {}`                       |
| **Hoisting**                | ✅ **Hoisted** (can be called before definition) | ❌ **Not hoisted** (must be defined before use) |
| **`this` Binding**          | Dynamic (based on how it's called)              | Lexical (inherits from parent scope)           |
| **`arguments` object**      | ✅ Available                                     | ❌ Not available                                |
| **Constructor (via `new`)** | ✅ Can be used as constructor                    | ❌ Cannot be used as constructor                |
| **Suitable for methods?**   | ✅ Yes                                           | ⚠️ Not ideal — loses correct `this`            |



Q12. FUNCTION CURRY -
 */


console.log(sub(10,2))

console.log(sub(10)(2))


function sub(a,b){
    if (b!==undefined){
        console.log(`a : ${a} and b : ${b}`)
        return a-b
    } else {
        return function(c){
            console.log(`c : ${c} and a : ${a}`)
            return a-c
        }
    }
}

/*

Q13. MAP METHOD VS FOR EACH

 */


let arr = [1,2,3,4,5]

console.log(arr.map((el)=> el)) // returns a new arr

console.log(arr.forEach((el)=> console.log(el*2))) // used only to loop through arr, do not return anything
console.log( arr )


/*

Q14. SLICE AND SPLICE METHOD
SLICE - DOESNT UPDATE CURRENT ARR,  RETURNS THE SLICE OF THE ARR
SPLICE - UPDATE THE CURRENT ARR,  RETURNS THE SLICE OF THE ARR, THIRD ARGU => ADD/ INSERT VAL

 */


/*

Q14. PRIMITIVE DATA TYPE AND NON-PRIMITIVE DATATYPE

PRIMITIVE - NUMBER, STRING, BOOLEAN, UNDEFINED, NULL, SYMBOL, BIGINT 
NONPRIMITIVE - OBJECT, ARRAY, FUNCTION

Q15. DEEP COPY VS SHALLOW COPY 


 */


/*
POP-UP BOXES -

1. PROMPT - OK
2. CONFIRM -OK, CANCEL
3. ALERT - OK

 */


/*
ES6 
- ARROW FUNCTION
- LET CONST
 */

/*
TEMPORAL SCOPE -
LEXICAL SCOPE AND CLOSURE
 */


/*
DESTRUCTURING AN ARRAY
 */

let names = ["shre","anu", "janvi"]

let [first, second] = names

console.log(first, second)


/*
PROMISE.ALL()
*/

/*
filter method
reduce method
*/

const xyz = [1,2,3,4,5,6,67]
const filter = xyz.filter((el)=>el>4)

console.log(filter);


const reduce = xyz.reduce((acc, el)=>acc+el,2)

console.log(reduce);


console.log(xyz.find((el)=>el%2===0))

let m = [100,200,300,400]
let n = [300,400,500,600]
let o =[]

function intersection(m,n){
    for(let i = 0; i<m.length ;i++){
        for(let j = 0; j<n.length ;j++){
            if (m[i] === n[j]) o.push(m[i])
        }
    }
    return o
}

console.log(intersection(m,n))

console.log("2" - "2")
console.log(2 - "2")
console.log("2" - 2)


/*

Great question! Let's break this down and explain **type conversion (coercion)** in JavaScript, especially with `+` vs `-`.

---

### 🧪 Examples

```js
console.log("2" - "2"); // 0
console.log(2 - "2");   // 0
console.log("2" - 2);   // 0
```

All of these result in `0`.

---

### 🤔 Why? — Type Conversion Rules

JavaScript performs **implicit type coercion** depending on the operator used:

#### ✅ `+` Operator

* If **any operand is a string**, it **converts everything to string** and performs **string concatenation**.

```js
console.log("2" + 2); // "22"
console.log(2 + "2"); // "22"
```

#### ✅ `-` (and other arithmetic operators: `*`, `/`, `%`)

* JavaScript **coerces both operands to numbers**.
* So:

```js
"2" - "2" → Number("2") - Number("2") → 2 - 2 → 0
2 - "2"   → 2 - Number("2") → 2 - 2 → 0
"2" - 2   → Number("2") - 2 → 2 - 2 → 0
```

---

### Summary Table

| Expression  | Type Conversion        | Result |
| ----------- | ---------------------- | ------ |
| `"2" + 2`   | `"2"` + `"2"` → `"22"` | "22"   |
| `2 + "2"`   | `"2"` + `"2"` → `"22"` | "22"   |
| `"2" - "2"` | `2 - 2`                | 0      |
| `2 - "2"`   | `2 - 2`                | 0      |
| `"2" - 2`   | `2 - 2`                | 0      |

---

### ⚠️ Note

If a string cannot be converted to a number, `-` will result in `NaN`:

```js
console.log("hello" - 2); // NaN
```

Let me know if you'd like a visual table of all operators and their coercion behavior.


*/


const s = [...m,...n]


const  srtr = "ShreyaRaiIsAGirl"

let st = ""

// for(let i =0;i<srtr.length;i++){
//     if(srtr.charAt(i).isUpperCase())
//     st += srtr[i]
// }

for(let i =srtr.length-1;i>=0;i--){
    console.log(srtr[i])
    st +=srtr[i]
}

console.log(st)


let w = 10;
let v = 20;

v = w+v
w = v-w
v = v-w

console.log(`v: ${v}, w: ${w}`)


/*
trigger tag and image 

marku 

self spacing and self padding


css -
external 

grid and flex

box model


postioning 
*/

