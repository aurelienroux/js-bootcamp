const products = ['item']
const product = products[0]

// Truthy - values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN

if (product) {
  console.log(`found`)
} else {
  console.log(`not found`)
}