const primeNumbersGenerator = (amount) => {
  let primeNumbers = []
  if (amount > 0) {
    if (amount === 1) {
      primeNumbers = [2]
    } else {
      primeNumbers = [2, 3]

      let potentialPrime = 5

      while (primeNumbers.length < amount) {
        let { isPrime, number } = primeNumberChecker(potentialPrime)
        if (isPrime) {
          primeNumbers.push(number)
          potentialPrime++
        } else {
          potentialPrime++
        }
      }
    }
  }

  return primeNumbers
}

const primeNumberChecker = (number) => {
  let isPrime = false

  for (let i = 2; i < number / 2; i++) {
    if (number % i === 0) {
      isPrime = false
      break
    } else {
      isPrime = true
    }
  }

  return {
    isPrime,
    number
  }
}

module.exports = { primeNumbersGenerator }