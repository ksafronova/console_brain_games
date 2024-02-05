#!/usr/bin/env node
import dialogue from '../src/dialogue.js';
import startDialogue from '../src/cli.js';
import primeGame from '../src/prime-game.js';

const userName = startDialogue();
console.log(dialogue.brainCalculatorRule);
primeGame(3, userName);
console.log(`${dialogue.endOfTheGame}${userName}!`);
