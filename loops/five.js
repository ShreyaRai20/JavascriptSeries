const coding = ["js", "cpp", "python", "java", "ruby"]

// callback fn = no name of the function
coding.forEach(function (item){console.log(item)})
coding.forEach((item)=>{console.log(item)})


function printMe(item){
    console.log(item)
}

coding.forEach(printMe) // reference not use brackets


coding.forEach((item, index, arr)=>{
    console.log(item, index, arr)
})


const myLang = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "jpy"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]

// myLang.forEach((item)=>{console.log(`${item.languageName} : ${item.languageFileName}`);
// })

// const values = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })

// console.log(values)


const myNums = [1,2,3,4,5,6,7,8,9,10]
const nums1 = myNums.filter((num)=> (num > 4) )
const nums2 = myNums.filter((num)=> {num > 4} ) // return empty string, won't work because scope started becaus eof curly brackets need explicit return statement

const nums3 = myNums.filter((num)=> { return num > 4 } )

console.log(nums1)
console.log(nums2)
console.log(nums3)

newNums = []

myNums.forEach((item)=>{ // doesn't return anything thats why use filter
    if(item>4) newNums.push(item)
})

console.log(newNums)


const books = [
  { title: "Book1", genre: "Fiction", publish: 1970, edition: 2004 },
  { title: "The Lean Startup", genre: "Business", publish: 2011, edition: 2016 },
  { title: "Clean Code", genre: "Programming", publish: 2008, edition: 2013 },
  { title: "Sapiens", genre: "History", publish: 2011, edition: 2015 },
  { title: "Atomic Habits", genre: "Self-help", publish: 2018, edition: 2021 },
  { title: "1984", genre: "Dystopian", publish: 1949, edition: 2003 },
  { title: "The Alchemist", genre: "Fiction", publish: 1988, edition: 1998 },
  { title: "You Don’t Know JS", genre: "Programming", publish: 2014, edition: 2020 },
  { title: "Becoming", genre: "Biography", publish: 2018, edition: 2019 },
  { title: "Educated", genre: "Memoir", publish: 2018, edition: 2020 }
];

let userBooks = books.filter((book) => book.genre==="History" )

let userBooks1 = books.filter((book) => book.publish<2000)

let userBooks2 = books.filter((book) => book.publish<2000 || book.genre==="History")
console.log(userBooks)
console.log(userBooks1)
console.log(userBooks2)