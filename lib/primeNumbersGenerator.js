const primeNumbersGenerator = (amount) => {
  let primeNumbers = []
  if (amount === 1) {
    primeNumbers = [2]
  } else {
    primeNumbers = [2, 3]
    let potentialPrime = 5
    while (primeNumbers.length < amount) {
      let isPrime = false
      for (let i = 2; i < potentialPrime / 2; i++) {
        if (potentialPrime % i === 0) {
          potentialPrime++
          isPrime = false
          break
        } else {
          isPrime = true
        }
      }
      if (isPrime) {
        primeNumbers.push(potentialPrime)
        potentialPrime++
      }
    }
  }
  return primeNumbers
}

module.exports = { primeNumbersGenerator }