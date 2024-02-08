#!/usr/bin/env node
import startDialogue from '../src/cli.js';
import evenGame from '../games/even-game.js';

const userName = startDialogue();
console.log(evenGame(3, userName));
