const num = [1,2,3,4,5]
const words = ["hello", "world","hey"]

console.log(num[1])


//methods

num.push(8)
console.log(num)
num.pop()
console.log(num)
num.unshift(10)
console.log(num)
num.shift()
console.log(num)


console.log(num.includes(100))
console.log(num.indexOf(2))
console.log(num.indexOf(100))

const newArr = num.join()
 
console.log(newArr)

console.log(num)
//slice and splice
const slice = num.slice(1,2) // returns start, exclude end 
console.log(num)
console.log(slice)

const splice = num.splice(1,1) // removes that given start till the number of elemnts 2nd arg
console.log(num)
console.log(splice)

//difference between slice and splice - slice returns the start till exclude end index whereas splice updates the array but removing the give index till number of elements and return those elements


//++++++++++++++++++++++++++++++++++++++++++++

// concat, push, spread out operator, flat

const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["superman", "Flash", "Batman"]

marvelHeros.push(dcHeros) // update the current array
console.log(marvelHeros)
console.log(marvelHeros[3][1])

allHeros = marvelHeros.concat(dcHeros) // create new array not update current array.
console.log(marvelHeros)
console.log(allHeros)


const marvelHeros1 = ["Thor", "Ironman", "Spiderman"]
const dcHeros1 = ["superman", "Flash", "Batman"]

const allHeros1 = [...marvelHeros1, ...dcHeros1]
console.log(allHeros1)


const arr10 = [1,2,3,4,5,[1,2,3,4], 7, [,3,4,4,3,4,3,3,4,[2,3,3,4]]]


const arr101 = arr10.flat(Infinity)
console.log(arr101)
const arr102 = arr10.flat(1)
console.log(arr102)


// +++++++++++++++++++++++++++++++++++

// isArray, from and of

console.log(Array.isArray("Shreya"))
console.log(Array.from("Shreya"))
console.log(Array.from({name:"Shreya"})) //interesting - empty if not specified whether to use key or value
console.log(Array.from({name:"Shreya"}))

let score1 = 100

let score2 = 200

let score3 = 300

console.log(Array.of(score1,score2,score3))

