
setTimeout(()=>  
    {   console.log("First Step")
        setTimeout(()=>{
            console.log("Second Step")
            setTimeout(()=>{
                console.log("Third Step")
                setTimeout(()=>{
                    console.log("Fourth Step")
                },4000)
            },3000)
        },2000)
    },1000)