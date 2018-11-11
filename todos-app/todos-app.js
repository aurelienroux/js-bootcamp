let todos = []

const JSONtodos = localStorage.getItem('todos')
if (JSONtodos !== null) {
  todos = JSON.parse(JSONtodos)
}

const filters = {
  searchTerm: '',
  hideCompleted: false
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchTerm.toLowerCase())
  })

  const uncompletedTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
  })

  document.querySelector('#todos').innerHTML = ''

  document.querySelector('#summary').innerHTML = ''
  const summary = document.createElement('h3')
  summary.textContent = `You have ${uncompletedTodos.length} todos left`
  document.querySelector('#summary').appendChild(summary)

  let finalArray = filters.hideCompleted ? uncompletedTodos : filteredTodos
  finalArray.forEach(function (todo, index) {
    todoEl = document.createElement('p')
    todoPosition = index + 1
    todoEl.textContent = `${todoPosition}. ${todo.text}`
    document.querySelector('#todos').appendChild(todoEl)
  })
}
renderTodos(todos, filters)

document.querySelector('#search-todos').addEventListener('input', function (e) {
  filters.searchTerm = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
  filters.hideCompleted = e.currentTarget.checked
  renderTodos(todos, filters)
})

document.querySelector('#add-todos').addEventListener('submit', function (e) {
  e.preventDefault()
  if (e.target.elements.todoName.value.length > 0) {
    todos.push({
      text: e.target.elements.todoName.value,
      completed: false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    e.target.elements.todoName.value = ''
    renderTodos(todos, filters)
  }
})