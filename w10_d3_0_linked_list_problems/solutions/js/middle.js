LL = require('./linked_list.js');
LinkedList = LL.LinkedList;
Node = LL.Node;

LinkedList.prototype.middle = function(){
	// the current node will move forward 1 each step
	var current = this.head;
	// the trailing node will move forward 1 every other step
		// it will travel half the distance the current one does!
	var trailing = this.head;
	// counter keeps track of whether trailing should move
	var counter = 0;

	// let current move all the way through the list
	while (current.next){
		current = current.next
		if (counter % 2 == 0){
			trailing = trailing.next
		}
		counter++;
	}
	return trailing;
}


llist = new LinkedList(2);
llist.append(4);
llist.append(8);
llist.append(7);
llist.append(1);
console.log(llist.pretty());
// 2 -> 4 -> 8 -> 7 -> 1
console.log(llist.middle().val);
// 8

llist2 = new LinkedList(1);
llist2.append(10);
llist2.append(2);
llist2.append(9);
llist2.append(3);
llist2.append(8);
console.log(llist2.pretty());
// 1 -> 10 -> 2 -> 9 -> 3 -> 8
console.log(llist2.middle().val);
// 9
