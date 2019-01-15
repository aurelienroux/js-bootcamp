import moment from 'moment';
import uuidv4 from 'uuid/v4';

let notes = []

// get existing notes from localStorage
const loadNotes = () => {
  const notesJSON = localStorage.getItem('notes')

  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (error) {
    return []
  }
}

// save notes to localStorage
const saveNotes = () => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// expose notes from module
const getNotes = () => notes

// create a new note
const createNote = () => {
  const id = uuidv4()
  const timeStamp = moment().valueOf()
  notes.push({
    id: id,
    title: '',
    body: '',
    createdAt: timeStamp,
    updatedAt: timeStamp
  })
  saveNotes()
}

// remove specific note from the list
const removeNote = (noteId) => {
  const noteIndex = notes.findIndex((note) => note.id === noteId)

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
    saveNotes()
  }
}

// Sort notes by one of three ways
const sortNotes = (sortBy) => {
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

// update notes
const updateNote = (id, updates) => {
  const note = notes.find((note) => note.id === id)

  if (!note) {
    return
  }
  if (typeof updates.title === 'string') {
    note.title = updates.title
    note.updatedAt = moment().valueOf()
  }
  if (typeof updates.body === 'string') {
    note.body = updates.body
    note.updatedAt = moment().valueOf()
  }

  saveNotes()
}

notes = loadNotes()

export {
  getNotes,
  createNote,
  removeNote,
  sortNotes,
  updateNote
}