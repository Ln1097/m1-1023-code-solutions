/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const array = string.split('');
  [array[firstIndex], array[secondIndex]] = [
    array[secondIndex],
    array[firstIndex],
  ];
  return array.join('');
}
