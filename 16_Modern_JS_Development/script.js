// #########################################
// Lesson -1 - Importing modules
// Importing Modules

// Dont forget this. Need to add type as module for your JS in order to support modules
// <script type="module" defer src="script.js"></script>

// import './shoppingCart.js'; // if you are not importing any specific thing, you can import like this

// console.log('Importing module');
// // console.log(shippingCost); // This property are scoped to shoppingCart.js

// import {
//   addToCart,
//   totalPrice as price, // changing the name
//   tq,
// } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, tq);

// Creating name space for all the imported values
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 6);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// Example for default export
// import add from './shoppingCart.js';
// add('pizza', 3);

// Default and names export
// However in practice, we dont mix default and named export. just to show you it works like this also
// import add, {
//   addToCart,
//   totalPrice as price, // changing the name
//   tq,
// } from './shoppingCart.js';
// add('pizza', 3);
// addToCart('bread', 12);
// console.log(price, tq);

// Note:
// Very important
// Imports are not copies of export, they are live connection to exports
import add, { cart } from './shoppingCart.js';
add('pizza', 3);
add('bread', 5);
add('apples', 4);
console.log(cart); // Cart is not empty, it has pizza, bread and apples. so here it is proved cart is not a copy but a live connection

// ###########################################

// ###########################################
// Lesson - 2 - Top Level Await

// In order to make top level await works, we need to mention our script type as module in our HTML file

// Previously await was used only inside aysnc function. Now we are able to use await without using async function
const asynfunc = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums`);
  const data = await res.json();
  console.log(data);
};
asynfunc();
console.log('async function is not blocking the flow');

// Top Level wait
const res = await fetch(`https://jsonplaceholder.typicode.com/albums`);
const data = await res.json();
console.log(data);
console.log('top level await blocks the entire flow');

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums`);
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, id: data.at(-1).userId };
};
const lastPost = getLastPost();
console.log(lastPost); // It is promise
// Way 1 to get value
console.log(await lastPost);
// Way 2 to get value
lastPost.then(last => console.log(last));
// Way 3 to get value
const lastPost2 = await getLastPost();
console.log(lastPost2);
// ###########################################

// ###########################################
// Lesson - 3 - The Module Pattern (older approach)

// Main goal of the module pattern is to encapsulate functionality to have private data and to expose a public API.

// IIFE -> create a new source and execute only once
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
// so by this approach we hidden orderStock and shippingCost to outside the world. This is how exactly module pattern designed.
// This is possible because of closure (i.e., Function never loses connection to his birthplace)
// Module pattern indeed work quite good, but it has some limitations. thats why in ES6 Native JS modules concept introduced.
// ###########################################

// ###########################################
// Lesson - 4 - Common JS Modules
// Other most commonly used modules are Common JS modules
// Common JS modules is used in node js. ES6 came later this implementation.
// Common JS follows one file one module concept

// It will not work in browser but it will work in Node JS

/*
// Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
};

// Import
const {addToCart} = require('./shoppingCart')
*/
// ###########################################

// ###########################################
// Lesson - 5 - Introduction to command line
// Bash

// content of the current folder
// ls

// Moving between folder
// cd

// Clear the console
// clear

// Create a folder
// mkdir folderName

// Creating a file
// touch fileName

// Creating multiple files
// touch fileName1 fileName2 fileName3

// To remove the file
// rm fileName1 fileName2

// Moving files
// mv fileName LocationPath

// Remove directory
// rmdir folderName
// It works only for emtpy directory
// alternative is using -R flag (recursive)
// rm -R test
// ###########################################

// ###########################################
// Lesson - 6 - NPM - Node Package manager

// NPM is a software as well as package manager
// Modern way of handling dependencies

// To check the version of NPS -> 8.19.2

// to start work on npm
// npm init
// It will ask some question and at the end it creates package.json file

// adding some external library
// npm install libraryName

// Note:
// Leafty library is using common JS modules. so we can't import direclty inside our solution. We also need to fllow common JS modules pattern to import leafty library
// So we will use lodash-es package which uses es6 module

import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

// This is only possible if you are using Parcel
// import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateCloneDeep);

// Note:
// We should never ever include node_modules in your git or while sharing the solution to someone.
// all this package is already there in npm
// so one can pull those package from NPM based on your package.json dependency file
// Command to do this one is: npm install
// ###########################################

// ###########################################
// Lesson - 7 - Bundling with parcel and NPM scripts

// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
// Importing this way is not good approach

// Install Parcel using NPM
// dev dependencies are tool that we required to build our application. But its not dependency to include in our code
// npm i parcel --save-dev

// to install npm globally
// npm i parcel -g // Never install parcel globally. it is not recommended.

// Bundling all our JS files
// npx parcel index.html
// It will create dist folder and that code is the one we will be sharing to PROD

// alternavite way of bundling
// replace scritp with below one
// "scripts": {
//   "start": "parcel index.html"
// },
// npm run start
// "scripts": {
//   "start": "parcel index.html",
//   "build": "parcel build index.html"
// },
// npm run build

// If you face any error: Use sudo
// sudo npm i parcel

// Hot reloading means whenever we change one of the modules, then your parcel will trigger a rebuild, but that new modified bundle will then automatically like magic, get injected into the browser without triggering the whole page reload. So it avoid the entire page reload.
if (module.hot) {
  module.hot.accept();
}

// ###########################################

// ###########################################
// Lesson - 8 -Configuring babel and polyfillings

// to make our solution to work on every browser (old browser as well as new browser)

// by defaul parcel does this task for you

// polyfilling -> some of the new feature added by JS cannot be transfilled automatically. example promises, find method.

// Steps to achieve polyfilling

// Install core-js
// npm i core-js

// import 'core-js/stable';
// We need to import this package to do polyfilling

// npm install regenerator-runtime

// polyfilling async functions
// import 'regenerator-runtime/runtime"
// ###########################################

// ###########################################
