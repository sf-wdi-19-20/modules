# Given 2 arrays of the same length, 
# creates a Hash where:
# - the elements from the first array are used as keys 
# - the elements from the second array are used as values.

def to_hash (keyArr, valArr)
	# check same length just to be safe
	if keyArr.length != valArr.length
		null
	else

		# set up new object
		newObj = {}
		# loop through both arrays
		keyArr.length.times do |i|
			# add key value pair to new object each time
			newObj[keyArr[i]] = valArr[i]
		end

		newObj
	end
end


keys = [:name, :age]
vals = ["bob", 30]
puts "combining #{keys} and #{vals}"
puts "got #{to_hash(keys, vals)}"


# Since we loop once through the entire length of the array,
# the algorithm above has big oh O(n), where n is the length of our arrays.

# It also uses O(n) extra space because it has to create the new hash and store it somewhere!