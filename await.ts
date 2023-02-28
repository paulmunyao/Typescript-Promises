let promiseOne = new Promise((resolve ,reject)=>{
    setTimeout(()=> resolve("Resolve promise earlier"))
});

let promiseTwo  = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("Resolve promise later on"))
});

async function asyncAwaitFunction (): Promise<any>