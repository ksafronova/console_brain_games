import random from "random";
import isEven from "./is-even.js";
import readlineSync from 'readline-sync';

export default function evenGame(tries, name){
	for(let i = 0; i < tries; i++) {
		const randomNumber = random.int(1, 1000);
		const correctAnswer = isEven(randomNumber);
		const userAnswer = readlineSync.question(`Question: ${randomNumber}`);
		console.log(userAnswer === correctAnswer ? 'Correct!' 
			: `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}`) 
	}
}