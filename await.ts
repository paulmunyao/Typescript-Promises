let promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolve promise earlier"));
});

let promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolve promise later on"));
});

async function asyncAwaitFunction(): Promise<any> {
  let firstResult = await promiseOne;
  let secondResult = await promiseTwo;
  return firstResult + secondResult;
}

// logs the results
asyncAwaitFunction().then((result) => console.log(result));
