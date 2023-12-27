/* exported difference */
function difference(first, second) {
  const array1=first
  const array2=second
  const difference1 = array1.filter((element) => !array2.includes(element));
  const difference2 = array2.filter((element) => !array1.includes(element));
  const result = [...difference1, ...difference2];
  return result
}
