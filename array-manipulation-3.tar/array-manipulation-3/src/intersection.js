/* exported intersection */
function intersection(first, second) {
  const result = first.filter((x) => second.indexOf(x) !== -1);

  return result;
}
