'use strict';
///////////////////////////////////////
// Coding Challenge #2


/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
      });
})();

// by the time this callback here is executed, this IIFE, so this immediately invoked function expression is now long. gone. So it has already been executed. And with it, this variable here is basically gone as well. But still, this function here is attached to the body element. And so it's waiting for some events to happen there. And when the event happens, well, then this function here is of course, executed. And again, even though the environment in which this function here was created is already gone,it is still able to access the variables that were created in that variable by the time the function was born, so to say. So this is the birthplace of or event handler function here. And therefore the function remembers all the variables present at a time of its birth.We can also say that the header is in the backpack of this function.