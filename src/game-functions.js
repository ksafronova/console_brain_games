import random from 'random';
import _ from 'lodash';
import dialogue from './dialogue.js';

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
      return _.multiply(operands[0], operands[1]);
    case '-':
      return _.subtract(operands[0], operands[1]);
    default:
  }
}

function compareAnswer(correctAnswer, userAnswer, userName) {
  return (correctAnswer - userAnswer) === 0 || correctAnswer === userAnswer
    ? dialogue.correctAnswer
    : `'${userAnswer}'${dialogue.wrongAnswer}'${correctAnswer}'.\n ${dialogue.letsTryAgain}${userName}!`;
}

function gsd(numbers) {
  let maxNum = _.max(numbers);
  let minNum = _.min(numbers);
  while (maxNum % minNum !== 0) {
    const deviation = maxNum % minNum;
    maxNum = minNum;
    minNum = deviation;
  }
  return minNum;
}

export {
  isEven, randomazer, randomOperator, math, compareAnswer, gsd,
};
