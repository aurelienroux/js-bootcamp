const puzzleNode = document.querySelector('#puzzle')
const guessesNode = document.querySelector('#guesses')
const resetButton = document.querySelector('#reset')
let game

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  game.makeGuess(guess)
  renderPuzzle()
})

const renderPuzzle = () => {
  puzzleNode.textContent = game.puzzle
  guessesNode.textContent = game.statusMessage
}

const startPuzzle = async () => {
  const puzzle = await getPuzzle('3')
  game = new Hangman(puzzle, 5)
  renderPuzzle()
}

startPuzzle()

resetButton.addEventListener('click', startPuzzle)

getCurrentCountry().then((country) => {
  console.log(country.name);
}).catch((err) => {
  console.log(err);
})