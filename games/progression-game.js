import readlineSync from 'readline-sync';
import random from 'random';
import dialogue from '../src/dialogue.js';
import {
  randomazer, compareAnswer, progressionGenerator, progressionMask, isCorrectUserAnswer,
} from '../src/index.js';

export default function progressionGame(tries, name) {
  let userScore = 0;
  for (let i = 0; i < tries; i++) {
    const progression = progressionGenerator(random.int(5, 15));
    const secretNumber = randomazer(1, 5, progression.length - 1);
    console.log(`Question: ${progressionMask(progression, secretNumber)}`);
    const correctAnswer = progression[secretNumber];
    const userAnswer = readlineSync.question(`${dialogue.answer}`);
    console.log(compareAnswer(correctAnswer, userAnswer, name));
    userScore += isCorrectUserAnswer(correctAnswer, userAnswer);
  }
  if(userScore === tries) {
    console.log(`${dialogue.endOfTheGame}${name}!`);
  }
}
