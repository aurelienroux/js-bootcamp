let notes = getSavedNotes()

const filters = {
  searchTerm: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function () {
  notes.push({
    id: uuidv4(),
    title: '',
    body: ''
  })
  saveNotes(notes)
  renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchTerm = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value);
})