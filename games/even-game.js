import readlineSync from 'readline-sync';
import startDialogue from '../src/cli.js';
import dialogue from '../src/dialogue.js';
import {
  isEven, randomazer, isCorrectUserAnswer, congratulations, sayRules, gameLoss,
} from '../src/index.js';

export default function evenGame() {
  const name = startDialogue();
  const randomNumber = randomazer(3, 1, 1000);
  console.log(sayRules('even'));
  for (let i = 0; i < 3; i++) {
    const correctAnswer = isEven(randomNumber[i]) ? 'yes' : 'no';
    console.log(`${dialogue.question} ${randomNumber[i]}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    if (!isCorrectUserAnswer(correctAnswer, userAnswer)) {
      return console.log(gameLoss(userAnswer, correctAnswer, name));
    }
    console.log(dialogue.correctAnswer);
  }
  return console.log(congratulations(name));
}
