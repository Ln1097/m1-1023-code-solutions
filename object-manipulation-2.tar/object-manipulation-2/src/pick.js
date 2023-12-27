/* exported pick */
function pick(source, keys) {
  const result = {};
  for (keys in source) {
    if (keys.includes(keys)) {
      result[keys] = source[keys];
    }
  }
  return result;
}
