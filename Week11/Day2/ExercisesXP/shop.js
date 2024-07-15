/ 🌟 Exercise 1: Multiple Exports And Import Using CommonJS Syntax
// In shop.js, require the product objects from the products.js module.
const {arr} = require('./products.js');

// Create a function that takes a product name as a parameter and searches for the corresponding product object.
function searchProduct(productName){
    return arr.find(product => product.name === productName);
}

// Call this function with different product names and print the details of the products.

// Run shop.js and verify that the correct product details are displayed.