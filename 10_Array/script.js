'use strict';
/////////////////////////////////////////////////
// Test Data
/////////////////////////////////////////////////
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Lesson 1: 
// Simple Array Methods
// Methods -> Functions are attached to objects

let arr = ["a", "b", "c", "d", "e"];

// Slice Method - Extract part of any array without changing original array. Slice method returns new array.
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); 
console.log(arr.slice(-2)); // takes last 2 element of the aray
console.log(arr.slice(-1)); // takes last 1 element of the aray
console.log(arr.slice(1, -2)); // extract everything except last 2.
console.log(arr.slice()); // It returns the exact same element in the original array
console.log([...arr]); // It also returns the exact same element in the original array
// It's upto you to use slice or rest operator

// Splice Method -> similar to slice method but it mutates original array
// Original array loses the part extracted by splice method
// console.log(arr.splice(2)); // [c, d, e]
arr.splice(-1); // Removes last element of the array
console.log(arr);
arr.splice(1, 2); // b and c will be deleted, here 2nd parameter is number of element to delete
console.log(arr); // [a, b]

arr = ["a", "b", "c", "d", "e"];

// Reverse
// Reverse method mutates the original array
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse()); // [f, g, h, i, j]
console.log(arr2);

// Concat
// Concating two arrays
// Doesnt mutuate original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // another way of doing this

// Join method
// Adds all the elements of an array into a string, separated by the specified separator string.
console.log(letters.join(' - '));
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Lesson 2: 
// New "at" method
// Replaces traditional bracked notation with more modern at method

const arra = [23, 11, 64];
console.log(arra[0]);
console.log(arra.at(0));

// Getting last element of the array if you want but you dont know the lenght of the array
// Older way
console.log(arra[arra.length - 1]);
// New way - 1
console.log(arra.slice(-1)[0]);
// New way -2
console.log(arra.at(-1));
console.log(arra.at(-2));

// at method also works on string
console.log('Megaraj'.at(0));
console.log('Megaraj'.at(-1));

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Lesson 3: 
// Looping arrays - for each method

// Positive value are deposit and negative value are withdrawl
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of loop
console.log("for of loop");
for (const movement of movements) {
  const msg = movement > 0 ? `You deposited ${Math.abs(movement)}` : `You withdrew ${Math.abs(movement)}`
  console.log(msg);
}

// for each method
console.log("for each method");

// function expression
// movements.forEach(function(movement) {
//   const msg = movement > 0 ? `You deposited ${Math.abs(movement)}` : `You withdrew ${Math.abs(movement)}`
//   console.log(msg);
// });

// arrow function
movements.forEach(movement => {
  const msg = movement > 0 ? `You deposited ${Math.abs(movement)}` : `You withdrew ${Math.abs(movement)}`
  console.log(msg);
});

// Using foreach method is cleaner approach than for of method

// To get the index in for of loop
for (const [i, movement] of movements.entries()) {
  const msg = movement > 0 ? `Movement ${i + 1} You deposited ${Math.abs(movement)}` : `Movement ${i + 1}  You withdrew ${Math.abs(movement)}`
  console.log(msg);
}

//To get index in foreach method
// movement -> currenet element
// index -> current index
// array => entire array
movements.forEach((movement, index, array) => {
  console.log(array);
  const msg = movement > 0 ? `Movement ${index + 1}  You deposited ${Math.abs(movement)}` : `Movement ${index + 1} You withdrew ${Math.abs(movement)}`
  console.log(msg);
});

// Note:
// Continue and break will not work inside foreach loop
// if you want to use continue and break, then we have to go for of loop
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Lesson 4: 
// for each with maps and sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// map is entire array
// key is index
// value is current map value
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// Set -> provide unique value of array
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// set doesnt have key as well as value, so by default it just set current element

