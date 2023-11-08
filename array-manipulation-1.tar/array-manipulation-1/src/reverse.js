/* exported reverse */
function reverse(array) {
  const myArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const value = array[i];
    myArray.push(value);
  }
  return myArray;
}
