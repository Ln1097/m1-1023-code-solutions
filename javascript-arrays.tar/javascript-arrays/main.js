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
