function zip(first, second) {
  const zipped = [];

  for (let index = 0; index < first.length && index<second.length; index++) {
      zipped.push([first[index], second[index]]);
  }

  return zipped;
}
console.log(zip)
