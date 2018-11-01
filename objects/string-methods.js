let name = '  John Doe   '

// Length property
console.log(name.length);

// convert to uppercase
console.log(name.toUpperCase());

// convert to lowercase
console.log(name.toLowerCase());

// Includes method
let password = 'abc123asdf098'
console.log(name.includes('password'));

// Trim method
console.log(name.trim());

// isValidPassword
// length is more than 8 and doesnt contains password
function isValidPassword(string) {
  return string.length > 8 && !string.includes('password')
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!$%^^%$#'));
console.log(isValidPassword('abc12323455432password'));
