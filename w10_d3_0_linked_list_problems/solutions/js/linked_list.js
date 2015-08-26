var Node = function(val, next){
	this.val = val; 
	this.next = next; 
}

var LinkedList = function(val){
	this.head = new Node(val, null);
	this.tail = this.head;
}
// display a LinkedList nicely
LinkedList.prototype.pretty = function(){
	var arr = [];
	var current = this.head;
	while (current.next){
		arr.push(current.val);
		arr.push(" -> ");
		current = current.next;
	}
	arr.push(current.val);
	return arr.join("");
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