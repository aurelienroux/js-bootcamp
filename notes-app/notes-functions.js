// get existing notes from localStorage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem('notes')

  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

// save notes to localStorage
const saveNotes = function(notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// generate DOM structure for a note
const generateDOM = function (note) {
  const noteEl = document.createElement('p')

  if (note.title > 0) {
    noteEl.textContent = note.title
  } else {
    noteEl.textContent = 'Unnamed note'
  }

  return noteEl
}

// render notes
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
  })

  const notesContainer = document.querySelector('#notes-container')
  notesContainer.innerHTML = ''

  filteredNotes.forEach(function (note) {
    const noteEl = generateDOM(note)
    notesContainer.appendChild(noteEl)
  })
}