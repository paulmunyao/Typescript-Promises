// run async that returns a promise and resolves when some background work is complete 
// async function myFunction(){
    // await doAsyncWork()
    // A promise is returned from the async function
    // return aPromise
// }

// async function myFunction(){
//     return "myFunction"
// }

// Setting a string to be returned from the promise
// async function myFunction():Promise<string>{
//     return "myFunction"
// }

// Set a promise with return timeouts of 500ms and 1000ms
// Promise 500ms timeout
let promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Resolve promise early"),500)
});

// Set a promise with return timeouts of 1000ms
let promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Resolve promise later "),1000)
})
