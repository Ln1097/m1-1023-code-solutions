/* exported isUpperCased */
/**
 * PSEUDOCODE:
 *
 * Define a function, named `isUpperCased`, that accepts one argument, `word`.
 *   Within the function, implent an if else statment, that checks if every character in the word is
 * uppercased. The result should be one of two boolean values, true or false.
 * Start by using an if statement, by using the if keyword and opening a parenthesis that checks if the
 * argument word, is strictly equal to word with the string method, toUpperCase() applied to the argument.
 * toUpperCase(), converts all the letters to uppercased, within the string.
 * If the word argument, contains all caps in the string, then the value should return true.
 * Use the else statement, and open curly bracket and close it. Within, the brackets return fasle and that
 * would be the answer if the string contains any lowercased letters.
 **/

/**
 * CODE IMPLEMENTATION:
 **/
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
