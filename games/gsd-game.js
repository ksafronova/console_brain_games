import readlineSync from 'readline-sync';
import startDialogue from '../src/cli.js';
import dialogue from '../src/dialogue.js';
import {
  randomazer, gsd, isCorrectUserAnswer, congratulations, sayRules,
} from '../src/index.js';

export default function gsdGame() {
  const name = startDialogue();
  sayRules('gcd');
  for (let i = 0; i < 3; i += 1) {
    const numbers = randomazer(2, 1, 100);
    const correctAnswer = gsd(numbers);
    console.log(`Question: ${numbers[0]} ${numbers[1]}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    if (!isCorrectUserAnswer(correctAnswer, userAnswer)) {
      return `'${userAnswer}' ${dialogue.wrongAnswer} '${correctAnswer}'.\n ${dialogue.letsTryAgain} ${name}!`;
    }
    console.log(dialogue.correctAnswer);
  }
  return congratulations(name);
}
