
// arr.map((el,i,arr)=>{})

Array.prototype.myMap = function (cb){
    let temp = []
    for (let i = 0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
}


const arr = [1,2,3,4]

const newArr = arr.myMap((el)=>el*4)

console.log(newArr)


Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i =0;i<this.length;i++){
        if(cb(this[i],i,this)) temp.push(this[i])
    }
    return temp
}

const newArr02 = arr.myFilter((el)=>el>2)
console.log(newArr02)


// arr.reduce((cb, initialval))

Array.prototype.myReduce = function(cb, initialValue){
    let acc = initialValue
    for(let i =0;i<this.length;i++){
        acc = acc ? cb(acc,this[i],i,this) : this[i]
    }
    return acc
}

const newArr03 = arr.myReduce((acc,curr)=> acc+curr)
console.log(newArr03)

//call

const car = {
    brand: "ferrari",
    color: "red"
}

function printCar(lol){
    console.log(`${this.brand} ${this.color} ${lol}`)
}

printCar.call(car)

Function.prototype.myCall = function(context={},...args){
    if( typeof this != 'function'){
        throw new Error(this, " this is not a function")
    }

    context.fn = this;
    context.fn(...args)
}

printCar.myCall(car)

Function.prototype.myApply = function(context={},args=[]){
    if( typeof this != 'function'){
        throw new Error(this, " this is not a function")
    }

    if( !Array.isArray(args)){
        throw new Error(this, " this is not a array")
    }

    context.fn = this;
    context.fn(...args)
}

printCar.myApply(car)

const arr9 = printCar.bind(car)
arr9()

Function.prototype.myBind = function(context={},...args){
    if( typeof this != 'function'){
        throw new Error(this, " this is not a function")
    }

    context.fn = this;
    return function (...newArgs){
        return context.fn(...args,...newArgs)
    }
}

const newFn = printCar.myBind(car,"lol")

newFn()

const newFn01 = printCar.myBind(car)

newFn01("hop")


function once(func,context){
    let ran;
    return function(){
        if(func){
            ran = func.apply(context || this, arguments)
            func = null
        }
    }
    return ran;
}

const hello = once((a,b) =>{
    console.log("hello", a, " ", b)
})


hello(2,3)
hello(4,5)
hello(2,3)