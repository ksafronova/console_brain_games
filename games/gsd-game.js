import readlineSync from 'readline-sync';
import dialogue from '../src/dialogue.js';
import {
  randomazer, gsd, isCorrectUserAnswer, congratulations,
} from '../src/index.js';

export default function gsdGame(tries, name) {
  console.log(dialogue.brainGSDRule);
  for (let i = 0; i < tries; i++) {
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
