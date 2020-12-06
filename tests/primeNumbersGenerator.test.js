const { expect } = require('chai');
const primeNumbersGenerator = require('../lib/primeNumbersGenerator');

describe('primeNumbersGenerator function', () => {

  it('returns an array with the first prime number', () => {
    expect(primeNumbersGenerator(1)).to.eql([2])
  })

  it('returns an array with the first two prime numbers', () => {
    expect(primeNumbersGenerator(2)).to.eql([2, 3])
  })

})