/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log(getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log(getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (times > count) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log(typeof repeatWord('cool', 10));
console.log(repeatWord('cool', 10));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log(logEachCharacter('fun'));

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log(doubleAll([2, 4, 6]));

function getKeys(object) {
  const keys = [];
  for (const property in object) {
    keys.push(property);
  }
  return keys;
}
console.log(getKeys({ a: 1, b: 2, c: 3 }));

function getValues(object) {
  const values = [];
  for (const property in object) {
    values.push(object[property]);
  }
  return values;
}
console.log(getValues({ a: '1', b: '2', c: '3' }));
