const puzzleNode = document.querySelector('#puzzle')
const guessesNode = document.querySelector('#guesses')
const game1 = new Hangman('Cat', 2)

puzzleNode.textContent = game1.getPuzzle()
guessesNode.textContent = game1.remaininGuesses

console.log(game1.status);

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)

  puzzleNode.textContent = game1.getPuzzle()
  guessesNode.textContent = game1.remaininGuesses
})