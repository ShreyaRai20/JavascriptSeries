const myNums = [1,2,3,4,5,6,7,8,9,10]

const nums1 = myNums.map((num)=> num+10)

console.log(nums1)


const nums2 = []

myNums.forEach((num)=> nums2.push(num+10))

console.log(nums1)
console.log(nums2)


// chaining

const nums3 = myNums
.map((num)=> num*10)
.map((num)=> num+1)

console.log(myNums)
console.log(nums3)


const nums4 = myNums
.map((num)=> num*10) // return all
.map((num)=> num+1)
.filter((num)=>num>50) // true or false

console.log(myNums)
console.log(nums4)

nums01 = [10,1,2,11,3,4,5,6,7,8,9]

const numsy = nums01.filter((num)=>{return num%2===0})

console.log(numsy)

const numsy1 = nums01.filter((num)=>num%2===0)

console.log(numsy1)

console.log(nums01.reduce((acc,curr)=>Math.max(acc,curr)))