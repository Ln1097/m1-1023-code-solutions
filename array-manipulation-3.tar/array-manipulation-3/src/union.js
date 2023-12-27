function union(first, second) {
  const arr3 = [...new Set([...first, ...second])];

  return arr3;
}
console.log(union)
