const Person = function (firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

const me = new Person('aure', 'roux', 37)

console.log(me);
console.log(me.summary());
