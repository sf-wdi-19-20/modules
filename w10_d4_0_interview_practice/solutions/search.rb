def binary_search(arr, val, low, high)
	return -1 if arr.empty?

	# if high is earlier in array than low, 
	# value we wanted is not present
	return -1 if high < low

	# find midpoint
	mid = (low + high)/2

	# decide whether win, or move left/right
	if val < arr[mid]
		# recurse in left half
		binary_search(arr, val, low, mid-1)
	elsif val > arr[mid]
		# recurse in right half
		binary_search(arr, val, mid+1, high)
	else 
		# we found it!
		mid
	end
end

arr_a = [2,4,6,8,10]
val_a1 = 8
val_a2 = 7
puts "#{val_a1} is at #{binary_search(arr_a, val_a1, 0, arr_a.length)} in #{arr_a}"
puts "#{val_a2} is at #{binary_search(arr_a, val_a2, 0, arr_a.length)} in #{arr_a}"

puts "10 is at #{binary_search([], 10, 0, [].length)} in []"


# Binary search is O(log_2(n)) ("log base 2 of n") 
# because every time we recurse we:
#  - divide the problem size by 2 and 
#  - do only 1 smaller problem

# Compare it to mergesort, where every time we recurse we:
#  - divide the problem size by 2 but
#  - do both of the smaller problems
# Mergesort is O(n*log_2(n)).

# We won't talk about the math in this class, 
# but if you're interested in calculating (versus memorizing)
# log-style run times, look into "recursion trees" and "the master theorem."
