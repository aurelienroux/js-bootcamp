'use strict'

// fetch existing todos from localStorage
const getSavedTodos = function () {
  const JSONtodos = localStorage.getItem('todos')

  try {
    return JSONtodos ? JSON.parse(JSONtodos) : []
  } catch (error) {
    return []
  }
}

// save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// render application todos based on filters
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchTerm.toLowerCase()))
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

// remove todo by id
const removeTodo = (todoId) => {
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === todoId
  })
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// toggle completed value for a given todo
const toggleTodo = (todoId) => {
  let todo = todos.find((todo) => todo.id === todoId)
  if (todo) {
    todo.completed = !todo.completed
  }
}

// get the DOM element for an individual note
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
    saveTodos(todos)
    renderTodos(todos, filters)
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
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  return todoEl
}

// get the DOM elements for list summary
const createSummaryDOM = (uncompletedTodos) => {
  document.querySelector('#summary').innerHTML = ''
  const summary = document.createElement('h2')
  const plural = uncompletedTodos.length > 1 ? 's': ''
  summary.classList.add('list-title')
  summary.textContent = `You have ${uncompletedTodos.length} todo${plural} left`
  return summary
}