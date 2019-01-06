const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('unable to fetch')
  }
}

const getCountry = (countryCode) => {
  return fetch(`http://restcountries.eu/rest/v2/all`).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } else {
      throw new Error('unable to fetch country')
    }
  }).then((data) => {
    return data.find(el => el.alpha2Code === countryCode)
  })
}

const getIpAdress = (token) => {
  return fetch(`https://ipinfo.io/json?token=${token}`).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } else {
      throw new Error('unable to fetch ip address')
    }
  })
}