const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('unable to fetch')
    }
  }).then((data) => {
    return data.puzzle
  })
}


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