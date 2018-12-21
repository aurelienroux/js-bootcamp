// closer example
const createCounter = () => {
  let count = 0
  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get() {
      return count
    }
  }
}
const counter = createCounter();
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get());

// Adder function
const adder = (a) => {
  return (b) => {
    return a + b
  }
}
const add5 = adder(5)
console.log(add5(2));
const add7 = adder(7)
console.log(add7(2));

// tipper function
const tipper = (tip) => {
  return (amount) => {
    return {
      getTotal() {
        return amount + (amount * tip)
      },
      getTip() {
        return amount * tip
      }
    }
  }
}
const tip15 = tipper(.15)
console.log(tip15(13).getTip());
console.log(tip15(13).getTotal());