// we can use _ to throw out the variable
currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}: ${value}`);
});
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Lesson 4: 
// Data transformation with Map, Filter and Reduce

// Check Reference Image

// Map Method:
// Do some manipulation and return an array
const eurToUSD = 1.1;
const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Older way of doing some manipulation and creating new array
const transactionsUSDFor = [];
for (const transaction of transactions) {
  transactionsUSDFor.push(transaction);
}
console.log(transactionsUSDFor);

// Newer way of doing some manipulation and creating new array
const transactionsUSD = transactions.map(transaction => transaction * eurToUSD);
console.log(transactions);
console.log(transactionsUSD);

const transactionDescription = transactions.map((transaction, index, array) => `Transaction ${index + 1} You ${transaction > 0 ? "deposited" :  "withdrew"} ${Math.abs(transaction)}`);
console.log(transactionDescription);

// filter Method:
// older way of filter
const depositFor = [];
for (const transaction of transactions) {
  if (transaction > 0) {
    depositFor.push(transaction);
  }
}
console.log(depositFor);

// New Way of filter
transactions.filter((value, index, array) => console.log(value));
const deposits = transactions.filter(transaction => transaction > 0);
const withdrawal = transactions.filter(transaction => transaction < 0);
console.log(deposits);
console.log(withdrawal);
console.log(transactions);

// Reduce Method - Most powerful array method
// Boiling down the array into single vlaue
// it can be addition, subtraction, multiplicatoin or anything
// First Parameter (call back function):
// acc -> accumulator -> Snowball effect
// cur -> Current element
// i -> index
// arr -> array
// SEcond parameter:
// initial vaue of accumulator -> setting to zero
const balance = transactions.reduce((acc, cur, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc+=cur
}, 0);
console.log(balance);

// Older way using for of loop:
let balanceOf = 0;
for (const tran of transactions) {
  balanceOf += tran;
}
console.log(balanceOf);

// Maximum value using reduce
const maxValue = transactions.reduce((acc, cur) => acc < cur ? cur : acc, transactions[0]);
console.log(maxValue);
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Lesson 5: 
// The magic of chaining method or pipeline
const totalDepositsUSD = transactions
            .filter(transaction => transaction > 0)
            .map((transaction, i, arr) => {
              // Inspecting current array in the chaining/pipeline
              // console.log(arr); // filter result
              return transaction * eurToUSD
            })
            .reduce((acc, cur) => acc + cur, 0)

console.log(totalDepositsUSD);

// Note:
// Chaining will cause performance issue if we have very huge arrays
// Dont chain the methods which mutuate underlying array (eg: foreach method, splice method, reverse method)
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Lesson 6: 
// Find method -> retreive one element of the array based on condition

// find method needs a callback function which returns boolean
// find method returns first item which satisfy the condition
const firstWithdrawl = transactions.find(trans => trans < 0);
console.log(firstWithdrawl);

const acc = accounts.find(account => account.owner === "Jessica Davis");
console.log(acc);

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Lesson 6: 
// FindIndex Method -> returns the index of the element present on the array based on condition

console.log(accounts);
const sarahAccountIndex = accounts.findIndex(account => account.owner.toLowerCase() === "sarah smith");
console.log(accounts);
// Removing sarah account
accounts.splice(sarahAccountIndex);
console.log(accounts);

// Indexof
// returns true if value present or false if value is not present
const isIndexPresent = transactions.indexOf(-130)
console.log(isIndexPresent);
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Lesson 7: 
// some and every (any and all)

// Includes - Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(transactions);
console.log(transactions.includes(-130));
// Note: In Includes we can't add any condition, that's where some method came to picture

// some method - Determines whether the specified callback function returns true for any element of an array.
console.log(transactions.some(tran => tran === -130));
const anyDeposits = transactions.some(tran => tran > 5000);
console.log(anyDeposits);

// Every Method - Every only return true only if all the elements satisfy this condition
console.log(account4.movements.every(mov => mov > 0));

// Seperate Call back
const deposit = mov => mov > 0;
console.log(account1.movements.every(deposit));
console.log(account1.movements.some(deposit));
console.log(account1.movements.filter(deposit));

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Lesson 8: 

// flat and flatmap methods

// Flat Method - Goes only one level deep by default, but you can pass how much deep to go as a parameter
const mixedArr = [[1, 2, 3], [4, 5, 6], 7, 8];
const flatArr = mixedArr.flat();
console.log(flatArr); // [1, 2, 3, 4, 5, 6, 7, 8]

const mixedArrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(mixedArrDeep.flat()); [[1, 2], 3, 4, [5, 6], 7, 8];
console.log(mixedArr.flat(2)); // going 2 level deep

// Flatmap Method:
// Without using Flatmap Method
const overallBalance = accounts.map(acc => acc.movements)
.flat()
.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// Same logic by using flatMap method
console.log(accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0));

// Note:
// Flatmap goes only one level deep

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Lesson 8: 
// Sorting Arrays
// Build in sort methods

// strings
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort()); // It mutuates the original array
console.log(owners);

// Numbers
console.log(transactions);
console.log(transactions.sort()); // It doesnt work, its because sort method converts everything as string and then sorts. that's why it is not workng for numbers

// return < 0 -> a, b (keep order)
// return > 0 -> b, a (switch order)

// ascending order
transactions.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
// Note: Sort method keeps on apply the order
console.log(transactions);

// descending order
transactions.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(transactions);

// value 10, 6
// a > b return 1 (positive) === a - b (return positive value) -> 10 -6 = 5
// value 6, 7
// a < b return -1 (negative) === a - b (return negative value) -> 6 - 7 = -1

// Improved Version of sorting
// ascending
transactions.sort((a, b) => a - b);
console.log(transactions);

// descending
transactions.sort((a, b) => b - a);
console.log(transactions);

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Lesson 8: 
// More ways of creating and filling array

// Manual way
const arrMan = [1, 2, 3, 4, 5, 6];
const arrMan2 = new Array(1, 2, 3, 4, 5, 6);

// Generate arrays programtically
const x = new Array(7); // 7 is array length
console.log(x); // It creates new array with 7 empty element
// console.log(x.map(() => 5)); // It doesnt work

// Fill Method:
// param1 -> value
// param2 -> startPosition
// param3 -> endPosition
x.fill(1);
console.log(x); [1, 1, 1, 1, 1, 1, 1]
console.log(arrMan);
arrMan.fill(1, 3); // param1 is value and param2 is startPosition
console.log(arrMan);

console.log(arrMan);
arrMan.fill(23, 2, 6);
console.log(arrMan);

// Array.from Method:
const y = Array.from({length: 7}, () => 1); // return array with 7 item with value 1
console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1);
console.log(z);

// Checking bankingScript.js file for some real time use case by using array.from

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Lesson 9: 

// array methods practice

// 1. Get bank deposit sum  
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2. Number of deposits greater than 1000
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// Prefixed ++ oeprator
let a = 10;
console.log(++a);
console.log(a);

// 3. Find number of deposits and number of withdrawls 
const { depositss, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { depositss: 0, withdrawals: 0 }
  );

console.log(depositss, withdrawals);

// 4. Title modification
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');

  return capitzalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

/////////////////////////////////////////////////