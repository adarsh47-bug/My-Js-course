'use strict';
/*
// 1
// Default parameters
// const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    // bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 555);
createBooking('LH123', 2,);

// undefined - used for not-input variable
createBooking('LH123', undefined, 1000);
*/
/*
// 2
// How Passing Arguments Works: Value vs. Reference

const flight = 'LH123';
const jonas = {
    name: 'Adarsh Kadam',
    passport: 3454324674,
}
const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 3454324674) {
        alert('Check In')
    } else {
        alert('Wrong passport!')
    }
}

// checkIn(flight, jonas);
// console.log(flight); //idea."Ref:lineNO.64" Primitive data type,thus not changed,
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassPort = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000)
    // return person.passport;
}
newPassPort(jonas);
checkIn(flight, jonas);
//idea. In JS their is NO Pass by reference
// Their is ONLY PASS BY VAL.
*/

// 3
// First-Class and Higher-Order Functions

// //idea
// JS treats functions as first-class citizens
// i.e. functions are simply values
// functions are just another 'type' of object
// we can store functions in var or properties..
// can also pass functions as an arg to other functions..
// can also returns functions form functions
// function methods.
// So methods that we can call on functions.

//idea. Higher-order functions
// A functions that receives a functions as an argument,
// that returns a new function, or BOTH
// only possible b/c of 1st-order functions.

//idea.
// first class functions is just a feature
// that a programming language either has or does not have.
// All it means is that all functions are values.

// There are no first class functions in practice, okay ?
// It's just a concept.

// There are however higher order functions in practice,
// which are possible because the language supports
// first class functions.

////////////////////////////////////////////////////////////////////////////
/*
// 4
// Functions Accepting Callback Functions

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher Order function, ex
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}
transformer('JavaScript is the best!', upperFirstWord);
console.log(`//////////////////`);
transformer('JavaScript is the best!', oneWord);

// ex, JS uses Callbacks all the time
const high5 = function () {
    console.log('👋');
}
document.body.addEventListener('click', high5);
// addEventListener - higher lv. of abstraction
// high5 - lower lv. of abstraction

['adarsh', 'kumar', 'adarsh', 'satvik'].forEach(high5)

// Advantages of callback fun
// 1.makes it easy to split up or code
// 2.way more important advantage, which is the fact that
//   callback functions allow us to "create abstraction".
//  we created a new level of abstraction and by doing this ,the
//  main transformer function, here is really only concerned with
//  transforming the input string itself, not about its working

*/
/////////////////////////////////////////////////////////////////////////
/*
// 5
// Functions Returning Functions

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}
// using Arrow fn
const greet2 = greeting => (name) => console.log(`${greeting} ${name}`);

// way1
const greeterHey = greet('Hey');
greeterHey('Adarsh');
greeterHey('Kumar');

// useful in programming paradigm called functional programming
// in the end of the course..
//way2
greet('Hello')('Axon');
greet2('Hello')('Adarsh');

*/
////////////////////////////////////////////////////////////////////
/*
// 6
// The call and apply Methods

const lufthansa = {
    airLine: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`);
        this.booking.push({ flight: `${this.iataCode}${flightNum}`, name })
    },
};
lufthansa.book(234, 'Adarsh Kadam');
lufthansa.book(654, 'Vijay Kadam');
console.log(lufthansa);


const eurowings = {
    airLine: 'Eurowings',
    iataCode: 'EW',
    booking: [],
};
const book = lufthansa.book;

//fix. Does NOT Work
// 'this' keyword makes err that is in the book function...
// (book(234, 'Adarsh Kadam'));

// Works
// 1.call method
book.call(eurowings, 234, 'Adarsh Kadam');
console.log(eurowings);
book.call(lufthansa, 234, 'Anushka jiddewar');
console.log(lufthansa);

const indigo = {
    airLine: 'Indigo Air lines',
    iataCode: 'B',
    booking: [],
}
book.call(indigo, 747, 'Adarsh Kadam');
console.log(indigo);

// 2. Apply method(not used in modern js)
const flightData = [777, 'Akram Ashuram'];
book.apply(indigo, flightData); //old way
console.log(indigo);

book.call(indigo, ...flightData); //better way

// 3. bind method (next lec.)

// 7
// The Bind Method

// book.call(eurowings, 234, 'Adarsh Kadam');

const bookEW = book.bind(eurowings);
const bookLN = book.bind(lufthansa);
const bookIG = book.bind(indigo);

bookEW(23, 'Auro Muro');

//idea. Pre-setting flightNum value in bind method,
// so that only one argument is required in the given function..
// example of partial application
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Arjun Marshall');
bookEW23('adjust kivis');

//idea. BIND method With Event Listeners
lufthansa.planes = 300; //adding new property
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
// lufthansa.buyPlane();
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
*/
// More examples:
/*
//  Partial applications
const addTax = (rate, value) => value + (value * rate / 100);
console.log(addTax(10, 200));

// NUll,b/c there is no this keyword but can put any values like,'addTax'
const addVAT = addTax.bind(null, 23); //order of arg is imp
// const addVAT = addTax.bind(addTax, 23); //order of arg is imp
// const addVAT = (rate,value) => value + (value * rate / 100); //old way
console.log(addVAT(100));

//idea. this give a new functions ....

// Challenge ,create a function that can return a function 'addVAT'

const createAddTax = rate => value =>
    console.log(value + (value * rate / 100));

createAddTax(23)(100);
// const addVAT2 = createAddTax(22);
// addVAT2(200);

*/
///////////////////////////////////////////////////////////////////////////
// 8
// Coding Challenge #1

