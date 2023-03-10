'use strict';

///////////////////////////////////////////////
// Lesson 1
// Converting and chekcing Number

// By default in JS all numbers are decimal
console.log(23 === 23.0);

// Numbers are represented always in binary format
// Base 10 -> 0 to 9; 1/10 = 0.1, 3/10 = 3.3333333
// Binary Base 2 -> 0, 1
console.log(0.1 + 0.2); // 0.3000___4
console.log(0.1 + 0.2 === 0.3); // false; error in JS

// Conversions
console.log(Number('23'));
console.log(+'23'); // This is cleaner approach

// Parsing
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('30px', 2)); // NaN
console.log(Number.parseInt('e23', 10)); // NaN

console.log(Number.parseInt('2.5rem')); // 2
console.log(Number.parseFloat('2.5rem')); // 2.5
console.log(Number.parseFloat(' 2.5rem ')); // 2.5

// parseInt and parseFloat are global level functions. But it is always good to use Number.parseFloat
console.log(parseFloat(' 2.5rem ')); // 2.5

// To check if value is NaN. Not to check if value is number
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20x")); // true
console.log(Number.isNaN(23/0)); // false

// isFinite is the best way to check if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false
console.log(Number.isFinite(+"20x")); // false
console.log(Number.isFinite(23/0)); // false

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23/0)); // false

///////////////////////////////////////////////


///////////////////////////////////////////////
// Lesson 2
// Math and Rounding

// Square root:
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1/2)); // 5

// Cubic root:
console.log(8 ** (1/3)); //2

// Maximum value
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, "23", 11, 2)); // 23
console.log(Math.max(5, 18, "23p", 11, 2)); // NaN

// Minimum Value
console.log(Math.max(5, 18, 23, 11, 2)); // 2

// Constant in Math 
console.log(Math.PI); // 3.14___793
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random Numbers
console.log(Math.trunc(Math.random() * 6) + 1);

// Random Int between 2 numbers
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
// Math.trunc => removes decimal value
// Math.Random -> between 0 to 1 it gives number
// Math.Random() * (max - min) -> between 0 to (max-min) -> min and max
console.log(randomInt(10, 20));
console.log(randomInt(10, 20));
console.log(randomInt(10, 20));
console.log(randomInt(10, 20));

// Rouding Integers
console.log(Math.trunc(23.3)); // 23
console.log(Math.trunc(23.9)); // 23

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

// trunc vs floor
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24
// floor is best option to use than trunc

// trunc, round, ceil, floor all does type coericion
console.log(Math.floor("23.9")); // 23

// Rounding Decimals
// toFixed returns a string
console.log((2.7).toFixed(0)); // 3 (string)
console.log((2.7).toFixed(3)); // 2.700 (string)
console.log((2.345).toFixed(2)); // 2.35 (string)
console.log(+(2.345).toFixed(2)); // 2.35 (number)
// Note: How come primitive type has toFixed method? behind the scenes, JavaScript will do boxing. And boxing is to basically transform this to a number object, then call the method on that object. And then once the operation is finished it will convert it back to a primitive

///////////////////////////////////////////////


///////////////////////////////////////////////
// Lesson 3
// The Remainder Operator

console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2); // 0
console.log(6 / 2);

console.log(7 % 2); // 1
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

// Refer bankingScript 

// Note:
// Whenever you want to do something on every nth time, then remainder option is one option for us

///////////////////////////////////////////////


///////////////////////////////////////////////
// Lesson 4
// Numeric Separators -> Formatting the numbers
// For readability purpose
// _ is numeric seperator

// To represent large number
// 287,460,000,000
const diameter = 287460000000;
const diameterWithNumericSep = 287_460_000_000;
console.log(diameterWithNumericSep); // 287460000000

const price = 345_99; 
console.log(price); // 34599

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15; // 3.1415
// const PI = 3._14_15; // error // We can place numeric seperator only between 2 numbers
console.log(PI);

console.log(Number('230000')); // 230000
console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230
// So, Numeric separator can't be used for conversions
///////////////////////////////////////////////


///////////////////////////////////////////////
// Lesson 5
// BigInt

// This is the biggest number JS store
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER);
// Unsafe Number: sometimes looks correct and sometimes not
console.log(2 ** 53 + 1); // 9007199254740991
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(2 ** 53 + 5);

// ES2020 -> New primite added named BigInt to store number as large as we want
console.log(2424424424242424234224234242423); // 2.424424424242424e+30
// To convert regular number to big int, append n 
console.log(2424424424242424234224234242423n);
// Use BigInt constructore function to convert any number to big int
console.log(BigInt(24244244242));

// Operations
console.log(10000n + 10000n); 20000n
console.log(20000n - 10000n); 
console.log(2424424424242424234224234242423n * 2424424424242424234224234242423n); 
console.log(10000n / 10000n); 
// console.log(Math.sqrt(16n)); // This will not work, we cant perform maht operation with bigint

const huge = 2424424424242424234224234242423n;
const num = 23;
// console.log(huge * num); // will throw error saying cannot mix bigint to other types
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15); true
console.log(20n === 20); false
console.log(typeof 20n);
console.log(20n == 20); true

