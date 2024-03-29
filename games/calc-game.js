import readlineSync from 'readline-sync';
import dialogue from '../src/dialogue.js';
import {
  mathOperation, randomOperator, randomazer, isCorrectUserAnswer,
  congratulations, sayRules, gameLoss,
} from '../src/index.js';
import startDialogue from '../src/cli.js';

export default function calcGame(tries) {
  const name = startDialogue();
  console.log(sayRules('calculator'));
  for (let i = 0; i < tries; i += 1) {
    const operands = randomazer(2, 1, 100);
    const operator = randomOperator();
    const correctAnswer = mathOperation(operator, operands);
    console.log(`Question: ${operands[0]} ${operator} ${operands[1]}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    if (!isCorrectUserAnswer(correctAnswer, userAnswer)) {
      return console.log(gameLoss(userAnswer, correctAnswer, name));
    }
    console.log(dialogue.correctAnswer);
  }
  return console.log(congratulations(name));
}
