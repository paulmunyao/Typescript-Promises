// run async that returns a promise and resolves when some background work is complete 
// async function myFunction(){
    // await doAsyncWork()
    // A promise is returned from the async function
    // return aPromise
// }

async function myFunction(){
    return "myFunction"
}

// Setting a string to be returned from the promise
async function myFunction():Promise<string>{
    return "myFunction"
}
