// Parent constructor function

function Animal(name) {

  this.name = name;

}

// Method added to the prototype of the parent constructor

Animal.prototype.sayHello = function() {

  console.log("Hello, I'm " + this.name);

};

// Child constructor function inheriting from the parent

function Dog(name, breed) {

  Animal.call(this, name);

  this.breed = breed;

}

// Inherit methods from the parent's prototype

Dog.prototype = Object.create(Animal.prototype);

// Method added to the child's prototype

Dog.prototype.bark = function() {

  console.log("Woof!");

};

// Creating instances of the child class

var myDog = new Dog("Buddy", "Labrador");

// Accessing properties and methods

console.log(myDog.name);        // Output: Buddy

myDog.sayHello();               // Output: Hello, I'm Buddy

myDog.bark();                   // Output: Woof!
