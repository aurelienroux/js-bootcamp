'use strict'

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
  const noteEl = document.createElement('div')
  const textEl = document.createElement('span')
  const button = document.createElement('button')

  // set up remove button
  button.textContent = 'x'
  noteEl.appendChild(button)

  // set note title text
  if (note.title > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'Unnamed note'
  }
  noteEl.appendChild(textEl)

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