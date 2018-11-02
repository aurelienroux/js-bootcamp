const calcGrad = function (score, maxScore = 20) {
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

console.log(calcGrad(19))
console.log(calcGrad(17))
console.log(calcGrad(16.5))
console.log(calcGrad(15))
console.log(calcGrad(13))
console.log(calcGrad(12.5))
console.log(calcGrad(10))