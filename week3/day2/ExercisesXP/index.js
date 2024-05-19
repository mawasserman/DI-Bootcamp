// Exercise 1: Your Favorite Food

// Instructions
// Store your favorite food into a variable.
var favFood = "Pizza";

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
var favMeal = "second breakfast"
// I am some kind of hobbit...

// Console.log I eat <favorite food> at every <favorite meal>
console.log("I eat " + favFood + " at every " +favMeal);

// Exercise 2 : Series

// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
var myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
var myWatchedSeriesSentence = [myWatchedSeries.slice(0,1), myWatchedSeries.slice (2)];
console.log(myWatchedSeriesSentence);

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory
console.log("I watched " + myWatchedSeriesSentence.length + " series: " + myWatchedSeries.slice(0,1) + " and " + myWatchedSeries.slice (2));

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries[2] = "friends";
console.log(myWatchedSeries);

// Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("scrubs");
console.log(myWatchedSeries);

// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("brooklyn 99");
console.log(myWatchedSeries);

// Delete the series “black mirror”.
var myWatchedSeriesNoMirror = [myWatchedSeries.slice(0,1), myWatchedSeries.slice (2)];
console.log(myWatchedSeriesNoMirror);

// Console.log the third letter of the series “money heist”.
console.log(myWatchedSeriesNoMirror[1][0][2]);

// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeriesNoMirror);

// Exercise 3 : The Temperature Converter

// Instructions
// Store a celsius temperature into a variable.
var celcius = 37;

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
console.log(celcius+ "°C is " + ((celcius/5)*9)+32 + "°F."); 

// Hint : Should you create another variable to hold thez tem perature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

// Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// For example

// console.log(2+3)
// Prediction: It will output 5, because 2 and 3 are numbers
// Actual: 5

// Using the code below:

//     let c;
//     let a = 34;
//     let b = 21;

//     console.log(a+b) //first expression
    // Prediction: 55 because 34+21 is 55 and they are numbers
    // Actual: 55

//     a = 2;

    // console.log(a+b) //second expression
    // Prediction: 2 because we did not define b
    // Actual: 23 because i forgot the first one

// What will be the outcome of a + b in the first expression ? 55 
// What will be the outcome of a + b in the second expression ? 23
// What is the value of c? undefined

// Analyse the code below, what will be the outcome?
// console.log(3 + 4 + '5');
// 75 because 5 is a string without any space

// Exercise 5 : Guess The Answers #2

// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// For example

// typeof("potato")
// Prediction: Vegetable
// Actual: String


// What is the output of each of the expressions below?
typeof(15)
// Prediction: number no quotation marks
// Actual: number

typeof(5.5)
// Prediction: number also no quotation marks
// Actual: number

typeof(NaN)
// Prediction: null
// Actual: number, I was deceived 

typeof("hello")
// Prediction: string
// Actual:

typeof(true)
// Prediction: boolean, because it is true of false
// Actual: boolean

typeof(1 != 2)
// Prediction: function because compare #s
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers, string w/ quotation marks
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: 
// Actual: NaN

"1" + "3"
// Prediction: 13 string
// Actual: 13

"1" - "3"
// Prediction: -2, it will be treated as number, it has value
// Actual: -2

"johnny" + 5
// Prediction: johnny5, string
// Actual: johnny5

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "hello"
// Prediction: hellohellohellohello...hellohellohellohello
// Actual: NaN

1 != 1
// Prediction: false, because 1 is not different of 1
// Actual: false

1 == "1"
// Prediction: true, because it has only 2 equal signs so it will compare values
// Actual: true

1 === "1"
// Prediction: false, because it has 3 = so it will also compare types
// Actual: false

// Exercise 6 : Guess The Answers #3

// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// What is the output of each of the expressions below?


5 + "34"
// Prediction: 534, 34 is a string w/o quotation marks
// Actual:534

5 - "4"
// Prediction: 1, 4 will be a #
// Actual: 1 

10 % 5
// Prediction: 0, because it shows the rest of the division
// Actual: 0

5 % 10
// Prediction: 0
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript, w/o space
// Actual: JavaScript

" " + " "
// Prediction:   (I typed 2 empty spaces)
// Actual: '  '

" " + 0
// Prediction:  0 (I typed 1 empty space)
// Actual: ' 0'

true + true
// Prediction: true
// Actual: 2 (why?)

true + false
// Prediction: false
// Actual: 1

false + true
// Prediction: 1 (logic after mistakes)
// Actual: 1 

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: 
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN