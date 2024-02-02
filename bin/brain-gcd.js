#!/usr/bin/env node
import startDialogue from '../src/cli.js';
import dialogue from '../src/dialogue.js';
import gsdGame from '../src/gsd-game.js';

const userName = startDialogue();
console.log(dialogue.brainGSDRule);
gsdGame(3, userName);
console.log(`${dialogue.endOfTheGame}${userName}!`);