// 1st
/*
const poll = {
    question: "What is your favorite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const inputNum = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
        const num = [...poll.options.keys()].includes(inputNum);
        if (num) {
            ++this.answers[inputNum];
            this.displayResults(this.answers);
        } else console.log("Invalid Option,Try again!!");
    },
    displayResults(arr) {
        const inputType = prompt(`Enter the display results type either 'string' or 'array'.`);
        // inputType ? inputType.trim().toLowerCase() : 1
        if (
            inputType === 'string'
            //  || inputType === 'array'
        )
            // inputType === 'array' && console.log(arr);
            inputType === 'string' && console.log(`"Poll results are ${arr.join(', ')}".`);
        else
            console.log(arr);
        // confirm("Invalid type,Try again!!") ? this.displayResults(arr) : console.log("Your are exited form the poll.");

    },
};
// 2.
// <<<<<<<<<<<<<<<<reference>>>>>>>>>>>>>>>>>>>
// const book = lufthansa.book;
// const bookIG = book.bind(indigo);
// const registerNewAnswer = poll.registerNewAnswer;
const ansBtnFn = poll.registerNewAnswer.bind(poll);
// for_call : poll.registerNewAnswer.call(poll)
document.querySelector('.poll').addEventListener('click', ansBtnFn);

// BONUS
const Data1 = [5, 2, 3];
const Data2 = [1, 5, 3, 9, 6, 1];

const useDisplayResults = poll.displayResults.bind(poll);
useDisplayResults(Data1);
// useDisplayResults(Data2);
*/

// 2nd

/*
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Get answer
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(Write option number)`
            )
        );
        console.log(answer);

        // Register answer
        typeof answer === 'number' &&
            answer < this.answers.length &&
            this.answers[answer]++;

        this.displayResults();
        this.displayResults('string');
    },

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            // Poll results are 13, 2, 4, 1
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },
};

document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

*/

////////////////////////////////////////////////////////////////////
/*
// 9
// Immediately Invoked Function Expressions (IIFE)

// So basically a function
// that disappears right after it's called once.

// But we actually need this technique later.
// For example, with something called async/await.

const renOnce = function () {
    console.log('This will never run again');
}
renOnce();

// IIFE
// it is not a feature in Js but a pattern some developers
// come-up with and is now used by many...
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();
// console.log(isPrivate); //err
//
(() => console.log('This will never never run again'))
    ();
// IN ES6: 'block' can also create a scope now
// So now in modern js IIFE in not used that much unless for 'var'.
{
    const isPrivate = 22;
    var notPrivate = 99;
}
// console.log(isPrivate);
console.log(notPrivate);
*/
/////////////////////////////////////////////////////////////////////////////////////
/*
// 10
//idea. Closures
// such as execution context,
// the call stack, and the sculpt chain,
// because closures kind of bring all of these concepts
// together in a beautiful, almost magical way.

// is that a closure is not a feature that we explicitly use.
// So we don't create closures manually,
// like we create a new array or a new function

// So a closure simply happens automatically
// in certain situations, we just need
// to recognize those situations.

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}
// secureBooking()();
const booker = secureBooking();

booker();
booker();
booker();

//idea. refer "closure summery"

console.dir(booker); //see in scopes[0] in cl
*/

// 11
// More Closure Examples
/*
// Example.1
let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

g();
f();
console.dir(f);

h();
f();
console.dir(f);

// Example.2
const boardPassengers = function (n, wait) {
    const perGrp = n / 3;
    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGrp} passengers`);
    }, wait * 1000)
    console.log(`Will start boarding in ${wait} seconds`);
}
const perGrp = 1000;
const n = 1000;

boardPassengers(90, 3);
console.dir(boardPassengers);
// closure has priority over 'scope chain' as,
//setTimeout 'fn' is being run on the global scope

//idea. [[Scopes]]: Scopes[2]
//📍 0: Script(local environment of the function)
// boardPassengers: ƒ (n, wait)<<<<<<<<(all variable in fn also)>>>>>>>>>>
// f: ƒ ()
// g: ƒ ()
// h: ƒ ()
// n: 1000
// perGrp: 1000
//📍 1: Global

*/
// 12
// Coding Challenge #2
/*
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    console.dir(() => header.style.color = 'blue');
    document.querySelector('body').addEventListener('click', () => header.style.color = 'blue');
})();


//📍 Closure
//1. header: h1
//2. [[Prototype]]: Object

*/

