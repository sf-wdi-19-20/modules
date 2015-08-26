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
	
	# find the middle node in the linked list.
	def middle
		# the current node will move forward 1 each step
		current = @head
		
		# the trailing node will move forward 1 every other step
		#it will travel half the distance the current one does!
		trailing = @head
		
		# counter keeps track of whether trailing should move
		counter = 0

		# let current move to the end of the list
		while current.next_node
			if counter % 2 == 0
				trailing = trailing.next_node
			end
			current = current.next_node
			counter = counter + 1
		end

		# implicitly return trailing
		trailing
	end
end



llist = LinkedList.new(2)
llist.append(4)
llist.append(8)
llist.append(7)
llist.append(1)
puts llist.pretty 
# 2 -> 4 -> 8 -> 7 -> 1
puts llist.middle.val
# 8

llist2 = LinkedList.new(1)
llist2.append(10)
llist2.append(2)
llist2.append(9)
llist2.append(3)
llist2.append(8)
puts llist2.pretty
# 1 -> 10 -> 2 -> 9 -> 3 -> 8
puts llist2.middle.val
# 9
