const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('unable to fetch')
  }
}

const getCountry = async (countryCode) => {
  const response = await fetch(`http://restcountries.eu/rest/v2/all`)
  if (response.status === 200) {
    const data = await response.json()
    return data.find(el => el.alpha2Code === countryCode)
  } else {
    throw new Error('unable to get country')
  }
}

const getIpAdress = async (token) => {
  const response = await fetch(`https://ipinfo.io/json?token=${token}`)
  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('unable to fetch ip address')
  }
}