// run async that returns a promise and resolves when some background work is complete 
async function myFunction(){
    await doAsyncWork()
    return aPromise
}