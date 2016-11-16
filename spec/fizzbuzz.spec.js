'use strict';

const chai = require('chai');
const expect = chai.expect;
chai.config.includeStack = true;

const fizzbuzz = require('./../src/fizzbuzz');

//var fizzbuzz = fbModule.makeModule();

describe('FizzBuzz', () => {
  it('should return 1 when given 1', () => {
    expect(fizzbuzz.generate(1)).to.eql(1);
  });
  it('should return fizz when given 3', () => {
    expect(fizzbuzz.generate(3)).to.eql("fizz");
  });
  it('should return buzz when given 5', () => {
    expect(fizzbuzz.generate(5)).to.eql("buzz");
  });
  it('should return fizz when given 9', () => {
    expect(fizzbuzz.generate(9)).to.eql("fizz");
  });
  it('should return buzz when given 10', () => {
    expect(fizzbuzz.generate(10)).to.eql("buzz");
  });
  it('should return fizz buzz when given 15', () => {
    expect(fizzbuzz.generate(15)).to.eql("fizz buzz");
  });
});
