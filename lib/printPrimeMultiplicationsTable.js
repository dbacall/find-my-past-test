const primeNumbersGeneratorModule = require('./primeNumbersGenerator');
const primeNumbersGenerator = primeNumbersGeneratorModule.primeNumbersGenerator

const printPrimeMultiplicationsTable = (amount) => {
  const primeNumbers = primeNumbersGenerator(amount - 1)
  let multiplicationTableArray = []
  // multipliersForTable is necessary as the prime multiplication table includes multiplying the prime by 1 at the beginning of every row
  let multipliersForTable = [1, ...primeNumbers]

  multipliersForTable.forEach((num) => {
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