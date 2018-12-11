const Hangman = function (word, remaininGuesses) {
  this.lettersArray = word.toLowerCase().split('')
  this.remaininGuesses = remaininGuesses
  this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''

  this.lettersArray.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  });
  return puzzle
}

Hangman.prototype.makeGuess = function (guessedLetter) {
  guessedLetter = guessedLetter.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guessedLetter);
  const isBadGuess = !this.lettersArray.includes(guessedLetter);

  if (isUnique) {
    this.guessedLetters.push(guessedLetter)
  }

  if (isUnique && isBadGuess) {
    this.remaininGuesses--
  }
}

const game1 = new Hangman('Cat', 2)

console.log(game1.getPuzzle());
console.log(game1.remaininGuesses);

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  console.log(game1.getPuzzle());
  console.log(game1.remaininGuesses);
})