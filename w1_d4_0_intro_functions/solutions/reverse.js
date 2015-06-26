var reverse = function(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }
  return newStr;
};

reverse("Hello");