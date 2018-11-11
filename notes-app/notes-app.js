let notes = []

const notesJSON = localStorage.getItem('notes')
if (notesJSON !== null) {
  notes = JSON.parse(notesJSON)
}

const filters = {
  searchTerm: ''
}

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
  })

  const notesContainer = document.querySelector('#notes-container')
  notesContainer.innerHTML = ''

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement('p')
    if (note.title > 0) {
      noteEl.textContent = note.title
    } else {
      noteEl.textContent = 'Unnamed note'
    }
    notesContainer.appendChild(noteEl)
  })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function () {
  notes.push({
    title: '',
    body: ''
  })
  localStorage.setItem('notes', JSON.stringify(notes))
  renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchTerm = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value);
})