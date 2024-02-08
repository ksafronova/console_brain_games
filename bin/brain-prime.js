#!/usr/bin/env node
import startDialogue from '../src/cli.js';
import primeGame from '../games/prime-game.js';

const userName = startDialogue();
console.log(primeGame(3, userName));
