/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team,using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1:Include a requirement for a minimum score of 100.With this rule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw!So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀

*/
// Reusable Methods
const calculateAverage = (arr) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += Number(arr[i]);
    };

    return total / arr.length;
}

const announceResult = (dolphinWin, kolasWin, gameTie) => {
    if (dolphinWin) {
        console.log('Winner is Dolphins')
    } else if (kolasWin){
        console.log('Winner is Koalas')
    } else if (gameTie) {
        console.log('Game is tie between Dolphins and Koalas')
    } else {
        console.log('Both team failed to score minimum score to announce winner ')
    }
}

// Variables declaration
let dolphinsScore;
let kolasScore;

let dolphinsAverage;
let kolasAverage;

let dolphinWin;
let kolasWin;
let gameTie;

// Data 1
dolphinsScore = [96, 108, 89];
kolasScore = [88, 91, 110];

dolphinsAverage = calculateAverage(dolphinsScore);
kolasAverage = calculateAverage(kolasScore)

dolphinWin = dolphinsAverage > kolasAverage;
kolasWin = kolasAverage > dolphinsAverage
gameTie = dolphinsAverage === kolasAverage

announceResult(dolphinWin, kolasWin, gameTie);

// Data 2
dolphinsScore = [97, 112, 101];
kolasScore = [109, 95, 123];

dolphinsAverage = calculateAverage(dolphinsScore);
kolasAverage = calculateAverage(kolasScore)

dolphinWin = (dolphinsAverage > kolasAverage) && dolphinsAverage >= 100;
kolasWin = (kolasAverage > dolphinsAverage) && kolasAverage >= 100;
gameTie = dolphinsAverage === kolasAverage

announceResult(dolphinWin, kolasWin, gameTie);

// Data 3
dolphinsScore = [97, 112, 101];
kolasScore = [109, 95, 106];

dolphinsAverage = calculateAverage(dolphinsScore);
kolasAverage = calculateAverage(kolasScore)

dolphinWin = (dolphinsAverage > kolasAverage) && dolphinsAverage >= 100;
kolasWin = (kolasAverage > dolphinsAverage) && kolasAverage >= 100;
gameTie = (dolphinsAverage === kolasAverage) && dolphinsAverage >= 100 && kolasAverage  >= 100

announceResult(dolphinWin, kolasWin, gameTie);
//////////////////////