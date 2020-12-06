const primeNumbersGeneratorModule = require('./primeNumbersGenerator');
const primeNumbersGenerator = primeNumbersGeneratorModule.primeNumbersGenerator

const printPrimeMultiplicationsTable = (amount) => {
  const primeNumbers = primeNumbersGenerator(amount - 1)
  let multiplicationTableArray = []
  let numbersForTable = [1, ...primeNumbers]

  numbersForTable.forEach((num) => {
    let currentString = ''
    if (num === 1) {
      currentString += '|  '
    } else {
      currentString += `| ${num}`
    }
    primeNumbers.forEach((prime) => {
      currentString += `| ${num * prime}`
    })
    multiplicationTableArray.push(currentString)
  })

  const multiplicationTableString = multiplicationTableArray.join('|\n') + '|'
  console.log(multiplicationTableString);
}

module.exports = printPrimeMultiplicationsTable