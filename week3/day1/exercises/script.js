// Create a structured HTML file linked to a JS file --- OK

// 1. Create these variables and give them values:

let addressNumber = '111'
let addressStreet = 'Rothshild'
let country= 'Israel'

// 2. Write a variable named globalAddress, and concatenate inside, the variables:
let globalAddress = "I live in " + addressStreet + " " + addressNumber + ", in" + country;

// addressNumber
// addressStreet
// country
// In order to create a sentence
// 3. Display globalAddress Example: globalAddress should display « I live in BenYehuda 5, in Israel »
console.log(globalAddress);

// Exercise 2
// 1. Store your birth year in a variable.
let bdayYear = 1989

// 2. Store a future year in a variable.
let futureYear = 2038

// 3. Calculate your possible ages for that year based on the stored values.
let futureAge = futureYear - bdayYear

// 4. Display : "I will be NN in YYYY", substituting the values.
console.log("I will be "+ futureAge + " in " + futureYear)

// Exercise 3
// 1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']
let pets = ['cat','dog','fish','rabbit','cow']

// 2. Display dog
console.log(pets[1])

// 3. Add to the array pets, the pet horse. Remove the pet rabbit
pets[3]='horse'

// 4. Display the array length
console.log(pets.length)