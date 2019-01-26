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
const setFilters = ({ searchTerm, hideCompleted }) => {
  if (typeof(searchTerm) === 'string') {
    filters.searchTerm = searchTerm
  }
  if (typeof(hideCompleted) === 'boolean') {
    filters.hideCompleted = hideCompleted
  }
}

// Make sure to set up the exports
export {
  getFilters,
  setFilters
}