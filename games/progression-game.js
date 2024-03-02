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
  console.log(sayRules('progression'));
  for (let i = 0; i < 3; i += 1) {
    const progressionLength = random.int(5, 15);
    const progressionStep = random.int(5, 55);
    const progression = progressionGenerator(progressionLength, progressionStep);
    const secretNumber = randomazer(1, 5, progression.length - 1);
    console.log(`Question: ${progressionMask(progression, secretNumber)}`);
    const correctAnswer = progression[secretNumber];
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    if (!isCorrectUserAnswer(correctAnswer, userAnswer)) {
      return console.log(gameLoss(userAnswer, correctAnswer, name));
    }
    console.log(dialogue.correctAnswer);
  }
  return console.log(congratulations(name));
}
