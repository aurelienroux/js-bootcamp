let isOneVegan = false
let isTwoVegan = true

if (isOneVegan && isTwoVegan) {
  console.log('offer vegan only');
} else if (isOneVegan || isTwoVegan) {
  console.log('offer some vegan');
} else {
  console.log('offer no vegan');
}