// Exporting module
import 'core-js/actual';

console.log(`Exporting module`);

// Blocking code
// console.log('Start fetching users');
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log('Finished fetching users');

const shippingCost = 10;
export const cart = [];


const adu = () => console.log('welcome to the application');

adu()

// two types of exports named & default

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to cart`);
}

const totalPrice = 237;
const totalQuantity = 7;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to cart`);
}
