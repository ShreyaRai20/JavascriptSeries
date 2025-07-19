// // promise - object representing eventual completion / failure


// const promise01 = new Promise((resolve,reject)=>{
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(()=>{console.log("Async task is complete 1")
//         resolve()
//     }, 2000)
// })

// promise01.then(()=>{ // connected to resolve
//     console.log("promise consumed 1");
// })


// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Async task is complete 2")
//         resolve()
//     }, 1000)
// }).then(()=>{
//     console.log("promise consumed 2");
// })

// const promise03 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username: "Shreya_20", email: "shreya200199@gmail.com"})
//     },1000)
// })

// promise03.then((user)=>{
//     console.log(user)
//     console.log(user.username)
//     console.log(user.email)
// })



// const promise04 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({username: "Shreya_20", email: "shreya200199@gmail.com", password: "1234"})
//         } else {
//             reject("Error Something went wrong")
//         }
//     },1000)
// })

// // // aviod callback hell, how?
// // // const username = promise04.then((user)=>{
// // //     console.log(user)
// // //     return user.username
// // // }) // throws error

// // // console.log(username)



// promise04.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Finally the primosed is either resolved or rejected")
// })



// const promise05 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({usernam:"Shreya20", password: "1234"})
//         } else {
//             reject("Something went wrong")
//         }
//     }, 1000)
// })

// const consumePromise05 = async () => {
//     try{ 
//         const res = await promise05
//         console.log(res)
//     } catch (err) {
//         console.log(err)
//     }
// }

// consumePromise05()


// const getUserDetails = async () => {
//     try{
//         const res = await fetch('https://api.github.com/users/hiteshchoudhary')
//         // console.log(res)
//         const data = await res.json() // needs await because taks time, not get printed withinout await
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }

// getUserDetails()


// fetch('https://api.github.com/users/hiteshchoudhary').then((res)=>{
//     const data = res.json()
//     return data
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// const promise06 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const err = false
//         if(!err){
//             console.log("HELLO I AM FINNALY HERE!")
//             resolve()
//         } else {
//             reject("Error!")
//         }
//     },1000)
// })

// promise06.then(()=>{ // connected to resolve, need to do resolve() in the promise
//     console.log("Promise Consumed")
// }).catch((err)=>{ // connected to reject
//     console.log(err)
// })


// const promise07 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const err = false
//         if(!err){
//             console.log("HELLO I AM FINNALY HERE!")
//             resolve({username: "Shreya_20", password: "1234"})
//         } else {
//             reject("Error!")
//         }
//     },1000)
// })

// promise07.then((res)=>{ // connected to resolve, need to do resolve() in the promise
//     console.log("Promise Consumed")
//     console.log(res)
//     return res.password
// }).then((pass)=>{
//     console.log(pass)
// }).catch((err)=>{ // connected to reject
//     console.log(err)
// })


// promise07.then((res)=>{ // connected to resolve, need to do resolve() in the promise
//     console.log("Promise Consumed")
//     console.log(res.password)
// }).catch((err)=>{ // connected to reject
//     console.log(err)
// })


// promise07.then((res)=>{ // connected to resolve, need to do resolve() in the promise
//     console.log("Promise Consumed")
//     return res.password // error
// }).catch((err)=>{ // connected to reject
//     console.log(err)
// })


// const fn = async () =>{
//     try{
//         const res = await fetch("https://api.github.com/users/hiteshchoudhary")
//         // console.log(res)
//         const data = await res.json()
//         console.log(data)

//     } catch (err) {
//         console.log(err)
//     }
// }

// fn()
// request sent through fetch , returns http error like 404, etc, this will be captured by resolve and not reject
fetch("https://api.github.com/users/hiteshchoudhary").then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
