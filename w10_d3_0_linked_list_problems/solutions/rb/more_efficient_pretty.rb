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
		sep = " -> "  # save a little space by not recreating this string every time
		while(current.next_node)
			out << current.val.to_s
			out << sep
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
end
