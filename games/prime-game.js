import readlineSync from 'readline-sync';
import dialogue from '../src/dialogue.js';
import { randomazer, compareAnswer, isPrime, isCorrectUserAnswer } from '../src/index.js';

export default function primeGame(tries, name) {
  let userScore = 0;
  for (let i = 0; i < tries; i++) {
    const number = randomazer(1, 1, 10000);
    const correctAnswer = isPrime(number);
    console.log(`Question: ${number.toString()}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    console.log(compareAnswer(correctAnswer, userAnswer, name));
    userScore += isCorrectUserAnswer(correctAnswer, userAnswer);
  }
  if(userScore === tries) {
    console.log(`${dialogue.endOfTheGame}${name}!`);
  }
}
