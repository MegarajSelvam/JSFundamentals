'use strict';

///////////////////////////////////////
// Lesson 1:
// Selecting, Creating and Deleteing Element

// 1 - Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Will return the first element that matches this selector
const header = document.querySelector('.header')
console.log(header);

// To select multiople elements
const allSections = document.querySelectorAll('.section');
console.log(allSections); // returns node list

// Pass ID without selector. Selector is only for query selector methods
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // returns HTMLCollection not NodeList. 

// Difference between HtmlCollection and Nodelist
// HtmlCollection is a live list. Nodelist is not a live list. If someone manipulated the DOM element, it will reflect in HTMLCollection. But that's not the case with NodeList

document.getElementsByClassName('btn') // return live HTML element

// 2 - Creating and Inserting Elements
// .insertAdjacenetHTML is the quickest way of creating elements in more easiest way. refer banking example

const message = document.createElement('div');
console.log(message);
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = 'We use cookies for improved functionality and analytics . <button class="btn btn--close--cookie"> Got it!</button>';
header.prepend(message) // prepend will add passed element as first element.
// header.append(message); // append will add as passed element as last element.
// header.append(message.cloneNode(true));
// header.before(message); // It will add the element before the header element
// header.after(message); // it will add the element after the header element

// 3 - Delete Element
// New way of remvoing element
document.querySelector('.btn--close--cookie').addEventListener('click', () => message.remove());

// Older way of removing element
// document.querySelector('.btn--close--cookie').addEventListener('click', () => message.parentElement.removeChild(message));

///////////////////////////////////////


///////////////////////////////////////
// Lesson 2:
// Styles, Attributes and Classes

// Styles:
// Styles only work for inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.height); // height is not defined anywhere
console.log(message.style.color); // color defined in stylesheet, not as inline style
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color); 
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'; 

// Changing some style property
document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attributes:
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Only for standard properties it works
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non Standard property
logo.setAttribute('designer', 'Megaraj')
console.log(logo.designer); //  it will not work
console.log(logo.getAttribute('designer')); // to get non standard property
logo.setAttribute('company', 'Bankist');

console.log(logo.src); // return absolute one
console.log(logo.getAttribute('src')); // return relative one

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
// data-version-number="3.0"
console.log(logo.dataset.versionNumber);

// Classess
// c and j are class name properties
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Dont use this. This will override all the exisitng classes and also it allows us to put only one class on any element
// logo.className = 'jonas';

///////////////////////////////////////


///////////////////////////////////////
// Lesson 3
// Types of Events and Event Handler
// https://developer.mozilla.org/en-US/docs/Web/Events

const h1 = document.querySelector('h1');

// Another way of attaching an event listener to the element
// Older way 
// h1.onmouseenter = (e) => {
//   alert('onMouseEnter: Great! You are reading the heading')
// };

const alertH1 = (e) => {
  alert('addEventListener: Great! You are reading the heading');
  // Removing an event handler (Registering event only once)
  h1.removeEventListener('mouseenter', alertH1)
}

// New way of attaching an event listener to the element
h1.addEventListener('mouseenter', alertH1);

// Removing an event handler at any point
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// directly you can attach event in html as well
// <h1 onclick="alert(`HTML alert`)"></h1>

///////////////////////////////////////


///////////////////////////////////////
// Lesson 4
// Event propogation: Bubbling and Capturing

// refer reference images

// rgb(255, 255, 255);
const randomInt = (min, max) => Math.floor(Math.random() * (max  - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
console.log(randomColor());

// Replace this
// <a class="nav__link" href="#section--1">Features</a>
// to
// <a class="nav__link" href="#">Features</a>

// Bubbling Example:
document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  // e.target will say where the event happened
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propogation: It stops bubbling
  //  e.stopPropagation();
})

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target,  e.currentTarget);
})

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target,  e.currentTarget);
})

// Capturing Example: (third parameter will be there)
// Capturing is rarely used
// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target,  e.currentTarget);
// }, true);

///////////////////////////////////////


///////////////////////////////////////
// Lesson 5
// DOM Traversing

// DOM traversing means selecting an element based on another element. Sometimes we need to select elements relative to certain other element. 

const header_H1 = document.querySelector('h1');

// Going downwards: child
console.log(header_H1.querySelectorAll('.highlight'));
console.log(header_H1.childNodes);
console.log(header_H1.children); // works only for direct children
header_H1.firstElementChild.style.color = 'white';
header_H1.lastElementChild.style.color = 'orangered';

// Going Upwards: parents
console.log(header_H1.parentNode);
console.log(header_H1.parentElement);

header_H1.closest('.header').style.background = `var(--gradient-secondary)`;
header_H1.closest('h1').style.background = `var(--gradient-primary)`;

// Note:
// QuerySelector finds the children
// closed finds the parent

// Going Sides: Sibling
// We can access only direct sibling
console.log(header_H1.previousElementSibling);
console.log(header_H1.nextElementSibling);

console.log(header_H1.previousSibling);
console.log(header_H1.nextSibling);

// trick to get all siblings
console.log(header_H1.parentElement.children);

[...h1.parentElement.children].forEach(function(e){
  if (e !== h1) {
    e.style.transform = `scale(0.5)`;
  }
})
///////////////////////////////////////


///////////////////////////////////////
// Lesson 6
// Passing Arguments to Event Handlers
const nav = document.querySelector('.nav');

const handleHover = function(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(e => {
      if (e !== link) e.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Use bind method to passing argument into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////


///////////////////////////////////////
// Lesson 7
// Intersection Observer API

//  API allows our code to basically observe changes to the way that a certain target element intersects another element, or the way it intersects the viewport.
const section1 = document.querySelector('#section--1');

const obsCallback = function(entries, observer){
  entries.forEach(entry => console.log(entry));
};

const obsOptions = {
  // root is the element that the target is intersecting
  root: null, // Passing null will take view port
  // percentage of intersection at which the observer callback will be called
  threshold: [0, 1, 0.2], // 0 means only if the section is not visible in view port, 1 means 100% section should be visible in view port, 0.2 means 20% section should be visible in view port
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
///////////////////////////////////////


///////////////////////////////////////
// Lesson 7
// Lifecycle of DOM Events

// DOM Content Loaded -> as soon as HTML is completely parsed. It doesnt wait for External file loading, CSS or image loading
document.addEventListener('DOMContentLoaded', function(e) {
  console.log(`HTML Parsed and DOM tree build!`, e);
});

// Ideally we should wrap all our web page functionality inside this event. Only after loading HTML content, we have to perform script action.

// Alternativey by writing script tag at the end of HTML body, will avoid wrapping all our web page functionality inside this event

// for JQuery, we used to wrap under document.ready method.

// Load Event -> This event will fire after completely loading the web page, it includes HTML, JS, CSS, Image and external files.
window.addEventListener('load', function(e) {
  console.log(`Page fully loaded!`, e);
});

// Before closing the web page this will get fire
// window.addEventListener('beforeunload', function(e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

///////////////////////////////////////

///////////////////////////////////////
// Lesson 8
// Efficient Script loading: defer and async
// refere screenshot image