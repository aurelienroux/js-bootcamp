const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      resolve(data.puzzle);
    } else if (e.target.readyState === 4) {
      reject('Error on getting puzzle')
    }
  })
  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()
})


const getCountry = (countryCode) => new Promise((res, rej) => {
  const countryRequest = new XMLHttpRequest()

  countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      res(data.find(el => el.alpha2Code === countryCode))
    } else if (e.target.readyState === 4) {
      rej('Error on getting country')
    }
  })
  countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
  countryRequest.send()
})