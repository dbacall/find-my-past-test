const { expect } = require('chai');
const primeNumbersGenerator = require('../lib/primeNumbersGenerator').primeNumbersGenerator;

describe('primeNumbersGenerator function', () => {

  it('returns an empty array if 0 entered', () => {
    expect(primeNumbersGenerator(0)).to.eql([])
  })

  it('returns an array with the first prime number', () => {
    expect(primeNumbersGenerator(1)).to.eql([2])
  })

  it('returns an array with the first two prime numbers', () => {
    expect(primeNumbersGenerator(2)).to.eql([2, 3])
  })

  it('returns an array with the first three prime numbers', () => {
    expect(primeNumbersGenerator(3)).to.eql([2, 3, 5])
  })

  it('returns an array with the first seven prime numbers', () => {
    expect(primeNumbersGenerator(7)).to.eql([2, 3, 5, 7, 11, 13, 17])
  })

  it('returns an array with the first seven prime numbers', () => {
    expect(primeNumbersGenerator(15)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47])
  })

})