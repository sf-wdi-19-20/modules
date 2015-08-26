LL = require('./linked_list.js');
LinkedList = LL.LinkedList;
Node = LL.Node;

// reverse the linked list
LinkedList.prototype.reverse = function(){
	// go ahead and reassign tail
	this.tail = this.head;
	// current will move forward 1 each step
	var current = this.head;
	// prev will temporarily store the previous node at each step
	var prev = null;
	// next will temporarily store the next node at each step
	var next;

	while (current.next){
		// store old next
		next = current.next;
		// reverse current node's pointer
		current.next = prev;

		// move prev and current forward 1 step
		prev = current;
		current = next;
	}
	current.next = prev;
	// update head
	this.head = current;
}



llist = new LinkedList(1);
llist.append(1);
llist.append(1);
llist.append(2);
llist.append(3);
llist.append(3);
llist.append(4);

console.log(llist.pretty());
// 1 -> 1 -> 1 -> 2 -> 3 -> 3 -> 4

llist.reverse();
console.log(llist.pretty());
// 4 -> 3 -> 3 -> 2 -> 1 -> 1 -> 1
