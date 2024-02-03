'use strict';

// 1 //Book
//idea// An High-Level Overview of JavaScript

// JAVASCRIPT IS A HIGH-LEVEL, PROTOTYPE-BASED OBJECT-ORIENTED, 
// MULTI-PARADIGM, INTERPRETED OR JUST-IN-TIME COMPILED, 
// DYNAMIC, SINGLE-THREADED, GARBAGE-COLLECTED PROGRAMMING 
// LANGUAGE WITH FIRST-CLASS FUNCTIONS AND A NON-BLOCKING 
// EVENT LOOP CONCURRENCY MODEL.
//  🤔  🤯  �

// High-level
// Garbage-collected
// Interpreted or just-in-time compiled
// Multi-paradigm
// Prototype-based object-oriented
// First-class functions
// Dynamic
// Single-threaded
// Non-blocking event loop
{
    //idea  High-level
    //  Developer does NOT have to worry( manage resources), 
    //  everything happens automatically..

    //idea Garbage-collected
    //  clears old memory`s unnecessary
    //  Cleaning the memory so we don`t have to

    //idea Interpreted or just-in-time compiled
    //  CONVERT TO MACHINE CODE = COMPILING

    //idea Multi-paradigm
    //  Paradigm: An approach and mindset of structuring code,
    //  which will direct your coding style and technique.
    //  1. Procedural programming
    //  2. oop , 3.Functional programming

    //idea Prototype-based object-oriented
    //  Our array inherits methods from prototype

    //idea First-class functions
    //  In a language with first-class functions, 
    //  functions are simply treated as variables.
    //  We can pass them into other functions, 
    //  and return them from functions.

    //idea Dynamic
    //  No data type definitions. Types becomes known at runtime
    //  Data type of variable is automatically changed

    //idea Single-threaded

    //  Concurrency model: how the JavaScript engine handles multiple tasks 
    // happening at the same time.
    // Why do we need that?
    // 👉 JavaScript runs in one single thread, so it can only do one thing at a time.
    // So what about a long-running task?
    // 👉 Sounds like it would block the single thread. However, we want non-blocking 
    // behavior!
    // How do we achieve that?
    // 👉 By using an event loop: takes long running tasks, executes them in the 
    // (Oversimplification!)
    // “background”, and puts them back in the main thread once they are finished

    //idea Non-blocking event loop

}

/////////////////////////////////////////////////////////////////

// 2 //book
// The JavaScript Engine and Runtime

//idea ENGINE
// 1. call stack - where our code is executed
// 2. Heap - where objs are stored

//  COMPUTER SCIENCE SIDE NOTE: COMPILATION VS. INTERPRETATION 

//fixme // 👉Compilation: Entire code is converted into machine code at once,
//  and written to a binary file that can be executed by a computer.

//fixme // 👉Interpretation: Interpreter runs through the source code and executes it line by line.

//fixme // 👉Just-in-time (JIT) compilation: Entire code is converted into machine code at once, then executed immediately.
// todo // 👉JS is JIT


//idea//MODERN JUST-IN-TIME COMPILATION OF JAVASCRIPT

// +1 Parsing - generates AST(Abstract Syntax Tree) of the given code

// +2 compilation - compiles generated AST into machine code

// +3 execution - happens in 'call stack'

// +2.5 Optimization - during execution the js code is optimized & re-compiled and swapped with un-optimized code in file (can be done multiple times).....
// - Happens in special threads that we can’t access from code
// - which increases js engines performance. 

//idea// THE BIGGER PICTURE: JAVASCRIPT RUNTIME

// RUNTIME IN BROWSER
// +ENGINE, +WEB APIs, +CALLBACK Queue
// 'Event Loop' passes the 'Callback Queue' to the 'Call stack' for execution

// --> there are different types of js runtime environments

// Node.js runtime env
// +Engine, +(C++ bindings and thread pools)

/////////////////////////////////////////////////////////////////

// 3
// Execution Contexts and The Call Stack

// after compiling
// then in execution

//todo// EXecution
// +> Creation of global execution context (for top-level code)
// EXECUTION CONTEXT --> Environment in which a piece of JavaScript is executed. Stores all the necessary information for some code to be executed
// ---->  Exactly 'one' global execution context (EC): Default context, created for code that is not inside any function (top-level).

// +> Execution of top-level code (inside global EC)

// +> Execution of functions and waiting for callbacks
// ----> One execution context per function: For each function call, a new execution context is created.
// ---->  All together make the 'call stack'

