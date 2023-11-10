/* exported getValues */
/* GOAL:Return an array containing the object's property values.
STEP 1: Define a function named `getValues`, with one argument, `object`.
STEP 2: Assign brackets to the constant variable, `array`.
STEP 3: Run a for loop that iterates over the keys in the object.
STEP 4: Access the property of the object key property.
STEP 5: Return the array  */
function getValues(object) {
  const array = [];
  for (const keys in object) {
    array.push(object[keys]);
  }
  return array;
}
