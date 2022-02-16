'use strict'
/*
//////////////////////////////////////////////
// Lesson 1: 
Strict Mode
It is a special mode that we can activate which makes it easier for us to write secure JS code

All we need to do is at the top of script write
'use strict';

- strict mode forbids us to use certain things
- It will actually creates visible errors for us. In certain situation, JS silently fails without letting us to know what is the error. This can be figured out by using strict mode
- strict mode maintains a list of varialbe which will be added as a keyword in JS for future use. Eg: interface, private

'use strict';

let hasDriversLicense = false;
const passTest = true;
// Here I am using the variable name with wrong spelling. This error will not get caught in console unless you use strict mode.

if (passTest) hasDriverLicense = true; 
if (hasDriversLicense) console.log('I can drive :D')

// Uexpected strict mode reserved word
const interface = 'Audio';
const private = 534

//////////////////////////////////////////////

// Lesson 2:
Functions
    - Function is a piece of code that we can reuse over and over again.
    - Used to implement DRY - Don't Repeat Yourself Principle

function funcWithoutParams(){
    console.log('I am Megaraj Selvam')
}

function funcWithParams(message){
    console.log(message)
}

function funcWithReturningValues(){
    return 'function can return value';
}
// calling/running/invoking the function
funcWithoutParams();
funcWithParams('function with parameter');
console.log(funcWithReturningValues());
// console.log(funcWithParams()); // As we are not returning anything, then it log undefined

function fruitProcessor(apples, oragnes){
    const juice = `Juice with ${apples} apples and ${oragnes} oranges`;
    return juice;
}

// Capture the value and store in variable
const oragneJuice = fruitProcessor(0, 5);
console.log(oragneJuice);

// Directly invoke the function and log that value
console.log(fruitProcessor(2, 3));

//////////////////////////////////////////////

// Lesson 3
Function Declarations Vs Expressions

- Parameter: Placeholder used in function
- Argument: Actual value which we pass when we invoke the function

// Function Declaration:
function calculateAge1(birthYear){
    return 2022 - birthYear;
}

console.log(calculateAge1(1996));

// Function Expressions:
// Anonymous Function - Function without name
const calculateAge2 = function (birthYear){
    return 2022 - birthYear;
}

console.log(calculateAge2(1996))

Note:
JS functions are just a values. So we can store it is variable

Big difference between :
-> Function declaration can be called before defined in the code. Calling the function first and declaring it later.
-> But same will not be the case with function expression.

//////////////////////////////////////////////

// Lesson 4
Arrow Functions (ES6)
- Special form of function that is shorter and therefore faster to write
- This is a special form of function declaration

// function expression (Just for comparision with arrow function)
const calculateAge2 = function (birthYear){
    return 2022 - birthYear;
}

// Arrow function - Sepcial Function Expression
// Arrow function (One parameter and one line of code - no need of any braces required)
// Return happens implicitly and we no need to write return (if it is only one line of code)
const calculateAge3 = birthYear => 2022 - birthYear;

console.log(calculateAge3(1996));

// Arrow functions (One parameter and more than one line of code)
const yearsUntilRetirement = birthYear => {
    const age = 2022 -birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1996));

// Arrow functions (Multiple parameter and more than one line of code)
const yearsUntilRetirementWithName = (birthYear, firstName) => {
    const age = 2022 -birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirementWithName(1996, 'Megaraj'));

// Arrow function doesn't have "this" keyword concept

//////////////////////////////////////////////

// Lesson 5
Function calling another functions

const cutFruitPieces = function name(fruit) {
    return fruit * 4; // cutting fruits in 4 pieces
} 

function advancedFruitProcessor(apples, oragnes){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oragnes);

    return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

console.log(advancedFruitProcessor(5, 4));

//////////////////////////////////////////////

// Lesson 6
Reviewing the Functions

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const yearsUntilRetirementV2 = function (birthYear, firstName) {
    const retirement = 65 - calcAge(birthYear);

    if (retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    } else {
        return -1; // Already retired
        console.log(`${firstName} has already retired`); // Code after return will not get execute. Function is already returned on above line.
    }
}

console.log(yearsUntilRetirementV2(1993, "Megha"))

// General Review for functions

Function Declaratin: Function that can be used before it is declared
Function Expression: Essentially a function value stored in a variable
Arrow Function: Great for a quick one-line functions. Has no 'this' keyword 

//////////////////////////////////////////////

// Lesson 6
Introduction to Arrays
- Array is a datas tructure 
- Array is like a big container into which we can store variables and use it later
- Array index are zero based. But Array length is not zero based

const friend1 = 'Dileep'
const friend2 = 'Subba'
const friend3 = 'Sagar'

// Way 1 of creating array
const friends = ['Dileep', 'Subba', 'Sagar']
console.log(friends)
console.log(friends[0]) // To fetch first element in the array
console.log(friends.length) // To find the length of array
console.log(friends[friends.length - 1]) // To find the last element in the array

// Change or Mutate the array

// Note:
// Previously we mentioned that variables declared as a const can't be chagned or mutate.
// But here friends is delcared as a const, but we are changing. Why?
// Becuause only primitive values can't be changed or mutuate if it is declared as a const
// And Array is not a primitive value. So we can change the content inside by refering to some index
// Eg: friends[1] = "Megaraj" // this way we can change
// But We cannot change directly the whole object
// friends = ['Ayushi', 'Arushi, 'Puja'] // This is not possible

friends[2] = 'Sagar Rathod'
console.log(friends)

// Way 2 of creating array
const years = new Array(1996, 1997, 1998, 1999)
console.log(years)

const firstName = 'Megaraj'
const megay =[firstName, 'Selvam', 2022 - 1996, 'Programer', friends]
console.log(megay)

// Exercise
const calcAge = function(birthYear){
    return 2022 - birthYear
}

const birthYears = [1993, 1996, 1974, 1989]

birthYears.forEach(birthYear => console.log(calcAge(birthYear)))

const ages = new Array()
// Push function adds the element into the array. 
birthYears.forEach(birthYear => ages.push(calcAge(birthYear)))
console.log(ages)


//////////////////////////////////////////////

// Lesson 7
Basic Array Operations And Methods

const friends = ['Dileep', 'Subba', 'Sagar']
console.log(friends)

// Push - It adds the element in the end of the array
// Push function returns the length of the array
const newLength = friends.push('Raj')
console.log(friends)
console.log(newLength)

// Unshift - It adds the element in the beginning of the array
// It also returns the length of the array
friends.unshift('Muni')
console.log(friends)

// Pop - It removes the last element in the array
// Pop method returns the removed element in the array
const poppedElement = friends.pop()
console.log(poppedElement)
console.log(friends)

// shift - It removes the first element in the array
// It also returns the removed element in the array
friends.shift()
console.log(friends)

// indexof - Will give the index of the element
console.log(friends.indexOf('Subba'))
// If we are trying for the same time for the elment which we don't have we will get -1
console.log(friends.indexOf('Unknown'))

// includes > to check element is present in the array or ot
// return true if element exists and false if element not exist
console.log(friends.includes('Sagar'))
console.log(friends.includes('Unknown'))
// It checks for strict equality (===)
friends.push(23)
console.log(friends.includes('23')) // false -> 23 === '23' is false (strict equality)
// includes is useful while writing the condition 
if (friends.includes('Subba')){
    console.log('You have a friend named Subba')
}

//////////////////////////////////////////////

// Lesson 8
Introduction to Objects
- Order of property doesn't matter in object
- Order of property is the core for array

const megayArray = [
    'Megaraj',
    'Selvam',
    2022 - 1996,
    'Programmer',
    ['Sagar', 'Raj']
]

// Advantage of using object over array is we will have name for every value
// Way 1: Simplest way of creating an object
// Object Literal Syntax
const megay = {
    firstName: 'Megaraj',
    lastName: 'Selvam',
    age: 2022 - 1996,
    job: 'Programmer',
    friendsList: ['Sagar', 'Raj']
}
//////////////////////////////////////////////

// Lesson 9
Dot vs Bracket Notation (retrieving data from object)

- Undefined is the value which you will get when you try to access the property which doesn't exist

const megay = {
    firstName: 'Megaraj',
    lastName: 'Selvam',
    age: 2022 - 1996,
    job: 'Programmer',
    friendsList: ['Sagar', 'Raj']
}
console.log(megay)

// Using Dot Notation to fetch the data
console.log(megay.friendsList)
megay.friendsList.forEach(friend => console.log(friend))
console.log(megay.age)

// Using bracket notation to fetch the data
console.log(megay['lastName'])

// Advantage of using bracket notation
// We can write expression inside the bracket. It is not possible in Dot Notation
const nameKey = 'Name';
console.log(megay['first' + nameKey]) // mega[firstName]
console.log(megay['last' + nameKey]) // mega[lastName]

// prompt: Built in function to get the input from pop up using pop up
const userInterestedIn = prompt('What do you want to know about Jonas? choose between firstName, lastName, age, job, friendsList')

console.log(userInterestedIn)
console.log(megay.userInterestedIn) // return undefined. Using dot notation we can't achieve this
console.log(megay[userInterestedIn]) // returns proper value

if (megay[userInterestedIn]){
    console.log(megay[userInterestedIn])
} else {
    console.log('Wrong request')
}

// Adding elements inside the object
megay.location = "India"
megay["instagram"] = "#mega"
console.log(megay)

// Challenge
// "Mega has 2 friends, and his best friend is called Sagar"

console.log(`${megay.firstName} has ${megay.friendsList.length} friends, and his best friend is called ${megay.friendsList[0]}`)

//////////////////////////////////////////////

// Lesson 10
Object Methods

const megay = {
    firstName: 'Megaraj',

    lastName: 'Selvam',

    // Int Value
    birthYear: 1996,

    // String value
    job: 'Programmer',

    // Array Value
    friendsList: ['Sagar', 'Raj'],

    // Boolean value
    hasDriverLicense: true,

    //Function value
    calcAge: (birthYear) => 2022 - birthYear, // Arrow function

    // Function expression
    calcAgeV2: function(birthYear){
        return 2022 - birthYear
    },

    // Taking value from object itself. Arrow function doesn't support this way
    calcAgeV3: function(){
        console.log(this) // Here 'this' indicates who is calling the method. (megay.calcAgeV3()). so the caller is megay object
        return 2022 - this.birthYear
    },

    calculateAgeAndStoreIt: function(){
        // Calculate age once and store it in the age variable and reuse whenever it is required down the line
        this.age = 2022 - this.birthYear
        return this.age
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calculateAgeAndStoreIt()}-year old programmer, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`
    }
}

console.log(megay.calcAge(1996))
console.log(megay['calcAgeV2'](1993))
console.log(megay.calcAgeV3())
console.log(megay.calculateAgeAndStoreIt())
console.log(megay.age)
//Challenge
// Megaraj is a 26-year old programmer, and he has a driver's license
console.log(megay.getSummary())

//////////////////////////////////////////////

// Lesson 11
Loops
- for loop keeps running while condition is true
- this will leads to infinity loop if you condition is not properly mentioned

// Simple for loops
for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`)
}

// Looping Over Arrays
const megayArray = [
    'Megaraj',
    'Selvam',
    2022 - 1996,
    'Programmer',
    ['Sagar', 'Raj'],
    true
]

const types = []

for(let i = 0; i < megayArray.length; i++){
    // Reading from Jonas Arrat
    console.log(megayArray[i], typeof megayArray[i])

    // One way of filling types array
    // types[i] = typeof megayArray[i]

    // alternative way of filling the array
    types.push(typeof megayArray[i])
}

console.log(types)

const years = [1996, 1993, 2003, 2007]
const ages = []
years.forEach(x => ages.push(2021 - x))
console.log(ages)

// continue and break
// continue -> Exit the current iteration of the loop and continue the loop
// break -> continously terminate the loop

// Example for continue
const evenNumber = []
console.log(`--- Even Numbers ---`)
for (let i = 0; i <= 100; i++){
    if (i % 2 !== 0)
        continue;
    evenNumber.push(i)
}

console.log(evenNumber)

// Example for Break
console.log(`-- Print only upto 7 --`)
 for (let i = 0; i <= 12; i++){
     if (i == 8)
        break;

     console.log(i)
 }

 //////////////////////////////////////////////

 // Lesson 12
 Looping Backwards and Loops in loops

 const megayArray = [
    'Megaraj',
    'Selvam',
    2022 - 1996,
    'Programmer',
    ['Sagar', 'Raj'],
    true
]

// Looping backwards
for (let i = megayArray.length - 1; i >= 0; i--){
    console.log(i, megayArray[i])
}

// Loop Inside the loop
for (let exercise = 1; exercise <=3; exercise++){
    console.log(`------- Starting Exercies ${exercise}-----`)

    for (let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    }

    console.log(`------- Ending Exercies ${exercise}-----`)
}

 //////////////////////////////////////////////

 // Lesson 13
 The While Loop
 -> While loop we can only define the condition
 -> Couter needs to be defined outside the while loop first
 -> Counter needs to be updated inside the while loop

// Initiating counter
let i = 0

// Condition
while (i <= 10){
    console.log(i)
    // Updating the counter
    i++
}

 // While loop is useful when you don't know how many times you need to loop exactly. Example: Dice - To get number 6, we don't know exactly how many times we need to roll the dice

 let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice)

while (dice !== 6){
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6){
        console.log(`loop is about to end`)
    }
}

 //////////////////////////////////////////////

*/