console.log(huge + 'is Really BIG!!!!');

// Divisions
console.log(11n / 3n);
console.log(10/3);

///////////////////////////////////////////////


///////////////////////////////////////////////
// Lesson 6

// Creating Dates
// Four ways available to create date

// Creating a date
const now = new Date();
console.log(now);

// Parse a date from a string
console.log(new Date('Mar 08 2023 10:03:01'));
console.log(new Date('December 24, 2015'));

// Note: However this approach is not a quite reliable one. if the string was actually created by JS itself, then it is safe. 

console.log(new Date('2019-11-01T13:15:33.035Z'));
console.log();

console.log(new Date(2037, 10, 19, 15, 23, 5));
// In the above example, month is zero based. so 10 means november

// JS autocorrect the day
// November 33, 2037 -> December 03, 2037
console.log(new Date(2037, 10, 33)); // December 03 2037

// We can also pass into the date constructino function, the amount of millisecond passed since the beginning of the unix time, which is Jan 1, 1970
console.log(new Date(0));
// Converting days to milliseconds
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time)

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); // it is zero based
console.log(future.getDate());
console.log(future.getDay()); // Day of the week (zero based)
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // it returns timestamp in millseconds passed since Jan 1, 1970

console.log(new Date(future.getTime()));

console.log(Date.now()); // returns timestamp in ms

future.setFullYear(2040);
console.log(future);
// Note: Set is available for Month, Date, day, hours, etc.,
//////////////////////////////////////////////


///////////////////////////////////////////////
// Lesson 7

// Operation with dates

const futureDate = new Date(2037, 10, 19, 15, 23);
console.log(Number(futureDate));
console.log(+futureDate);

const daysPassed = (date1, date2) => {
    return Math.abs(date2 - date1)/ (1000 * 60 * 60 * 24);
}

const days1 = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);

// moment.js library can be used for precious calculation

//////////////////////////////////////////////


///////////////////////////////////////////////
// Lesson 8

// Internationalizing Dates (Intl)

const today = new Date();
const day = `${today.getDate()}`.padStart(2, '0');
const month = `${today.getMonth() + 1}`.padStart(2, '0');
const year = today.getFullYear();
const hour = `${today.getHours()}`.padStart(2, '0');
const minute = `${today.getMinutes()}`.padStart(2, '0');

console.log(`${day}/${month}/${year}, ${hour}:${minute}`);

const options = {
    day: 'numeric',
    month: 'long', // 2-digit, long, numeric
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'short', // narrow, long, short
}
console.log(new Intl.DateTimeFormat("en-US").format(today));
console.log(new Intl.DateTimeFormat("en-US", options).format(today));
console.log(new Intl.DateTimeFormat("en-GB").format(today));
console.log(new Intl.DateTimeFormat("en-GB", options).format(today));

// getting local from user browser instead of hard coding
const locale = navigator.language;
console.log(locale);
console.log(new Intl.DateTimeFormat(locale, options).format(today));


// http://www.lingoes.net/en/translator/langcode.htm

//////////////////////////////////////////////


///////////////////////////////////////////////
// Lesson 9

// Internationalizing Numbers (Intl)

const numb = 3884764.23;
const numOptions = {
    style: "currency", // percent, currency, unit
    // unit: "mile-per-hour", // celsius
    currency: 'EUR',
    useGrouping: false, // true, false
}

console.log('UK :', new Intl.NumberFormat("en-GB").format(numb));
console.log('Germany: ', new Intl.NumberFormat("de-DE").format(numb));
console.log('Syria: ', new Intl.NumberFormat("ar-SY").format(numb));
console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(numb));

console.log('UK :', new Intl.NumberFormat("en-GB", numOptions).format(numb));
console.log('Germany: ', new Intl.NumberFormat("de-DE", numOptions).format(numb));
console.log('Syria: ', new Intl.NumberFormat("ar-SY", numOptions).format(numb));
console.log(navigator.language, new Intl.NumberFormat(navigator.language, numOptions).format(numb));

//////////////////////////////////////////////


///////////////////////////////////////////////
// Lesson 10
// Timeout

// setTimeout
// Calling some function after some time delay
// It just fires only once
setTimeout(() => console.log(`Here is your pizza 🍕`), 3000);
console.log('Waiting for Pizza 🍕.....');

// Note:
// setTimeout is asynchronous function, it doesn't block code execution. 

// Passing arguments to setTimeout
setTimeout(
    (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}  🍕`), 
    3000, 
    'Olives', 'Spinach');
// In the above example,
    // Parameter 1 is call back function
    // Parameter 2 is timeout value
    // after Parameter 2, any number of arguments you can pass which can be used by call back function as a value for it's method parameter.

// Clearing Timeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
    (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}  🍕`), 
    3000, 
    ...ingredients);
console.log('Waiting for Pizza 🍕.....');

if (ingredients.includes('spinach')) {
    clearTimeout(pizzaTimer)
}

// setInterval
// Calling some function after some time interval
// It continues to execute every time interval

setInterval(() => console.log(new Date()), 1000);

const interval = setInterval(() => {
    const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);

// clearInterval(interval);