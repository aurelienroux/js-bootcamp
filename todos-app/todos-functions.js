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

  document.querySelector('#summary').appendChild(createSummaryDOM(uncompletedTodos))
  document.querySelector('#todos').innerHTML = ''

  let finalArray = filters.hideCompleted ? uncompletedTodos : filteredTodos
  finalArray.forEach((todo, index) => {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo, index))
  })
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
  const todoEl = document.createElement('div')
  const todoCheck = document.createElement('input')
  const todoText = document.createElement('span')
  const removeBtn = document.createElement('button')

  // create checkbox
  todoCheck.setAttribute('type', 'checkbox')
  todoCheck.checked = todo.completed
  todoEl.appendChild(todoCheck)

  todoCheck.addEventListener('change', () => {
    toggleTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  // create note text
  todoText.textContent = `${todo.text}`
  todoEl.appendChild(todoText)

  // create delete button
  removeBtn.textContent = 'delete'
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
  const summary = document.createElement('h3')
  summary.textContent = `You have ${uncompletedTodos.length} todos left`
  return summary
}