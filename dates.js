// january 1, 1970

const myDate = new Date()

console.log(typeof myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toJSON())
console.log(myDate.toTimeString())

const myDate1 = new Date(2025,0,23) // Date(YYYY, MM, DD). NOTE - MM STARTS FROM 0 AND NOT 1, JAN = 0
// Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
const myDate2 = new Date(2025,0,23, 5, 33,20) 
console.log(myDate1.toDateString())

console.log(myDate2.toString())

const myDate3 = new Date("2025-01-14") 
console.log(myDate3.toLocaleString())

const myDate4 = new Date("01-14-2025") 
console.log(myDate4.toLocaleString())

let myTimeStamp = Date.now()

console.log(myDate4.getTime())
console.log(myTimeStamp)
console.log(Math.floor(myTimeStamp/1000))


let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth()+1) // Date(YYYY, MM, DD). NOTE - MM STARTS FROM 0 AND NOT 1, JAN = 0


console.log(newDate.toLocaleDateString('default',{weekday: "long"}))
console.log(newDate.toLocaleDateString('default',{weekday: "narrow"}))
console.log(newDate.toLocaleDateString('default',{weekday: "short"}))

