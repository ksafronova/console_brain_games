import readlineSync from 'readline-sync';
import startDialogue from '../src/cli.js';
import dialogue from '../src/dialogue.js';
import {
  isEven, randomazer, isCorrectUserAnswer, congratulations, sayRules,
} from '../src/index.js';

export default function evenGame() {
  const name = startDialogue();
  const randomNumber = randomazer(3, 1, 1000);
  sayRules('even');
  for (let i = 0; i < 3; i += 1) {
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
