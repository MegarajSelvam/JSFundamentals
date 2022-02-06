/*
//////////////////////////////////////////////
// Lesson 1: 
Hello World

let message ='Hello World';
if (message === 'Hello World') alert('Hello World!');

//////////////////////////////////////////////
// Lesson 2:
Variables and Values

1) variables should be written in pascal case. It's a good practice
2) variable name should be descriptive
3) variables should not start with numbers
4) variables should have only alphabets, number, dollar and underscore
5) varialbe name should not be any one of the reserved JS keyword. If you want to use any reserved JS keyword as a varialbe prefix or suffix with something like dollar or underscore
6)only reserved JS keyword allowed to use as a variable is "name". But ideally we should avoid to use this word
7) constant variables can be written as upper case (PI)

let person = "jonas";
let megaraj_selvam = "ms";
let $function = 1;
let PI = 3.1415;

let job1 = "Programmer" // Don't use this kind of naming conventions
let myFirstJob = "Programmer" // Use proper naming conventions like this
let job2 = "Teacher" // Don't use this kind of naming conventions
let myCurrentJob = "Teacher" // Use proper naming conventions like this

// Assignment
let country = "India"
let continent = "Asia"
let population = 1339741186
console.log(country + " " + continent + " " + population)

//////////////////////////////////////////////
// Lesson 3:

Data Types
    - Primitive
    - Objects

Primitives
    1) Number: Floating point numbers -> Used for decimals and integers
        Eg: let age = 23
    2) String: Sequence of characters -> Used for text (double quotes or single quotes doesn't matter)
        Eg: let firstName = 'Mega';
    3) Boolean: Logical type that can only be true or false -> Used for taking decision
        Eg: let status = true
    4) Undefined: Value taken by a variable that is not yet defined (Empty value)
        Eg: let childern;
    5) Null: Also means 'Empty Value'
    6) Symbol (ES2015): Value that is unique and cannot be changed (Not useful for now)
    7) BigInt (ES2020): Larger integers than the Number type can hold

    Note: 
    1) JS has dynamic typing. We dont have to manually define the data tuype of the value stored in a variable. Instead data types are determined automatically
    (value has type, not variable)
    2) Number, String and Boolean are most used data types

    //typeof will give the data type
    console.log(typeof true)
    console.log(typeof "Mega")
    console.log(typeof 23)

    // JS is dynamic typing. We can change the data type of variable at any time
    let jsIsFun = true
    console.log(typeof jsIsFun)
    jsIsFun = 23
    console.log(typeof jsIsFun)

    // undefined Varialbe
    let someVariable
    console.log(someVariable) // value of the variable is undefined
    console.log(typeof someVariable) // type of the value is defined
    someVariable = 1991
    console.log(typeof someVariable)

    // Error exist in typeof
    // JS team didn't fixed this bug for legacy issue
    console.log(typeof null) // type of the value is coming as object instead of Null.

//////////////////////////////////////////////
*/

