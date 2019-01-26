// rest syntax parameters **********************************
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

// spread operator **********************************
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

// destructuring **********************************
const myObj = {
  name: 'obj one',
  completed: false,
  text: 'example'
}

const printObj = ({ name, completed }) => {
  console.log(`${name} and ${completed} printed`)
}
printObj(myObj)

const { name: fullName, details = 'hello', ...other } = myObj

console.log(fullName);
console.log(details);
console.log(other);

const age = [65, 10, 35, 44]
// const [firstAge, secondAge, , lastAge] = age
const [firstAge, ...otherAges] = age

// console.log(firstAge, secondAge, lastAge);
console.log(firstAge, otherAges);
