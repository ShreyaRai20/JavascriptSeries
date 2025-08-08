// console.log("one")
// console.log("two")
// console.log("three")

// setTimeout(()=>{console.log("one")},2000)

// console.log("two")
// console.log("three")

/*
Callback Hell - nested callbacks
*/

// function getData(dataId){
//     setTimeout(()=>{
//         console.log(`data: ${dataId}`);
    
// },2000)
// }


// getData(1)
// getData(2)
// getData(3)


// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log(`data: ${dataId}`);
//         if(getNextData){
//             getNextData();
//         }
// },2000)
// }


// // getData(1,()=>getData(2))
// // getData(2)
// // getData(3)

// // difficult to understand

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,() =>{
//             getData(4)
//         })
//     })
// })


// Promises - object in js

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(`data: ${dataId}`);
        if(getNextData){
            getNextData();
        }
},2000)
    // if(reject){
    //     console.log(`data: ${dataId}`);
    // }
})
}



getData().then((data)=>{
    console.log(data)
}).catch(()=>{
    console.log('error occured')
})