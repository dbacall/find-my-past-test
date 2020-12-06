const chai = require('chai');
const { expect } = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const printPrimeMultiplicationTable = require('../lib/printPrimeMultiplicationsTable')
const primeNumbersGeneratorModule = require('../lib/primeNumbersGenerator')

chai.use(sinonChai);

describe('printPrimeMultiplicationTable function', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
    // primeNumbersGeneratorStub = sinon.stub(primeNumbersGeneratorModule, 'primeNumbersGenerator');
  })

  afterEach(function () {
    console.log.restore();
    sinon.restore()
  });

  it('logs a 2 by 2 table', () => {
    sinon.stub(primeNumbersGeneratorModule, 'primeNumbersGenerator').returns([2])
    printPrimeMultiplicationTable(2)
    const tableString = '|  | 2|\n| 2| 4|'
    expect(console.log.calledWith(tableString)).to.be.true
  })

  it('logs a 3 by 3 table', () => {
    sinon.stub(primeNumbersGeneratorModule, 'primeNumbersGenerator').returns([2, 3])

    printPrimeMultiplicationTable(3)
    const tableString = '|  | 2| 3|\n| 2| 4| 6|\n| 3| 6| 9|'

    expect(console.log.calledWith(tableString)).to.be.true
  })

  it('logs a 4 by 4 table', () => {
    sinon.stub(primeNumbersGeneratorModule, 'primeNumbersGenerator').returns([2, 3, 5])
    printPrimeMultiplicationTable(4)
    const tableString = '|  | 2| 3| 5|\n| 2| 4| 6| 10|\n| 3| 6| 9| 15|\n| 5| 10| 15| 25|'
    expect(console.log.calledWith(tableString)).to.be.true
  })
})