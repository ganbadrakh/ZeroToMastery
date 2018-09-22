//let + const
const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if(experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}
console.log('outside', wizardLevel);

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}
obj.wizardLevel = true; // it is possible to change properties of the objects, but you can't reassign the variable

//Destructuring
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
// is equal to
const {player, experience} = obj;
let {wizardLevel} = obj;

//Object properties
const name = 'john snow';

const obj = {
    [name]: 'hello',
    [1 + 2]: 'hihi'
}

//Template strings
const name = "Ganaa";
const age = 34;
const pet = "dog";

const greeting = "Hello " + name + " you seem to be doing " + greeting + "!";

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;

//Default arguments
function greet(name='', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}

//Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

//sym2 === sym3 gives us false, because every symbol is unique

//Arrow functions
function add(a, b) {
    return a + b;
}
// equals to
const add = (a, b) => a + b; // if you have just one return
// equals to 
const add = (a, b) => {
    a + b;
}