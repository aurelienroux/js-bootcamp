const Hangman = function (word, remaininGuesses) {
  this.lettersArray = word.toLowerCase().split('')
  this.remaininGuesses = remaininGuesses
  this.guessedLetters = []
  this.status = 'playing'
  this.message = `Playing. Guesses left ${this.remaininGuesses}`
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

  if (this.status !== 'playing') {
    return;
  }

  if (isUnique) {
    this.guessedLetters.push(guessedLetter)
  }

  if (isUnique && isBadGuess) {
    this.remaininGuesses--
  }

  this.statusUpdate()
  this.printMessage()
}

Hangman.prototype.statusUpdate = function () {
  const win = this.lettersArray.every((letter) => {
    return this.guessedLetters.indexOf(letter) > -1
  })

  if (win && this.remaininGuesses >= 1) {
    this.status = 'finished'
  }

  if (this.remaininGuesses === 0) {
    this.status = 'failed'
  }
}

Hangman.prototype.printMessage = function () {

  if (this.status === 'playing') {
    return `Playing. guesses left: ${this.remaininGuesses}`
  } else if (this.status === 'failed') {
    return `Nice try. word was "${this.lettersArray.join('')}"`
  } else {
    return `Great!`
  }
}