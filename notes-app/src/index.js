import {
  getNotes,
  createNote,
  removeNote,
  sortNotes,
  updateNote
} from './notes';
import { getFilters, setFilters } from './filters'

// console.log(getNotes());
// createNote();


// updateNote('6f2cafbd-b2ff-4e33-819e-58d8746a0f1b', {
//   title: 'my new title',
//   body: 'my new body'
// })

// console.log(getNotes());

console.log(getFilters());
setFilters({
  searchText: 'Office',
  sortBy: 'byCreated'
})
console.log(getFilters());
