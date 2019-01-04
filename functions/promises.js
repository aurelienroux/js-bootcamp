// Callback
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2)
    } else {
      callback('number must be provided')
    }
  }, 2000);
}

getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('callback hell', data);
      }
    })
  }
})

// Promise
const getDataPromise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('number must be provided')
    }, 1000)
  })
}

getDataPromise(2).then((data) => {
  getDataPromise(data).then((data) => {
    console.log('promise data', data);
  }, (err) => {
    console.log(err);
  })
}, (err) => {
  console.log('promise error', err);
})

getDataPromise(10).then((data) => {
  return getDataPromise(data)
}).then((data) => {
  return 'test test'
}).then((data) => {
  console.log('last promise return', data);
}).catch((err) => {
  console.log(err);
})