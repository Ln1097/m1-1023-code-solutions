/* exported omit */
function omit(source,keys){
    const result = {};
    Object.keys(source).forEach(function (key) {
      if (keys.indexOf(key) === -1) {
        result[key] = source[key];
      }
    });
    return result
}
