/*
Q1.
*/


console.log('1' + 1) // if string + number it will concate, chnage number to string
console.log(1 + 1)  // add both are numbers
console.log("1"-1) // 0 => because other than +, javascript converts string into number
console.log(1-"1") 
console.log("1"-"1") 
console.log("1-1") 

/*
Q2.
*/

// console.log("1"-1);
// setTimeout(()=>{
//     console.log(10)
// },10)
// console.log(2)

/*
OUTPUT =>
    0
    2
    10
*/

// console.log("here")
// console.log("1"-1);
// setTimeout(()=>{
//     console.log(1)
// },10)
// console.log(2)
// setTimeout(()=>{
//     console.log(3)
// },10)
// setTimeout(()=>{
//     console.log(4)
// },9)


/*
Q3.
*/

a= 10
console.log(a)
var a; // hoisting=> moves to top and then gets assigned value 10

console.log(a)
var a; // hoisted goes to top but not assinged 10 as console is before the assignment line
a= 10 

// a= 10
// console.log(a) // error because used before initialization
// let a; 

/*
Q4. STATE MANAGEMENT => REDUX

Q5. REACT ONE WAY DATA BINDING OR TWO WAY?

React uses one-way data binding 

One-way data binding means data flows in a single direction — from parent → child via props.

In React, the UI is a function of state:
If the state changes, React re-renders the component and updates the UI.
To change the state, you explicitly call a state updater function (setState or useState setter), not by directly modifying the UI.


Q6. PROP DRILLING ?
- DATA PASSED FROM PARENT TO CHILD THEN TO GRANDCHILD => THIS PROCESS IS CALLED PROP DRILLING. IT 
*/


// export default function List({name}){
//     return (
//         <div>
//             {name}
//             <Button name={name} />
//         </div>
//     )
// }

/*
Q7. Can we pass data from a child to a parent?

Yes — in React, you can pass data from a child to a parent, but not directly through props (props only go parent → child).
Instead, the parent passes a callback function to the child, and the child calls that function with the data it wants to “send up.”
This is sometimes called “lifting state up”.
*/

/*
Q8.
Contemporaies of react => vue, angular

*/

/*
Q9. DIFFERENCE BETWEEN CLASS AND FUNCTIONAL COMPONENTS

*/

// Class based component

// class App1 extends Component{
//     constructor(props){
//         this.props.name = props.name
//     }
//     render(){
//         return (
//             <div>

//             </div>
//         )
//     }
// }


// function based component

// function App2 (){
//     useState
//         return (
//             <div>
                
//             </div>
//         )
// }


/*
Q9. LIFECYCLE METHOD


Q10. FRAGMENTS
*/


// function App2 (){
//     useState
//         return (
//             <div>
                
//             </div>
//         )
// }


/*
Q11. WHAT IS CALLBACK FUNCTION?
*/


// function app(fn01,val){
//     fn01()
// }

/*

Q12. SETTIMEOUT AND SETINTERVAL , CLEARINTERVAL
*/

const block = document.getElementById('block')

const interval = setInterval(() => {
    block.innerText = Math.floor(Math.random()*10);
}, 2000);

block.addEventListener("click", ()=>{
    console.log("stopped")
    clearInterval(interval);
})




/*

Q13. CLOSURE
*/

// lexical scoping

const outer = () => {
    const userName = "Momo"
    const inner = () => {
        console.log(`My name is ${userName}`) 
    }
    return inner
}

const res = outer()
res()

console.log(res)



/*

Q14. WHERE THE VIRTUAL DOM IS STORED? => virtual dom is js object stored in react memory/ heap memory. it stores present and previous and then compare sthe 2 and then update sthe actual dom accordingly. thats why recat is fast.

Q15. DATA TYPES IN JAVASCRIPT?
primitive => number, bigint, string, boolean, null, undefined,symbol
non-primitive => object, array, function

Q16. PRIMITIVE AND NON-PRIMITIVE
primitive => number, bigint, string, boolean, null, undefined,symbol, copy share, doesn't update original value
non-primitive => object, array, function, reference, updates original value

Q17. HTTPS CODES - 400,404

Q18. POST, GET, DELETE, PATCH

Q19. ARRAY METHODS => slice, splice, shift, unshift, pop, push, reverse, map, forEach, filter, reduce

reverse=> updates the original array

*/

const arr = [1,2,3,4,5]

console.log(arr.map((el)=> el>3)) // return array of true and false
arr.unshift(2,3,4)
console.log(arr)

// Map vs forEach 

const users = [{
    name: "momo",
    yearJoined: 2022
},{
    name: "koko",
    yearJoined: 2009
},{
    name: "roro",
    yearJoined: 2010
}]

const summaries01 = [];
const s = "hello"
console.log(s.split('').reverse().join())

users.reverse().join()

users.forEach(user=>summaries01.push(`${user.name} joined in ${users.yearJoined}`))
// users.forEach(user=>alert(JSON.stringify(user)))
const summaries02 = users.map((user,i)=> `[${i}] : ${user.name} joined in ${users.yearJoined} `)

console.log(summaries01)
console.log(summaries02)

/*

Q20. SELECTOR IN CSS?
Q21. PRIORITY?
Q22. BLOCK LINE AND INLINE ELEMENT?
Q23. ANCHOR TAG => <A>
Q24. HTML ATTRIBUTES
Q25. IFRAME TAGS
Q26. FORMATTING TAGS
Q27. BOLD AND STRONG TAG
Q28. MEDIA QUERIES
Q29. ADD GRADIENTS IN CSS
Q30. HIDE ELEMENTS?
Q31. DISPLAY NONE AND VISIBILITY HIDDEN => display none wont take space in the page whereas visibility hidden will takeup space. both wont show up.
Q32. ANIMATE USING CSS => KEYFRAMES
Q33. CSS BORDER AND CSS OUTLINE
Q34. DIFFERENCE BTW DIV AND SPAN
Q35. CENTER VERTICALLY
Q36. MARKW TAG
Q37. IMG ELEMENT
Q38. EMPTY ELEMENTS
Q39. FAKE CAPTION TAG
Q40. TAGS TO DISPLAY TABLE
Q41. DATA LIST TAG
Q42. SELF SPACING SELF PADDING
Q43. CHANGE INLINE TO BLOCK
Q44. IMG MAP
Q45. multicolor text on a webpage
Q46. LAYOUT OF HTML DOC
Q47. SUMMARY TAG
Q48. POSITONING PROPERTIES IN CSS => RELATIVE, ABSOLUTE, FIXED, STICKY
Q49. FLOAT PROPERTY
Q50. CSS BOX MODEL
Q51. COOKIES STORAGE AND LOCAL STORAGE AND SESSION STORAGE
*/

localStorage.setItem("userName","Bob")
const userName = localStorage.getItem("userName")
console.log(userName)
localStorage.removeItem("userName","Bob")
const user = localStorage.getItem("userName")
console.log(user)

sessionStorage.setItem("userName","pop")
const userName01 = sessionStorage.getItem("userName")
console.log(userName01)
sessionStorage.removeItem("userName","Bob")
const user01 = sessionStorage.getItem("userName")
console.log(user01)


document.cookie = "name=Shreya; expires=" +new Date().toUTCString()
document.cookie = "lastName=Rai; expires=" +new Date(9999,0,12).toUTCString()
/*
Q52. INNER TEXT AND INNER HTML =>
Q53. SHIFT AND UNSHIFT => multiple values 
Q54. MATERIAL UI
Q55. CSS GRID AND CSS FLEXBOX
Q56. IMAGE REFLECTION
Q57. HSL COLORS
Q58. 


*/
