// *** var can recreate same variable
var firstName = 'John'
firstName = 'Bob'
var firstName = 'Jane'
// console.log(firstName)


// *** let/const is block scope
if (10 == 10) {
  let firstName = 'Al'
}
console.log(firstName)


// *** var is function scoped
const setName = function () {
  var firstName = 'Steve'
}
setName()
console.log(firstName)


// *** let/const do not hoist
console.log(age)
var age

console.log(ageTwo);
let ageTwo