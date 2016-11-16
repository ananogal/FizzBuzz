'use strict';

function makeFizzBuzz(){
  return new FizzBuzz();
}
class FizzBuzz {

  generate(value) {
    if (isFizzBuzz(value)) {
      return "fizz buzz";
    }
    if (isFizz(value)) {
      return "fizz";
    }
    if(isBuzz(value)) {
      return "buzz";
    }
    return value;
  }
}

function isFizz(value) {
  return (value % 3 == 0);
}

function isBuzz(value) {
  return  value % 5 == 0;
}

function isFizzBuzz(value) {
  return isFizz(value)  && isBuzz(value);
}

module.exports = {generate : makeFizzBuzz().generate};
