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

const renderTodos = function (todos, searchTerm) {
  document.querySelector('#todos').innerHTML = ''
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  })
  filteredTodos.forEach(function (todo, index) {
    todoEl = document.createElement('p')
    todoPosition = index + 1
    todoEl.textContent = `${todoPosition}. ${todo.text} (${todo.completed})`
    document.querySelector('#todos').appendChild(todoEl)
  })
  document.querySelector('#summary').innerHTML = ''
  const uncompletedTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
  })
  const summary = document.createElement('h3')
  summary.textContent = `You have ${uncompletedTodos.length} todos left`
  document.querySelector('#summary').appendChild(summary)
}
renderTodos(todos, '')

document.querySelector('#search-todos').addEventListener('input', function (e) {
  renderTodos(todos, e.target.value)
})

document.querySelector('#add-todos').addEventListener('submit', function (e) {
  e.preventDefault()
  todos.push({
    text: e.target.elements.todoName.value,
    completed: false
  })
  e.target.elements.todoName.value = ''
  renderTodos(todos, '')
})