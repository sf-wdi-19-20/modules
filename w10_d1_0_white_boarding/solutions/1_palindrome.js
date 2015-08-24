// Problem 1 - Palindrome

function isPalindrome(str) {
  // simple solution
  str = str.toLowerCase();

  // removing spaces and punctuation
  // str = str.toLowerCase().replace(/(\s+|\W+)/g, '');

  for (var i = 0; i < str.length; i ++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}