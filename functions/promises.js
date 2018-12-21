// Callback
const getDataCallback = (callback) => {
  setTimeout(() => {
    console.log(`the time is up`);
  }, 2000);
}

getDataCallback((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})

// Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('this is promise data');
    reject('this is promise error')
  }, 2500)
})

myPromise.then((data) => {
  console.log(data);
}, (err) => {
  console.log(err);
})