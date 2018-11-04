const todos = [{
  text: 'Order food',
  completed: false
}, {
  text: 'clean room',
  completed: false
}, {
  text: 'exercice',
  completed: false
}, {
  text: 'do work',
  completed: false
}]

const deleteTodo = function (todos, toRemove) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === toRemove.toLowerCase()
  })
  if (index > -1) {
    todos.splice(index, 1)
  }
}

// let deleteTodo = function (todos, toRemove) {
//   const index = todos.findIndex(function (todo) {
//     return todo.text.toLowerCase() === toRemove.toLowerCase()
//   })
//   if (index > -1) {
//     todos[index].completed = true
//   }
// }

console.log(todos)
deleteTodo(todos, 'exercie')
console.log(todos)