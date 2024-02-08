#!/usr/bin/env node
import startDialogue from '../src/cli.js';
import progressionGame from '../games/progression-game.js';

const userName = startDialogue();
console.log(progressionGame(3, userName));
