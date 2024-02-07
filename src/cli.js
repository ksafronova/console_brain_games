import readlineSync from 'readline-sync';
import dialogue from './dialogue.js';

export default function startDialogue() {
  console.log(dialogue.welcome);
  const userName = readlineSync.question(dialogue.nameQuestion);
  console.log(`${dialogue.hello} ${userName}`);
  return userName;
}
