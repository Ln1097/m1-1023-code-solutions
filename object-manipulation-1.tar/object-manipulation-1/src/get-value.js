/* exported getValue */
function getValue(object, key) {
  for (const key in object) {
    console.log(object[key]);
  }
  return object[key];
}
