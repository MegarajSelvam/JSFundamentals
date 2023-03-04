'use strict';

//////////////////////////////////////////////
// Lesson 1: 
// Default Parameters

const bookings = []

//New approach: ES6 Approach to add default parameters
const createBooking = function(flightNum, numPassengers = 1, price = 199 * 2 * numPassengers) {
    // Old approach to set default values, ES5 approach: (Short circuting)
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    // enhanced object literal syntax, This will create the property with the variable name
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking); // {flightNum: 'LH123', numPassengers: undefined, price: undefined}
    bookings.push(booking)
}

createBooking('LH123')
createBooking('LH123', 2, 0.0)
createBooking('LH123', undefined, 5)

//////////////////////////////////////////////

//////////////////////////////////////////////
// Lesson 2: 
// How passing arugment works 
// value vs references

// Value Type
const flight = 'LH234'
// Reference Type
const megaraj = {
    $name: "Megaraj Selvam",
    passport: 12345678923
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.$name = `Mr. ${passenger.$name}`;

    const alertMessage = passenger.passport === 12345678923 ? "Check In" : "wrong passport";
   // alert(alertMessage);
   console.log(alertMessage);
}

checkIn(flight, megaraj);
console.log(flight);
console.log(megaraj); 

// flightNum is a copy of original value not a original value itself. that is completely new variable
// passenger is reference type and it just copied the reference, not the value itself. so changing passenger impact the original value also. 
// i.e.,
// const flightNum = flight;
// const passenger = megaraj;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000);
}

newPassport(megaraj);
checkIn(flight, megaraj);
console.log(megaraj);

// Pass by value and Pass by references
// JavaScript does not have passing by reference, only passing by value, even though it looks like it's passing by reference So JavaScript does not have passing by reference, only passing by value, even though it looks like it's passing by reference.for objects, we do in fact pass in a reference. So the memory address of the object.However, that reference itself is still a value. It's simply a value that contains a memory address.So basically we pass a reference to the function, but we do not pass by reference, and this is an important distinction.
//////////////////////////////////////////////

//////////////////////////////////////////////
// Lesson 3: 

// First class and Higher order functions

// Refer Reference Images

// Functions accepting call back functions:
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [firstWord, ...otherWords]= str.split(' ');
    return [firstWord.toUpperCase(), ...otherWords].join(' ');
};

// Higher order function
const transformer = function(str, fn) {
   console.log(`Original strings: ${str}`); 
   console.log(`Transformed strings: ${fn(str)}`); 
   console.log(`Transformed By: ${fn.name}`); // it returns the name of the function
};

transformer('Javascript is the best!!!', upperFirstWord);
transformer('Javascript is the best!!!', oneWord);

// JS uses callbacks all the time
// Call back functions allows to create abstraction
// It makes it easy to split up or code into more reusable and interconnected parts.

const high5 = function() {
    console.log(`😎`);
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5)

// Functions returning functions:
// It plays a vital role in functional programming
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};
const greetHey = greet('Hey');
greetHey('Megaraj');
greetHey('Sonali');

const greetHello = greet('Hello');
greetHello("Megaraj");

greet("Welcome")("Megaraj");

const greetArrowFunction = greeting => name => console.log(`${greeting} ${name}`)
    
greetArrowFunction("Good morning")("Megaraj")

//////////////////////////////////////////////

//////////////////////////////////////////////
// Lesson 4: 

// Call and Apply Methods
const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    // book: function() {}
    book(flightNum,name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    },
};

lufthansa.book(239, 'John Smith');
lufthansa.book(635, 'John Wick');
console.log(lufthansa);

const book = lufthansa.book;

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
    book(flightNum,name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    },
    book,
}
eurowings.book(239, 'John Smith');
console.log(eurowings);

// Call Function:
// To set this keyword
// book(23, `Sarah William`) // It will not work as this value is undefined
book.call(eurowings, 23, 'Sarah William'); // Call method will call book function by setting this value to eurowings 
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);


