import readlineSync from 'readline-sync';
import dialogue from './dialogue.js';
import { isEven, randomazer } from './game-functions.js';

export default function evenGame(tries, name) {
  const randomNumber = randomazer(3, 1, 1000);
  for (let i = 0; i < tries; i++) {
    const correctAnswer = isEven(randomNumber[i]);
    console.log(`${dialogue.question} ${randomNumber[i]}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    console.log(userAnswer === correctAnswer
      ? dialogue.correct
      : `'${userAnswer}'${dialogue.wrongAnswer}'${correctAnswer}'.\n ${dialogue.letsTryAgain}${name}`);
  }
}
