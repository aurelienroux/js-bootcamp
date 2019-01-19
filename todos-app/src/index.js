// Add necessary imports
import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'
import { renderTodos } from './views'

// Render initial todos
renderTodos()

// Set up search text handler
document.querySelector('#search-todos').addEventListener('input', (e) => {
  setFilters({
    searchTerm: e.target.value
  })
  renderTodos()
})

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
  setFilters({
    hideCompleted: e.currentTarget.checked
  })
  renderTodos()
})

// Set up form submission handler
document.querySelector('#add-todos').addEventListener('submit', (e) => {
  const text = e.target.elements.todoName.value.trim()
  
  e.preventDefault()
  if (text.length > 0) {
    createTodo(text)
    renderTodos()
    e.target.elements.todoName.value = ''
  }
})

// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => {
  if (e.key === 'todos') {
    loadTodos()
    renderTodos()
  }
})