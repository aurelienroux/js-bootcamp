'use strict'

let todos = getSavedTodos()

const filters = {
  searchTerm: '',
  hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-todos').addEventListener('input', (e) => {
  filters.searchTerm = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.currentTarget.checked
  renderTodos(todos, filters)
})

document.querySelector('#add-todos').addEventListener('submit', (e) => {
  e.preventDefault()
  if (e.target.elements.todoName.value.length > 0) {
    todos.push({
      id: uuidv4(),
      text: e.target.elements.todoName.value,
      completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.todoName.value = ''
  }
})