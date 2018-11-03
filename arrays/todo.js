const todos = ['clean', 'eat', 'drink', 'sleep', 'run']

todos.splice(2, 1)
todos.push('train')
todos.shift()

console.log(`You have ${todos.length} todos`);
console.log(todos);
