/* exported pick */
function pick(source, keys) {
  const result = {};
  for (keys of keys) {
    const value = source[keys];
    if (value !== undefined){
       result[keys] = value;
    }

  }
  return result;
}
