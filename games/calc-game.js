import readlineSync from 'readline-sync';
import dialogue from '../src/dialogue.js';
import {
  mathOperation, randomOperator, randomazer, compareAnswer, isCorrectUserAnswer, congratulations,
} from '../src/index.js';

export default function calcGame(tries, name) {
  let userScore = 0;
  for (let i = 0; i < tries; i++) {
    const operands = randomazer(2, 1, 100);
    const operator = randomOperator();
    const correctAnswer = mathOperation(operator, operands);
    console.log(`Question: ${operands[0]} ${operator} ${operands[1]}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    console.log(compareAnswer(correctAnswer, userAnswer, name));
    userScore += isCorrectUserAnswer(correctAnswer, userAnswer);
  }
  congratulations(tries, userScore, name);
}
