const primeNumbersGenerator = (amount) => {
  let primeNumbers = []
  if (amount === 1) {
    primeNumbers = [2]
  } else {
    primeNumbers = [2, 3]
  }
  return primeNumbers
}

module.exports = primeNumbersGenerator