// todo //EXECUTION CONTEXT IN DETAIL

// Inside EC
// 1. variable environment
// let,const,var
// functions
// argument objs

// 2.scope chain 

// 3.this keyword

// note;(1,2,3) are Generated during “creation phase”, right before execution

//fixme //note: EC belonging to 'arrow functions' -->don't have argument objs and 'this' keywords.
// ---> Instead, they can use the 'arguments object', and the this keyword from their closest regular function parent.


// idea // CALL STACK
// refer slide no.96 from ->  slide-no-96.png

/////////////////////////////////////////////////////////////////////

// 4
// idea//  SCOPE AND THE SCOPE CHAIN

// SUMMARY 

// 👉 Scoping asks the question “Where do variables live?” or “Where can we access a certain variable, and where not?”; 

// 👉 There are 3 types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks; 

// 👉 Only let and const variables are block-scoped. Variables declared with var end up in the closest function scope; 

// 👉 In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the 
// code functions and blocks are written; 

// 👉 Every scope always has access to all the variables from all its outer scopes. This is the scope chain! 

// 👉 When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it’s looking 
// for. This is called variable lookup; 

// 👉 The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope; 

// 👉 The scope chain in a certain scope is equal to adding together all the variable environments of the all parent scopes; 

// 👉 The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!

/////////////////////////////////////////////////////////////////////

// 5
//idea// Scoping in Practice
/*
function calcAge(birthYr) {
    const age = 2024 - birthYr;

    function printAge() {
        // variable LOOKUP
        let output = `${firstName}, you are ${age}, born in ${birthYr}`;
        console.log(output);

        if (1996 >= birthYr && birthYr >= 1981) {
            // don't come in block scoping
            var millennial = true;

            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'vijay';

            // Reassigning outer scope's variable
            output = 'Hello, I m a new output';

            // block scoping
            const str = `Oh, and you're a millennial, ${firstName}`;
            console.log(str);

            // block scoping only in strict mode
            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str); //err block scope
        console.log(millennial); //"Not err" var does not count in the block scope
        // console.log(add(1, 2)) //err //todo only in "strict mode" //block scope i.e functions are also block scoped ,
        console.log(output);
    }
    // console.log(millennial); //fix. err function scope, also in 'strict mode'
    printAge();
    return age;
}

// let a = 1990;
// if (1996 >= a && a >= 1981) {
//     var millennial = true;

// }
// console.log(millennial);

const firstName = 'Adarsh';
console.log(calcAge(1990));
*/
////////////////////////////////////////////////////////////////

// 6
//  VARIABLE ENVIRONMENT: HOISTING AND THE TDZ

//idea// Hoisting: Makes some types of variables accessible/use-able in the code before they are 
//  actually declared. “Variables lifted to the top of their scope”.
//  BEHIND THE SCENES 👇
//  Before execution, code is scanned for variable declarations, and for each variable, a new 
//  property is created in the variable environment object.

// refer slide 106
// 1.function declarations
// hoisting - t

// 2.In var variables
// console.log(b); // undefine
// var b = 22; //'no err'

// 3.let,const variables -->un-initialize,TDZ(temporal dead zone)
// console.log(a)
// let a = 1; //err

// 4.Fun exp and arrow fun -->TDZ
// depends on the using var or let/const.

// WHY TDZ?
// 👉 Makes it easier to avoid and catch errors: accessing variables 
// before declaration is bad practice and should be avoided; 
// 
// 👉 Makes const variables actually work

// WHY HOISTING ?
// 👉 Using functions before actual declaration; 
// 
// 👉 var hoisting is just a byproduct.

////////////////////////////////////////////////////

// 7
// Hoisting and TDZ in Practice
/*
// // Variables
// console.log(me); //undefine
// // console.log(job); //err
// // console.log(year); //err

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// functions
console.log(addDecl(2, 4));
// console.log(addExp(2, 4)); //un-initialize,TDZ
console.log(addArrow);  //undefine
// console.log(addArrow(2, 4)); //undefine(2,4)-err

function addDecl(a, b) {
    return a + b;
}

const addExp = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart(); //logical err
//b/c of hoisting if will trigger b/c numProducts is undefine i.e falsy value...

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!')
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //t
console.log(y === window.x); //f
console.log(z === window.x); //f
*/

///////////////////////////////////////////////////////////
// 8
// This keyword
// this keyword/variable: Special variable that is created for every execution context (every function). 
// Takes the value of (points to) the “owner” of the function in which the this keyword is used

