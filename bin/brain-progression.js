#!/usr/bin/env node
import dialogue from '../src/dialogue.js';
import startDialogue from '../src/cli.js';
import progressionGame from '../src/progression-game.js';

const userName = startDialogue();
console.log(dialogue.brainCalculatorRule);
progressionGame(3, userName);
console.log(`${dialogue.endOfTheGame}${userName}!`);
