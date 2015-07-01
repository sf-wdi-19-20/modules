//OOP Modeling Challenges (Car Dealership)

// constructor for the Car object type.
var Car = function(make, model, year, actualPrice, priceMarkup){
	this.make = make;
	this.model = model;
	this.year = year;

	// location attribute is on Car constructor because 
	// we DON'T want all cars to share a location - 
	// they're probably in different places!
	this.location = "Lot A";

	// color could go either way, but we'll put it in constructor
	// because color is more tied to each car (constructor)
	// than to being a car or car-ness (prototype)
	this.color = "black";

	// 'private' variables HAVE to be in the constructor...
	var _priceMarkup = priceMarkup;
	var _actualPrice = actualPrice;
	// ...and so do the getters and setters for them
	this.getPriceMarkup = function(){
		return _priceMarkup;
	}
	this.setPriceMarkup = function(newMarkup){
		_priceMarkup = newMarkup;
	}

	this.getFinalPrice = function(){
		return _actualPrice + _actualPrice*_priceMarkup;
	}

	// COUNT OPTION 1
	// the carCount CAN'T be stored in the constructor,
	// because it needs to change every time a new car is created
	// but we need to update it in the constructor in order to keep track
	Car.prototype.carCount = Car.prototype.carCount + 1;

	// COUNT OPTION 2 (PREFERRED)
	// we could also add a carCount property directly to the Car constructor
	// since it's just a function, and JS functions are all just objects
	// this is a more common way to track all cars than than option 1
	Car.carCount = (Car.carCount || 0) + 1;


	// each car needs its own inventory id, and they'll all be different,
	// so inventoryID belongs in the constructor.
	// the expression below looks up the current carCount (some number)
	// and stores it as the new car's inventory id.
	this.inventoryID = Car.prototype.carCount;   // OPTION 1
	// or 
	this.inventoryID = Car.carCount; // OPTION 2 (PREFERRED)
}

// COUNT OPTION 1
// Again, the carCount CAN'T be stored in the constructor
Car.prototype.carCount = 0;

// the drive behavior is the same for all cars, 
// and it doesn't access 'private' attributes,
// so we keep code DRY by adding to prototype
Car.prototype.drive = function(newLocation){
	this.location = newLocation;
}

// numWheels could go either way
// but almost all cars have 4 wheels, 
// so we'll look it up from the prototype
Car.prototype.numWheels = 4;


// creating an instance
blueCar = new Car("Ford", "Focus", 2005, 6000, 0.25);

// changing its color
blueCar.color = "blue";
