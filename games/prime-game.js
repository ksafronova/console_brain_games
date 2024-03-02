import readlineSync from 'readline-sync';
import startDialogue from '../src/cli.js';
import dialogue from '../src/dialogue.js';
import {
  randomazer, isPrime, isCorrectUserAnswer, congratulations, sayRules, gameLoss,
} from '../src/index.js';

export default function primeGame() {
  const name = startDialogue();
  console.log(sayRules('prime'));
  for (let i = 0; i < 3; i += 1) {
    const number = randomazer(1, 1, 10000);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    console.log(`Question: ${number.toString()}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    if (!isCorrectUserAnswer(correctAnswer, userAnswer)) {
      return console.log(gameLoss(userAnswer, correctAnswer, name));
    }
    console.log(dialogue.correctAnswer);
  }
  return console.log(congratulations(name));
}

primeGame()