const swiss = {
    airline: "Swiss",
    iataCode: "SW",
    bookings: [],
    book(flightNum,name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    },
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);


// Apply method
// only difference between call and apply method is, apply method will not recieve list of arguments after this argument, it takes array of parameters
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
// apply method is not used in any modern javascript
book.call(swiss, ...flightData);

// Bind Method
// Bind allows us to set this keyword manually but the difference is it doesn't call the method immediately, instead it just returns the new function where this key word is bound

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, "Steven Williams");

// Passing arguments (All arguments you can set or some arguments)
// Partial application -> part of the agruments already set here
const bookEW_23 = book.bind(eurowings, 23);
bookEW_23("William Hawk");
console.log(eurowings);
// Setting all arguments
const bookEW_24_BillGates = book.bind(eurowings, 24, "Bill gates");
bookEW_24_BillGates();
console.log(eurowings);

// With event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // It will not work, because this keyword points to the button element

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application - Preset Parameter

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(400));

// Challenge:
// Instead of using bind, using return function
const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
//////////////////////////////////////////////

//////////////////////////////////////////////
// Lesson 5: 

// IIFE - Immediate Invoked Functions Expression
// sometimes in JavaScript, we need a function that is only executed once.And then never again.So basically a function that disappears right after it's called once.
// mainly for data protection

// This will not work
const runOnce = function() {
    console.log('This will never run again poor way of implementation');
}
runOnce();
runOnce(); // anyone can call this method again.

// This will work
(function() {
    console.log('This will never run again by using IIFE');
    const isPrivate = 23;
})();

//console.log(isPrivate); // we will not able to access this
// therefore all data defined inside scope is private data or this data is encapsulated.

// arrow functions
(() => console.log("arrow function by using IIFE"))();

// Modern way of data protection
{
    const isPrivate = 23
    var notPrivate = 46
}
// Due to this feature of ES6, IIFE is not used much now for data protection.


//console.log(isPrivate);
console.log(notPrivate);
//////////////////////////////////////////////

//////////////////////////////////////////////
// Lesson 6: 
// Closures
//Closure is not a feature that we explicitly use. So we don't create closures manually, like we create a new array or a new function.So a closure simply happens automatically in certain situations, we just need to recognize those situations.

const secureBooking = function() {
    let passengerCount = 0;
    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

// secureBooking context is no longer in execution context (reference image 2), then how booker function able to increase passengerCount properly? 

// closure makes a function remember all the variables that existed at the function's birthplace essentially.

// Any function always has access to the variable environment of the execution context in which the function was created.

// So a function always has access to the variable environment of the execution context in which it was created,even after a debt execution context is gone. And this last part is really important. The closure is then basically this variable environment attached to the function, exactly as it was at the time and place that the function was created.

// Closure has the priority over the scope chain.

// Capturing closure -> refer reference image
console.dir(booker);
// [[scope]] -> It is internal property and we can't access this.

// More Closure Examples:
// Example 1:
let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();
console.dir(f); // at this point closure contains value a = 23

// Reassigning f function
h(); // f was reborn here, so as per this rule: closure makes a function remember all the variables that existed at the function's birthplace essentially, it just remembered b = 777;
f(); 
console.dir(f) // at this point closure contains value b = 777


// Example 2:
const boardPassengers = function(n, waitTime) {
    const perGroup = n / 3;

    // setTimeout requires 2 parameter, one is function which will get execute after certain timeout and other it timeout in milliseconds
    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, waitTime * 1000)

    console.log(`Will start boarding in ${waitTime} seconds`);
}

const perGroup = 1000; // Rule: Closure has the priority over the scope chain. 
// so even though we set perGroup as 1000, so that setTimeout function may use this value, but unfortunatly it took perGroup value from closure. 
boardPassengers(180, 3);

//////////////////////////////////////////////

////////////////////////////////////////////// 