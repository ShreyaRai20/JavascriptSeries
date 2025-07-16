let randomNumber = parseInt(Math.random()*100+1)
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true


const validateGuess = (guess) => {
    // validate if value is between 1-100 and if the value is number
    if(isNaN(guess)){
        alert("Please enter a valid number")
    } else if (guess<1){
        alert("Please enter the number more than 1")
    } else if(guess>100){
        alert("Please enter the number more than 100")
    } else{
        prevGuess.push(guess)
        console.log(prevGuess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over \n Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


const checkGuess = (guess) => {
    // check if value is equal to random number generated
    if(guess === randomNumber){
        displayMessage("You guessed it right!")
        endGame()
    } else if (guess < randomNumber) {
        displayMessage("You guessed is too Low!")
    } else if (guess > randomNumber) {
        displayMessage("You guessed is too High!")
    }
}

const displayGuess = (guess) => {
    // clean up method
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

const displayMessage = (message) => {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

const endGame = () => {
    userInput.value = ""
    userInput.setAttribute("disabled","")
    p.classList.add(`button`)
    p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

const newGame = () => {
    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener("click", (e)=> {
        randomNumber = parseInt(Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}


if(playGame){
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
        console.log(guess)
    })
}





// // console.log(Math.round(23.2))
// // console.log(Math.round(23.8))
// // console.log(Math.floor(23.2))
// // console.log(Math.floor(23.8))
// // console.log(Math.ceil(23.2))
// // console.log(Math.ceil(23.8))

