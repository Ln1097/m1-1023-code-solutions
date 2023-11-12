/* exported firstChars */
/* The goal of function `firstChar` to return a given string that truncated at the max length set for the strings.
Step1: define a function named `firstChars`, that takes two arguments, `length`, which is the max length, the strings
should be and `string`, the given string itself.
Step2: assign the string slice method, that starts at index zero and ends at max length of string, to a constant
variable named result.
Step3: Return result, which should shorthen the given string to only contain the first index up until where the max length of string is dictated. */
function firstChars(length, string) {
  const result = string.slice(0, length);
  return result;
}
