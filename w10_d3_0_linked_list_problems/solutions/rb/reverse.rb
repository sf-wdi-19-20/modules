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
	

    # reverse the linked list
  	def reverse
  		# can already set new tail (though will be changing pointers)
  		@tail = @head

  		prev = nil
  		current = @head
  		
  		while (current.next_node)
  			# save the next node so we don't lose track of it
  			nextn = current.next_node
  			# reverse the pointer on current
  			current.next_node = prev
  			
  			# advance the prev and current nodes forward
        # (using the nextn node we saved earlier)
  			prev = current
  			current = nextn
  		end
  		# reverse the final pointer 
  		current.next_node = prev
  		# update head
  		@head = current
  	end
end


llist = LinkedList.new(1)
llist.append 1
llist.append 1
llist.append 2
llist.append 3
llist.append 3
llist.append 4

puts llist.pretty
# 1 -> 1 -> 1 -> 2 -> 3 -> 3 -> 4

llist.reverse!
puts llist.pretty
# 4 -> 3 -> 3 -> 2 -> 1 -> 1 -> 1



llist2 = LinkedList.new(8)
puts llist2.pretty
# 8
llist2.reverse!
puts llist2.pretty
# 8
