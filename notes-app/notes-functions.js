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
const saveNotes = function (notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// remove specific note from the list
const removeNote = function (noteId) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === noteId
  })

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// generate DOM structure for a note
const generateDOM = function (note) {
  const noteEl = document.createElement('div')
  const textEl = document.createElement('a')
  const button = document.createElement('button')

  // set up remove button
  button.textContent = 'x'
  noteEl.appendChild(button)
  button.addEventListener('click', function () {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })

  // set note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'Unnamed note'
  }
  textEl.setAttribute('href', `/edit.html#${note.id}`)
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

const lastEditedDate = function (timeStamp) {
  return `Last edited ${moment(timeStamp).fromNow()}`
}