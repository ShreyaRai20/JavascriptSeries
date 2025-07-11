let num1 = Boolean(1)
let num0 = Boolean(0)
let undefinedBool = Boolean(undefined)
let str1 = Boolean("0")
let str2 = Boolean("1")
let str3 = Boolean("")
let str4 = Boolean("4568")
let str5 = Boolean("bool")



console.log("num 1: ", num1 ,", typeof: ",typeof num1)
console.log("num 0: ", num0 ,", typeof: ",typeof num0)
console.log("undefined bool: ", undefinedBool,", typeof: ",typeof undefinedBool)
console.log("str1 0: ", str1,", typeof: ", typeof str1)
console.log("str2 1: ",str2,", typeof: ",typeof str2)
console.log("str3 empty string: ",str3 ,", typeof: ",typeof str3)
console.log("str4 '4568': ",str4,", typeof: ", typeof str4)
console.log("str5 'bool':",str5,", typeof: ", typeof str5)

