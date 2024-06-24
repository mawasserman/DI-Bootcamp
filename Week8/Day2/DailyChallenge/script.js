// Instructions
// Using this object :

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"], //acording to science, tomato is a fruit... I don't care what US nutricionists say.
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};
displayGroceries();

// Create another arrow function named cloneGroceries.
let cloneGroceries = () => {
    let user = client;
    client = 'Betty';
// console.log(client); //Betty
// console.log(user); //John
// user is a copy and not a reference of client
    
    let shopping = groceries;
    groceries.totalPrice = '35$';
console.log(groceries); //'35$'
console.log(shopping); //'35$'
// shopping is a reference of groceries and not a copy, they are the same!!!

    groceries.other.paid = false;
console.log(groceries); //false
console.log(shopping); //false... same as above right?

};
cloneGroceries();

// console.log(client); //Betty
// console.log(user); //Error: user is not defined


// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

// Invoke the cloneGroceries function