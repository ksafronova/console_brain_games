import random from 'random';
import _ from 'lodash';
import dialogue from './dialogue.js';

function isEven(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

function randomazer(count, minRandomNumber, maxRandomNumber) {
  if (count === 1) {
    return random.int(minRandomNumber, maxRandomNumber);
  }
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

function mathOperation(operator, operands) {
  switch (operator) {
    case '+':
      return _.sum(operands);
    case '*':
      return _.multiply(operands[0], operands[1]);
    case '-':
      return _.subtract(operands[0], operands[1]);
    default:
  }
  return 0;
}

function gsd(numbers) {
  let maxNum = _.max(numbers);
  let minNum = _.min(numbers);
  while (maxNum % minNum !== 0) {
    const surplus = maxNum % minNum;
    maxNum = minNum;
    minNum = surplus;
  }
  return minNum;
}

function progressionGenerator(progressionLength) {
  const progressionStep = random.int(2, 50);
  const progression = [random.int(2, 15)];
  for (let i = 0; i < progressionLength; i++) {
    const nextNum = progression[i] + progressionStep;
    progression.push(nextNum);
  }
  return progression;
}

function progressionMask(progression, secretNumber) {
  const newProgression = [...progression];
  newProgression[secretNumber] = '...';
  return newProgression.join(' ');
}

function isPrime(number) {
  const endDivider = Math.pow(number, 0.5);
  for (let i = 2; i < endDivider; i++) {
    if (number % i === 0) {
      return 'no';
    }
    continue;
  }
  return 'yes';
}
console.log(isPrime(9136));


function isCorrectUserAnswer(correctAnswer, userAnswer) {
  return !!((correctAnswer - userAnswer) === 0 || correctAnswer === userAnswer);
}

function congratulations(name) {
  return `${dialogue.endOfTheGame} ${name}!`;
}

export {
  isEven, randomazer, randomOperator, mathOperation, gsd,
  progressionGenerator, progressionMask, isPrime, isCorrectUserAnswer, congratulations,
};
