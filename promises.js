// function f1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("First Function")
//             resolve()
//         },1000)
       
//     })
// }



// function f2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Second Function")
//             resolve()
//         },2000)
       
//     })
// }



// function f3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("Third Function")
//         resolve()
//         },3000)
       
//     })
// }


// function all(){

//     f1().then(()=> f2())
//     .then(()=> f3())
//     .catch((err)=>{
//         console.error('Error:',err)
//     })
    

// }


// all()



const pr= new Promise((resolve,reject)=>{
    let x=12
    if(x==2){
        resolve('Success')
    }
    else{
        reject ('Error')
    }

})

pr.then((message)=>{
    console.log(message)
})
.catch((err)=>{
    console.log('Error:',err)
})