/* exported initial */
function initial(array) {
  let n = 1;
  while (n > 0) {
    n -= 1;
    array.pop();
  }
  return array;
}
