# Problem 1 - Palindrome

def is_palindrome(str)
  # simple solution
  str = str.downcase

  # removing spaces and punctuation
  # str = str.downcase.gsub(/(\s+|\W+)/, '');

  i = 0
  while i < str.length
    if str[i] != str[str.length - i - 1]
      return false
    end
    i += 1
  end

  return true
end