#!/usr/bin/env node
import startDialogue from '../src/cli.js'
import evenGame from '../src/even-game.js';
import dialogue from '../src/dialogue.js';

const userName = startDialogue();
console.log(dialogue.brainEvenRules);
evenGame(3, userName);
console.log(`${dialogue.endOfTheGame}${userName}!`);