/*
// Lesson 4
let, const and var

-> var is older way to declare variables
-> let and const is introduced in ES6. Modern JS way to declare variable

let
    -> variable value can be changed later
    -> Creates Mutable variable
    -> To Declare empty variables

    let age = 30
    age = 31 // reassigning/mutating the age variable

const
    -> variable value not supposed to change at anypoint in future
    -> Creates immutable variable
    -> Cannot declare empty variables

    const minAgeForVote = 18
    // minAgeForVote = 21 // this will give error

var
    -> Should be completely avoided to use
    -> It works pretty much same as let

    var job = "programmer"
    job = "teacher"

Note:
    1) Though it works, but don't write a variable without declaring it. 
    lastName = "Selvam"
    console.log(lastName)

//////////////////////////////////////////////

// Lesson 5
Operators

// Arithmetic Operators
const now = 2022
const ageMegay = now - 1996;
const ageDileep = now - 1995;
console.log(ageMegay, ageDileep)
console.log(ageMegay * 2, ageMegay / 2, ageMegay % 2, ageMegay + 2)
console.log(2 ** 3) // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
const firstName = "Megaraj";
const lastName = "Selvam";
console.log(firstName + " " + lastName) // Concatenate 2 string

// typeof operator
console.log(typeof 23)

// Assignment Operator
let x = 10 + 5
console.log(x) // 15
x += 10; // x = x + 10 
console.log(x) // 25
x *= 4 // x = x * 4
console.log(x) // 100
// +=, -=, *=, /= is also possible
x++ // x = x + 1
x-- // x = x - 1
console.log(x)

// Comparision Operators
// It gives boolean as a result
// < , >, <=, >= is other comparision operators
console.log(ageMegay < ageDileep)
console.log(ageDileep >= 18)
console.log(now - 1991 > now - 2018) // Follows the operator precedence 

//////////////////////////////////////////////

// Lesson 6
Operator Precedence

// Reference: http://www-lia.deis.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.html#:~:text=Table%20%20%20%20Precedence%20%20%20,%28%20%E2%80%A6%20%29%20%2046%20more%20rows%20

const now = 2037
const ageMegay = now - 1991
const ageDileep = now - 2018

console.log(now - 1991 > now - 2018)
// Left to Right (Left to Right)

console.log(25 - 10 - 5) 
// Right to Left (Assignment Operators)

let x, y
x = y = 25 - 10 - 5;
console.log(x, y)

// Grouping ranks tops at precedence
const averageAgeWithoutGrouping = ageMegay + ageDileep / 2
console.log(averageAgeWithoutGrouping) // Wrong Average
const averageAgeWithGrouping =  (ageMegay + ageDileep) / 2
console.log(averageAgeWithGrouping) // Correct way

//////////////////////////////////////////////

// Lesson 7
String and Template Literals
One of the most used feature of ES6 is literals

const firstName = "Megaraj"
const job = "Programmer"
const brithYear = 1996
const year = 2037
// Without using literals
const megay = "I'm " + firstName + ', a '+ (year - brithYear) + " years old " + job + "!";
console.log(megay)
// With using literals
const megayNew = `I'm ${firstName}, a ${year - brithYear} years old ${job}!`
console.log(megayNew)
// Back tick can be used to declare for regular string 
console.log(`Just a regular string...`)
// Before literls, how we write multi line
console.log("String with \n\
multiple \n\
lines");
// Literals made multi line string easy
console.log(`String with
multiple
lines`)

//////////////////////////////////////////////

// Lesson 8
Decision Making - if/else statement

const acceptedAge = 18
const age = 15
const isOldEnough = age >= acceptedAge

if (isOldEnough) {
    console.log("You can apply for driving license 🚗")
} else {
    console.log(`You have to wait for ${acceptedAge - age} to apply for driving licence 🚗`)
}

const brithYear = 1991;
let century;
if (brithYear <= 2000){
     century = 20;
} else {
     century = 21;
}
console.log(`you belong to ${century} century`)

//////////////////////////////////////////////

// Lesson 9
Type Conversion and Type Coercion

Type Conversion
    Conversion from one data type to another data type (Manually)

const inputYearAsUserInput = "1991";
console.log(inputYearAsUserInput + 18) // This line of code just append 1991+18=199118
// Manually converting from string to Number
const inputYearAsInt = Number(inputYearAsUserInput)
console.log(inputYearAsInt)
console.log(inputYearAsInt + 18)

// Trying to convert Invalid Number to Number
console.log(Number("Mega")) // NaN
console.log(typeof NaN) // Number. NaN is Number type

console.log(String(23), 23)

Type Coercion
    JS automaticaly converts type behind the screen
    Type Coercion happens whenever JS deals with two different values

    console.log('I am ' + 23 + 'Years Old') // JS internally converts 23 as a string
    //Whenever Number is present betweens a string with + opeartors, JS converts that number into string

    // -, *, / Operators converts string into int
    console.log('23' - '10' - 3) // JS Internally converts string into int

    // + Operator converts int to string
    console.log('23' + '10' + 3) // + Operator converts Int to string

    // Game Time
    let n = '1' + 1
    n = n - 1;
    console.log(n)

    let m = 2 + 3 + 4 + '5'
    console.log(m) // 95

    let o = '10' - '4' - '3' - 2 + '5'
    console.log(o) // 15
    // Game Over 

//////////////////////////////////////////////

// Lesson 10
Truthy and Falsy Values

Falsy is not actually a false value. When you try to convert something to boolean and this will convert to false value 

JS have only 5 Falsy Values: 
    0, '', undefined, null, NaN

// Falsy
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(''))
console.log(Boolean(null))

// Truthy
console.log(Boolean(1))
console.log(Boolean('Jonas'))
console.log(Boolean({}))

// Type Coercion for Booleans
const money = 0;
if (money){
    console.log(`Don't spend it all;`)
} else {
    // Money is 0. 0 is a falsy value. so it executes else part
    console.log(`You should get a job!`)
}

let height;
if (height){
    console.log(`Yay! Height is defined`)
} else {
    // height is undefined. undefined is a falsy value. So it executes else part
    console.log(`Height is undefined`);
}

//////////////////////////////////////////////

// Lesson 10
Equality And Different Operator
- It returns boolean value
- Strict Version: Doesn't Perform Coercion Operation
- Loose Version: Performs Coercion Operation

Equality
    Strict Version ===
    Loose Version  ==

Different
    Strict Version !==
    Loose Version  !=

Note:
For cleaner code and to avoid lot of issues, use Strict Equality Opeartor

const age = 18
// Strict Equality Operator (===) -> Doesn't Perform Coercion Operation
if (age === 18) console.log('You just become an adult (strict)')
if (age === "18") console.log('You just become an adult (strict)')

// Loose Equality Operator (==) -> Perform Coecrion Operation
if (age == 18) console.log('You just become an adult (loose)')
if (age == "18") console.log('You just become an adult (loose)')

// User Input is always string. So we are doing type conversion here
const favtNum = Number(prompt("What's your favourite number?"));
console.log(favtNum);
console.log(typeof favtNum);

if (favtNum === 23){
    console.log('your favorite number is 23');
} else if (favtNum === 10){
    console.log('your favorite number is 23');
} else {
    console.log('your favorite number neither 23 nor 7');
}

if (favtNum !== 23) console.log(`Why not 23?`);

//////////////////////////////////////////////

// Lesson 11
Boolean Logics And Logical Operators
- AND, OR and NOT

AND: (true when all are true)
    - True True = True
    - True False = False
    - False True = False
    - False False = False

OR: (true when one is true)
    - True True = True
    - True False = True
    - False True = False
    - False False = False

NOT: (inverts the value)
    - True = False
    - False = True

const age = 16
const a = age >= 20
const b = age < 30

console.log(!a)
console.log(a && b)
console.log(a || b)
console.log(!a && b)
console.log(a || !b)

const hasDriversLicense = true;
const hasGoodVision = false;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);
console.log(!hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense || !hasGoodVision);

const shouldDrive = hasGoodVision && hasDriversLicense && !isTired

if (shouldDrive) {
    console.log(`You are eligible to apply for driver license`)
} else {
    console.log(`You are not eligible to apply for driver license`)
}

//////////////////////////////////////////////

// Lesson 12
Switch Statement

Alternative way to write complex if-else statement

const day = 'saturday';

// If statement
if (day === 'monday'){

} else if (day === 'tuesday'){

} else if (day === 'wednesday' || day === 'thursday'){

} else if (day === 'friday'){

} else if (day === 'Saturday' || day === 'sunday'){

} else {

}

// Same logic in Switch case
switch (day) {
    case 'monday': // day === 'monday'
        console.log('Day is Monday!!!');
        console.log('Multiple lines of code also possible without curly braces');
        break;
    case 'tuesday':
        console.log('Day is Tuesday!!!');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Day is Wednesday or Thursday');
        break;
    case 'friday':
        console.log('Day is Friday');
        break;
    case 'saturday':
        console.log('Enjoying Weekend'); // if you are not beaking the case, then it will execute next case also without even checking condition
    case 'sunday':
        console.log('Day is Saturday and Sunday');
        break;
    default:
        console.log('Not a valid day');
        break;
}

//////////////////////////////////////////////

// Lesson 13
Statements And Expression

Expression is a piece of code that produce a value
    Eg: 3 + 4 
        // 7

Statement is a bigger piece of code which executed and which does not produce a value on itself
    Eg: if-else statement, Switch statement etc.,

// Literal template expects an expression
console.log(`I'm ${2022 - 1996} old`) 

// we cannot pass some statement to template literals
// Below piece of code is not valid
// console.log(`some log ${if (23 > 4) {
//     // something here
// }}`) 

//////////////////////////////////////////////

// Lesson 14
Conditional Operators or Ternary Operator

- By using conditional Operator, we can write If/else statement in one line

const age = 23
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water')

const drink = age >= 18 ? 'Wine' : 'Water'
console.log(drink)

// Comparision with if statement

let drink2; // Variable need to define outside the if-else scope, in order to use outside the if-else statement. 
if (age >= 18){
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2) // using variable outside the if-else scope

const userAge = 14;
// we can use conditional opearators (which produces expression) inside the Literal templates. But we cannot use if-else directly (statement) directly inside the literal templates
console.log(`Your drink is ${userAge >= 18 ? 'Wine' : 'Water'}`)

*/

/*
Note:
JS support backward compatability. It doesn't support forward compatability.

To avoid browser issues (User may be using old browser which doesn't support new feature of JS):
During Deployment:
    Use the latest google chrome

During Production:
    Use Babel to transpile and polyfill your code (converting back to ES5 to ensure browser compatability for all users)

ES5:
    - Fully supported in all browsers (down to IE9 from 2011)
    - Ready to be used today

ES6/ES2015 to ES2020:
    - ES6+ supported in all modern browser
    - No support in older browser
    - Can use most features in production with transpiling and polyfilling
*/