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

  it.only('logs a 2 by 2 table', () => {
    printPrimeMultiplicationTable(2)
    const tableString = '|  |  2|\n| 2| 4|'
    expect(console.log.calledWith(tableString)).to.be.true
  })
})