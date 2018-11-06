const p = document.querySelector('p')
console.log(p);

const allP = document.querySelectorAll('p')
console.log(allP);

allP.forEach(function(p) {
  console.log(p.textContent)
  p.textContent = 'changed'
  console.log(p.textContent)
  // p.remove()
})