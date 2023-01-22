// Question No.20

// In the following shopping cart add, remove, edit items
/*
=> const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
- add 'Meat' in the beginning of your shopping cart if it has not been already added
- add Sugar at the end of your shopping cart if it has not been already added
- remove 'Honey'
- modify Tea to 'Green Tea'
*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// Adding 'Meat' in the beginning of your shopping cart
// (shoppingCart.unshift('Meat'));
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]

// adding Sugar at the end of your shopping cart
// (shoppingCart.push('Sugar'));
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]

// Removing 'Honey'
// (shoppingCart.pop());
console.log(shoppingCart); // [ 'Milk', 'Coffee', 'Tea' ]

// Modifying 'Tea' to 'Green Tea'
(shoppingCart.splice(2,1,'Green Tea')); // (2 is the index, 1 item to be deleted & 'Green Tea' to be added)
console.log(shoppingCart); // [ 'Milk', 'Coffee', 'Green Tea', 'Honey' ]


