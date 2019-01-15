import moment from 'moment';
import  uuidv4 from 'uuid/v4';

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

notes = loadNotes()

export { getNotes, createNote }