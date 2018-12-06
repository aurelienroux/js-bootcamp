const getTip = (amount) => {
  if (typeof amount === 'number') {
    return amount * .25
  } else {
    throw Error('arg must be a number')
  }
}

try {
  console.log(getTip(true));
} catch (e) {
  console.log('Catch blog is running: ', e)
}