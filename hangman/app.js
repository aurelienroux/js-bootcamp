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

getPuzzle('3').then((puzzle) => {
  console.log(puzzle);
}).catch((err) => {
  console.log(err);
})

getCountry('FR').then((country) => {
  console.log(country);
}).catch((err) => {
  console.log(err);
})