let promise = new Promise((resolve ,reject)=>{
    setTimeout(()=> resolve("Resolve promise earlier"))
})

let promise  = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve)
})