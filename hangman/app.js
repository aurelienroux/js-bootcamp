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

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    console.log(data.puzzle);
  } else if (e.target.readyState === 4) {
    console.log('error');
  }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()