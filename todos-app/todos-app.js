let todos = getSavedTodos()

const filters = {
  searchTerm: '',
  hideCompleted: false
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
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.todoName.value = ''
  }
})