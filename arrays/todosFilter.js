const todos = [{
  text: 'Order food',
  completed: false
}, {
  text: 'clean room',
  completed: true
}, {
  text: 'exercice',
  completed: false
}, {
  text: 'do work',
  completed: true
}, {
  text: 'buy food',
  completed: false
}]

const remainingTodos = function(todos) {
  return todos.filter(function(todo) {
    return !todo.completed
  })
}

const result = remainingTodos(todos)
console.log(result);
