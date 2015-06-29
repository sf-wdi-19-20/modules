var vowels = function(str) {
  var vowelList = ["a", "e", "i", "o", "u"];
  var vowelCount = 0;
  for (var i = 0; i < str.length; i += 1) {
    if (vowelList.indexOf(str[i]) !== -1) {
      vowelCount += 1;
    }
  }
  return vowelCount;
};

vowels("pineapple");