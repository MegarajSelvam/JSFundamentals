// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log(23);
// const calcAge = birthYear => 2022 - 1996;
// console.log();

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// Way 1
const calcAmplitudeV1 = function (temperatures) {
  // Removing the Error in temperature Array
  // Filter option is used to filer the array based on some condition
  const filteredTemperatures = temperatures.filter(
    temp => typeof temp === 'number'
  );
  console.log(filteredTemperatures);

  const minTemp = Math.min(...filteredTemperatures);
  const maxTemp = Math.max(...filteredTemperatures);

  console.log(minTemp);
  console.log(maxTemp);

  return minTemp < 0 ? maxTemp + minTemp : maxTemp - minTemp;
};

console.log(calcAmplitudeV1(temperatures));

// Way 2
const calcAmplitude = function (temps) {
  let minTemp = temps[0];
  let maxTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] < minTemp) {
      minTemp = temps[i];
    } else if (temps[i] > maxTemp) {
      maxTemp = temps[i];
    }
  }

  console.log(minTemp);
  console.log(maxTemp);
  return minTemp < 0 ? maxTemp + minTemp : maxTemp - minTemp;
};

console.log(calcAmplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
// - Concat function is useful to merge the arrays
const temp1 = [1, 2, 3];
const temp2 = [4, 5, 5];
console.log(calcAmplitude(temp1.concat(temp2)));

/*
The Debugging Process
     - Developer Console (Simple Code)
     - Debugger (Complex Code)

Identify (Aware) -> Find (Figuring out what is causing issue) -> Fix -> Prevent

*/

// Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: prompt('Degrees celsius:'), // This line causes issue
    // value: Number(prompt('Degree celsius: ')), // this is fix
    value: 10, // for testing purpose
  };

  /*
  console.log(measurement);
  // It will print the object in tabler manner
  console.table(measurement);

  // To create the log
  console.log(measurement.value);
  // To create the warning in console
  console.warn(measurement.value);
  // To create the error in console
  console.error(measurement.value);
  */

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const forecastedMaxTemp = function (temp) {
  let output = '';

  for (let i = 0; i < temp.length; i++) {
    // NOTE: This will add debugging point for us. It is the coolest and Easiest way
    debugger;
    output += `...${temp[i]}\xB0 in ${i + 1} days`;
  }

  return output + '...';
};

console.log(forecastedMaxTemp([17, 21, 23]));
console.log(forecastedMaxTemp([12, 5, -5, 0, 4]));
