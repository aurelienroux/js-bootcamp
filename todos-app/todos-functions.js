'use strict'

// fetch existing todos from localStorage
const getSavedTodos = function () {
  const JSONtodos = localStorage.getItem('todos')

  if (JSONtodos !== null) {
    return JSON.parse(JSONtodos)
  } else {
    return []
  }
}

// save todos to localStorage
const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// render application todos based on filters
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchTerm.toLowerCase())
  })

  const uncompletedTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
  })

  document.querySelector('#summary').appendChild(createSummaryDOM(uncompletedTodos))
  document.querySelector('#todos').innerHTML = ''

  let finalArray = filters.hideCompleted ? uncompletedTodos : filteredTodos
  finalArray.forEach(function (todo, index) {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo, index))
  })
}

// remove todo by id
const removeTodo = function (todoId) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === todoId
  })
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// toggle completed value for a given todo
const toggleTodo = function (todoId) {
  let todo = todos.find(function (todo) {
    return todo.id === todoId
  })
  if (todo !== undefined) {
    todo.completed = !todo.completed
  }
}

// get the DOM element for an individual note
const generateTodoDOM = function (todo) {
  const todoEl = document.createElement('div')
  const todoCheck = document.createElement('input')
  const todoText = document.createElement('span')
  const removeBtn = document.createElement('button')

  // create checkbox
  todoCheck.setAttribute('type', 'checkbox')
  todoCheck.checked = todo.completed
  todoEl.appendChild(todoCheck)

  todoCheck.addEventListener('change', function () {
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

  removeBtn.addEventListener('click', function () {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  return todoEl
}

// get the DOM elements for list summary
const createSummaryDOM = function (uncompletedTodos) {
  document.querySelector('#summary').innerHTML = ''
  const summary = document.createElement('h3')
  summary.textContent = `You have ${uncompletedTodos.length} todos left`
  return summary
}