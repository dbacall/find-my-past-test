const primeNumbersGenerator = (amount) => {
  let primeNumbers = []
  if (amount === 1) {
    primeNumbers = [2]
  } else {
    primeNumbers = [2, 3]
    let x = 5
    while (primeNumbers.length < amount) {
      let notPrime = true
      for (let i = 2; i < x / 2; i++) {
        if (x % i === 0) {
          x++
          notPrime = true
          break
        } else {
          notPrime = false
        }
      }
      if (notPrime) {
        continue
      } else {
        primeNumbers.push(x)
        x++
      }
    }
  }
  return primeNumbers
}

module.exports = primeNumbersGenerator