// Set up filters default object
const filters = {
  searchTerm: '',
  hideCompleted: false
}

// getFilters
// Arguments: none
// Return value: filters object
const getFilters = () => filters

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none
const setFilters = (updates) => {
  if (typeof(updates.searchTerm) === 'string') {
    filters.searchTerm = updates.searchTerm
  }
  if (typeof(updates.hideCompleted) === 'boolean') {
    filters.hideCompleted = updates.hideCompleted
  }
}

// Make sure to set up the exports
export {
  getFilters,
  setFilters
}