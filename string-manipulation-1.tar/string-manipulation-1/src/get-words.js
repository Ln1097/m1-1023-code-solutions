/* exported getWords */
function getWords(string) {
  if (string.length === 0) {
    return [];
  }
  const array = string.split(' ');
  return array;
}
