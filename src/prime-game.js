import readlineSync from 'readline-sync';
import dialogue from './dialogue.js';
import { randomazer, compareAnswer, isPrime } from './game-functions.js';

export default function primeGame(tries, name) {
  for (let i = 0; i < tries; i++) {
    const number = randomazer(1, 1, 10000);
    const correctAnswer = isPrime(number);
    console.log(`Question: ${number.toString()}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    console.log(compareAnswer(correctAnswer, userAnswer, name));
  }
}