// this is NOT static. It depends on how the function is called, and its value is only assigned when the 
// function is actually called.

// Method 👉 this = <Object that is calling the method> 
// In strict mode! Otherwise: window (in the browser)

// Simple function call  👉 this = undefined 
// Arrow functions (Don’t get own 'this')👉  this = <this of surrounding function (lexical this)> 
// Event listener  👉 this = <DOM element that the handler is attached to> 
// new, call, apply, bind 👉 <Later in the course...

///////////////////////////////////////////////////////////////
// 9
// The this Keyword in Practice
/*
// console.log(this);

const calcAge = function (birthYear) {
    console.log(2024 - birthYear);
    // console.log(this);  //todo //window obj / undefine in strict mode
};
calcAge(2003);

const calcAgeArrow = birthYear => {
    console.log(2024 - birthYear);
    // console.log(this);  //todo //arrow function does not get its own this keyword
    // So instead the arrow function simply uses the "lexical
    // this keyword", which means that it uses the this keyword
    // of its parent function or of its parents scope.
};
calcAgeArrow(2003);

const jonas = {
    year: 1999,
    calcAge: function () {
        console.log(this);
        console.log(2024 - this.year);
        // console.log(this.calcAge);
        // console.log(this.jonas); //undefine or ' 1 form lineNo.367'
        // console.log(this.this); //undefine
        // console.log(jonas);
    },
    // jonas: 1
}
jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge; // 'method borrowing'
matilda.calcAge();
console.log(matilda);

const f = jonas.calcAge;  //todo //'f' becomes a normal function thus this keyword is 'undefine' in strict mode...
f();
*/

////////////////////////////////////////////////////////////

// 10
//idea// Regular Functions vs. Arrow Functions
/*
// var firstName = 'akm';

const jonas = {
    firstName: 'adarsh',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2024 - this.year);

        // //fix 1.older solution
        // const self = this;
        // //extra variable for making 'this' inside the following functions usable

        // const isMillennial = function () {
        //     // console.log(this); //undefine
        //     // console.log(this.year >= 1981 && this.year <= 1996); //err
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }
        // isMillennial();
        // // And the rule says that inside a regular function call,
        // // which this clearly is, that this keyword must be undefined.

        //fix 2.New ES6 Solution
        // USE "arrow" function

        const isMillennial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillennial();
    },
    greet: () => {
        console.log(this); // 'window'
        console.log(`Hey ${this.firstName}`);//undefine,
        //  'this' is from global scope
    }, //todo// never use arrow function as a method in obj
}
// jonas.greet();
jonas.calcAge();

//idea// Arguments keywords

const addExp = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExp(2, 5);
addExp(2, 5, 4, 6);

var addArrow = (a, b) => {
    console.log(arguments);
    //todo//arguments does not exist in arrow functions
    return a + b;
};
addArrow(2, 4, 5, 6) //err
// fix // the arguments keyword is not that important
// in modern JavaScript anymore,
// because now we have a more modern way
// of dealing with multiple parameters.
*/

///////////////////////////////////////////////////////////////
/*
// 11
// Primitives vs. Objects (Primitive vs. Reference Types)

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'adarsh',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
//fix. b/c objects are stored in heap.
// and in const the 'Reference to memory address in Heap ' is stored..
                      `<<<<<<<<<<<<<<👇>>>>>>>>>>>>>`
*/
//fix//for understanding re-watch lec.100 along with theory slides..

/////////////////////////////////////////////////////////////////////
// 12 
// Primitives vs. Objects in Practice
/*
// Primitive types
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessy = {
    firstName: 'jessy',
    lastName: 'willy',
    age: 22,
};
const marriedJessy = jessy;
marriedJessy.lastName = 'Davis';
console.log('Before marriage:', jessy);
console.log('After marriage:', marriedJessy);
// marriedJessy = {};


//idea. Copying objs

const jessy2 = {
    firstName: 'jessy',
    lastName: 'willy',
    age: 22,
    family: ['x', 'y'],
};

const jessyCopy = Object.assign({}, jessy2); //idea⬅️.new obj created
// only cpy at 1st level...i.e obj inside obj can't be copied by this technique//

jessyCopy.lastName = 'Davis';

jessyCopy.family.push('Mary');
jessyCopy.family.push('John');
// both objs array has got new family members pushed-in.......
// because of 1st lv. cpy only

console.log('Before marriage:', jessy2);
console.log('After marriage:', jessyCopy);
// idea //DEEP clone is needed....
// */
