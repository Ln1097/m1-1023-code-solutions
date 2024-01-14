/* exported unique */
function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
     result.push(array[i]);
    }
  }
  return result;
}
