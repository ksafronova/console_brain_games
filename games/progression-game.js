import readlineSync from 'readline-sync';
import random from 'random';
import startDialogue from '../src/cli.js';
import dialogue from '../src/dialogue.js';
import {
  randomazer, progressionGenerator, progressionMask, isCorrectUserAnswer,
  gameLoss, congratulations, sayRules,
} from '../src/index.js';

export default function progressionGame() {
  const name = startDialogue();
  sayRules('progression');
  for (let i = 0; i < 3; i += 1) {
    const progression = progressionGenerator(random.int(5, 15));
    const secretNumber = randomazer(1, 5, progression.length - 1);
    console.log(`Question: ${progressionMask(progression, secretNumber)}`);
    const correctAnswer = progression[secretNumber];
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    if (!isCorrectUserAnswer(correctAnswer, userAnswer)) {
      return gameLoss(userAnswer, correctAnswer, name);
    }
    console.log(dialogue.correctAnswer);
  }
  return congratulations(name);
}
