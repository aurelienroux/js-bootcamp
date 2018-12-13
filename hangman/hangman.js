class Hangman {
  constructor(word, remaininGuesses) {
    this.lettersArray = word.toLowerCase().split('')
    this.remaininGuesses = remaininGuesses
    this.guessedLetters = []
    this.status = 'playing'
    this.message = `Playing. Guesses left ${this.remaininGuesses}`
  }

  getPuzzle() {
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

  makeGuess(guessedLetter) {
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

  statusUpdate() {
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

  printMessage() {
    if (this.status === 'playing') {
      return `Playing. guesses left: ${this.remaininGuesses}`
    } else if (this.status === 'failed') {
      return `Nice try. word was "${this.lettersArray.join('')}"`
    } else {
      return `Great!`
    }
  }
}
