// Exporting module

console.log(`Exporting modules`);

// Blocking code (Top Level Await)
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/albums');
// console.log('finishing fetched user');

// all top level variables private inside modules
const shippingCost = 10;
export const cart = [];

// Two types of export are
// Named Export and Default Export

// Named Export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// Exporting multiple values using named export
export { totalPrice, totalQuantity as tq };

// Default export
// if you want to export only one thing per module default export is used

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
