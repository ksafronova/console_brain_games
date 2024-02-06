import readlineSync from 'readline-sync';
import dialogue from '../src/dialogue.js';
import { isEven, randomazer, compareAnswer } from '../src/index.js';

export default function evenGame(tries, name) {
  const randomNumber = randomazer(3, 1, 1000);
  for (let i = 0; i < tries; i++) {
    const correctAnswer = isEven(randomNumber[i]);
    console.log(`${dialogue.question} ${randomNumber[i]}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    console.log(compareAnswer(correctAnswer, userAnswer, name));
  }
}
