const calcGrad = function (score, maxScore = 20) {

  if (typeof score !== 'number' || typeof maxScore !== 'number') {
    throw Error('Please provide numbers as args')
  }
  
  const percent = score / maxScore * 100
  let gradeLetter

  if (percent >= 90) {
    gradeLetter = 'A'
  } else if (percent >= 80) {
    gradeLetter = 'B'
  } else if (percent >= 70) {
    gradeLetter = 'C'
  } else if (percent >= 60) {
    gradeLetter = 'D'
  } else {
    gradeLetter = 'F'
  }

  return `${score}/${maxScore} -> You got a ${gradeLetter} (${percent}%)`
}

try {
  console.log(calcGrad(15))
  console.log(calcGrad(16, true))
} catch (error) {
  console.log(`${error.name}: ${error.message}`)
}