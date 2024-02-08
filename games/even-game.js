import readlineSync from 'readline-sync';
import dialogue from '../src/dialogue.js';
import {
  isEven, randomazer, isCorrectUserAnswer, congratulations,
} from '../src/index.js';

export default function evenGame(tries, name) {
  const randomNumber = randomazer(3, 1, 1000);
  console.log(dialogue.brainEvenRules);
  for (let i = 0; i < tries; i += 1) {
    const correctAnswer = isEven(randomNumber[i]);
    console.log(`${dialogue.question} ${randomNumber[i]}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    if (!isCorrectUserAnswer(correctAnswer, userAnswer)) {
      return `'${userAnswer}' ${dialogue.wrongAnswer} '${correctAnswer}'.\n ${dialogue.letsTryAgain} ${name}!`;
    }
    console.log(dialogue.correctAnswer);
  }
  return congratulations(name);
}
