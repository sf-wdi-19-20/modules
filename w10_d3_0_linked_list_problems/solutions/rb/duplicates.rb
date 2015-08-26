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
	

    # remove duplicate values from a SORTED linked list
  	def remove_duplicates!
  		# current will move forward 1 each step
  		current = @head

  		# prev will hold on to the last non-duplicate node
  		prev = @head

  		while (current.next_node)
  			# if we find a new value...
  			if prev.val != current.val
  				# add this current node to our non-duplicate list
  				prev.next_node = current
  				# update prev to store this most recent non-duplciate node
  				prev = current
  			end
  			
  			# always advance current
  			current = current.next_node
  		end
  		# finally, add tail value if it's unique
  		if prev.val != current.val
			# add this current node to our non-duplicate list
			prev.next_node = current
			@tail = current
		else
			prev.next_node = nil
			@tail = prev
		end
  	end

end

llist = LinkedList.new(1)
llist.append(1);
llist.append(1);
llist.append(2);
llist.append(3);
llist.append(3);

puts llist.pretty
# 1 -> 1 -> 1 -> 2 -> 3 -> 3

llist.remove_duplicates
puts llist.pretty
# 1 -> 2 -> 3

