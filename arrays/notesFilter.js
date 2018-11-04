const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habbits to work on',
  body: 'Exercice. eating a bit better'
}, {
  title: 'Office modification',
  body: 'get a new seat'
}]


const findNotes = function (notes, pattern) {
  return notes.filter(function (note) {
    const filteredTitle = note.title.toLowerCase().includes(pattern.toLowerCase())
    const filteredBody = note.body.toLowerCase().includes(pattern.toLowerCase())
    return filteredTitle || filteredBody
  })
}

const result = findNotes(notes, 'better')
console.log(result)