let getScore = function(name = 'Aure', score = 0) {
  return `Player ${name} has ${score} points`
}

let result = getScore(undefined, 100)
console.log(result);


let tip = function(amount, tip = .2) {
  return `A ${tip * 100}% tip on $${amount} would be $${amount * tip}`
}

let billOne = tip(20)
let billTwo = tip(15, .1)
let billThree = tip(10, .3)

console.log(billOne);
console.log(billTwo);
console.log(billThree);
