/* exported capitalize */
function capitalize(word) {
  const lower = word.toLowerCase();
  const cap = word.charAt(0).toUpperCase() + lower.slice(1);
  return cap;
}
