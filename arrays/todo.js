const todos = ['clean', 'eat', 'drink', 'sleep', 'run']

todos.splice(2, 1)
todos.push('train')
todos.shift()

console.log(`You have ${todos.length} todos`);

todos.forEach(function(todo, index) {
  const num = index + 1
  console.log(`${num}. ${todo}`);
})