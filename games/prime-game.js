import readlineSync from 'readline-sync';
import dialogue from '../src/dialogue.js';
import {
  randomazer, isPrime, isCorrectUserAnswer, congratulations,
} from '../src/index.js';

export default function primeGame(tries, name) {
  console.log(dialogue.brainPrimeRule);
  for (let i = 0; i < tries; i += 1) {
    const number = randomazer(1, 1, 10000);
    const correctAnswer = isPrime(number);
    console.log(`Question: ${number.toString()}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    if (!isCorrectUserAnswer(correctAnswer, userAnswer)) {
      return `'${userAnswer}' ${dialogue.wrongAnswer} '${correctAnswer}'.\n ${dialogue.letsTryAgain} ${name}!`;
    }
    console.log(dialogue.correctAnswer);
  }
  return congratulations(name);
}
