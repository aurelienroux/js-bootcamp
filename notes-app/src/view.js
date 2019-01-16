import moment from 'moment';
import { getFilters } from './filters';
import { sortNotes, getNotes } from './notes';

// generate DOM structure for a note
const generateDOM = (note) => {
  const noteEl = document.createElement('a')
  const textEl = document.createElement('p')
  const statusEl = document.createElement('p')

  // set note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'Unnamed note'
  }
  textEl.classList.add('list-item__title')
  noteEl.appendChild(textEl)

  // Setup the link
  noteEl.setAttribute('href', `/edit.html#${note.id}`)
  noteEl.classList.add('list-item')

  // Setup status message
  statusEl.textContent = lastEditedDate(note.updatedAt)
  statusEl.classList.add('list-item__subtitle')
  noteEl.appendChild(statusEl)

  return noteEl
}

// render notes
const renderNotes = () => {
  const notesContainer = document.querySelector('#notes-container')
  const filters = getFilters();
  const notes = sortNotes(filters.sortBy)
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

  notesContainer.innerHTML = ''

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generateDOM(note)
      notesContainer.appendChild(noteEl)
    })
  } else {
    const emptyMessage = document.createElement('p')
    emptyMessage.textContent = 'there are no notes for the moment'
    emptyMessage.classList.add('empty-message')
    notesContainer.appendChild(emptyMessage)
  }
}

// initialize 
const initializeEditPage = (noteId) => {
  const titleElement = document.querySelector('#note-title')
  const dateElement = document.querySelector('#note-date')
  const bodyElement = document.querySelector('#note-body')

  const notes = getNotes()
  const note = notes.find((note) => note.id === noteId)

  if (!note) {
    location.assign('/index.html')
  }

  titleElement.value = note.title
  bodyElement.value = note.body
  dateElement.textContent = lastEditedDate(note.updatedAt)
}

// generate last edited message
const lastEditedDate = (timeStamp) => `Last edited ${moment(timeStamp).fromNow()}`

export { generateDOM, renderNotes, lastEditedDate, initializeEditPage }