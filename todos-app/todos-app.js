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

const uncompletedTodos = todos.filter(function(todo) {
  return !todo.completed;
})

const summary = document.createElement('h3')
summary.textContent = `You have ${uncompletedTodos.length} todos left`
document.body.appendChild(summary)

todos.forEach(function(todo, index) {
  todoTag = document.createElement('p')
  todoPosition = index + 1
  todoTag.textContent = `${todoPosition}. ${todo.text}`
  document.body.appendChild(todoTag)
})

const button = document.querySelector('#add-todo')
button.addEventListener('click', function() {
  console.log('clicked');
})

const inputFilter = document.querySelector('#search-todos')
inputFilter.addEventListener('input', function(e) {
  console.log(e.target.value);
})