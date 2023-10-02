const data = require('./questions.json')
const savedAnswer = require('./answerStored.json')

const fs = require('fs')
const prompt = require('prompt-sync')({ sigint: true });

let cat = 0
let dog = 0
let rabbit = 0
let fish = 0

//Om answerStored.json är tom, gör en if-sats som lägger in en tom [] 
/*
let emptyBracket = [];

if (fs.existsSync('./answerStored.json')) {
    const data = fs.readFileSync('./answerStored.json');

}
*/

const userName = prompt("What is your name?")

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();


for (let i = 0; i < data.length; i++) {
    console.log(data[i].theQuestion)
    
    let validInput = false; 
    
    do {
        let answer = parseFloat(prompt("1. Yes / 2. No"))
        
        if (answer === 1) {
            dog += data[i].dog1;
            cat += data[i].cat1;
            rabbit += data[i].rabbit1;
            fish += data[i].fish1;
            validInput = true; 
        } else if (answer === 2) {
            dog += data[i].dog2;
            cat += data[i].cat2;
            rabbit += data[i].rabbit2;
            fish += data[i].fish2;
            validInput = true; 
        } else {
            console.log("You have not entered a valid number. Please try again.");
        }
    } while (!validInput);
}

const totalPoints = cat + dog + rabbit + fish;
const catPercent = (cat / totalPoints) * 100;
const dogPercent = (dog / totalPoints) * 100;
const rabbitPercent = (rabbit / totalPoints) * 100;
const fishPercent = (fish / totalPoints) * 100;

const animals = [
    { name: "Dog", percent: dogPercent },
    { name: "Cat", percent: catPercent },
    { name: "Rabbit", percent: rabbitPercent },
    { name: "Fish", percent: fishPercent }
];

animals.sort((a, b) => b.percent - a.percent);

console.log(`The animal that fits you the most is: ${animals[0].name}`);

console.log("Animal that fits you the most in order is:");
for (const animal of animals) {
    console.log(`${animal.name}: ${animal.percent.toFixed(2)}%`);
}

const result = {
    userName: userName,
    date: currentDate,
    time: currentTime,
    results: animals
};


let newResult = [];
newResult.push(result)
newResult.push(savedAnswer)

  
fs.writeFile('answerStored.json', JSON.stringify(newResult, null, 2), (err) => {
    if (err) {
        console.error('An error occured:', err);
    } else {
        console.log('Your result has been saved successfully.');
    }
});










