#!/usr/bin/env node
import startDialogue from '../src/cli.js';
import gsdGame from '../games/gsd-game.js';

const userName = startDialogue();
console.log(gsdGame(3, userName));
