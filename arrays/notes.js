const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop());
// notes.push('a new note')

// console.log(notes.shift());
// notes.unshift('first note')

// notes.splice(1, 1, 'splice')

notes.forEach(function (item, index) {
  console.log(index);
  console.log(item)
})

console.log(notes.length);
console.log(notes);
