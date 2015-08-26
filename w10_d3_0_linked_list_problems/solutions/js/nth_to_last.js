LL = require('./linked_list.js');
LinkedList = LL.LinkedList;
Node = LL.Node;

// find the nth to last node in the linked list
LinkedList.prototype.nthToLast = function(n){
	// current will move forward 1 each step
	var current = this.head;
	// trailing will move forward 1 each step, 
	// but delayed by n steps!
	var trailing = this.head;

	// move current n steps ahead
	for(var i=0; i<n; i++){
		if (current.next){
			current = current.next;
		} else {
			console.log("list is not long enough to find "+n+"th to last!");
			return;
		}
	}

	// move both until current hits end of list
	while(current.next){
		current = current.next;
		trailing = trailing.next;
	}
	
	return trailing;
}


llist = new LinkedList(1);
llist.append(2);
llist.append(3);
llist.append(4);

console.log(llist.pretty());
// 1 -> 2 -> 3 -> 4 

console.log("0th to last", llist.nthToLast(0));
// { val: 4, next: null }

console.log("1st to last", llist.nthToLast(1));
// { val: 3, next: { val: 4, next: null } }

console.log("2nd to last", llist.nthToLast(2));
// { val: 2, next: { val: 3, next: { val: 4, next: null } } }

console.log("3rd to last", llist.nthToLast(3));
// { val: 1, next: { val: 2, next: { val: 3, next: [Object] } } }

console.log("4th to last", llist.nthToLast(4));
// "list is not long enough to find 4th to last!"
// undefined