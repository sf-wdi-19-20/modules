# Given two strings, 
# check if the first string occurs within the second string.

def substring(str1, str2)
	# using include?
	str2.include?(str1)
end

puts substring("abc", "catabcd")
puts substring("a", "eeee")
puts substring("", "f")
puts substring("", "")


# It's hard to analyze the efficiency of built in functions.
# Feel free to try to write this method out by hand, if you'd like.
# One loop-based idea for a hand-written algorithm would be O(m*n),
# if m is the length of str1 and n is the length of str2.

#


