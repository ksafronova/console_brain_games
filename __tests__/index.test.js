import _ from 'lodash';
import {
  isEven, isCorrectUserAnswer, sayRules, mathOperation, gsd, randomazer, randomOperator, progressionGenerator, progressionMask, isPrime, gameLoss, congratulations,
} from '../src/index.js';

const array = ['yes', 576];

test('isEven tests', () => {
  expect(isEven(1354)).toBeTruthy();
  expect(isEven('962')).toBeTruthy();
  expect(isEven(269)).toBeFalsy();
  expect(isEven('683')).toBeFalsy();
  expect(isEven(0)).toBeTruthy();
});

test('isCorrectUserAnswer tests', () => {
  expect(isCorrectUserAnswer(20, 20)).toBeTruthy();
  expect(isCorrectUserAnswer('yes', 'yes')).toBeTruthy();
  expect(isCorrectUserAnswer('123', '123')).toBeTruthy();
  expect(isCorrectUserAnswer(array[0], 'yes')).toBeTruthy();
  expect(isCorrectUserAnswer(array[1], 576)).toBeTruthy();
  expect(isCorrectUserAnswer(21, 20)).toBeFalsy();
  expect(isCorrectUserAnswer('yes', 'no')).toBeFalsy();
  expect(isCorrectUserAnswer('122', '123')).toBeFalsy();
  expect(isCorrectUserAnswer(array[0], 'no')).toBeFalsy();
  expect(isCorrectUserAnswer(array[1], 578)).toBeFalsy();
});

test('sayRules tests', () => {
  expect(sayRules('even')).toEqual('Answer "yes" if the number is even, otherwise answer "no"');
  expect(sayRules('calculator')).toEqual('What is the result of the expression?');
  expect(sayRules('gsd')).toEqual('Find the greatest common divisor of given numbers.');
  expect(sayRules('prime')).toEqual('Answer "yes" if given number is prime. Otherwise answer "no".');
  expect(sayRules('progression')).toEqual('What number is missing in the progression?');
  expect(sayRules('gcd')).toEqual('Something went wrong');
});

test('mathOperation tests', () => {
  expect(mathOperation('*', [55, 5])).toEqual(275);
  expect(mathOperation('-', [157, 38])).toEqual(119);
  expect(mathOperation('+', [317, 127])).toEqual(444);
  expect(mathOperation('/', [325, 5])).toEqual('Something went wrong');
  expect(mathOperation('+', 30)).toEqual(0);
});

test('gsd tests', () => {
  expect(gsd([25, 5])).toEqual(5);
  expect(gsd([60, 100])).toEqual(20);
  expect(gsd([377, 377])).toEqual(377);
  expect(gsd('[25, 5]')).toEqual('Something went wrong');
  expect(gsd('one')).toEqual('Something went wrong');
  expect(gsd(5, 31)).toEqual('Something went wrong');
});

describe('randomizer tests pack', () => {
  test('randomizer positive array tests', () => {
    const correctRandomizerArr = randomazer(5, 20, 100);
    expect(_.isArray(correctRandomizerArr)).toBeTruthy();
    expect(correctRandomizerArr).toHaveLength(5);
    for (const randomNum of correctRandomizerArr) {
      expect(randomNum).toBeGreaterThanOrEqual(20);
      expect(randomNum).toBeLessThanOrEqual(100);
    }
  });

  test('randomizer positive number tests', () => {
    const correctRandomizerNum = randomazer(1, 15, 25);
    expect(_.isInteger(correctRandomizerNum)).toBeTruthy();
    expect(correctRandomizerNum).toBeGreaterThanOrEqual(15);
    expect(correctRandomizerNum).toBeLessThanOrEqual(25);
  });

  test('randomizer negative tests', () => {
    expect(randomazer('one', 1, 100)).toEqual('Something went wrong');
    expect(randomazer(5, 'two', 31)).toEqual('Something went wrong');
    expect(randomazer(1, 2, '25')).toEqual('Something went wrong');
  });
});

test('randomOperator test', () => {
  const operators = ['+', '-', '*'];
  expect(operators.includes(randomOperator())).toBeTruthy();
});

describe('progressionGenerator and progressionMask tests', () => {
  let progression;
  beforeEach(() => {
    progression = progressionGenerator(5, 21);
  });

  test('progressionGenerator tests', () => {
    expect(progression).toHaveLength(5);
    for (let i = 0; i < 4; i += 1) {
      expect(progression[i] + 21).toEqual(progression[i + 1]);
    }
  });

  test('progressionMask tests', () => {
    let progressionWithMask = progressionMask(progression, 3);
    expect(_.isString(progressionWithMask)).toBeTruthy();
    progressionWithMask = progressionWithMask.split(' ');
    expect(progressionWithMask[3]).toEqual('...');
  });
});

test('isPrime tests', () => {
  expect(isPrime(113)).toBeFalsy();
  expect(isPrime(105)).toBeTruthy();
});

describe('final computer answer tests', () => {
  const name = 'Ksusha';

  test('gameLoss test', () => {
    const wrongGame = gameLoss('yes', 'no', name);
    expect(wrongGame).toEqual("'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, Ksusha!");
  });

  test('congratulations test', () => {
    const congratulation = congratulations(name);
    expect(congratulation).toEqual('Congratulations, Ksusha!');
  });
});
