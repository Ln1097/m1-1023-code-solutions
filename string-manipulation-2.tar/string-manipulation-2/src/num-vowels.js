/* exported numVowels */
function numVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let count = 0;
  for (const letter of string) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
