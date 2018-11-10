const notes = [{
  title: 'My next trip at',
  body: 'I would like to go to Spain'
}, {
  title: 'Habbits to work on',
  body: 'Exercice. eating a bit better'
}, {
  title: 'Office modification',
  body: 'get a new seat'
}]

const renderNotes = function (notes, searchTerm) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const notesContainer = document.querySelector('#notes-container')
  notesContainer.innerHTML = ''

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement('p')
    noteEl.textContent = note.title
    notesContainer.appendChild(noteEl)
  })
}

renderNotes(notes, '')


document.querySelector('#create-note').addEventListener('click', function () {
  console.log('create note')
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  renderNotes(notes, e.target.value)
})

document.querySelector('#name-form').addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(e.target.elements.firstName.value)
  e.target.elements.firstName.value = ''
})