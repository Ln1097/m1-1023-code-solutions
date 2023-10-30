function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(2);
console.log('convertMinutesToSeconds: ', convertMinutesToSecondsResult);

function greet(name) {
  return 'Hello, ' + name;
}
const greetResult = greet('Ricky Bobby');
console.log('greet: ', greetResult);

function getArea(width, height) {
  return width * height;
}
const getAreaResult = getArea(10, 10);
console.log('getAreaResult: ', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}
const getFirstNameResult = getFirstName({ firstName: 'Mega', lastName: 'Man' });
console.log(getFirstNameResult);

function getLastElement(array) {
  return array[getLastElement.length - 1];
}
const getLastElementResult = getLastElement(['Earth', 'Wind', '&', 'Fire']);
console.log(getLastElementResult);
