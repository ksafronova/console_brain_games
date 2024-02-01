import random from 'random';
import _ from 'lodash';

function isEven(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

function randomazer(count, minRandomNumber, maxRandomNumber) {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(random.int(minRandomNumber, maxRandomNumber));
  }
  return numbers;
}

function randomOperator() {
  const operators = ['+', '-', '*'];
  return operators[randomazer(1, 0, 2)];
}

function math(operator, operands) {
  switch (operator) {
    case '+':
      return _.sum(operands);
    case '*':
      return _.multiply(operands);
    case '-':
      return _.subtract(operands);
  }
}

export {
  isEven, randomazer, randomOperator, math,
};
