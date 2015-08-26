var Node = function(val, next){
	this.val = val; 
	this.next = next; 
}

var LinkedList = function(val){
	this.head = new Node(val, null);
	this.tail = this.head;
}
// returns a nicely formatted LinkedList string
LinkedList.prototype.pretty = function(){
	// starts by putting all elements of linked list into an array
	// this is a GREAT candidate for its own function by the way
	// but i'm only doing it here
	var arr = [];
	var current = this.head;
	while (current.next){
		arr.push(current.val);
		current = current.next;
	}
	arr.push(current.val);
	// then, join the list into a string
	var sep = " -> "
	return arr.join(sep);
}


// add a node with value val to the end of the list
LinkedList.prototype.append = function(val){
	var newNode = new Node(val, null);
	this.tail.next = newNode;
	this.tail = newNode;
}

// add a node with value val to the beginning of the list
LinkedList.prototype.prepend = function (val){
	var newNode = new Node(val, this.head);
	this.head = newNode;
}

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
