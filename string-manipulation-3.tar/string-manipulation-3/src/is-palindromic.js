/* exported isPalindromic */
function isPalindromic(string) {
  const rep = /[^a-z]/;
  const lowRegStr = string.toLowerCase().replace(rep, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  if(reverseStr === lowRegStr){
    return true;
  }
  else return false;
}
