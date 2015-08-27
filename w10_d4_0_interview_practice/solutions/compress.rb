# Returns a 'compressed' version of a string 
# by counting repeated characters.  
# "ooohmmmmmmm" => "o3h1m7" 

# If compressed string would be longer,
# returns the original instead. 
# "abc" => "abc"  # NOT "a1b1c1"
def compress(str)
	if str.length == 0
		# explicitly return (use the word return)
		# because we need to stop early 
		return str
	end
	# letter will be letter we're currently counting
	letter = str[0]
	# in Ruby, using << is faster than adding strings
	# or creating an array and using join
	out = letter
	# count will store that letter's count so far
	count = 0
	str.each_char do |char|
		if char == letter
			# if still on same letter, just keep counting
			count += 1
		else 
			# if we have a new letter, add count to the output
			# followed by the new letter
			out << count.to_s
			out << char
			# and update the variables we're using to track
			letter = char
			count = 1
		end
	end
	# when the for loop ends, we'll still have a count we need to add
	out << count.to_s
	# return either the compressed version or the original version
	# depending on which is shorter
	out = str.length < out.length ? str : out
end

testHashes = [
	{:input => "ooohmmmmmmm", :expected => "o3h1m7"},
	{:input => "abc", :expected => "abc"},
	{:input => "", :expected => ""}
]

for test in testHashes
	result = compress(test[:input])
	puts("compressed #{test[:input]} to #{result}")
	if (result == test[:expected])
		puts("test passed")
	else 
		puts("test failed... expected #{test[:expected]}")
	end
end


# This agorithm is O(n), where n is the length of the input string,
# because it has to loop through the entire string to compress it.

# It uses O(k) extra space where k is the number of distinct letters in the input string.
# It also has some tracking variables like count, but those are O(1),
# and O(k) + O(1) = O(k).
# Since k will be less than or equal to n, and O() means <=, we can safely say the space is O(n).

