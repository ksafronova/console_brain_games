import readlineSync from 'readline-sync';
import dialogue from '../src/dialogue.js';
import {
  mathOperation, randomOperator, randomazer, isCorrectUserAnswer, congratulations, sayRules,
} from '../src/index.js';
import startDialogue from '../src/cli.js';

export default function calcGame(tries) {
  const name = startDialogue();
  sayRules('calculator');
  for (let i = 0; i < tries; i += 1) {
    const operands = randomazer(2, 1, 100);
    const operator = randomOperator();
    const correctAnswer = mathOperation(operator, operands);
    console.log(`Question: ${operands[0]} ${operator} ${operands[1]}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    if (!isCorrectUserAnswer(correctAnswer, userAnswer)) {
      return `'${userAnswer}' ${dialogue.wrongAnswer} '${correctAnswer}'.\n ${dialogue.letsTryAgain} ${name}!`;
    }
    console.log(dialogue.correctAnswer);
  }
  return congratulations(name);
}
