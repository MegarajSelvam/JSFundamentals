'use strict';
// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

//////////////////////////////////////////////
/*
// Lesson 1: 
// Destructuring Arrays
const arr = [2, 3, 4];

// Older way
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// Modern Way
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

const [first, second] = restaurant.categories;
// skipping some elements
const [one, , third] = restaurant.categories; 
console.log(first, second);

// Swapping
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Older way of swapping
// const temp = main
// main = secondary
// secondary = temp
// console.log(main, secondary)

// New way
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return value from function
// Immediately creating 2 variable out of one function
// here function returns array of object and we are putting that value into variables
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring 
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j)
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r);
// in above example array hold only 2 item. but we are looking for third item in destructuring. so for third item, value returned in undefined

// In case if you want to set some default value, you can follow below mentioned hack
const [l=1, h=1, m=1] = [8, 9];
console.log(l, k, m);
// for third element m, value returned is 1 instead of undefined 
*/
//////////////////////////////////////////////

//////////////////////////////////////////////
/*
// Lesson 2: 
// Destructuring Objects
// Here we need to use curly brace and variable name should exactly match the property name of the object

const restaurant = {
  $name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // orderDelivery: function(obj){
  //   console.log(obj);
  // },
  orderDelivery: function({starterIndex=1,mainIndex=0,time='20:00',address}){
    console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
};

const {$name, categories, openingHours} = restaurant;
console.log($name);
console.log(categories);
console.log(openingHours);

// User defined name for variables
const {$name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Setting default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
// we can't use const as variable a and b already declared
// we can't use let as it will create new variable.
// we need to mutate a and b value
({a, b} = obj);
console.log(a, b);

// Nested objects
const {fri} = openingHours;
console.log(fri);
const {sat:{open, close},} = openingHours;
console.log(open, close);
const{thu:{open: o, close: c}} = openingHours;
console.log(o, c);
const{mon:{open: op, close: cl} = {open: 12, close: 24}} =openingHours;
console.log(op, cl);

// destructuring inside function parameter
restaurant.orderDelivery({
  time:`22:30`,
  address: `Via del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: `Via del Sole, 21`,
  starterIndex: 2,
});
*/
//////////////////////////////////////////////

//////////////////////////////////////////////
/*
// Lesson 3: 
// Spread Operators (...)
// we can use the spread operator to basically expand an array into all its elements. So basically unpacking all the array elements at one.

const arr = [7, 8, 9];

// Older approach
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr)

// New approach
const newArr = [1, 2, ...arr]
console.log(newArr)

console.log(newArr) // It will print array
console.log(...newArr) // It will print element of the array individually

const restaurant = {
  $name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPaste: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`)
  }
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Two important use cases of spread operator
// 1) Copy Array - Shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

// 2) Join 2 Arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables are things like all arrays, strings, maps or sets but not object. 
// Iterables: arrays, strings, maps, sets. NOT object
// Spread operator can be used on all iterables

const str = 'Megaraj';
const letters = [...str, ' ', 'S.'];
console.log(letters);
// console.log(`${...str} selvam`) -> this will not work

// Note: 
// multiple values separated by a comma are usually only expected when we pass arguments into a function, or when we build a new array. That's where spread operator cames into picture

// Real World Example
// const ingredients = [
//   prompt(`Let's make pasta! Ingredeint 1?`),
//   prompt(`Ingredeint 2?`),
//   prompt(`Ingredeint 3?`),
// ];
// console.log(ingredients);
// //restaurant.orderPaste(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPaste(...ingredients);

// Objects
// since ES2018, spread operator also works for object. Even though objects are not literables.
// It just takes shallow copy
const newRestaurant = {foundedIn: 1996, ...restaurant, founder: "Megaraj"};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.$name = `Roma`;
console.log(restaurant.$name);
console.log(restaurantCopy.$name);
*/
//////////////////////////////////////////////

