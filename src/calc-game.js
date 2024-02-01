import { math, randomOperator, randomazer } from './game-functions.js';
import readlineSync from 'readline-sync';
import dialogue from '../src/dialogue.js';

export default function calcGame(tries, name) {
	for (let i = 0; i < tries; i++) {
		const operands = randomazer(2, 1, 100);
		const operator = randomOperator();
		const correctAnswer = math(operator, operands);
		console.log(`Question: ${operands[0]} ${operator} ${operands[1]}`);
		const userAnswer = readlineSync.question(`${dialogue.answer}`)
      console.log(userAnswer === correctAnswer ? dialogue.correct
        : `'${userAnswer}'${dialogue.wrongAnswer}'${correctAnswer}'.\n ${dialogue.letsTryAgain}${name}`
      );
	}
}