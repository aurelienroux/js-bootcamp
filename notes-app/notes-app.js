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

document.querySelector('button').addEventListener('click', function (e) {
  console.log(e);
  e.target.textContent = 'hey'
})