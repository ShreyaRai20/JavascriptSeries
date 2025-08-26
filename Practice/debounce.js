const btn = document.querySelector(".increment_button")
const btnPress = document.querySelector(".increment_pressed")
const count = document.querySelector(".increment_count")

var pressedCount = 0;
var triggeredCount = 0;

const myDebounce = (cb,d) => {
    let timer;
    return function (...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            cb(...args)
        },d)
    }
}


const debounceCount = myDebounce(()=>{
    triggeredCount += 1
    count.innerHTML = triggeredCount
},800)


btn.addEventListener('click',()=>{
    btnPress.innerHTML = ++pressedCount
    debounceCount()
})


const btn01 = document.querySelector(".t_increment_button")
const btnPress01 = document.querySelector(".t_increment_pressed")
const count01 = document.querySelector(".t_increment_count")

var pressedCount01 = 0;
var triggeredCount01 = 0;



const myThrottle = (cb,d) => {
    let last = 0;


    return function (...args) {
        let now = new Date().getTime()
        if(now-last < d) return
        last = now
        return cb(...args)
    }
}


const ThrottleCount = myThrottle(()=>{
    const date = new Date()
    console.log(date.getTime())
    count01.innerHTML = ++triggeredCount01 
},2000)


btn01.addEventListener('click',()=>{
    btnPress01.innerHTML = ++pressedCount01
    ThrottleCount()
})

