console.log("Hello world 1");

setTimeout(()=>{
    console.log("Hello World 2")
}, 3000)

console.log("Hello World 3");
console.log("Hello World 4");


// promise

let obj = new Promise((resolve, reject)=>{
    let num = 3 + 7;
    setTimeout(()=>{
        if(num === 10){
            resolve("Yes")
        }
        else{
            reject("No");
        }
    }, 4000)  

})
console.log(obj);

obj.then((message)=>{
    console.log("Resolved", message);
}).catch((error)=>{
    console.log("Rejected")
})