// Data 1
const markWeight1 = 78
const johnWeight1 = 92
const markHeight1 = 1.69
const johnHeight1 = 1.95


// Data 2
const markWeight2 = 95;
const johnWeight2 = 85;
const markHeight2 = 1.88;
const johnHeight2 = 1.76;

/*
Coding Challenge 1:
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

let markBMIForData1
let markBMIForData2

let johnBMIForData1
let johnBMIForData2

let bmiForMarkIsHigh

const calculateBMI = (mass, height) => {
    return mass / (height ** 2);
}

markBMIForData1 = calculateBMI(markWeight1, markHeight1)
johnBMIForData1 = calculateBMI(johnWeight1, johnHeight1)
bmiForMarkIsHigh =  markBMIForData1 > johnBMIForData1;
console.log("For Data 1", bmiForMarkIsHigh) // true

markBMIForData2 = calculateBMI(markWeight2, markHeight2)
johnBMIForData2 = calculateBMI(johnWeight2, johnHeight2)
bmiForMarkIsHigh =  markBMIForData2 > johnBMIForData2;
console.log("For Data 2", bmiForMarkIsHigh) // false

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console,saying who has the higherB MI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉 
GOOD LUCK 😀
*/

const findHigherBMIPerson = (markBMI, johnBMI) => {
    if (markBMI > johnBMI){
        console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
    } else if (markBMI < johnBMI) {
        console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
    } else {
        console.log(`Mark's and John's BMI ${markBMI} are same!`)
    }
}

findHigherBMIPerson(markBMIForData1, johnBMIForData1)
findHigherBMIPerson(markBMIForData2, johnBMIForData2)