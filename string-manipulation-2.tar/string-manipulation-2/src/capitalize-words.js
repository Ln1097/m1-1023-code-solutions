/* exported capitalizeWords */
function capitalizeWords(string) {
  const newStr = string.toLowerCase().split(' ');
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);
  }
  return newStr.join(' ');
}
