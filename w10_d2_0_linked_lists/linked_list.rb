# a Node object type (class)
class Node
	# val and next
	attr_accessor :val, :next_node
	def initialize(val, next_node=nil)
		@val = val
		@next_node = next_node
	end
end

# a Linked List object type (class)
class LinkedList
  # The linked list should store its `head` and `tail`. 
  # The `head` and `tail` will both be Nodes.  
	attr_accessor :head, :tail

  # The linked list object type should also have methods to:
  # given a starter value, create a new list,
	def initialize(val)
		newNode = Node.new(val, nil)
		@head = newNode
		@tail = newNode
	end

  # `append` a value to the end of the list, 
	def append(val)
		# create a new node
		newNode = Node.new(val, nil)
		# make old tail point to new node
		@tail.next_node = newNode
		# update tail
		@tail = newNode
	end
	
  # `prepend` a value to the start of the list,
	
  # find the `size` of the list,
  
  # given one node, `insert` another node into the list after it,
  
  # given one node, `delete` the node after it from the list
  
  # stretch: Write a method to detect whether a linked list has a cycle in it. 
end

