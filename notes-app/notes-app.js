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

document.querySelector('#remove-all').addEventListener('click', function () {
  document.querySelectorAll('.notes').forEach(function (note) {
    note.remove()
  })
})

document.querySelector('#create-note').addEventListener('click', function () {
  console.log('create note');
})

document.querySelector('#search-text').addEventListener('input', function(e) {
  console.log(e.target.value);
})
