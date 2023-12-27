/* exported flatten */
function flatten(array){
  const flatArray = [].concat.apply([], array);
  return flatArray
}
