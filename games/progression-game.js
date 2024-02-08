import readlineSync from 'readline-sync';
import random from 'random';
import dialogue from '../src/dialogue.js';
import {
  randomazer, progressionGenerator, progressionMask, isCorrectUserAnswer, congratulations,
} from '../src/index.js';

export default function progressionGame(tries, name) {
  console.log(dialogue.brainProgressionRule);
  for (let i = 0; i < tries; i++) {
    const progression = progressionGenerator(random.int(5, 15));
    const secretNumber = randomazer(1, 5, progression.length - 1);
    console.log(`Question: ${progressionMask(progression, secretNumber)}`);
    const correctAnswer = progression[secretNumber];
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    if (!isCorrectUserAnswer(correctAnswer, userAnswer)) {
      return `'${userAnswer}' ${dialogue.wrongAnswer} '${correctAnswer}'.\n ${dialogue.letsTryAgain} ${name}!`;
    }
    console.log(dialogue.correctAnswer);
  }
  return congratulations(name);
}
