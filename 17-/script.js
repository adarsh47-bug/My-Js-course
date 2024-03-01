import 'core-js/actual';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

console.log('hi');
// Importing module
/*

// # importing normal
// import { addToCart, cart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('apple', 1);
// console.log(cart, price, tq);
console.log(`Importing module`);
// console.log(shippingCost);

// # importing as objects

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);


// # Default exports and mixing up with normal imports

// 1.1 [avoid this]
// port add, { addToCart, cart, totalPrice as price, tq } from './shoppingCart.js';
// add('pizza', 4);
// console.log(price);
// 1.2
// import add from './shoppingCart.js';
// add('pizza', 4);
*/
// importing is live connection example
import add, { cart } from './shoppingCart.js';
add('pizza', 4);
add('mangos', 4);
add('bananas', 4);

console.log(cart);
/*
// 274. Top-Level await (ES2022)
// Just remember that this only works in modules.
// this blocks the execution

// console.log('Start fetching');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    // console.log(data);

    return { title: data.at(-1).title, text: data.at(-1).body }
}

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

*/

// 275. The Module Pattern

// Old way of Moduling
// the main goal of the module pattern
// is to encapsulate functionality,
// to have private data, and to expose a public API.
// it has some limitations. 📍 📍

/*
const shippingCost2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 230;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} was added to cart (shipping cost is ${shippingCost})`);
    };

    const orderStock = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    // stuff we want to make public
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    }
})();

shippingCost2.addToCart('apples', 2);
shippingCost2.addToCart('pizza', 9);
console.log(shippingCost2);
console.log(shippingCost2.shippingCost);
*/

// 276. CommonJS Modules

// Besides native ES Modules,
// and the module pattern,
// there are also other module systems,
// that have been used
// by JavaScript in the past.
// But again, they were not native JavaScript.
// so they relied on some external implementations.

// Now CommonJS modules are important for us,
// because they have been used in Node.js,
// for almost all of its existence.

// work in node.js 📍

// Export
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} was added to cart (shipping cost is ${shippingCost})`);
// };

// // Import
// const { addToCart } = require('./shoppingCart.js');

// 277 Command lines

// cd .. (1)
// cd ../.. (2)
// dir/ls

// touch [filename]
// rm/del [filename]

// remove and make dir
// mkdir
// rmdir [only for empty files] / rm -R TEST

// 278. Introduction to NPM

import cloneDeep from "lodash-es/cloneDeep.js";

const state = {
    cart: [
        { product: 'apple', quantity: 6 },
        { product: 'mango', quantity: 6 },
    ],
    user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);
state.user.loggedIn = false;
console.log(stateDeepClone.cart);
// npm i lodash-es

// 279. Bundling With Parcel and NPM Scripts

// So a devDependency is basically like a tool
// that we need to build our application.
// But it's not a dependency
// that we actually include in our code.


// Parcel understands this code 
// this is for persisting of data on reload which occur's on the save
if (module.hot) {
    module.hot.accept()
}

class Person {
    #greeting = 'Hey'
    constructor(name) {
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`);
    }
}
const adarsh = new Person('Adarsh');

console.log('adarsh' ?? null);

console.log(cart.find(el => el.quantity >= 2));
