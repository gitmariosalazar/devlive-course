/*
Example 1:

Input: s = "abc", t = "cahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
*/

function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  let char = s[0];
  for (let index = 0; index < t.length; index++) {
    if (char === t[index]) {
      i++;
      char = s[i];
    }
    if (i === s.length) {
      return true;
    }
  }
  return i === s.length;
}

console.log(isSubsequence('abc', 'cahbgdc'));

function isSubsequence2(s: string, t: string): boolean {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
}
