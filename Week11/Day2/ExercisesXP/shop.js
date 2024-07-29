// 🌟 Exercise 1: Multiple Exports And Import Using CommonJS Syntax
// In shop.js, require the product objects from the products.js module.
const {arr} = require('./products.js');

// Create a function that takes a product name as a parameter and searches for the corresponding product object.
function searchProduct(productName){
    console.log(arr.find(product => product.name === productName)) ;
}

searchProduct('product1');
searchProduct('product2');
searchProduct('product3');
// Call this function with different product names and print the details of the products.

// Run shop.js and verify that the correct product details are displayed.