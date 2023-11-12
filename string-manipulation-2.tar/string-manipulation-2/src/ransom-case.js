/* exported ransomCase */
function ransomCase(string) {
  const char = string.toUpperCase().split('');
  for (let i = 0; i < char.length; i += 2) {
    char[i] = char[i].toLowerCase();
  }
  return char.join('');
}
