import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
  const filters = getFilters()
  const filteredTodos = getTodos().filter((todo) => todo.text.toLowerCase().includes(filters.searchTerm.toLowerCase()))
  const uncompletedTodos = filteredTodos.filter((todo) => !todo.completed)
  const todosEl = document.querySelector('#todos')

  document.querySelector('#summary').appendChild(createSummaryDOM(uncompletedTodos))
  todosEl.innerHTML = ''

  let finalArray = filters.hideCompleted ? uncompletedTodos : filteredTodos

  if (finalArray.length > 0) {
    finalArray.forEach((todo, index) => {
      todosEl.appendChild(generateTodoDOM(todo, index))
    })
  } else {
    const emptyMessage = document.createElement('p')
    emptyMessage.textContent = "No to-dos to show"
    emptyMessage.classList.add('empty-message')
    todosEl.appendChild(emptyMessage)
  }
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('label')
  const containerEl = document.createElement('div')
  const todoCheck = document.createElement('input')
  const todoText = document.createElement('span')
  const removeBtn = document.createElement('button')

  // create checkbox
  todoCheck.setAttribute('type', 'checkbox')
  todoCheck.checked = todo.completed
  containerEl.appendChild(todoCheck)

  todoCheck.addEventListener('change', () => {
    toggleTodo(todo.id)
    renderTodos()
  })

  // create note text
  todoText.textContent = `${todo.text}`
  containerEl.appendChild(todoText)

  // Setup container
  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoEl.appendChild(containerEl)

  // create delete button
  removeBtn.textContent = 'delete'
  removeBtn.classList.add('button', 'button--text')
  todoEl.appendChild(removeBtn)

  removeBtn.addEventListener('click', () => {
    removeTodo(todo.id)
    renderTodos()
  })

  return todoEl
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const createSummaryDOM = (uncompletedTodos) => {
  document.querySelector('#summary').innerHTML = ''
  const summary = document.createElement('h2')
  const plural = uncompletedTodos.length > 1 ? 's': ''
  summary.classList.add('list-title')
  summary.textContent = `You have ${uncompletedTodos.length} todo${plural} left`
  
  return summary
}

// Make sure to set up the exports
export { generateTodoDOM, renderTodos, createSummaryDOM }