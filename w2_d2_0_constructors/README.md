# JavaScript Constructors
| Objectives |
| :--- |
| Explain how constructors make objects more consistent |
| Use constructor functions to build objects |
| Use constructor functions to add methods to objects |

### Motivation (Why?)

OOP is a popular design pattern that's used in most web apps; tomorrow we'll discuss OOP in detail.

Constructors are the basis of OOP; today we'll refactor our object literals to use constructors.

**Why we need constructors**

```js
var hondaCar = {
  make: "Honda",
  model: "Civic",
  year: 2000,
  mpg: 24
};

var toyotaCar = {
  make: "Toyota",
  model: "Camry",
  year: 2005,
  mpgCity: 22,
  mpgHwy: 28
};
```


Uniform objects make our lives easier. When objects are uniform, we can count on properties being defined.

```js
toyotaCar.mpg // => undefined
```


### Analogy (What?)

Constructors are like a form that has a set number of fields. We can think of constructors as the gatekeepers to our data. They make sure everything is formatted consistently, data is persisted to the right place, etc.

### Setup (How?)

There are many ways to create objects in JavaScript:

**Object literal notation**

```js
var person = {};
```

**Constructor notation**

```js
var person = new Object();
```

**Example constructor function**

```js
function Car(make, model, year, mpg) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.mpg = mpg;
  this.name = function() {
    return this.year + ' ' + this.make + ' ' + this.model;
  };
};

var carInstance = new Car("Honda", "Civic", 2000, 24);
```


# Challenges

### Basic Challenges
1. Write a `SuperHero` constructor that takes `name` and `alterEgo`.
1. Write a `Dice` constructor that takes a `numberOfSides`.
  * Add a method called `roll` that randomly returns a number from 1 up to the `numberOfSides`.
  * Modify the `roll` method to record the returned side in a `lastRoll` property.
1. Write a `Radio` constructor that takes in an `ownerName` and a `signalType` ("AM" or "FM").
  * Add a `setStation` method to your radio that allows the following ranges for a station property:
    * 535 to 1705 for "AM".
    * 88 to 108 for "FM".
  * Add a listen method that returns the following:
    * "distorted music" for "AM".
    * "clear music" for "FM".

### Stretch Challenges
  1. Add a `toggleSignal` method to your `Radio` constructor that lets you set `signalType` to AM or FM. Make sure the station number is valid when you toggle. Your radio should remember your station when you toggle and return to that station when you toggle back.
