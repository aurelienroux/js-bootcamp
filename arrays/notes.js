const notes = [{
  title: 'title 1',
  body: 'body 1'
}, {
  title: 'title 2',
  body: 'body 2'
}, {
  title: 'title 3',
  body: 'body 3'
}]

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }

const findNote = function (notes, noteTitle) {
  return notes.find(function (note) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

let result = findNote(notes, 'title 2')
console.log(result)


// console.log(notes.length)
// console.log(notes)


/*
  objects are only equals to other objects if they are the exact same object
*/
// console.log({} === {}) // equals false

// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject) // equals true

// const index = notes.findIndex(function (note, index) {
//   console.log(note)
//   return note.title === 'title 3'
// })

// console.log(index)