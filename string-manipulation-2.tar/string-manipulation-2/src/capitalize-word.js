/* exported capitalizeWord */
/* The Goal of the function `capitalizeWord`, is to return the given string, as having the zero index
capitalized and return the rest of the string lowercased. With the exception of strings that contain any casing
of 'JavaScript'. That string should return as 'JavaScript'
Step1: Define a function named `capitalizedWord, with one argument, `word` a string.
Step2: Run an if loop that lower cases the unique three strings of 'javascript' and strictly check if it is
equal to 'javascript'
Step3: If step 2 is true, the return should be the string 'JavaScript'
step4: For the non unique 'javascript' strings, return the string at index 0, as uppercased and append the
rest of the string, which is lowercased. */

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
