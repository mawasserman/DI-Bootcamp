// // 🌟 Exercise 1 : Information
// // Instructions
// // Part I : function with no parameters

// // Create a function called infoAboutMe() that takes no parameter.
// // The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// // Call the function.

// function infoAboutMe(){
//     console.log(`My name is Marcella (Ariella) Wasserman. I am 34 years old and enjoy learning, especially manual things.`);
// }

// infoAboutMe();


// // Part II : function with three parameters

// // Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// // The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// function infoAboutPerson(name, age, favoriteColor){
//     console.log(`Your name is ${name}, you are ${age} years old, your favorite color is ${favoriteColor}.`);
// }

// // Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");


// // 🌟 Exercise 2 : Tips
// // Instructions
// // John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// // Create a function named calculateTip() that takes no parameter.
// function calculateTip(){
// // Inside the function, use prompt to ask John for the amount of the bill.
//     let bill = Number(prompt(`How much was the bill?`));
// // Here are the rules
// // If the bill is less than $50, tip 20%.
//     if(bill < 50){
//         let tip = bill * 0.2;
//     }
// // If the bill is between $50 and $200, tip 15%.
//     else if(bill >= 50 && bill < 200){
//         let tip = bill * 0.15;
//     }
// // If the bill is more than $200, tip 10%.
//     else {
//         let tip = bill *0.1;
//     }
//     console.log(`The tip amount is ${tip} and the final bill is ${bill + tip}`)
// }
// // Console.log the tip amount and the final bill (bill + tip).

// // Call the calculateTip() function.
// calculateTip();

// 🌟 Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.
function isDivisible(){
// In the function, loop through numbers 0 to 500.
    let sum = 0;
    for(let i = 0; i < 500; i++){
// Console.log all the numbers divisible by 23.
        if(i % 23 === 0){
            console.log(i);
            sum = sum + i;
        }
    }
// At the end, console.log the sum of all numbers that are divisible by 23.
    console.log("Sum:", sum);
}

isDivisible();


// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum

function isDivisibleBy(n){
        let sum = 0;
        for(let i = 0; i < 500; i++){
            if(i % n === 0){
                console.log(i);
                sum = sum + i;
            }
        }
        console.log("Sum:", sum);
}
isDivisibleBy(3);
isDivisibleBy(45);

// 🌟 Exercise 4 : Shopping List
// Instructions
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
let shoppingList = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters.
function myBill()

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
    // if(shoppingList in stock){
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1
//resolução do Daniil
// function myBill () {
//     let result = 0;
//     for (const key in stock) {
//         if(shoppingList.includes(key) && stock[key]>= 1){
//             result = result + prices[key]
//             stock[key] = stock[key] - 1
//         }
//     }
//     console.log(stock)
//     console.log(result)
//     return result

// }
// o problema que o pete apontou é que se ele tiver uns 500 itens no stock, ele vai fazer 500 iterações, então é melhor fazer um loop no shoppingList

// Exercise 5 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
let changeEnough= function(itemPrice, amountOfChange){

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
    let totalChange = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.1 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01;
  if(totalChange >= itemPrice){
    return true;
  } 
}
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

changeEnough(14.11, [2,100,0,0]) //=> returns false
changeEnough(0.75, [0,0,20,5]) // => returns true


// 🌟 Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
function hotelCost(){
// It should ask the user for the number of nights they would like to stay in the hotel.
    let numberOfNights = Number(prompt(`How many nights will you be staying?`));
// If the user doesn’t answer or if the answer is not a number, ask again.
    while(numberOfNights === null || !isNaN(numberOfNights)){
        numberOfNights = Number(prompt(`How many nights will you be staying?`));
    }
        return numberOfNights * 140;
    }
// The hotel costs $140 per night. The function should return the total price of the hotel.
    


// Define a function called planeRideCost().
function planeRideCost(){
// It should ask the user for their destination.
    let destination = prompt(`What is your destination?`);
// If the user doesn’t answer or if the answer is not a string, ask again.
    while(destination === null || !isNan(destination)){
        destination = prompt(`What is your destination?`);
    }
        switch(destination){
            // “London”: 183$
            case "London":
                return 183;
            // “Paris” : 220$
            case "Paris":
                return 220;
            // All other destination : 300$
            default:
                return 300;
        
    }
}
// The function should return a different price depending on the location.
  
// Define a function called rentalCarCost().
function rentalCarCost(){
// It should ask the user for the number of days they would like to rent the car.
    let numberOfCarDays = Number(prompt(`How many days would you like to rent the car?`));
// If the user doesn’t answer or if the answer is not a number, ask again.
    if(numberOfCarDays === null || isNaN(numberOfCarDays)){
        numberOfCarDays = Number(prompt(`How many days would you like to rent the car?`));
    }
// Calculate the cost to rent the car. The car costs $40 everyday.
    let cost = numberOfCarDays * 40;
// If the user rents a car for more than 10 days, they get a 5% discount.
    if(numberOfCarDays > 10){
        cost *= 0.95;
    }
// The function should return the total price of the car rental.
    return cost;
}

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
function totalVacationCost(){
    let hotelCost = hotelCost();
    let planeTicketsCost = planeRideCost();
    let carRentalCost = rentalCarCost();
    let totalCost = hotelCost + planeTicketsCost + carRentalCost;
    alert(`The car cost: ${carRentalCost}, the hotel cost: ${hotelCost}, the plane tickets cost: ${planeTicketsCost}. The total cost of your vacation is ${totalCost}.`);    
}
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()
totalVacationCost();

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.