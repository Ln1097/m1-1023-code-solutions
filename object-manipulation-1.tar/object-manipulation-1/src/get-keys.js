/* exported getKeys */
/* GOAL of function: The function returns an array of the object's property keys.
STEP 1: Define the function `getKeys`, that takes one argument, `object`. Open and close the curly braces.
STEP 2: Assign square brackets to the constant variable `array`.
STEP 3: Run a for...in loop that iterates over the keys in the object.
STEP 4: Push the keys into the array.
STEP 5: Using return keyword, return the value of the array variable. */
function getKeys(object) {
  const array = [];
  for (const keys in object) {
    array.push(keys);
  }
  return array;
}