//////////////////////////////////////////////
/*
// Lesson 4: 
// Rest Pattern and Parameter
// Rest pattern works exactly like spread operator, so it has the same syntax with the three dots, but it actually does the opposit of the spread operator
// Rest pattern uses the same syntax however to collect multiple elements and condense them into an array.
// So spread is to unpack an array and rest is to pack elements into an array

// SPREAD, because on RIGHT side of = sign
const arr = [1, 2, ...[3, 4]];
// REST, because on left side of = sign
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const restaurant = {
  $name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function(mainIngredeint, ...otherIngredeints) {
    console.log(mainIngredeint);
    console.log(otherIngredeints);
  }
};


// Part 1 -> Destructuring
// Array
// combining destructuring, spread and rest operator
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Note: Rest pattern should always be the last in the destructuring assignment. Otherwise how JS know until when it should collect the rest of the array. Also there will be only one rest operator allowed in destructuring

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// Part 2 -> Functions
// ...numbers -> packing an array by using rest operator
const add = function(...numbers) {
  let sum = 0;
  for (let i=0; i<numbers.length; i++) sum+=numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 1);
add(5, 3, 7, 1, 3, 5, 6, 7);

const x = [23, 5, 7];
add(...x); // Unpacking an array by using spread operator

// real time use case
restaurant.orderPizza("mushroom", "cheese", "spinach")
restaurant.orderPizza("Tomato")
*/

//////////////////////////////////////////////

//////////////////////////////////////////////
/*
// Lesson 5: 
// Short Circuiting (&& ||)
// Three properties of and and or operatos
// 1) Use any data type
// 2) Return any data type
// 3) short circuiting

const restaurant = {
  $name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function(mainIngredeint, ...otherIngredeints) {
    console.log(mainIngredeint);
    console.log(otherIngredeints);
  }
};

// Short circuting:
// In the case of the OR operator, short circuiting means that if the first value is a truthy value, it will immediately return the truthy value
console.log("------------OR------------") 
console.log(3 || `Jonas`) // 3
console.log(``|| 'Jonas') // Jonas
console.log(true|| 0) // true
console.log(undefined || null) // both are false value, so it returned null
console.log(undefined || false || true) // true
console.log(undefined || 0 || `Hello` || 23 || null) // Hello, returned first truthy value

// Real time Use Case
// Older way
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// Newer approach
restaurant.numGuests = 20;
const guest2 = restaurant.numGuests || 10;
console.log(guest2);
restaurant.numGuests = 0
const guest3 = restaurant.numGuests || 10;
console.log(guest3); // Instead of printing 0, it prints 10. this is one disadvantage of this approach

console.log("------------AND------------") 
// In the case of the OR operator, short circuiting means that if the first value is a falsy value, it will immediately return the falsy value and if every value is truthy value, it will return last truthy value

console.log(0 && `Jonas`); // Jonas
console.log(7 && `Jonas`); // Jonas
console.log(`Hello` && 23 && null && `Jonas`); // null. returned falsy value

// Real time example
// Older approach
if (restaurant.orderPizza) {
  restaurant.orderPizza(`mushrrom`, 'spinach');
}
// Newer approach
restaurant.orderPizza && restaurant.orderPizza(`Tomato`, 'Cheese');

// Note:
// And as for practical applications, we can use the OR operator to set default values, and we can use the AND operator to execute code in the second operand if the first one is true
*/
//////////////////////////////////////////////

//////////////////////////////////////////////
/*
// Lesson 6: 
// The Nullish coalescing operator (??)

const restaurant = {
  $name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto']
};

// Problem
// Even though numGuest is zero, instead of returning zero we returned 10. its because zero is falsy value
restaurant.numGuests = 0
const guest = restaurant.numGuests || 10;
console.log(guest); 

// Solution (ES2020)
// Nullish value: Null or undefined (Not 0 or '')
// Nullish operator works on nullish value not on falsy value
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect)

*/
//////////////////////////////////////////////

