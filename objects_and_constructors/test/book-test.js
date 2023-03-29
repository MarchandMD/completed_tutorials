let expect = require('chai').expect;
let Book = require('../exercises/book');

describe('Book', function () {
  it('should be a function', function () {
    // code goes here
    expect(Book).to.be.a('function');
  })
})