/* exported tail */
function tail(array) {
  const myArray = [];
  let n = 0;
  for (let i = 1; i < array.length; i++) {
    myArray[n] = array[i];
    n++;
  }
  return myArray;
}
