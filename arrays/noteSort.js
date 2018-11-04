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

const sortNotes = function (notes) {
  return notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

let result = sortNotes(notes)
console.log(result)
