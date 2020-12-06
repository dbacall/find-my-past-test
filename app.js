const printPrimeMultiplicationsTable = require('./lib/printPrimeMultiplicationsTable')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`How big would you like your table to be? (Please enter one number, format will be number * number)`, (number) => {
  printPrimeMultiplicationsTable(number)
  readline.close()
})

readline.on("close", function () {
  console.log("\nSee ya");
  process.exit(0);
});
