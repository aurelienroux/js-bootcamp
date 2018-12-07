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

Hangman.prototype.guessOne = function (guessedLetter) {
  this.guessedLetters.push(guessedLetter)
  this.remaininGuesses = this.remaininGuesses - 1

  return this.getPuzzle()
}

const gameOne = new Hangman('javascript', 10)
const gameTwo = new Hangman('React Dom', 10)

console.log(gameOne);
console.log(gameOne.getPuzzle());
console.log(gameOne.guessOne('a'));

