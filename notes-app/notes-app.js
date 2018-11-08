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

const p = document.querySelector('p')
console.log(p);

const allP = document.querySelectorAll('p')
console.log(allP);

// allP.forEach(function(p) {
//   console.log(p.textContent)
//   p.textContent = 'changed'
//   console.log(p.textContent)
//   // p.remove()
// })

// Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'created from js'
document.querySelector('body').append(newParagraph)