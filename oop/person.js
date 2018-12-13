class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }
  getBio() {
    let bio = `${this.firstName} ${this.lastName} is ${this.age}. `
    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}.`
    });
    return bio
  }
  setName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }
}
const me = new Person('Aure', 'Roux', 37, ['fitness', 'guitar'])
const Dadou = new Person('Dadou', 'Roux', 38)

console.log(me.getBio());
console.log(Dadou.getBio());