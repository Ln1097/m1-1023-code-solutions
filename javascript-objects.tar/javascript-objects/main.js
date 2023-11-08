const student = {
  firstName: 'Harry',
  lastName: 'Potter',
  age: 15,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log(fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Snake Talker';
console.log(student.livesInIrvine);
console.log(student.previousOccupation);

const vehicle = {
  make: 'Firebolt',
  model: '3000',
  year: 1993,
};
vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;
console.log(vehicle['color']);
console.log(vehicle['isConvertible']);
console.log(vehicle);

const pet = {
  name: 'Oliver',
  type: 'Dog',
};
delete pet.name;
delete pet['type'];
console.log(pet);
