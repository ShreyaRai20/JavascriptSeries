const place = "Shreya"
const repoCount = 50

console.log(place + repoCount + " val")
console.log(place, repoCount, " val")

console.log(`Hello. my name is ${place.toUpperCase()} and my repoCount is ${repoCount}`)


const gameName = new String("Shreya2001")

console.log(typeof gameName)
console.log(gameName)

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.charAt(3)) // returns the char present at given index
console.log(gameName.at(-3)) // includes negative values unlike charAt
console.log(gameName.indexOf('S')) // returns -1 if not present, and if present returns the index number
console.log(gameName.substring(0,3)) // start- includes, end- doesnot include, index starts from 0
console.log(gameName.substring(-7,4)) // ignores negative values and starts from 0

console.log(gameName.slice(-7,7)) // includes negative values unlike substring

const newGameName = "   Shreya  "

console.log(newGameName.trim())
console.log(newGameName)
console.log(newGameName.trimEnd())
console.log(newGameName.trimStart())

const url = "https://shreya.com/shreya%2001"


// doesn't update existing url/string but returns a new string
console.log(url)
url.replace('%20', '_')
console.log(url.replace('%20', '_'))


console.log(url.includes("hello"))
console.log(url.includes("shr",200))
console.log(url.includes("shr",-1)) // doesn't include negative value


console.log(url.split('/'))
console.log(url.split('/',2))

console.log(url.padStart(100,"0"))

console.log(url.padEnd(50,"0"))


