const printPrimeMultiplicationsTable = require('./lib/printPrimeMultiplicationsTable')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`How big would you like your table to be? (Please enter a number bigger than or equal to 1)`, (number) => {
  printPrimeMultiplicationsTable(number)
  readline.close()
})

readline.on("close", function () {
  console.log("\nSee ya");
  process.exit(0);
});
