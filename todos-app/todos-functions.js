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

// get the DOM element for an individual note
const generateTodoDOM = function (todo, index) {
  todoEl = document.createElement('p')
  todoPosition = index + 1
  todoEl.textContent = `${todoPosition}. ${todo.text}`
  return todoEl
}

// get the DOM elements for list summary
const createSummaryDOM = function (uncompletedTodos) {
  document.querySelector('#summary').innerHTML = ''
  const summary = document.createElement('h3')
  summary.textContent = `You have ${uncompletedTodos.length} todos left`
  return summary
}