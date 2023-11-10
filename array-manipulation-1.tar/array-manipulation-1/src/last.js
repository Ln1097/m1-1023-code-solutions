/* exported last */
/* PSEUDOCODE
The goal of this function is to return the last element of the array.
Step 1: Define a function named `last` that takes one argument, `array`
Step 2: Find the length of the array and access the last element, by using the length method to
find the length of the array and subtract one, to find the index of the last array. and enclose it in brackets
with array argument on the left, to access the last element. Assign all that to the variable named last.
Step 3: Using return keyword, call the vlaue of last.
CODE IMPLEMENTATION: */
function last(array) {
  const last = array[array.length - 1];
  return last;
}
