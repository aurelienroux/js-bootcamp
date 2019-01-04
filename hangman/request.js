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

const getCountry = (countryCode) => {
  return fetch(`http://restcountries.eu/rest/v2/all`).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } else {
      throw new Error('unable to fetch country')
    }
  }).then((data) => {
    const specCount = data.find(el => el.alpha2Code === countryCode) 
    if (specCount) {
      return specCount.name
    } else {
      return data
    }
  })
}