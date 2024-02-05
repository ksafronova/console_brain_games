import readlineSync from 'readline-sync';
import dialogue from './dialogue.js';
import {
  mathOperation, randomOperator, randomazer, compareAnswer,
} from './game-functions.js';

export default function calcGame(tries, name) {
  for (let i = 0; i < tries; i++) {
    const operands = randomazer(2, 1, 100);
    const operator = randomOperator();
    const correctAnswer = mathOperation(operator, operands);
    console.log(`Question: ${operands[0]} ${operator} ${operands[1]}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    console.log(compareAnswer(correctAnswer, userAnswer, name));
  }
}
