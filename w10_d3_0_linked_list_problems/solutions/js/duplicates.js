LL = require('./linked_list.js');
LinkedList = LL.LinkedList;
Node = LL.Node;


// remove duplicates from a SORTED linked list
LinkedList.prototype.removeDuplicates = function(){
	var prev = this.head;
	var current = this.head;
	while(current.next){
		// if we find a new unique value...
		if (prev.val !== current.val){
			// connect the value to our growing list
			prev.next = current;
			// update prev to reflect new value
			prev = current;
		}
		// always move current forward
		current = current.next;
	}
	// add tail if it has a unqiue value
	// update tail
	if (prev.val !== current.val){
		prev.next = current;
		this.tail = current;
	} else {
		prev.next = null;
		this.tail = prev;
	}
}

llist = new LinkedList(1);
llist.append(1);
llist.append(1);
llist.append(2);
llist.append(3);
llist.append(3);

console.log(llist.pretty());
// 1 -> 1 -> 1 -> 2 -> 3 -> 3 

llist.removeDuplicates();
console.log(llist.pretty());
// 1 -> 2 -> 3
