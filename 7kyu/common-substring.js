/*
Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

#Examples:

*Example 1*
SubstringTest("Something","Fun"); //Returns false

*Example 2*
SubstringTest("Something","Home"); //Returns true


*/

function SubstringTest(str1, str2) {
  const str = str1.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str2.toLowerCase().includes(str[i] + str[i + 1])) {
      return true;
    }
  }
  return false;
}
