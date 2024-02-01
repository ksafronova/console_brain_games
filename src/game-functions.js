import random from 'random';
import _ from 'lodash';
import dialogue from './dialogue';

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
    default:
  }
}

function compareAnswer(correctAnswer, userAnswer, userName) {
  return userAnswer === correctAnswer
    ? dialogue.correctAnswer
    : `'${userAnswer}'${dialogue.wrongAnswer}'${correctAnswer}'.\n ${dialogue.letsTryAgain}${userName}`;
}

export {
  isEven, randomazer, randomOperator, math, compareAnswer,
};
