#!/usr/bin/env node
import dialogue from '../src/dialogue.js';
import startDialogue from '../src/cli.js';
import calcGame from '../games/calc-game.js';

const userName = startDialogue();
console.log(dialogue.brainCalculatorRule);
calcGame(3, userName);
