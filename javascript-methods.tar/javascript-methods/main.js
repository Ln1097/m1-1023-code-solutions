const num1 = 3;
const num2 = 5;
const num3 = 7;
const maximumValue = Math.max(num1, num2, num3);
console.log(maximumValue);

const heroes = ['Spiderman', 'Batman', 'Superman', 'Ironman'];
const randomNumber = Math.random();
const randomNumberResult = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumberResult);
console.log(randomIndex);

const randomHero = heroes[randomIndex];
console.log(randomHero);

const library = [
  { title: 'Help', author: 'Clueless Person' },
  { title: 'How to Cook Food', author: 'Chef' },
  { title: 'Your movie stinks', author: 'Pretentious Critic' },
];
const lastBook = library.pop();
console.log(lastBook);
const firstBook = library.shift();
console.log(firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

const fullName = 'Lambert Nguyen';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log(sayMyName);
