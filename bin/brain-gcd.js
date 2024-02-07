#!/usr/bin/env node
import startDialogue from '../src/cli.js';
import dialogue from '../src/dialogue.js';
import gsdGame from '../games/gsd-game.js';

const userName = startDialogue();
console.log(dialogue.brainGSDRule);
gsdGame(3, userName);
