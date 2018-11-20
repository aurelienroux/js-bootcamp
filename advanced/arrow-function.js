const square = (num) => {
  return num * num
}

console.log(square(5));

const people = [{
  name: 'Nathan',
  age: 4
}, {
  name: "Adrien",
  age: 5
}, {
  name: 'David',
  age: 39
}, {
  nae: 'Aure',
  age: 37
}]

const under10 = people.filter((pers) => pers.age < 10)
const over10 = people.filter((pers) => pers.age > 10)

const who = people.find((people) => people.name == 'Adrien')

console.log(under10);
console.log(over10);
console.log(`Winner is ${who.name}`);
