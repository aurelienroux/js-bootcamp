const printTeam = (teamName, coach, ...players) => {
  console.log(`
  Team: ${teamName}
  Coach: ${coach}
  Players: ${players.join(', ')}
  `)
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')

cities = ['Bordeaux', 'Lyon', 'Frejus']
citiesBis = ['Nantes', ...cities]

console.log(cities);
console.log(citiesBis);


let house = {
  bedrooms: 2,
  bathrooms: 1.5,
  yearBuilt: 2017
}
let newHouse = {
  basement: true,
  ...house,
  yearBuilt: 2020
}
console.log(house);
console.log(newHouse);


const person = {
  name: 'Aure',
  age: 37
}

const location = {
  city: 'Montreal',
  country: 'Canada'
}

const completePerson = {
  ...person,
  ...location
}

console.log(person);
console.log(location);
console.log(completePerson);
