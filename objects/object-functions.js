let bookOne = {
  author: 'Stephen King',
  title: 'Shining',
  pageCount: 326
}

let bookTwo = {
  author: 'Robert Ludlum',
  title: 'Jason Bourne',
  pageCount: 524
}

let getSummary = function (book) {
  return {
    summary : `${book.title} by ${book.author}`,
    pageTotal: `${book.title} is ${book.pageCount} pages`
  }
}

let bookSummary = getSummary(bookOne);

console.log(bookSummary.summary);
console.log(bookSummary.pageTotal);

// */*/*/*/*/*/*/*/*/

let actualTemp = 74

let convertTemp = function(temp) {
  return {
    fahrenheit: temp,
    celcius: (temp - 32) * 5 / 9,
    kelvin: (temp - 32) * 5 / 9 + 273.15
  }
}

let result = convertTemp(actualTemp)

console.log(result);
