import random from 'random';
import dialogue from './dialogue.js';
import _ from 'lodash';

function sayRules(game) {
  switch (game) {
    case 'even':
      return dialogue.brainEvenRules;
    case 'calculator':
      return dialogue.brainCalculatorRule;
    case 'progression':
      return dialogue.brainProgressionRule;
    case 'gsd':
      return dialogue.brainGSDRule;
    case 'prime':
      return dialogue.brainPrimeRule;
    default: return 'Something went wrong';
  }
}

const isEven = (number) => number % 2 === 0 ? true : false;

function randomazer(count, minRandomNumber, maxRandomNumber) {
  if(!_.isNumber(count) || !_.isNumber(minRandomNumber) || !_.isNumber(maxRandomNumber)) {
    return 'Something went wrong';
  }
  if (count === 1) {
    return random.int(minRandomNumber, maxRandomNumber);
  }
  const numbers = [];
  for (let i = 0; i < count; i += 1) {
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
    default: return 'Something went wrong';
  }
}

function gsd(numbers) {
  if(!(_.isArray(numbers))) {
    return 'Something went wrong';
  }
  let maxNum = _.max(numbers);
  let minNum = _.min(numbers);
  while (maxNum % minNum !== 0) {
    const surplus = maxNum % minNum;
    maxNum = minNum;
    minNum = surplus;
  }
  return minNum;
}

function progressionGenerator(progressionLength, progressionStep) {
  const progression = [];
  progression.push(random.int(2, 15));
  for (let i = 1; i < progressionLength; i += 1) {
    const nextNum = progression[i - 1] + progressionStep;
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
  const endDivider = number ** 0.5;
  for (let i = 2; i < endDivider; i += 1) {
    if (number % i === 0) {
      return true;
    }
  }
  return false;
}

const isCorrectUserAnswer = (correctAnswer, userAnswer) => correctAnswer === userAnswer;

function gameLoss(userAnswer, correctAnswer, name) {
  return `'${userAnswer}' ${dialogue.wrongAnswer} '${correctAnswer}'.\n ${dialogue.letsTryAgain} ${name}!`;
}

function congratulations(name) {
  return `${dialogue.endOfTheGame} ${name}!`;
}

export {
  isEven, randomazer, randomOperator, mathOperation, gsd, sayRules, gameLoss,
  progressionGenerator, progressionMask, isPrime, isCorrectUserAnswer, congratulations,
};
