/* exported getStudentNames */
function getStudentNames(students) {
  const array = [];
  students.forEach((students) => {
    for (const value in students) {
      array.push(`${students[value]}`);
    }
  });
  return array;
}
