const buttons = document.querySelectorAll(".button") // nodeList
const body = document.querySelector("body")


// console.log(buttons)
// console.log(body)

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e, e.target)
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "purple"){
            body.style.backgroundColor = e.target.id
        }
        // switch(e.target.id){
        //     case "grey":
        //         body.style.backgroundColor = e.target.id
        //         break;
        //     case "white":
        //         body.style.backgroundColor = e.target.id
        //         break;
        //     case "blue":
        //         body.style.backgroundColor = e.target.id
        //         break;
        //     case "yellow":
        //         body.style.backgroundColor = e.target.id
        //         break;
        //     default:
        //         break;
        // }
    })
})
