
function f1(){
    console.log("Hello")
}


function f2(name,callback){
    console.log(`${name}`)
    callback()
}



f2("Hi",f1)