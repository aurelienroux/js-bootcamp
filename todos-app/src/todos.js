import uuidv4 from 'uuid/v4';

// Setup the empty todos array
let todos = []

// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
  const JSONtodos = localStorage.getItem('todos')

  try {
    todos = JSONtodos ? JSON.parse(JSONtodos) : []
  } catch (error) {
    todos = []
  }
}

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (text) => {
  if (text.length > 0) {
    todos.push({
      id: uuidv4(),
      text,
      completed: false
    })
    saveTodos()
    // renderTodos(todos, filters)
  }
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (todoId) => {
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === todoId
  })
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
  saveTodos()
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (todoId) => {
  let todo = todos.find((todo) => todo.id === todoId)
  if (todo) {
    todo.completed = !todo.completed
  }
  saveTodos()
}

// Make sure to call loadTodos and setup the exports
loadTodos()

export { getTodos, createTodo, removeTodo, toggleTodo, loadTodos }