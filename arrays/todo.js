const todos = ['clean', 'eat', 'drink', 'sleep', 'run']

todos.splice(2, 1)
todos.push('train')
todos.shift()

console.log(`You have ${todos.length} todos`);

// printing with forEach method
todos.forEach(function(todo, index) {
  const num = index + 1
  console.log(`${num}. ${todo}`)
})

// printing with for loop
for (let count = 0; count < todos.length; count++) {
  const position = count + 1;
  console.log(`${position}. ${todos[count]}`)
}

// reverse
for (let count = todos.length - 1; count >= 0; count--) {
  const position = count + 1;
  console.log(`${position}. ${todos[count]}`)
}