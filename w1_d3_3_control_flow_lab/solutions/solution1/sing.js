var numBottles = prompt("How many bottles of beer on the wall?");

var bottles = "bottles"
while (numBottles > 0){
	console.log(numBottles + " " + bottles + " of beer on the wall,");
	console.log(numBottles + " " +  bottles + " of beer");
	console.log("Take one down and pass it around,");
	numBottles = numBottles - 1;
	if (numBottles === 1){
		bottles = "bottle"
	} 
	if (numBottles === 0){
		console.log("No more bottles of beer on the wall!");
	} else {
		console.log(numBottles + " " + bottles + " of beer on the wall!");
	}
}
