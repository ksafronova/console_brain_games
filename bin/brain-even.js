#!/usr/bin/env node
import evenGame from "../src/even-game.js";
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no');
evenGame(3, userName);
console.log(`Congratulations, ${userName}`) ;
