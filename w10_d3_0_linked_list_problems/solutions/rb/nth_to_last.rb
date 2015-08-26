class Node
	attr_accessor :val, :next_node
	def initialize(val, next_node=nil)
		@val = val
		@next_node = next_node
	end
end

class LinkedList
	attr_accessor :head, :tail

  	def initialize(val)
		new_node = Node.new(val, nil)
		@head = new_node
		@tail = new_node
	end

	def pretty
		current = @head
		out = ""
		while(current.next_node)
			out << current.val.to_s
			out << " -> "
			current = current.next_node
		end
		out << current.val.to_s
	end

  	# add a node with value val to the end of the list
	def append(val)
		# create a new node
		new_node = Node.new(val, nil)
		# make old tail point to new node
		@tail.next_node = new_node
		# update tail
		@tail = new_node
	end
	
  # add a node with value val to the beginning of the list
  	def prepend(val)
		# create a new node
		new_node = Node.new(val, @head)
		# update head
		@head = new_node
	end
	

    # find the nth from last node in a linked list
  	def nth_to_last(n)
  		# current will move forward 1 each step
  		current = @head

  		# trailing will move forward 1 each step,
  		# but trailing will start n steps later
  		trailing = @head

  		# move current ahead n steps
  		n.times do 
  			if current.next_node
	  			current = current.next_node
	  		else
	  			puts "list not long enough to find #{n} from last"
	  			return 
	  		end
  		end

  		# now move both current and trailing at once
  		# until current hits the end of the list
  		while (current.next_node)
  			current = current.next_node
  			trailing = trailing.next_node
  		end

  		# implicitly return trailing
  		trailing
  	end
end



llist = LinkedList.new(11)
llist.append 12
llist.append 13
llist.append 14

puts llist.pretty
# 11 -> 12 -> 13 -> 14 

puts "0th to last is #{llist.nth_to_last(0).val}"
# 0th to last is 14

puts "1st to last is #{llist.nth_to_last(1).val}"
# 1st to last is 13

puts "2nd to last is #{llist.nth_to_last(2).val}"
# 2nd to last is 12

puts "3rd to last is #{llist.nth_to_last(3).val}"
# 3rd to last is 11

puts "4th to last"
puts llist.nth_to_last(4)
# 4th to last
# list not long enough to find 4 from last