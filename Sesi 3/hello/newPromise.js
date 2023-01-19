// New Promise

setTimeout(() => {
    console.log("Tick")
}, 1000);

const doSomething = function(){
    return new Promise((resolve, reject) => {
        /*
        TODO:try to do something asynchronously 
        and resolve or reject according to 
        operation result.
        */
    })
};

let doIt = doSomething()

doIt.then(response => {

})

doIt.catch(error => {

})


const setTimeoutPromise = (duration)=>
new Promise((resolve, reject)=>{
    setTimeout(resolve, duration);
});

setTimeoutPromise(1000).then(() => 
console.log("tick"));

