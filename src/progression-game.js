import readlineSync from 'readline-sync';
import random from 'random';
import dialogue from './dialogue.js';
import {
  randomazer, compareAnswer, progressionGenerator, progressionMask,
} from './game-functions.js';

export default function progressionGame(tries, name) {
  for (let i = 0; i < tries; i++) {
    const progression = progressionGenerator(random.int(5, 15));
    const secretNumber = randomazer(1, 5, progression.length - 1);
    console.log(`Question: ${progressionMask(progression, secretNumber)}`);
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    console.log(compareAnswer(progression[secretNumber], userAnswer, name));
  }
}
