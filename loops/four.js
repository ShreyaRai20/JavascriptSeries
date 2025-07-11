// for in - Array,Object not Maps, 


const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    py: "python"
}

for (const key in myObj) {
    console.log(key)
}
for (const key in myObj) {
    console.log(`${key}: ${myObj[key]}`)
}

const arr = ["js", "py", "cpp", "rb"]
// key is index
for (const key in arr) {
    console.log(`${key}: ${arr[key]}`)
}


const map = new Map() // not iterable

map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")
map.set('SR', "India")

for (const key in map) {
    console.log(`${key}`)
}
