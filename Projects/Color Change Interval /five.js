
let colorchangeInterval;

const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}


const startColorChange = () => {
    const changeBgColor = () => {
        document.querySelector("body").style.backgroundColor = randomColor()
    }

    if(!colorchangeInterval){
        colorChangeInterval = setInterval(changeBgColor, 1000)
    }

}

const stopColorChange = () => { 
    clearInterval(colorChangeInterval)
    colorChangeInterval = null;
}

document.querySelector("#start").addEventListener("click", startColorChange)
document.querySelector("#stop").addEventListener("click", stopColorChange)