//////////////////////////////////////////////
/*
// Lesson 7:
// Logical Assignment Operators (ES2021)
// (??=, &&=, ||=)

const rest1 = {
  $name: "Capri",
  numGuests: 20,
};

const rest2 = {
  $name: "la piazaa",
  owner: `taquella`,
};

// Set default number of guest for all restaurant object which do not have numGuest property
// Older way
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
console.log(rest1);
console.log(rest2);

rest1.numGuests = 0;
// New way with OR assignment operator, but it works on falsy value
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);

rest1.numGuests = 0;
// Best way is to use Nullish assignment operator, it works on nullish value
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

// Older way
// rest1.owner = rest1.owner && `<ANONYMOUS>`;
// rest2.owner = rest2.owner && `<ANONYMOUS>`;
// console.log(rest1); // here owner value set to undefined as this property is not found
// console.log(rest2);

// New Way
rest1.owner &&= `<ANONYMOUS>`;
rest2.owner &&= `<ANONYMOUS>`;
console.log(rest1) // here owner value is not set to undefined, it just removed that property itself
console.log(rest2)
*/
//////////////////////////////////////////////
//////////////////////////////////////////////

//////////////////////////////////////////////
// Lesson 8:
//Looping arrays: the for-of loop
/*
const restaurant = {
  $name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto']
};

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// older way:
for (let i = 0; i < menu.length; i++) console.log(menu[i]);

// new way:
for (const item of menu) console.log(item);

// To get the index as well
console.log([...menu.entries()]);

for (const item of menu.entries()){
  console.log(`${item[0] + 1}: ${item[1]}`);
} 

// Cleaner approach by using destructuring
for (const [index, item] of menu.entries()) {
  console.log(`${index + 1}: ${item}`);
} 
*/
//////////////////////////////////////////////

//////////////////////////////////////////////
// Lesson 9:
// Enhanced Object Literals
// 1) Adding another object inside object
// 2) Function expression
// 3) Computing the properties name

/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours = {
  // older way (Computing the properties name)
  thu: {
    open: 12,
    close: 22,
  },
  // New Way (Computing the properties name)
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // New Way (Computing the properties name)
  [`day-${2+4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};



const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // older way(Function expression)
  // order: function(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  // },
  // ES6 Enhanced object literal way (Function expression)
  order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  // older way (Adding another object inside object)
  // openingHours: openingHours, 
  // ES6 enhanced object literals (Adding another object inside object)
  openingHours
};

console.log(restaurant);
console.log(restaurant.order(1, 2));
*/
//////////////////////////////////////////////

//////////////////////////////////////////////
// Lesson 10:
// Optional Chaining (.?)
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
   fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }
};

// Problem:
// mon is undefined and we are trying to get open property from undefined. so it throws error
//console.log(restaurant.openingHours.mon.open); 

// Solution:
// Older way
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// Newer way (ES2020)
console.log(restaurant?.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days) {
 // const open = restaurant.openingHours[day]?.open || `closed`; // or operator will return falsy for zero also
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, we open at ${open}`);
}


// For Methods
console.log(restaurant.order?.(0, 1) ?? `Method doesn't exist`);
console.log(restaurant.orderPizza?.(0, 1) ?? `Method doesn't exist`);

// For Arrays
const users = [{$name: 'Megaraj', email: `hello@mega.io`}];
// older way
if (users.length > 0) console.log(users[0].$name); else console.log(`User array is empty`);
// New way
console.log(users[0]?.$name ?? `User array is empty`);
console.log(users[1]?.$name ?? `User array is empty`);
*/
//////////////////////////////////////////////

//////////////////////////////////////////////
// Lesson 11:
// Looping objects: Object keys, values and entries
/*
const restaurant = {
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
   fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }
};

// Looping over properties
// Properties Name
const properties = Object.keys(restaurant.openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Looping over values
// Properties Value
const values = Object.values(restaurant.openingHours)
console.log(values);

// Looping over entire object
const obj = Object.entries(restaurant.openingHours);
console.log(obj);

// Crazy one [key, value]
for (const [key, {open, close}] of obj) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
*/
//////////////////////////////////////////////

