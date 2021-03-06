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
  const text = e.target.elements.todoName.value.trim()

  e.preventDefault()
  if (text.length > 0) {
    todos.push({
      id: uuidv4(),
      text,
      completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.todoName.value = ''
  }
})