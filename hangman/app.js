const puzzleNode = document.querySelector('#puzzle')
const guessesNode = document.querySelector('#guesses')
const game1 = new Hangman('Car parts', 2)

puzzleNode.textContent = game1.puzzle
guessesNode.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleNode.textContent = game1.puzzle
  guessesNode.textContent = game1.statusMessage
})

getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
})


// const countryRequest = new XMLHttpRequest()
// countryRequest.addEventListener('readystatechange', (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText)
//     country = data.find(el => el.alpha2Code === 'CA')
//     console.log(country.name);
//   } else if (e.target.readyState === 4) {
//     console.log('unable to fecth data');
//   }
// })
// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()