import readlineSync from 'readline-sync';
import dialogue from '../src/dialogue.js';
import { isEven, randomazer, compareAnswer, isCorrectUserAnswer } from '../src/index.js';

export default function evenGame(tries, name) {
  let userScore = 0;
  const randomNumber = randomazer(3, 1, 1000);
  for (let i = 0; i < tries; i++) {
    const correctAnswer = isEven(randomNumber[i]);
    console.log(`${dialogue.question} ${randomNumber[i]}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    console.log(compareAnswer(correctAnswer, userAnswer, name));
    userScore += isCorrectUserAnswer(correctAnswer, userAnswer);
  }
  if(userScore === tries) {
    console.log(`${dialogue.endOfTheGame}${name}!`);
  }
}
