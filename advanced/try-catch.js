const getTip = (amount) => {
  if (typeof amount === 'number') {
    return amount * .25
  } else {
    throw Error('arg must be a number')
  }
}

try {
  console.log(getTip(1));
} catch (e) {
  console.log('catch blog is running')
}