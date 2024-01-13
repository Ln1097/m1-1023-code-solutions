

const isAnagram = (firstString, secondString) => {
  const normalize = (string) =>
    string
      .toLowerCase()
      .replace(/[^a-z]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(firstString) === normalize(secondString);
};
console.log(isAnagram)
