const colors = ['red', 'white', 'blue'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(
  'America is ' + colors[0] + ', ' + colors[1] + ', ' + 'and ' + colors[2]
);
colors.splice(2, 0, 'green');
console.log(
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + 'and ' + colors[2]
);
console.log(colors);

const students = ['John', 'Paul', 'George', 'Ringo'];
const numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' students in the class.');
const lastIndex = students.length - 1;
const lastStudent = lastIndex[students.length - 1];
console.log('The last student in the class is ' + lastStudent);