//////////////////////////////////////////////
/*
// Lesson 12:
// Sets
// Sets is a collection of unique value, it will not contains any duplicate value.
// Sets can have mixed data type.
// Just like array, sets also iterable
// Order of the element in teh set is irrelevant

const ordersSet = new Set([
  `Pasta`,
  `Pizza`,
  `Pizza`,
  `Risotto`,
  `Pizza`,
  `Pasta`,
]);
console.log(ordersSet); // It removed all duplicate values
console.log(new Set('Megaraj'));

// To find size, here we use size property not length property
console.log(ordersSet.size);
// In array we have include and for set we have has method
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
// Add method to adding element in the set
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
console.log(ordersSet); 
// Delete method to remove element in the set
ordersSet.delete("Risotto");
console.log(ordersSet);
// To Clear all the elements
// ordersSet.clear();
// console.log(ordersSet);

// To retrieve the element
//console.log(ordersSet[0]); // This will not work, because set doesn't have any index
// It's because there is no need to retrieve element from set as it always contains only unique value. in case if you have use case like retrieving certain element, then all we need to do is just use has method to check element exist or not. otherwise go for array

// we can iterate over sets
for (const order of ordersSet) console.log(order);


// Real Time Use Case
// 1) Remove duplicate value of arrays
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)]
console.log(staffUnique);
console.log([...staffUnique]); // Set is an iterable, spread operator can be used on all iterables, so here we are using spread operator to create array. Converting set to arrays

// 2) To find unique element count
console.log(new Set(staff).size);

// 3) To find how many different letters in  a string
console.log(new Set('Megaraj'));
*/
//////////////////////////////////////////////

//////////////////////////////////////////////
/*
// Lesson 13:
// Maps
// Key Value Pair in Javascript

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal")); // set method returns updated map value

// As set method returns upated map vaue, we can use chaining.
rest.set('Categories', ["Italian", "Pizzeria", "Vegeterian", "Organic"]).set("Open", 11).set("Close", 23).set(true, "We are open :D").set(false, "we are closed :(");

// Retrieving map
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get("1")); // It will return undefined
console.log(rest.get(1));

// Clever way of using boolean keys
const time = 21
console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

// Map contains key or not
console.log(rest.has('Categories'));
console.log(rest.has('categories')); // keys are case sensitive

// To remove element
rest.delete("Categories")

// To find the size
console.log(rest.size);

// To clear all elements
// rest.clear()

rest.set([1, 2], "Test")
console.log(rest);
console.log(rest.size);
console.log(rest.get([1, 2])); // undefined
// And the reason for that, is that these two arrays are actually not the same object. So, this array, and this one, even though we wrote them in the same way and so, they have the same elements,they are not the same object in the heap, okay? And, the key here is exactly this object. This object in memory, and not this one.And so, this cannot work. In order to make it work we would have to do this. Creating an array, one, two. And then, we use that array. And then, we also use the same array to read the value out of the map.
const arr = [3,4]
rest.set(arr, "Test 2")
console.log(rest.get(arr)); 

rest.set(document.querySelector('h1'), "Heading");
console.log(rest);

// Alternative way of creating map without using set method
const question = new Map([
  ["Question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["Correct", 3],
  [true, "Correct answer 🎉"],
  [false, "Wrong answer ☹, Try Again"],
])

console.log(question);

// Converting object to maps:
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
 fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// object.entries returns an array of key/values of the enumerable properties of an object
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz APP
console.log(question.get('Question'));
// Iterating over maps
// Destructuring used here to get key and value
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('Your answer!!!'));
// console.log(question.get(answer === question.get("Correct")));

// Converting map to array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(...question.keys());
console.log(question.values());
console.log(...question.keys());
*/
//////////////////////////////////////////////


//////////////////////////////////////////////
// Lesson 14
// Which data structure to use? (arrays, objects, map and sets)
// Refer reference1 and reference2 images
//////////////////////////////////////////////

//////////////////////////////////////////////
// Lesson 15
// Strings

const airline = "TAP Air Portugal"
const plane = "A320"

// To retrieve each letter from string
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

// To find the length of string
console.log(airline.length);
console.log("B737".length);

// retrieves position of first occurence of element
console.log(airline.indexOf("r")); 
// retrieves position of last occurence of element
console.log(airline.lastIndexOf("r")); 
// also for entire words 
console.log(airline.indexOf("Portugal"));
// if we try to find something which is not there, then it will return -1. 
console.log(airline.indexOf("portugal"));

