// 🌟 Exercise 1: Multiple Exports And Import Using CommonJS Syntax
// Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.

const arr = [
    {
        name: 'product1',
        price: 100,
        category: 'category1'
    },
    {
        name: 'product2',
        price: 200,
        category: 'category2'
    },
    {
        name: 'product3',
        price: 300,
        category: 'category3'
    }
]

// Export this array using the Common JS syntax.

module.exports = { 
    arr
}

// Create another file named shop.js.

// In shop.js, require the product objects from the products.js module.

// Create a function that takes a product name as a parameter and searches for the corresponding product object.

// Call this function with different product names and print the details of the products.

// Run shop.js and verify that the correct product details are displayed.