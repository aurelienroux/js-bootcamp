// Promise
const getDataPromise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('number must be provided')
    }, 1000)
  })
}

const processData = async () => {
  let wow = await getDataPromise(4)
  wow = await getDataPromise(wow)
  wow = await getDataPromise(wow)

  return wow
}

processData()
.then(data => console.log('data', data))
.catch(err => console.log(err))
