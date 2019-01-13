const getPuzzle = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('unable to fetch')
  }
}

const getCountry = async (countryCode) => {
  const response = await fetch(`//restcountries.eu/rest/v2/all`)
  if (response.status === 200) {
    const data = await response.json()
    return data.find(el => el.alpha2Code === countryCode)
  } else {
    throw new Error('unable to get country')
  }
}

const getIpAdress = async () => {
  const response = await fetch(`//ipinfo.io/json?token=84d007d40f3419`)
  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('unable to fetch ip address')
  }
}

const getCurrentCountry = async () => {
  const address = await getIpAdress()
  country = await getCountry(address.country)
  return country
}

export { getPuzzle as default }