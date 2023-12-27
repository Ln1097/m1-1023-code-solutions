/* exported zip */
const zip = (first, second) => {
  const longerLength = Math.max(first.length, second.length);
  const indices = [...new Array(longerLength).keys()];

  return indices.reduce(
    (list, index) => [...list, [first[index], second[index]]],
    []
  );
};
