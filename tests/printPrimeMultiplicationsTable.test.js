const chai = require('chai');
const { expect } = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const printPrimeMultiplicationTable = require('../lib/printPrimeMultiplicationsTable')

chai.use(sinonChai);

describe('printPrimeMultiplicationTable function', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  })

  afterEach(function () {
    console.log.restore();
  });

  it('logs a 2 by 2 table', () => {
    printPrimeMultiplicationTable(2)
    const tableString = '|  |  2|\n| 2| 4|'
    expect(console.log.calledWith(tableString)).to.be.true
  })

  it('logs a 3 by 3 table', () => {
    printPrimeMultiplicationTable(3)
    const tableString = '|  |  2| 3|\n| 2| 4| 6|\n| 3| 6| 9|'
    expect(console.log.calledWith(tableString)).to.be.true
  })
})