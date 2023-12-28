
function isAnagram(firstString, secondString) {
  const len1 = firstString.length;
  const len2 = secondString.length;
  if (len1 !== len2) {
    return false;
  }
  const str1 = firstString.split('').sort().join('');
  const str2 = secondString.split('').sort().join('');
  if (str1 === str2) {
    return true
  } else {
    return false
  }
}
console.log(isAnagram)
