'use strict'

// get existing notes from localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')

  return notesJSON ? JSON.parse(notesJSON) : []
}

// save notes to localStorage
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// remove specific note from the list
const removeNote = (noteId) => {
  const noteIndex = notes.findIndex((note) => note.id === noteId)

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// generate DOM structure for a note
const generateDOM = (note) => {
  const noteEl = document.createElement('div')
  const textEl = document.createElement('a')
  const button = document.createElement('button')

  // set up remove button
  button.textContent = 'x'
  noteEl.appendChild(button)
  button.addEventListener('click', () => {
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

// Sort notes by one of three ways
const sortNotes = (notes, sortBy) => {
  if (sortBy == 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy == 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy == 'byAlphabet') {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  } else {
    return notes
  }
}

// render notes
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy)
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchTerm.toLowerCase()))

  const notesContainer = document.querySelector('#notes-container')
  notesContainer.innerHTML = ''

  filteredNotes.forEach((note) => {
    const noteEl = generateDOM(note)
    notesContainer.appendChild(noteEl)
  })
}

const lastEditedDate = (timeStamp) => `Last edited ${moment(timeStamp).fromNow()}`