let num = 103.421

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
console.log(randomNum);

function makeGuess(num) {
  let min = 1;
  let max = 5;
  let target = Math.floor(Math.random() * (max - min + 1) + min)

  console.log(num, target);
  return target == num
}

console.log(makeGuess(2));