// Extracting the part of the string using the slice method
console.log(airline.slice(4)); // 4 is the position at which extraction start
// slice method just returns new string
console.log(airline.slice(4, 7)); // 4 is the position a which extraction starts and 7 is the position it stops the extraction

// removed hard coded index value with indexof
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2)); // retrieves last 2 element 
console.log(airline.slice(1, -1)); // remove first element and last element

const checkMiddleSeat = function(seat) {
// B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log(`You go the middle seat`); 
  else console.log("You are lucky :)");
}

checkMiddleSeat("11B")
checkMiddleSeat("23C")
checkMiddleSeat("3E")

// So we know that strings are just primitives. So why do they have methods? Shouldn't methods only be available on objects such as a race? Well that is actually true. However, JavaScript is really smart. And so here is how this works. Whenever we call a method on a string, JavaScript will automatically behind the scenes convert that string primitive to a string object with the same content. And then it's on that object where the methods are called. All right and this process is called boxing because it basically takes our string and puts it into a box which is the object.
//Example
console.log(typeof new String("Jonas").slice(1));

// Lower case and Upper Case
console.log(airline.toLowerCase());
console.log("tap".toUpperCase());

// Fix Capitalization in name
const passenger = "jOnas"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.Io \n";
const lowerEmail = loginEmail.toLowerCase();
// trim method to trim the white space
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail === email);

// we can do chaining as well
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail === email);

// ES2019 -> trimstart and trimend feature available
console.log(loginEmail.trimStart().trimEnd());

// Replacing
const priceGB = "288,97₤"
const priceUS = priceGB.replace('₤', '$').replace(",", ".")
console.log(priceUS);

const announcement = "All passengers come to boarding door 23, Boarding door 23";

// replace only replace the first occurence of the string
console.log(announcement.replace("door", "gate"));
// Using regular expression to replace all occurence of string
console.log(announcement.replaceAll(/door/g, "gate"));
// replaceAll will replace all occurence of the string
console.log(announcement.replaceAll("door", "gate"));

// Note: Replacement are case sensitive

// Booleans (includes, startsWith, endsWith)
const planes = `Airbus A320neo`
console.log(planes.includes("A320"));
console.log(planes.includes("Boeing"));
console.log(planes.startsWith("Aib"));
console.log(planes.startsWith("Air"));

if (planes.startsWith("Air") && planes.endsWith("neo")){
  console.log("part of the new air bus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("gun") || baggage.includes("knife")){
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("socks and camera");
checkBaggage("Got some snacks and a gun for protection");

// Split and Join
console.log("a+very+nice+string".split("+").join(" "));
const [firstName, lastName] = "Megaraj Selvam".split(" ")
console.log(firstName, lastName.toUpperCase());
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);


const capitalizeName = function(name) {
  const splittedName = name.split(" ")
  const namesUpper = [];
  for (const n of splittedName) {
    // Option 1
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // Option 2
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper.join(" "));
}

capitalizeName("jessica ann smith davis");
capitalizeName("megaraj selvam");

// Padding 
// padding means to add a number of characters to the string until the string has a certain desired length
const message = "Go to gate 23";
console.log(message.padStart(25, "+")); //++++++++++++Go to gate 23
console.log('Megaraj'.padEnd(25, "#"));
console.log(message.padStart(20, "+").padEnd(30, "+"));

// Real time Use Case
const maskCreditCard = function(number) {
  const str = number + ""; // number + "" or string(number)
  console.log(typeof str);
  const last4Digit = str.slice(-4);
  return last4Digit.padStart(str.length, "*");
}

console.log(maskCreditCard(4123567888888888));
console.log(maskCreditCard("41235678888167482932"));

// Repeat method
const message2 = "Bad Weather... All departure are delayed..."
console.log(message2.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}
planeInLine(5);
planeInLine(12);
planeInLine(2);


// Note:
// We have covered only most important methods of strings

// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_',' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
//////////////////////////////////////////////
