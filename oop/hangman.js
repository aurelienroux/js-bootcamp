const Hangman = function(word, remaininGuesses) {
  this.word = word
  this.remaininGuesses = remaininGuesses
}

const gameOne = new Hangman('computer', 10)
const gameTwo = new Hangman('javascript', 7)

console.log(gameOne);
console.log(gameTwo);
